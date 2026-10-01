/**
 * Syncs nepot-ai file-system state to Supabase.
 *
 * Reads jobs from: output/francisco-buitrago/jobs/ (active + _closed)
 * Reads profile from: profiles/francisco-buitrago-profile.md
 *
 * Run: node --env-file=.env.local scripts/sync-to-db.mjs [--jobs | --profile | --all (default)]
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const NEPOT_AI  = '/Users/fran/projects/personal/nepot-ai';
const CANDIDATE = 'francisco-buitrago';
const USER_ID   = 'user_3K5K5ZApJGejevV5AnLjwK98szh';
const JOBS_BASE = join(NEPOT_AI, 'output', CANDIDATE, 'jobs');
const PROFILE_PATH = join(NEPOT_AI, 'profiles', 'francisco-buitrago-profile.md');

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY;
if (!url || !key) { console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY'); process.exit(1); }

const supabase = createClient(url, key);
const args = process.argv.slice(2);
const mode = args[0] ?? '--all';

// ─── helpers ──────────────────────────────────────────────────────────────────

function parseTable(md) {
  const map = {};
  const lines = md.split('\n');
  for (const line of lines) {
    const m = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/);
    if (!m) continue;
    const [, k, v] = m;
    if (k === 'Field' || k === '---' || k.startsWith('-')) continue;
    const val = v.trim();
    if (val !== 'Value') map[k.trim()] = val === 'n/a' ? null : val;
  }
  return map;
}

const STATE_MAP = {
  received: 'prospect', selected: 'prospect', 'outcome-pending': 'prospect',
  applied: 'applied',
  screening: 'screening', 'interview-hr': 'screening', 'interview-hr-pending': 'screening',
  interviewing: 'interviewing', 'interview-tech': 'interviewing',
  'interview-take-home': 'interviewing', 'interview-code-today': 'interviewing',
  'offer-pending': 'offer_pending', 'offer_pending': 'offer_pending',
  accepted: 'accepted', rejected: 'rejected', withdrawn: 'withdrawn',
  deselected: 'archived', archived: 'archived', closed: 'archived',
};

function mapStatus(pipelineState, isClosed) {
  const s = (pipelineState ?? '').toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z-]/g, '');
  const mapped = STATE_MAP[s] ?? 'prospect';
  if (isClosed && mapped === 'prospect') return 'archived';
  return mapped;
}

function isJobFolder(name) {
  return /^[a-z]/.test(name) && !name.startsWith('_') && !name.startsWith('.');
}

// ─── sync jobs ────────────────────────────────────────────────────────────────

async function syncJob(folder, closed) {
  const base     = closed ? join(JOBS_BASE, '_closed', folder) : join(JOBS_BASE, folder);
  const statePath = join(base, 'state.md');
  const jdPath    = join(base, 'jd.md');

  if (!existsSync(statePath)) return;

  const stateMd = readFileSync(statePath, 'utf8');
  const stateFields = parseTable(stateMd);

  const company      = stateFields['Company'] ?? '';
  const role         = stateFields['Role'] ?? '';
  const guid         = stateFields['GUID'] ?? null;
  const pipelineState = stateFields['Job State'] ?? '';
  const salary       = stateFields['Salary'] ?? null;
  const scoreRaw     = stateFields['Score'];
  const score        = scoreRaw ? parseInt(scoreRaw) : null;

  let offerUrl = null, location = null, jdText = null;
  if (existsSync(jdPath)) {
    const jdMd = readFileSync(jdPath, 'utf8');
    const jdFields = parseTable(jdMd);
    offerUrl = jdFields['URL'] ?? null;
    location = jdFields['Location'] ?? null;
    jdText = jdMd.replace(/^---[\s\S]+?---\s*\n/, '').trim();
  }

  const { data: jobUuid, error: rpcErr } = await supabase.rpc('find_or_create_job', {
    p_job_id:   folder,
    p_guid:     guid,
    p_role:     role || null,
    p_company:  company || null,
    p_location: location,
    p_offer_url: offerUrl,
    p_jd:       jdText,
  });

  if (rpcErr) { console.error(`  ✗ ${folder}: RPC — ${rpcErr.message}`); return; }

  const status = mapStatus(pipelineState, closed);
  const { error: jpErr } = await supabase
    .from('job_profiles')
    .upsert({
      job_id:  jobUuid,
      user_id: USER_ID,
      status,
      salary:  salary,
      notes:   score ? `RADAR score: ${score}` : null,
    }, { onConflict: 'job_id,user_id' });

  if (jpErr) { console.error(`  ✗ ${folder}: job_profiles — ${jpErr.message}`); return; }

  const tag = closed ? '[closed]' : '[active]';
  console.log(`  ✓ ${folder} ${tag} → ${status}  (${company})`);
}

async function syncJobs() {
  console.log('\n── Jobs ──────────────────────────────────');

  // Active jobs
  const active = readdirSync(JOBS_BASE).filter(f => {
    const full = join(JOBS_BASE, f);
    return isJobFolder(f) && statSync(full).isDirectory();
  });
  for (const folder of active) await syncJob(folder, false);

  // Closed jobs
  const closedBase = join(JOBS_BASE, '_closed');
  if (existsSync(closedBase)) {
    const closed = readdirSync(closedBase).filter(f => {
      return isJobFolder(f) && statSync(join(closedBase, f)).isDirectory();
    });
    for (const folder of closed) await syncJob(folder, true);
  }

  console.log('── Done ──────────────────────────────────\n');
}

// ─── sync profile ─────────────────────────────────────────────────────────────

async function syncProfile() {
  console.log('\n── Profile ───────────────────────────────');

  if (!existsSync(PROFILE_PATH)) {
    console.log('  ✗ Profile file not found:', PROFILE_PATH);
    return;
  }

  const md = readFileSync(PROFILE_PATH, 'utf8');
  const fields = parseTable(md);

  // Try to extract structured fields from the SCOUT profile
  const full_name   = fields['Full Name'] ?? fields['Name'] ?? 'Francisco Alfonso Buitrago';
  const email       = fields['Email'] ?? 'fabuitrago92@gmail.com';
  const phone       = fields['Phone'] ?? fields['Mobile'] ?? '+34 627 74 54 61';
  const linkedin_url = fields['LinkedIn'] ?? fields['LinkedIn URL'] ?? 'https://www.linkedin.com/in/franciscoal/';
  const github_url  = fields['GitHub'] ?? fields['GitHub URL'] ?? null;

  const bioPath = `${USER_ID}.md`;

  const { error: profileErr } = await supabase
    .from('user_profiles')
    .upsert({
      user_id: USER_ID,
      full_name,
      email,
      phone,
      linkedin_url,
      github_url,
      bio_path: bioPath,
      bio_updated_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' });

  if (profileErr) { console.error('  ✗ user_profiles:', profileErr.message); return; }
  console.log('  ✓ user_profiles upserted');

  // Upload bio to storage
  const content = md;
  const { error: uploadErr } = await supabase.storage
    .from('bios')
    .upload(bioPath, new Blob([content], { type: 'text/markdown' }), { upsert: true });

  if (uploadErr) { console.error('  ✗ bios storage:', uploadErr.message); return; }
  const { data: { publicUrl } } = supabase.storage.from('bios').getPublicUrl(bioPath);
  console.log('  ✓ bio uploaded:', publicUrl);
  console.log('── Done ──────────────────────────────────\n');
}

// ─── main ─────────────────────────────────────────────────────────────────────

if (mode === '--profile') {
  await syncProfile();
} else if (mode === '--jobs') {
  await syncJobs();
} else {
  await syncJobs();
  await syncProfile();
}
