import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../infrastructure/auth/auth.repository.jsx';

export default function HomeRedirect() {
  const { isAuthenticated, isLoaded } = useAuth();
  if (!isLoaded) return null;
  return <Navigate to={isAuthenticated ? '/admin' : '/login'} replace />;
}
