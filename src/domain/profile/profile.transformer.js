import baseProfile from '../../data/profile.js';
import { getProfileByGuid } from '../../infrastructure/storage/profiles.repository.js';

const GENERAL_GUID = 'edfef3a9-2658-49c0-8dbc-0ba17ea04fda';

export async function getProfileById(id) {
  if (id === GENERAL_GUID) return baseProfile;
  return await getProfileByGuid(id);
}
