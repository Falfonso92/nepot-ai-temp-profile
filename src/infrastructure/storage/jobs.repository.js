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

export async function listJobs({ page = 0, search = '', status = '', ownerId = null } = {}) {
  if (!supabase) return { jobs: [], total: 0 };

  let q = supabase
    .from('profiles')
    .select(
      'job_id, guid, role, company, is_active, status, offer_url, salary, notes, cv_path, cv_uploaded_at, owner_id, updated_at',
      { count: 'exact' }
    )
    .neq('job_id', 'general')
    .order('updated_at', { ascending: false });

  if (ownerId) q = q.eq('owner_id', ownerId);
  if (search.trim()) {
    q = q.or(`company.ilike.%${search.trim()}%,role.ilike.%${search.trim()}%`);
  }
  if (status) q = q.eq('status', status);

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

export async function getStatusCounts() {
  if (!supabase) return {};
  const { data } = await supabase
    .from('profiles')
    .select('status')
    .neq('job_id', 'general');
  if (!data) return {};
  const counts = {};
  data.forEach(r => { counts[r.status] = (counts[r.status] || 0) + 1; });
  return counts;
}

export async function updateJob(jobId, fields) {
  const { error } = await supabase
    .from('profiles')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('job_id', jobId);
  if (error) throw error;
}

export async function uploadCV(jobId, file) {
  const path = `${jobId}.pdf`;
  const { error } = await supabase.storage
    .from('cvs')
    .upload(path, file, { contentType: 'application/pdf', upsert: true });
  if (error) throw error;
  await updateJob(jobId, { cv_path: path, cv_uploaded_at: new Date().toISOString() });
  return path;
}

export const CV_RETENTION_DAYS = 90;

export async function archiveJob(jobId) {
  return updateJob(jobId, { status: 'archived', is_active: false });
}

export async function deleteJob(jobId) {
  const { data } = await supabase
    .from('profiles')
    .select('cv_path')
    .eq('job_id', jobId)
    .maybeSingle();
  if (data?.cv_path) {
    await supabase.storage.from('cvs').remove([data.cv_path]);
  }
  const { error } = await supabase.from('profiles').delete().eq('job_id', jobId);
  if (error) throw error;
}

export async function deleteCV(jobId, cvPath) {
  const { error } = await supabase.storage.from('cvs').remove([cvPath]);
  if (error) throw error;
  await updateJob(jobId, { cv_path: null, cv_uploaded_at: null });
}

export async function getJobOwners() {
  if (!supabase) return [];
  const { data } = await supabase
    .from('profiles')
    .select('owner_id')
    .not('owner_id', 'is', null)
    .neq('job_id', 'general');
  if (!data) return [];
  return [...new Set(data.map(r => r.owner_id).filter(Boolean))];
}

export function getCVUrl(cvPath) {
  if (!cvPath || !supabase) return null;
  const { data } = supabase.storage.from('cvs').getPublicUrl(cvPath);
  return data?.publicUrl ?? null;
}
