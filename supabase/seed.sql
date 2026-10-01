-- ─── Seed: 100 users × 40-50 jobs ────────────────────────────────────────────
-- Run after schema migration. Safe to re-run (ON CONFLICT DO NOTHING).

DO $$
DECLARE
  v_user_role_id uuid;
  v_user_id      text;
  v_job_id       uuid;
  v_jp_count     int;
  i              int;
  j              int;

  -- 60 realistic job definitions
  companies text[] := ARRAY[
    'Stripe','Linear','Notion','Vercel','Supabase','Figma','Loom','Retool',
    'Planetscale','Railway','Clerk','Render','Fly.io','Turso','Neon',
    'Resend','Cal.com','Dub.co','Trigger.dev','Inngest','Temporal','Grafbase',
    'Hasura','Prisma','Drizzle','tRPC','Remix','SvelteKit','Astro','Qwik',
    'Tailwind Labs','Shadcn','Radix','Ariakit','Headlessui','Mantine','Chakra',
    'NestJS','Fastify','Hono','Elysia','Bun','Deno','Effect','Zod',
    'Vite','Rolldown','Biome','Oxc','Rspack','Turbopack','Rome','esbuild',
    'Replit','Cursor','Codeium','Tabnine','Pieces','Pieces.app','Warp','Zed'
  ];
  roles_list text[] := ARRAY[
    'Senior Software Engineer','Staff Engineer','Principal Engineer',
    'Frontend Engineer','Backend Engineer','Full-Stack Engineer',
    'Platform Engineer','Infrastructure Engineer','DevRel Engineer',
    'Founding Engineer','Forward-Deployed Engineer','Solutions Engineer',
    'Engineering Manager','Staff Frontend Engineer','Staff Backend Engineer',
    'Senior React Engineer','Senior TypeScript Engineer','Senior Node.js Engineer',
    'Senior Go Engineer','Senior Rust Engineer','AI Engineer','ML Engineer',
    'Developer Advocate','Technical Architect','Engineering Lead'
  ];
  locations text[] := ARRAY[
    'Remote','Remote (EU)','Remote (US)','Madrid, Spain','Barcelona, Spain',
    'Berlin, Germany','Amsterdam, Netherlands','London, UK','Paris, France',
    'Lisbon, Portugal','Dublin, Ireland','Stockholm, Sweden','Zurich, Switzerland'
  ];
  statuses text[] := ARRAY[
    'prospect','prospect','prospect','applied','applied','applied',
    'screening','screening','interviewing','offer_pending',
    'rejected','withdrawn','archived'
  ];
  salaries text[] := ARRAY[
    '€60,000–€80,000','€80,000–€100,000','€100,000–€120,000',
    '€120,000–€150,000','$80k–$100k','$100k–$130k','$130k–$160k',
    NULL, NULL, NULL
  ];
  first_names text[] := ARRAY[
    'Alice','Bob','Carol','David','Eva','Frank','Grace','Hiro','Iris','Jack',
    'Kate','Leo','Maya','Nate','Olivia','Pablo','Quinn','Rosa','Sam','Tara',
    'Uma','Victor','Wendy','Xavi','Yara','Zach','Ana','Ben','Cleo','Diego',
    'Elena','Felix','Gina','Hugo','Inés','Javier','Kira','Luis','Marta','Nico',
    'Olga','Pedro','Raquel','Stefan','Thea','Ursula','Valeria','Will','Xena','Yuki',
    'Zoe','Ariel','Bruno','Camila','Dani','Emre','Fatima','Gael','Hana','Ivan',
    'Júlia','Karim','Laura','Marco','Nina','Oscar','Priya','Rafael','Sara','Tomas',
    'Ula','Vera','Walter','Xiu','Yasmine','Zakaria','Anya','Boris','Clara','Dmitri',
    'Elif','Fabio','Giulia','Hamid','Ingrid','Jorge','Keiko','Lorenzo','Miriam','Nadia',
    'Orhan','Petra','Ricardo','Selma','Tamar','Ulises','Vivien','Wojtek','Xan','Yolanda'
  ];
  last_names text[] := ARRAY[
    'Smith','García','Kim','Müller','Silva','Martin','Rossi','Andersen','Kowalski',
    'Sato','Okonkwo','Patel','Dubois','Hassan','Johansson','Fernández','Chen','Evans',
    'Nowak','Costa','Bauer','López','Jensen','Nguyen','Reyes','Hoffmann','Clark',
    'Yamamoto','Gomes','Petrov','Nielsen','Santos','Weber','Martínez','Park','Taylor',
    'Bernard','Kaya','Russo','Larsen','Alves','Fischer','Ramos','Christensen','Gupta',
    'Moreau','Tanaka','Rodríguez','Eriksson','Oliveira','Schmidt','Torres','Hansen',
    'Cabrera','Becker','Nakamura','Sousa','Rasmussen','Díaz','Krauss','Ferreira',
    'Andrade','Scholz','Medina','Ito','Magnusson','Soares','Wolf','Montoya','Watanabe',
    'Figueiredo','Schäfer','Vargas','Suzuki','Lindqvist','Barbosa','Richter','Herrera',
    'Yamada','Brandt','Carvalho','König','Vásquez','Iwamoto','Sandberg','Araújo',
    'Braun','Morales','Fujita','Ljungberg','Pereira','Hartmann','Escobar','Hayashi',
    'Holmström','Rocha','Neumann','Guerrero','Maeda','Lindberg','Tavares','Zimmer'
  ];

