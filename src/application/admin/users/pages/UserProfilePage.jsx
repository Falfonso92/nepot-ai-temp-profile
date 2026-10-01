import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';
import { getUserProfile, upsertUserProfile, getBioUrl, deleteUserData } from '../../../../infrastructure/storage/user-profiles.repository.js';
import BioSection from '../../../shared/BioSection.jsx';

const FIELDS = [
  { key: 'full_name', label: 'FULL NAME', placeholder: 'Jane Smith' },
  { key: 'email',     label: 'EMAIL',     placeholder: 'jane@example.com' },
  { key: 'phone',     label: 'PHONE',     placeholder: '+34 600 000 000' },
  { key: 'linkedin_url', label: 'LINKEDIN', placeholder: 'https://linkedin.com/in/…' },
  { key: 'github_url',   label: 'GITHUB',   placeholder: 'https://github.com/…' },
];

const LBL         = { fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 };
const CRUMB       = { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, textDecoration: 'none' };
const BTN_PRIMARY = { padding: '7px 18px', borderRadius: 6, border: 'none', background: '#1C1917', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' };
const BTN_OUTLINE = { padding: '7px 14px', borderRadius: 6, border: '1px solid #E7E5E0', background: '#fff', fontSize: 12, cursor: 'pointer', color: '#57534E' };

export default function UserProfilePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { can } = usePermissions();
  const canEdit   = can('backoffice:edit');

  const [profile, setProfile]             = useState(null);
  const [form, setForm]                   = useState({});
  const [editing, setEditing]             = useState(false);
  const [saving, setSaving]               = useState(false);
  const [deleting, setDeleting]           = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [loading, setLoading]             = useState(true);

  useEffect(() => {
    getUserProfile(userId).then(p => {
      setProfile(p);
      setForm(p ?? {});
      setLoading(false);
    });
  }, [userId]);

  if (!can('backoffice:read')) return null;

  async function handleSave() {
    setSaving(true);
    try {
      const updated = await upsertUserProfile(userId, form);
      setProfile(updated);
      setForm(updated);
      setEditing(false);
    } finally { setSaving(false); }
  }

  async function handleDelete() {
    setDeleting(true);
    try {
      await deleteUserData(userId);
      navigate('/admin/users');
    } finally { setDeleting(false); }
  }

  const bioUrl = getBioUrl(profile?.bio_path);

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ borderBottom: '1px solid #E7E5E0', background: '#fff', padding: '0 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0' }}>
          <Link to="/admin" style={CRUMB}>← ADMIN</Link>
          <span style={{ color: '#D6D3D1' }}>/</span>
          <Link to="/admin/users" style={CRUMB}>USERS</Link>
          <span style={{ color: '#D6D3D1' }}>/</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#1C1917', letterSpacing: 2 }}>
            {profile?.full_name || profile?.email || 'PROFILE'}
          </span>
          <div style={{ marginLeft: 'auto' }}>
            <Link to={`/admin/users/${userId}/jobs`}
              style={{ fontSize: 12, padding: '5px 14px', borderRadius: 6, background: '#EDE9FE', color: '#6D28D9', textDecoration: 'none', fontWeight: 600 }}>
              View Jobs →
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '28px 32px' }}>
        {loading ? (
          <div style={{ color: '#A8A29E', fontSize: 13 }}>Loading…</div>
        ) : (
          <>
            {/* Profile info */}
            <div style={{ background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8, padding: 24, marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2 }}>PROFILE INFO</div>
                {canEdit && !editing && (
                  <button onClick={() => setEditing(true)} style={BTN_OUTLINE}>Edit</button>
                )}
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={LBL}>USER ID</div>
                <div style={{ fontSize: 11, color: '#78716C', fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{userId}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {FIELDS.map(f => (
                  <div key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <label style={LBL}>{f.label}</label>
                    {editing ? (
                      <input
                        value={form[f.key] ?? ''}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        placeholder={f.placeholder}
                        style={{ padding: '7px 10px', borderRadius: 6, border: '1px solid #E7E5E0', fontSize: 13, outline: 'none', background: '#fff' }}
                      />
                    ) : (
                      <div style={{ fontSize: 13, color: form[f.key] ? '#1C1917' : '#D6D3D1' }}>
                        {form[f.key] || '—'}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {editing && (
                <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                  <button onClick={handleSave} disabled={saving}
                    style={{ ...BTN_PRIMARY, opacity: saving ? 0.6 : 1 }}>
                    {saving ? 'Saving…' : 'Save'}
                  </button>
                  <button onClick={() => { setEditing(false); setForm(profile ?? {}); }} style={BTN_OUTLINE}>
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div style={{ marginBottom: 20 }}>
              <BioSection
                bioUrl={bioUrl}
                updatedAt={profile?.bio_updated_at}
                extraActions={canEdit ? (
                  <button disabled style={{ ...BTN_OUTLINE, opacity: 0.45, cursor: 'not-allowed' }}>
                    Recalculate Bio (coming soon)
                  </button>
                ) : null}
              />
            </div>

            {/* Danger zone */}
            {canEdit && (
              <div style={{ background: '#fff', border: '1px solid #FCA5A5', borderRadius: 8, padding: 24 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#DC2626', letterSpacing: 2, marginBottom: 14 }}>
                  DANGER ZONE
                </div>
                {!confirmDelete ? (
                  <button onClick={() => setConfirmDelete(true)}
                    style={{ padding: '7px 16px', borderRadius: 6, border: '1px solid #FCA5A5', background: '#FEF2F2', color: '#DC2626', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                    Delete User & All Data
                  </button>
                ) : (
                  <div>
                    <div style={{ fontSize: 13, color: '#DC2626', fontWeight: 600, marginBottom: 4 }}>
                      This permanently deletes the user's profile, all their jobs, and CV files.
                    </div>
                    <div style={{ fontSize: 12, color: '#78716C', marginBottom: 14 }}>This cannot be undone.</div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={handleDelete} disabled={deleting}
                        style={{ padding: '7px 16px', borderRadius: 6, border: 'none', background: '#DC2626', color: '#fff', fontSize: 12, fontWeight: 600, cursor: deleting ? 'wait' : 'pointer' }}>
                        {deleting ? 'Deleting…' : 'Confirm Delete'}
                      </button>
                      <button onClick={() => setConfirmDelete(false)} style={BTN_OUTLINE}>Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
