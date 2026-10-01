import { useState, useEffect } from 'react';
import BackofficeLayout from '../../../../packages/ui/BackofficeLayout.jsx';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';
import { getRoles, createRole, updateRole, deleteRole } from '../../../../infrastructure/permissions/permissions.repository.js';
import { invalidatePermissionsCache } from '../../../../infrastructure/permissions/usePermissions.js';
import { useAuth } from '../../../../infrastructure/auth/auth.repository.jsx';

const TH = { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#78716C', letterSpacing: 1.5, textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #E7E5E0' };
const TD = { fontSize: 13, color: '#1C1917', padding: '10px 12px', borderBottom: '1px solid #F5F4F1', verticalAlign: 'middle' };

export default function RolesPage() {
  const { can } = usePermissions();
  const { userId } = useAuth();
  const canEdit = can('backoffice:permissions:edit');

  const [roles, setRoles] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [editing, setEditing] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    setRoles(await getRoles());
  }

  async function save() {
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      if (editing) {
        await updateRole(editing.id, form.name.trim(), form.description.trim());
      } else {
        await createRole(form.name.trim(), form.description.trim());
      }
      invalidatePermissionsCache(userId);
      setForm({ name: '', description: '' });
      setEditing(null);
      await load();
    } finally {
      setSaving(false);
    }
  }

  async function remove(id) {
    await deleteRole(id);
    invalidatePermissionsCache(userId);
    setConfirmDelete(null);
    await load();
  }

  function startEdit(r) {
    setEditing(r);
    setForm({ name: r.name, description: r.description ?? '' });
  }

  function cancelEdit() {
    setEditing(null);
    setForm({ name: '', description: '' });
  }

  return (
    <BackofficeLayout>
      <div style={{ marginBottom: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2 }}>
        BACKOFFICE / ROLES
      </div>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1C1917', marginBottom: 32 }}>Roles</h1>

      <div style={{ background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8, overflow: 'hidden', marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={TH}>NAME</th>
              <th style={TH}>DESCRIPTION</th>
              {canEdit && <th style={{ ...TH, width: 120 }}>ACTIONS</th>}
            </tr>
          </thead>
          <tbody>
            {roles.length === 0 && (
              <tr><td colSpan={canEdit ? 3 : 2} style={{ ...TD, color: '#A8A29E', textAlign: 'center', padding: 24 }}>No roles defined</td></tr>
            )}
            {roles.map(r => (
              <tr key={r.id}>
                <td style={TD}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, background: '#F5F4F1', padding: '2px 8px', borderRadius: 4 }}>
                    {r.name}
                  </span>
                </td>
                <td style={{ ...TD, color: '#57534E' }}>{r.description || '—'}</td>
                {canEdit && (
                  <td style={TD}>
                    {confirmDelete === r.id ? (
                      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <button onClick={() => remove(r.id)} style={{ padding: '4px 10px', borderRadius: 4, border: 'none', background: '#DC2626', color: '#fff', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Confirm</button>
                        <button onClick={() => setConfirmDelete(null)} style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid #E7E5E0', background: '#fff', fontSize: 11, cursor: 'pointer' }}>Cancel</button>
                      </span>
                    ) : (
                      <span style={{ display: 'flex', gap: 6 }}>
                        <button onClick={() => startEdit(r)} style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid #E7E5E0', background: '#fff', fontSize: 11, cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => setConfirmDelete(r.id)} style={{ padding: '4px 10px', borderRadius: 4, border: 'none', background: '#FEE2E2', color: '#DC2626', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Delete</button>
                      </span>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {canEdit && (
        <div style={{ background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8, padding: '24px' }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, color: '#1C1917', marginBottom: 16 }}>
            {editing ? `Edit — ${editing.name}` : 'New Role'}
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontSize: 11, color: '#78716C', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>NAME *</label>
              <input
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                placeholder="e.g. backoffice"
                style={{ padding: '7px 10px', borderRadius: 6, border: '1px solid #E7E5E0', fontSize: 13, width: 200, outline: 'none', fontFamily: "'JetBrains Mono', monospace" }}
                onKeyDown={e => e.key === 'Enter' && save()}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 200 }}>
              <label style={{ fontSize: 11, color: '#78716C', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>DESCRIPTION</label>
              <input
                value={form.description}
                onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
                placeholder="Short description"
                style={{ padding: '7px 10px', borderRadius: 6, border: '1px solid #E7E5E0', fontSize: 13, outline: 'none' }}
                onKeyDown={e => e.key === 'Enter' && save()}
              />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={save}
                disabled={saving || !form.name.trim()}
                style={{ padding: '8px 18px', borderRadius: 6, border: 'none', background: saving || !form.name.trim() ? '#E7E5E0' : '#1C1917', color: '#fff', fontSize: 12, fontWeight: 600, cursor: saving || !form.name.trim() ? 'default' : 'pointer' }}
              >
                {saving ? 'Saving…' : editing ? 'Update' : 'Create'}
              </button>
              {editing && (
                <button onClick={cancelEdit} style={{ padding: '8px 14px', borderRadius: 6, border: '1px solid #E7E5E0', background: '#fff', fontSize: 12, cursor: 'pointer' }}>Cancel</button>
              )}
            </div>
          </div>
        </div>
      )}
    </BackofficeLayout>
  );
}