BEGIN
  SELECT id INTO v_user_role_id FROM roles WHERE name = 'user';

  -- Seed 60 jobs
  FOR i IN 1..60 LOOP
    INSERT INTO jobs (job_id, role, company, location, offer_url)
    VALUES (
      'seed-j' || LPAD(i::text, 3, '0'),
      roles_list[1 + mod(i - 1, array_length(roles_list, 1))],
      companies[1 + mod(i - 1, array_length(companies, 1))],
      locations[1 + mod(i - 1, array_length(locations, 1))],
      'https://jobs.example.com/seed-j' || LPAD(i::text, 3, '0')
    )
    ON CONFLICT (job_id) DO NOTHING;
  END LOOP;

  -- Seed 100 users
  FOR i IN 1..100 LOOP
    v_user_id := 'user_seed_' || LPAD(i::text, 3, '0');

    INSERT INTO user_profiles (user_id, full_name, email, linkedin_url)
    VALUES (
      v_user_id,
      first_names[1 + mod(i - 1, array_length(first_names, 1))] || ' ' ||
        last_names[1 + mod(i - 1, array_length(last_names, 1))],
      'user' || i || '@seed.dev',
      'https://linkedin.com/in/seed-user-' || i
    )
    ON CONFLICT (user_id) DO NOTHING;

    INSERT INTO user_roles (user_id, role_id)
    VALUES (v_user_id, v_user_role_id)
    ON CONFLICT DO NOTHING;

    -- 40-50 job_profiles per user (random count using mod)
    v_jp_count := 40 + mod(i * 7 + 3, 11); -- yields 40-50 deterministically

    FOR j IN 1..v_jp_count LOOP
      -- Step=7 is coprime to 60 so all 60 jobs are visited before repeating
      SELECT id INTO v_job_id
      FROM jobs
      WHERE job_id = 'seed-j' || LPAD((1 + mod((i * 41 + j * 7 - 1), 60))::text, 3, '0');

      IF v_job_id IS NOT NULL THEN
        INSERT INTO job_profiles (job_id, user_id, status, salary)
        VALUES (
          v_job_id,
          v_user_id,
          statuses[1 + mod(i + j, array_length(statuses, 1))],
          salaries[1 + mod(i * j, array_length(salaries, 1))]
        )
        ON CONFLICT (job_id, user_id) DO NOTHING;
      END IF;
    END LOOP;

  END LOOP;

  RAISE NOTICE 'Seed complete: 100 users × ~45 jobs each';
END;
$$;
