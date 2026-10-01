import { supabase } from './supabase.client.js';

// Fallback to static JS files while data column is not yet fully populated
import jobs from '../../data/jobs/index.js';

export async function getProfileByGuid(guid) {
  const { data, error } = await supabase
    .from('profiles')
    .select('job_id, guid, role, company, data')
    .eq('guid', guid)
    .maybeSingle();

  if (error || !data) return null;

  // If data column is empty, fall back to static JS file
  const profileData = Object.keys(data.data).length > 0 ? data.data : (jobs[guid] ?? null);
  return profileData;
}

export async function listActiveProfiles() {
  const { data, error } = await supabase
    .from('profiles')
    .select('job_id, guid, role, company')
    .eq('is_active', true)
    .order('job_id');

  if (error) return [];
  return data;
}
