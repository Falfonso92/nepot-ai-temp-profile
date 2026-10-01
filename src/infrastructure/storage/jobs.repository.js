import { supabase } from './supabase.client.js';

export const PAGE_SIZE = 25;

export const STATUSES = [
  { value: 'prospect',      label: 'Prospect',      bg: '#DBEAFE', color: '#1E40AF' },
  { value: 'applied',       label: 'Applied',       bg: '#FED7AA', color: '#C2410C' },
  { value: 'screening',     label: 'Screening',     bg: '#FEF3C7', color: '#B45309' },
  { value: 'interviewing',  label: 'Interviewing',  bg: '#EDE9FE', color: '#6D28D9' },
  { value: 'offer_pending', label: 'Offer',         bg: '#DCFCE7', color: '#15803D' },
  { value: 'accepted',      label: 'Accepted ✓',    bg: '#BBF7D0', color: '#166534' },
  { value: 'rejected',      label: 'Rejected',      bg: '#FEE2E2', color: '#DC2626' },
  { value: 'withdrawn',     label: 'Withdrawn',     bg: '#F1F5F9', color: '#475569' },
  { value: 'archived',      label: 'Archived',      bg: '#F5F4F1', color: '#78716C' },
];

const STATUS_PRIORITY = Object.fromEntries(
  ['offer_pending','accepted','interviewing','screening','applied','prospect','withdrawn','rejected','archived']
    .map((s, i) => [s, i])
);

// ─── reads (via view) ─────────────────────────────────────────────────────────

export async function listJobs({ page = 0, search = '', status = '', ownerId = null } = {}) {
  if (!supabase) return { jobs: [], total: 0 };

  let q = supabase
    .from('job_profile_view')
    .select('*', { count: 'exact' })
    .order('updated_at', { ascending: false });

  if (ownerId)        q = q.eq('owner_id', ownerId);
  if (search.trim())  q = q.or(`company.ilike.%${search.trim()}%,role.ilike.%${search.trim()}%`);
  if (status)         q = q.eq('status', status);

  const from = page * PAGE_SIZE;
  q = q.range(from, from + PAGE_SIZE - 1);

  const { data, error, count } = await q;
  if (error) return { jobs: [], total: 0 };

  const jobs = (data ?? []).sort((a, b) => {
    const pa = STATUS_PRIORITY[a.status] ?? 99;
    const pb = STATUS_PRIORITY[b.status] ?? 99;
    if (pa !== pb) return pa - pb;
    return (a.company ?? '').localeCompare(b.company ?? '');
  });

  return { jobs, total: count ?? 0 };
}

export async function getStatusCounts(ownerId = null) {
  if (!supabase) return {};
  let q = supabase.from('job_profiles').select('status');
  if (ownerId) q = q.eq('user_id', ownerId);
  const { data } = await q;
  if (!data) return {};
  const counts = {};
  data.forEach(r => { counts[r.status] = (counts[r.status] || 0) + 1; });
  return counts;
}

// ─── writes (via underlying tables) ──────────────────────────────────────────

export async function updateJob(jpId, fields) {
  if (!supabase) return;
  const { offer_url, status, salary, notes } = fields;

  const profileUpdate = {
    updated_at: new Date().toISOString(),
    ...(status !== undefined && { status }),
    ...(salary !== undefined && { salary }),
    ...(notes  !== undefined && { notes }),
  };
  await supabase.from('job_profiles').update(profileUpdate).eq('id', jpId);

  if (offer_url !== undefined) {
    const { data: jp } = await supabase.from('job_profiles').select('job_id').eq('id', jpId).single();
    if (jp) await supabase.from('jobs').update({ offer_url, updated_at: new Date().toISOString() }).eq('id', jp.job_id);
  }
}

export async function uploadCV(jpId, file) {
  if (!supabase) throw new Error('No Supabase client');
  const { data: jp } = await supabase.from('job_profiles').select('job_id, user_id').eq('id', jpId).single();
  const { data: job } = await supabase.from('jobs').select('job_id').eq('id', jp.job_id).single();
  const path = `${jp.user_id}/${job.job_id}.pdf`;
  const { error } = await supabase.storage
    .from('cvs')
    .upload(path, file, { contentType: 'application/pdf', upsert: true });
  if (error) throw error;
  await supabase.from('job_profiles').update({ cv_pdf_path: path, cv_pdf_uploaded_at: new Date().toISOString() }).eq('id', jpId);
  return path;
}

export const CV_RETENTION_DAYS = 90;

export async function archiveJob(jpId) {
  if (!supabase) return;
  await supabase.from('job_profiles').update({ status: 'archived', updated_at: new Date().toISOString() }).eq('id', jpId);
}

export async function deleteJob(jpId) {
  if (!supabase) return;
  const { data: jp } = await supabase.from('job_profiles').select('cv_pdf_path, job_id').eq('id', jpId).maybeSingle();
  if (jp?.cv_pdf_path) {
    await supabase.storage.from('cvs').remove([jp.cv_pdf_path]);
  }
  await supabase.from('job_profiles').delete().eq('id', jpId);
  // Remove orphaned job definition
  if (jp?.job_id) {
    const { count } = await supabase.from('job_profiles').select('id', { count: 'exact', head: true }).eq('job_id', jp.job_id);
    if (count === 0) await supabase.from('jobs').delete().eq('id', jp.job_id);
  }
}

export async function deleteCV(jpId, cvPath) {
  if (!supabase) return;
  await supabase.storage.from('cvs').remove([cvPath]);
  await supabase.from('job_profiles').update({ cv_pdf_path: null, cv_pdf_uploaded_at: null }).eq('id', jpId);
}

export function getCVUrl(cvPath) {
  if (!cvPath || !supabase) return null;
  const { data } = supabase.storage.from('cvs').getPublicUrl(cvPath);
  return data?.publicUrl ?? null;
}
