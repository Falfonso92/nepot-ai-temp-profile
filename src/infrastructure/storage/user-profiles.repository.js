import { supabase } from './supabase.client.js';

export async function listUsersWithStats() {
  if (!supabase) return [];
  const { data } = await supabase.rpc('get_users_with_stats');
  return data ?? [];
}

export async function getUserProfile(userId) {
  if (!supabase) return null;
  const { data } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  return data;
}

export async function upsertUserProfile(userId, fields) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('user_profiles')
    .upsert({ user_id: userId, ...fields }, { onConflict: 'user_id' })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export function getBioUrl(bioPath) {
  if (!bioPath || !supabase) return null;
  const { data } = supabase.storage.from('bios').getPublicUrl(bioPath);
  return data?.publicUrl ?? null;
}

export async function uploadBio(userId, content) {
  if (!supabase) throw new Error('No Supabase client');
  const path = `${userId}.md`;
  const { error } = await supabase.storage
    .from('bios')
    .upload(path, new Blob([content], { type: 'text/markdown' }), { upsert: true });
  if (error) throw error;
  await upsertUserProfile(userId, { bio_path: path, bio_updated_at: new Date().toISOString() });
  return path;
}

export async function deleteUserData(userId) {
  if (!supabase) return;
  const profile = await getUserProfile(userId);
  if (profile?.bio_path) {
    await supabase.storage.from('bios').remove([profile.bio_path]);
  }
  const { data: jps } = await supabase
    .from('job_profiles')
    .select('cv_pdf_path, job_id')
    .eq('user_id', userId)
    .not('cv_pdf_path', 'is', null);
  const cvPaths = (jps ?? []).map(j => j.cv_pdf_path).filter(Boolean);
  if (cvPaths.length > 0) await supabase.storage.from('cvs').remove(cvPaths);
  const jobIds = [...new Set((jps ?? []).map(j => j.job_id).filter(Boolean))];
  await supabase.from('job_profiles').delete().eq('user_id', userId);
  for (const jobId of jobIds) {
    const { count } = await supabase.from('job_profiles').select('id', { count: 'exact', head: true }).eq('job_id', jobId);
    if (count === 0) await supabase.from('jobs').delete().eq('id', jobId);
  }
  await supabase.from('user_roles').delete().eq('user_id', userId);
  await supabase.from('user_profiles').delete().eq('user_id', userId);
}
