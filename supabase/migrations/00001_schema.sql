-- ─── Roles setup (Supabase postgres image pre-creates these but we ensure they exist) ───
DO $$ BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'anon') THEN
    CREATE ROLE anon NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'authenticated') THEN
    CREATE ROLE authenticated NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'service_role') THEN
    CREATE ROLE service_role NOLOGIN NOINHERIT BYPASSRLS;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'authenticator') THEN
    CREATE ROLE authenticator NOINHERIT LOGIN PASSWORD 'postgres';
  END IF;
END $$;

GRANT anon, authenticated, service_role TO authenticator;
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon, authenticated, service_role;

-- ─── RBAC tables ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS roles (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL UNIQUE,
  description text,
  created_at  timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS actions (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL UNIQUE,
  description text,
  created_at  timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS role_permissions (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role_id    uuid NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  action_id  uuid NOT NULL REFERENCES actions(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(role_id, action_id)
);

CREATE TABLE IF NOT EXISTS user_roles (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    text NOT NULL,
  role_id    uuid NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, role_id)
);

-- ─── User profiles ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS user_profiles (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        text NOT NULL UNIQUE,
  full_name      text,
  email          text,
  phone          text,
  linkedin_url   text,
  github_url     text,
  bio_path       text,
  bio_updated_at timestamptz,
  metadata       jsonb DEFAULT '{}',
  created_at     timestamptz DEFAULT now(),
  updated_at     timestamptz DEFAULT now()
);

-- ─── Jobs ─────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS jobs (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id     text NOT NULL UNIQUE,
  guid       text,
  role       text,
  company    text,
  location   text,
  offer_url  text,
  jd         text,
  data       jsonb DEFAULT '{}',
  is_active  boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS job_profiles (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id             uuid NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  user_id            text NOT NULL,
  status             text NOT NULL DEFAULT 'prospect',
  salary             text,
  notes              text,
  cv_pdf_path        text,
  cv_pdf_uploaded_at timestamptz,
  created_at         timestamptz DEFAULT now(),
  updated_at         timestamptz DEFAULT now(),
  UNIQUE(job_id, user_id)
);

-- ─── View ─────────────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW job_profile_view AS
  SELECT
    jp.id           AS jp_id,
    j.id            AS job_uuid,
    j.job_id,
    j.guid,
    j.role,
    j.company,
    j.location,
    j.offer_url,
    j.is_active,
    j.data,
    jp.user_id      AS owner_id,
    jp.status,
    jp.salary,
    jp.notes,
    jp.cv_pdf_path  AS cv_path,
    jp.cv_pdf_uploaded_at AS cv_uploaded_at,
    jp.updated_at
  FROM job_profiles jp
  JOIN jobs j ON j.id = jp.job_id;

-- ─── RLS (open for dev) ───────────────────────────────────────────────────────

ALTER TABLE roles            ENABLE ROW LEVEL SECURITY;
ALTER TABLE actions          ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles       ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs             ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_profiles     ENABLE ROW LEVEL SECURITY;

CREATE POLICY "dev open" ON roles            FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "dev open" ON actions          FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "dev open" ON role_permissions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "dev open" ON user_roles       FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "dev open" ON user_profiles    FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "dev open" ON jobs             FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "dev open" ON job_profiles     FOR ALL USING (true) WITH CHECK (true);

-- ─── Functions ────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.find_or_create_job(
  p_job_id text,
  p_guid text DEFAULT NULL,
  p_role text DEFAULT NULL,
  p_company text DEFAULT NULL,
  p_location text DEFAULT NULL,
  p_offer_url text DEFAULT NULL,
  p_jd text DEFAULT NULL,
  p_data jsonb DEFAULT '{}'
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE v_id uuid;
BEGIN
  IF p_offer_url IS NOT NULL AND p_offer_url != '' THEN
    SELECT id INTO v_id FROM jobs WHERE offer_url = p_offer_url LIMIT 1;
    IF v_id IS NOT NULL THEN RETURN v_id; END IF;
  END IF;
  SELECT id INTO v_id FROM jobs WHERE job_id = p_job_id LIMIT 1;
  IF v_id IS NOT NULL THEN RETURN v_id; END IF;
  IF p_company IS NOT NULL AND p_role IS NOT NULL THEN
    SELECT id INTO v_id FROM jobs
    WHERE lower(company) = lower(p_company) AND lower(role) = lower(p_role)
    LIMIT 1;
    IF v_id IS NOT NULL THEN RETURN v_id; END IF;
  END IF;
  INSERT INTO jobs (job_id, guid, role, company, location, offer_url, jd, data)
  VALUES (p_job_id, p_guid, p_role, p_company, p_location, p_offer_url, p_jd, p_data)
  RETURNING id INTO v_id;
  RETURN v_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_user_permissions(p_user_id text)
RETURNS TABLE(permission text) LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT r.name || ':' || a.name
  FROM user_roles ur
  JOIN roles r             ON r.id = ur.role_id
  JOIN role_permissions rp ON rp.role_id = r.id
  JOIN actions a           ON a.id = rp.action_id
  WHERE ur.user_id = p_user_id;
$$;

CREATE OR REPLACE FUNCTION public.get_users_with_stats()
RETURNS TABLE(
  user_id text, full_name text, email text, phone text,
  linkedin_url text, github_url text, bio_path text,
  bio_updated_at timestamptz, metadata jsonb,
  profile_created_at timestamptz, role_names text[], job_count bigint
) LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT
    u.user_id,
    up.full_name, up.email, up.phone, up.linkedin_url, up.github_url,
    up.bio_path, up.bio_updated_at, up.metadata,
    up.created_at AS profile_created_at,
    ARRAY_AGG(DISTINCT r.name) FILTER (WHERE r.name IS NOT NULL) AS role_names,
    COUNT(DISTINCT jp.job_id) AS job_count
  FROM (SELECT DISTINCT user_id FROM user_roles) u
  LEFT JOIN user_profiles up ON up.user_id = u.user_id
  LEFT JOIN user_roles ur    ON ur.user_id = u.user_id
  LEFT JOIN roles r          ON r.id = ur.role_id
  LEFT JOIN job_profiles jp  ON jp.user_id = u.user_id
  GROUP BY u.user_id, up.full_name, up.email, up.phone, up.linkedin_url,
           up.github_url, up.bio_path, up.bio_updated_at, up.metadata, up.created_at
  ORDER BY up.created_at DESC NULLS LAST;
$$;

GRANT EXECUTE ON FUNCTION public.find_or_create_job TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_user_permissions TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_users_with_stats TO anon, authenticated, service_role;

-- ─── Seed reference data ──────────────────────────────────────────────────────

INSERT INTO roles (name, description) VALUES
  ('user',       'Regular candidate user'),
  ('backoffice', 'Admin / backoffice operator')
ON CONFLICT (name) DO NOTHING;

INSERT INTO actions (name, description) VALUES
  ('read',             'Read access'),
  ('edit',             'Edit access'),
  ('bio:edit',         'Edit own bio'),
  ('jobs:read',        'Read own jobs'),
  ('jobs:edit',        'Edit own jobs'),
  ('permissions:read', 'Read permissions'),
  ('permissions:edit', 'Edit permissions')
ON CONFLICT (name) DO NOTHING;

INSERT INTO role_permissions (role_id, action_id)
SELECT r.id, a.id FROM roles r, actions a
WHERE (r.name = 'user'       AND a.name IN ('edit','bio:edit','jobs:read','jobs:edit'))
   OR (r.name = 'backoffice' AND a.name IN ('read','edit','permissions:read','permissions:edit'))
ON CONFLICT DO NOTHING;
