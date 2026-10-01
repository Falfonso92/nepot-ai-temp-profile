import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';
import { listUsersWithStats } from '../../../../infrastructure/storage/user-profiles.repository.js';

const TH = { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#78716C', letterSpacing: 1.5, textAlign: 'left', padding: '8px 16px', borderBottom: '2px solid #E7E5E0', whiteSpace: 'nowrap' };
const TD = { fontSize: 13, color: '#1C1917', padding: '12px 16px', borderBottom: '1px solid #F5F4F1', verticalAlign: 'middle' };
const CHIP = (bg, color) => ({ fontSize: 10, padding: '2px 7px', borderRadius: 10, background: bg, color, fontWeight: 600 });

export default function UsersListPage() {
  const { can } = usePermissions();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listUsersWithStats().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (!can('backoffice:read')) return null;

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ borderBottom: '1px solid #E7E5E0', background: '#fff', padding: '0 32px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0' }}>
          <Link to="/admin" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, textDecoration: 'none' }}>← ADMIN</Link>
          <span style={{ color: '#D6D3D1' }}>/</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#1C1917', letterSpacing: 2 }}>USERS</span>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 32px' }}>
        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: '#A8A29E', fontSize: 13 }}>Loading…</div>
        ) : (
          <div style={{ background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={TH}>USER</th>
                  <th style={TH}>ROLES</th>
                  <th style={{ ...TH, width: 80, textAlign: 'center' }}>JOBS</th>
                  <th style={{ ...TH, width: 200 }}></th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ ...TD, textAlign: 'center', padding: 40, color: '#A8A29E' }}>
                      No users yet
                    </td>
                  </tr>
                )}
                {users.map(u => (
                  <tr key={u.user_id}>
                    <td style={TD}>
                      <div style={{ fontWeight: 600, fontSize: 13 }}>
                        {u.full_name || u.email || '(no profile)'}
                      </div>
                      <div style={{ fontSize: 11, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>
                        {u.user_id.slice(0, 26)}…
                      </div>
                    </td>
                    <td style={TD}>
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {(u.role_names ?? []).map(r => (
                          <span key={r} style={CHIP(
                            r === 'backoffice' ? '#EDE9FE' : '#DBEAFE',
                            r === 'backoffice' ? '#6D28D9' : '#1E40AF'
                          )}>{r}</span>
                        ))}
                      </div>
                    </td>
                    <td style={{ ...TD, textAlign: 'center' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
                        {u.job_count ?? 0}
                      </span>
                    </td>
                    <td style={{ ...TD, textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                        <Link to={`/admin/users/${u.user_id}`}
                          style={{ fontSize: 11, padding: '5px 12px', borderRadius: 5, background: '#F5F4F1', color: '#57534E', textDecoration: 'none', fontWeight: 500 }}>
                          Profile
                        </Link>
                        <Link to={`/admin/users/${u.user_id}/jobs`}
                          style={{ fontSize: 11, padding: '5px 12px', borderRadius: 5, background: '#EDE9FE', color: '#6D28D9', textDecoration: 'none', fontWeight: 500 }}>
                          Jobs →
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
