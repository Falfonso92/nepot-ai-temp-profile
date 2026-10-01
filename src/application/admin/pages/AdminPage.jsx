import { Link } from 'react-router-dom';
import { useAuth } from '../../../infrastructure/auth/auth.repository.jsx';
import PermissionGate from '../../../infrastructure/permissions/PermissionGate.jsx';

const MODULES = [
  {
    path: '/admin/jobs',
    label: 'Jobs',
    desc: 'Pipeline, status, CVs and profile links',
    requireAny: ['user:jobs:read', 'backoffice:read'],
    bg: '#EDE9FE',
    emoji: '📋',
  },
  {
    path: '/admin/backoffice',
    label: 'Access Control',
    desc: 'Roles, actions and permission assignments',
    require: 'backoffice:read',
    bg: '#DBEAFE',
    emoji: '🔑',
  },
];

export default function AdminPage() {
  const { userId } = useAuth();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF7', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ width: '100%', maxWidth: 560, padding: '0 24px' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, marginBottom: 12 }}>ADMIN</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1C1917', marginBottom: 4 }}>Panel</h1>
        <div style={{ fontSize: 12, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", marginBottom: 32 }}>{userId}</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {MODULES.map(m => (
            <PermissionGate key={m.path} require={m.require} requireAny={m.requireAny}>
              <Link to={m.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '20px 24px', background: '#fff', border: '1px solid #E7E5E0',
                  borderRadius: 10, display: 'flex', alignItems: 'center', gap: 16,
                  transition: 'border-color 0.15s, box-shadow 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C4B5A0'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E7E5E0'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 18 }}>{m.emoji}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#1C1917', marginBottom: 3 }}>{m.label}</div>
                    <div style={{ fontSize: 12, color: '#78716C' }}>{m.desc}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: '#A8A29E', fontSize: 16 }}>→</span>
                </div>
              </Link>
            </PermissionGate>
          ))}
        </div>
      </div>
    </div>
  );
}
