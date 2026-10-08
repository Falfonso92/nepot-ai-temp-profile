import { supabase } from './supabase.client.js';

// Fallback to static JS files while data column is not yet fully populated
import jobs from '../../data/jobs/index.js';

export async function getProfileByGuid(guid) {
  if (!supabase) return jobs[guid] ?? null;

  const [profileRes, jpRes] = await Promise.all([
    supabase
      .from('profiles')
      .select('job_id, guid, role, company, data')
      .eq('guid', guid)
      .maybeSingle(),
    supabase
      .from('job_profiles')
      .select('cv_pdf_path')
      .eq('guid', guid)
      .maybeSingle(),
  ]);

  if (profileRes.error || !profileRes.data) return jobs[guid] ?? null;

  const profileData = Object.keys(profileRes.data.data ?? {}).length > 0
    ? profileRes.data.data
    : (jobs[guid] ?? null);

  if (!profileData) return null;

  // Inject the public CV PDF URL from storage if available
  const cvPdfPath = jpRes.data?.cv_pdf_path ?? null;
  if (cvPdfPath) {
    const { data: urlData } = supabase.storage.from('cvs').getPublicUrl(cvPdfPath);
    const cvPdfUrl = urlData?.publicUrl ?? null;
    if (cvPdfUrl) {
      return {
        ...profileData,
        cta: { ...profileData.cta, cvPdfUrl },
      };
    }
  }

  return profileData;
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
