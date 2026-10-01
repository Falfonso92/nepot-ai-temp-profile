import { useParams } from 'react-router-dom';
import JobsPage from '../../jobs/pages/JobsPage.jsx';

export default function UserJobsPage() {
  const { userId } = useParams();
  return (
    <JobsPage
      ownerId={userId}
      backLink="/admin"
      backLabel="← ADMIN"
      secondCrumb="USERS"
      secondCrumbLink="/admin/users"
    />
  );
}
