import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileById } from '../../../domain/profile/profile.transformer.js';
import PublicProfile from '../../profile/components/PublicProfile.jsx';
import NotFoundPage from '../../../packages/ui/NotFoundPage.jsx';

export default function PublicCVPage() {
  const { id } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getProfileById(id).then(setData);
  }, [id]);

  if (data === undefined) return null;
  if (!data) return <NotFoundPage />;
  return <PublicProfile data={data} />;
}
