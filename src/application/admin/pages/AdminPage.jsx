import { Link } from 'react-router-dom';
import { useAuth } from '../../../infrastructure/auth/auth.repository.jsx';
import PermissionGate from '../../../infrastructure/permissions/PermissionGate.jsx';

export default function AdminPage() {
  const { userId } = useAuth();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF7' }}>
      <div style={{ padding: '40px 48px', border: '1px solid #E7E5E0', borderRadius: 12, background: '#fff', maxWidth: 480, width: '100%' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, marginBottom: 20 }}>ADMIN</div>
        <div style={{ fontWeight: 700, fontSize: 20, color: '#1C1917', marginBottom: 4 }}>Panel de control</div>
        <div style={{ fontSize: 13, color: '#78716C', fontFamily: "'JetBrains Mono', monospace", marginBottom: 32 }}>{userId}</div>
        <PermissionGate require="backoffice:read">
          <Link to="/admin/backoffice" style={{
            display: 'inline-block', padding: '10px 20px',
            background: '#1C1917', color: '#fff', borderRadius: 7,
            textDecoration: 'none', fontSize: 13, fontWeight: 600,
          }}>
            Backoffice →
          </Link>
        </PermissionGate>
      </div>
    </div>
  );
}
