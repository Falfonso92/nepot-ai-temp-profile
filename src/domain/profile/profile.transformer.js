import baseProfile from '../../data/profile.js';
import jobs from '../../data/jobs/index.js';

const GENERAL_GUID = 'edfef3a9-2658-49c0-8dbc-0ba17ea04fda';

export function getProfileById(id) {
  if (id === GENERAL_GUID) return baseProfile;
  return jobs[id] ?? null;
}
