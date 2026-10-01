import { Link, useLocation } from 'react-router-dom';
import { usePermissions } from '../../infrastructure/permissions/usePermissions.js';

const NAV = [
  { label: 'Overview',    path: '/admin/backoffice',             perm: 'backoffice:read' },
  { label: 'Roles',       path: '/admin/backoffice/roles',       perm: 'backoffice:permissions:read' },
  { label: 'Actions',     path: '/admin/backoffice/actions',     perm: 'backoffice:permissions:read' },
  { label: 'Permissions', path: '/admin/backoffice/permissions', perm: 'backoffice:permissions:read' },
];

export default function BackofficeLayout({ children }) {
  const loc = useLocation();
  const { can } = usePermissions();

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ borderBottom: '1px solid #E7E5E0', background: '#fff' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'stretch' }}>
          <Link to="/admin" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', paddingRight: 24, borderRight: '1px solid #E7E5E0', marginRight: 8 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2 }}>BACKOFFICE</span>
          </Link>
          {NAV.filter(n => can(n.perm)).map(n => {
            const active = loc.pathname === n.path;
            return (
              <Link key={n.path} to={n.path} style={{
                padding: '14px 16px',
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                color: active ? '#1C1917' : '#78716C',
                textDecoration: 'none',
                borderBottom: active ? '2px solid #1C1917' : '2px solid transparent',
                transition: 'color 0.15s',
              }}>
                {n.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
        {children}
      </div>
    </div>
  );
}
