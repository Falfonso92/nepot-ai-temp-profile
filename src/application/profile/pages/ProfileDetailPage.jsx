import { useParams } from 'react-router-dom';
import { getProfileById } from '../../../domain/profile/profile.transformer.js';
import PublicProfile from '../components/PublicProfile.jsx';
import NotFoundPage from '../../../packages/ui/NotFoundPage.jsx';

export default function ProfileDetailPage() {
  const { id } = useParams();
  const data = getProfileById(id);
  if (!data) return <NotFoundPage />;
  return <PublicProfile data={data} />;
}
