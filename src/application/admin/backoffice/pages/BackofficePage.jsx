import { Link } from 'react-router-dom';
import BackofficeLayout from '../../../../packages/ui/BackofficeLayout.jsx';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';

const MODULES = [
  { label: 'Roles', path: '/admin/backoffice/roles', perm: 'backoffice:permissions:read', desc: 'Manage role definitions' },
  { label: 'Actions', path: '/admin/backoffice/actions', perm: 'backoffice:permissions:read', desc: 'Manage action definitions' },
  { label: 'Permissions', path: '/admin/backoffice/permissions', perm: 'backoffice:permissions:read', desc: 'Assign actions to roles' },
];

export default function BackofficePage() {
  const { can } = usePermissions();

  return (
    <BackofficeLayout>
      <div style={{ marginBottom: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2 }}>
        ADMIN / BACKOFFICE
      </div>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1C1917', marginBottom: 32 }}>Access Control</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        {MODULES.filter(m => can(m.perm)).map(m => (
          <Link key={m.path} to={m.path} style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px 24px',
              background: '#fff',
              border: '1px solid #E7E5E0',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'border-color 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#A8A29E'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#E7E5E0'}
            >
              <div style={{ fontWeight: 600, color: '#1C1917', marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontSize: 12, color: '#78716C' }}>{m.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </BackofficeLayout>
  );
}
