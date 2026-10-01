import { useAuth } from '../../../infrastructure/auth/auth.repository.jsx';
import JobsPage from '../../admin/jobs/pages/JobsPage.jsx';

export default function MyJobsPage() {
  const { userId } = useAuth();
  if (!userId) return null;
  return (
    <JobsPage
      ownerId={userId}
      backLink="/profile"
      backLabel="← PROFILE"
    />
  );
}
