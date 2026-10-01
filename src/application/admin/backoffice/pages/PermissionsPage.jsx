import { useState, useEffect } from 'react';
import BackofficeLayout from '../../../../packages/ui/BackofficeLayout.jsx';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';
import { invalidatePermissionsCache } from '../../../../infrastructure/permissions/usePermissions.js';
import { useAuth } from '../../../../infrastructure/auth/auth.repository.jsx';
import {
  getRoles, getActions, getRolePermissions,
  addRolePermission, removeRolePermission,
} from '../../../../infrastructure/permissions/permissions.repository.js';

export default function PermissionsPage() {
  const { can } = usePermissions();
  const { userId } = useAuth();
  const canEdit = can('backoffice:permissions:edit');

  const [roles, setRoles] = useState([]);
  const [actions, setActions] = useState([]);
  const [matrix, setMatrix] = useState({}); // key: `${roleId}_${actionId}` → true
  const [toggling, setToggling] = useState({});

  useEffect(() => { load(); }, []);

  async function load() {
    const [r, a, rp] = await Promise.all([getRoles(), getActions(), getRolePermissions()]);
    setRoles(r);
    setActions(a);
    const m = {};
    rp.forEach(p => { m[`${p.role_id}_${p.action_id}`] = true; });
    setMatrix(m);
  }

  async function toggle(roleId, actionId, checked) {
    if (!canEdit) return;
    const key = `${roleId}_${actionId}`;
    setToggling(t => ({ ...t, [key]: true }));
    try {
      if (checked) {
        await addRolePermission(roleId, actionId);
        setMatrix(m => ({ ...m, [key]: true }));
      } else {
        await removeRolePermission(roleId, actionId);
        setMatrix(m => { const n = { ...m }; delete n[key]; return n; });
      }
      invalidatePermissionsCache(userId);
    } finally {
      setToggling(t => { const n = { ...t }; delete n[key]; return n; });
    }
  }

  const TH = { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#78716C', letterSpacing: 1.5, textAlign: 'left', padding: '8px 14px', borderBottom: '2px solid #E7E5E0' };
  const TD = { fontSize: 13, color: '#1C1917', padding: '10px 14px', borderBottom: '1px solid #F5F4F1', verticalAlign: 'middle' };

  return (
    <BackofficeLayout>
      <div style={{ marginBottom: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2 }}>
        BACKOFFICE / PERMISSIONS
      </div>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1C1917', marginBottom: 8 }}>Permissions</h1>
      <p style={{ fontSize: 13, color: '#78716C', marginBottom: 32 }}>
        Each cell grants <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, background: '#F5F4F1', padding: '1px 6px', borderRadius: 3 }}>role:action</span> permission.
        {!canEdit && ' Read-only — you need backoffice:permissions:edit to modify.'}
      </p>

      <div style={{ background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8, overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...TH, minWidth: 160 }}>ROLE</th>
              {actions.map(a => (
                <th key={a.id} style={{ ...TH, textAlign: 'center', minWidth: 140 }}>
                  <div>{a.name}</div>
                  <div style={{ fontWeight: 400, color: '#A8A29E', marginTop: 2 }}>{a.description}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.length === 0 && (
              <tr><td colSpan={actions.length + 1} style={{ ...TD, color: '#A8A29E', textAlign: 'center', padding: 24 }}>No roles defined</td></tr>
            )}
            {roles.map(r => (
              <tr key={r.id}>
                <td style={TD}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, background: '#F5F4F1', padding: '2px 8px', borderRadius: 4, display: 'inline-block' }}>
                    {r.name}
                  </div>
                  {r.description && <div style={{ fontSize: 11, color: '#A8A29E', marginTop: 3 }}>{r.description}</div>}
                </td>
                {actions.map(a => {
                  const key = `${r.id}_${a.id}`;
                  const checked = !!matrix[key];
                  const busy = !!toggling[key];
                  const perm = `${r.name}:${a.name}`;
                  return (
                    <td key={a.id} style={{ ...TD, textAlign: 'center' }}>
                      <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: canEdit ? 'pointer' : 'default' }}>
                        <input
                          type="checkbox"
                          checked={checked}
                          disabled={!canEdit || busy}
                          onChange={e => toggle(r.id, a.id, e.target.checked)}
                          style={{ width: 16, height: 16, cursor: canEdit ? 'pointer' : 'default', accentColor: '#1C1917' }}
                        />
                        {checked && (
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#A8A29E', letterSpacing: 0.5 }}>
                            {perm}
                          </span>
                        )}
                      </label>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BackofficeLayout>
  );
}
