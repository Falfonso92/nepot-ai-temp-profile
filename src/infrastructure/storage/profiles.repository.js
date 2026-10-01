import { supabase } from './supabase.client.js';

// Fallback to static JS files while data column is not yet fully populated
import jobs from '../../data/jobs/index.js';

export async function getProfileByGuid(guid) {
  if (!supabase) return jobs[guid] ?? null;

  const { data, error } = await supabase
    .from('profiles')
    .select('job_id, guid, role, company, data')
    .eq('guid', guid)
    .maybeSingle();

  if (error || !data) return jobs[guid] ?? null;

  // data column empty → fall back to static JS file
  return Object.keys(data.data).length > 0 ? data.data : (jobs[guid] ?? null);
}

export async function listActiveProfiles() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('profiles')
    .select('job_id, guid, role, company')
    .eq('is_active', true)
    .order('job_id');

  if (error) return [];
  return data;
}
