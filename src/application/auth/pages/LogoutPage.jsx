import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from '../../../infrastructure/auth/auth.repository.jsx';

export default function LogoutPage() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  useEffect(() => {
    signOut().then(() => navigate('/', { replace: true }));
  }, []);

  return null;
}
