import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';
import { useAuth } from '../../../../infrastructure/auth/auth.repository.jsx';
import {
  listJobs, getStatusCounts, getJobOwners,
  updateJob, archiveJob, deleteJob, uploadCV, deleteCV, getCVUrl,
  STATUSES, PAGE_SIZE, CV_RETENTION_DAYS,
} from '../../../../infrastructure/storage/jobs.repository.js';

// ─── helpers ─────────────────────────────────────────────────────────────────

const STATUS_MAP = Object.fromEntries(STATUSES.map(s => [s.value, s]));

function StatusBadge({ value }) {
  const s = STATUS_MAP[value] ?? { label: value, bg: '#F5F4F1', color: '#78716C' };
  return (
    <span style={{
      display: 'inline-block', padding: '2px 8px', borderRadius: 12,
      fontSize: 11, fontWeight: 600, background: s.bg, color: s.color, whiteSpace: 'nowrap',
    }}>
      {s.label}
    </span>
  );
}

function ExternalLink({ href, label, bg }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      fontSize: 11, color: '#1C1917', background: bg ?? '#F5F4F1',
      padding: '2px 7px', borderRadius: 4, textDecoration: 'none',
      display: 'inline-block', whiteSpace: 'nowrap',
    }}>
      {label} ↗
    </a>
  );
}

function useDebounce(value, delay) {
  const [d, setD] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setD(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return d;
}

// ─── edit panel ──────────────────────────────────────────────────────────────

function EditPanel({ job, canEdit, canDeleteCV, onSave, onCancel, onRefresh }) {
  const [form, setForm] = useState({
    status: job.status,
    offer_url: job.offer_url ?? '',
    salary: job.salary ?? '',
    notes: job.notes ?? '',
  });
  const [uploading, setUploading] = useState(false);
  const [deletingCV, setDeletingCV] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);
  const fileRef = useRef(null);

  const cvUrl = getCVUrl(job.cv_path);
  const cvExpiresIn = (() => {
    if (!job.cv_uploaded_at) return null;
    const days = Math.ceil(
      (new Date(job.cv_uploaded_at).getTime() + CV_RETENTION_DAYS * 86400_000 - Date.now()) / 86400_000
    );
    return days;
  })();

  async function save() {
    setSaving(true);
    try { await onSave(job.job_id, form); }
    finally { setSaving(false); }
  }

  async function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try { await uploadCV(job.job_id, file); onRefresh(); }
    catch (err) { alert('Upload failed: ' + err.message); }
    finally { setUploading(false); }
  }

  async function handleDeleteCV() {
    if (!job.cv_path) return;
    setDeletingCV(true);
    try { await deleteCV(job.job_id, job.cv_path); onRefresh(); }
    catch (err) { alert('Delete failed: ' + err.message); }
    finally { setDeletingCV(false); }
  }

  const inp = (field, placeholder, wide) => (
    <input
      value={form[field]}
      onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
      placeholder={placeholder}
      disabled={!canEdit}
      style={{
        padding: '6px 10px', borderRadius: 6, border: '1px solid #E7E5E0',
        fontSize: 12, outline: 'none', width: wide ? '100%' : 'auto',
        background: canEdit ? '#fff' : '#FAFAF7', boxSizing: 'border-box',
      }}
    />
  );

  return (
    <div style={{ padding: '16px 16px 16px 12px', background: '#FAFAF7', borderTop: '1px dashed #E7E5E0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-start' }}>

        {canEdit && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <label style={LBL}>STATUS</label>
            <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}
              style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #E7E5E0', fontSize: 12, background: '#fff', outline: 'none' }}>
              {STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1, minWidth: 180 }}>
          <label style={LBL}>OFFER URL</label>
          {inp('offer_url', 'https://…', true)}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, width: 150 }}>
          <label style={LBL}>SALARY</label>
          {inp('salary', '€70K–€90K')}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 2, minWidth: 180 }}>
          <label style={LBL}>NOTES</label>
          {inp('notes', 'Internal notes…', true)}
        </div>

        {/* CV section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label style={LBL}>CV</label>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            {cvUrl && (
              <a href={cvUrl} target="_blank" rel="noreferrer"
                style={{ fontSize: 12, color: '#1C1917', background: '#DCFCE7', padding: '5px 10px', borderRadius: 5, textDecoration: 'none', fontWeight: 600 }}>
                Download ↓
              </a>
            )}
            {canEdit && (
              <>
                <input type="file" accept=".pdf" ref={fileRef} style={{ display: 'none' }} onChange={handleUpload} />
                <button onClick={() => fileRef.current?.click()} disabled={uploading}
                  style={{ padding: '5px 10px', borderRadius: 5, border: '1px dashed #C4B5A0', background: '#fff', fontSize: 11, cursor: uploading ? 'wait' : 'pointer', color: '#78716C' }}>
                  {uploading ? 'Uploading…' : job.cv_path ? 'Replace PDF' : 'Upload PDF'}
                </button>
                <button onClick={() => setShowGenerate(s => !s)}
                  style={{ padding: '5px 10px', borderRadius: 5, border: '1px solid #C4B5A0', background: showGenerate ? '#1C1917' : '#fff', color: showGenerate ? '#fff' : '#57534E', fontSize: 11, cursor: 'pointer' }}>
                  Generate CV
                </button>
              </>
            )}
            {canDeleteCV && job.cv_path && (
              <button onClick={handleDeleteCV} disabled={deletingCV}
                style={{ padding: '5px 10px', borderRadius: 5, border: 'none', background: '#FEE2E2', color: '#DC2626', fontSize: 11, fontWeight: 600, cursor: deletingCV ? 'wait' : 'pointer' }}>
                {deletingCV ? 'Deleting…' : 'Delete CV'}
              </button>
            )}
            {cvExpiresIn !== null && (
              <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: cvExpiresIn <= 14 ? '#DC2626' : cvExpiresIn <= 30 ? '#B45309' : '#A8A29E' }}>
                {cvExpiresIn > 0 ? `expires in ${cvExpiresIn}d` : 'expired'}
              </span>
            )}
          </div>
          {showGenerate && (
            <div style={{ marginTop: 6, padding: '10px 12px', background: '#fff', border: '1px solid #E7E5E0', borderRadius: 6, fontSize: 12, color: '#57534E', maxWidth: 420 }}>
              <div style={{ fontWeight: 600, marginBottom: 4, color: '#1C1917' }}>Generate CV via CLI</div>
              Run the TAILOR agent in the nepot-ai terminal:
              <code style={{ display: 'block', marginTop: 6, padding: '4px 8px', background: '#F5F4F1', borderRadius: 4, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                TAILOR {job.job_id}
              </code>
              Once done, upload the generated PDF here.
            </div>
          )}
        </div>
      </div>

      {canEdit && (
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button onClick={save} disabled={saving}
            style={{ padding: '6px 16px', borderRadius: 6, border: 'none', background: saving ? '#E7E5E0' : '#1C1917', color: '#fff', fontSize: 12, fontWeight: 600, cursor: saving ? 'default' : 'pointer' }}>
            {saving ? 'Saving…' : 'Save'}
          </button>
          <button onClick={onCancel}
            style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #E7E5E0', background: '#fff', fontSize: 12, cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      )}
      {!canEdit && (
        <div style={{ marginTop: 12 }}>
          <button onClick={onCancel}
            style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #E7E5E0', background: '#fff', fontSize: 12, cursor: 'pointer' }}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

// ─── style constants ──────────────────────────────────────────────────────────

const LBL = { fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 };
const TH  = { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#78716C', letterSpacing: 1.5, textAlign: 'left', padding: '8px 10px', borderBottom: '2px solid #E7E5E0', whiteSpace: 'nowrap' };
const TD  = { fontSize: 13, color: '#1C1917', padding: '9px 10px', borderBottom: '1px solid #F5F4F1', verticalAlign: 'middle' };

const FILTER_TABS = [
  { value: '', label: 'All' },
  { value: 'prospect',      label: 'Prospect' },
  { value: 'applied',       label: 'Applied' },
  { value: 'screening',     label: 'Screening' },
  { value: 'interviewing',  label: 'Interviewing' },
  { value: 'offer_pending', label: 'Offer' },
  { value: 'archived',      label: 'Archived' },
];

// ─── main page ────────────────────────────────────────────────────────────────

export default function JobsPage() {
  const { can } = usePermissions();
  const { userId } = useAuth();

  const isBackoffice  = can('backoffice:read');
  const canRead       = isBackoffice || can('user:jobs:read');
  const canEdit       = can('backoffice:edit') || can('user:jobs:edit');
  const canDeleteCV   = can('backoffice:edit');

  const [jobs, setJobs]               = useState([]);
  const [total, setTotal]             = useState(0);
  const [counts, setCounts]           = useState({});
  const [owners, setOwners]           = useState([]);
  const [ownerFilter, setOwnerFilter] = useState('');
  const [page, setPage]               = useState(0);
  const [search, setSearch]           = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [editingId, setEditingId]     = useState(null);
  const [confirmArchive, setConfirmArchive] = useState(null);
  const [confirmDelete, setConfirmDelete]   = useState(null);
  const [loading, setLoading]         = useState(true);
  const [countsLoaded, setCountsLoaded] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

  const ownerId = isBackoffice ? (ownerFilter || null) : userId;

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const result = await listJobs({ page, search: debouncedSearch, status: filterStatus, ownerId });
      setJobs(result.jobs);
      setTotal(result.total);
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch, filterStatus, ownerId]);

  // Load counts + owners once
  useEffect(() => {
    if (countsLoaded) return;
    Promise.all([
      getStatusCounts(),
      isBackoffice ? getJobOwners() : Promise.resolve([]),
    ]).then(([c, o]) => {
      setCounts(c);
      setOwners(o);
      setCountsLoaded(true);
    });
  }, [isBackoffice, countsLoaded]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    setPage(0);
    setEditingId(null);
    setConfirmArchive(null);
    setConfirmDelete(null);
  }, [debouncedSearch, filterStatus, ownerFilter]);

  async function handleSave(jobId, fields) {
    await updateJob(jobId, fields);
    refresh();
    setEditingId(null);
  }

  async function handleArchive(jobId) {
    await archiveJob(jobId);
    setConfirmArchive(null);
    refresh();
  }

  async function handleDelete(jobId) {
    await deleteJob(jobId);
    setConfirmDelete(null);
    refresh();
  }

  async function refresh() {
    const [result, c] = await Promise.all([
      listJobs({ page, search: debouncedSearch, status: filterStatus, ownerId }),
      getStatusCounts(),
    ]);
    setJobs(result.jobs);
    setTotal(result.total);
    setCounts(c);
  }

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const from = page * PAGE_SIZE + 1;
  const to   = Math.min((page + 1) * PAGE_SIZE, total);

  if (!canRead) return null;

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #E7E5E0', background: '#fff', padding: '0 32px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0' }}>
          <Link to="/admin" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, textDecoration: 'none' }}>← ADMIN</Link>
          <span style={{ color: '#D6D3D1' }}>/</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#1C1917', letterSpacing: 2 }}>JOBS</span>
          {isBackoffice && owners.length > 1 && (
            <>
              <span style={{ color: '#D6D3D1' }}>/</span>
              <select value={ownerFilter} onChange={e => setOwnerFilter(e.target.value)}
                style={{ padding: '4px 8px', borderRadius: 5, border: '1px solid #E7E5E0', fontSize: 11, fontFamily: "'JetBrains Mono', monospace", background: '#fff', color: '#57534E', outline: 'none' }}>
                <option value="">All users</option>
                {owners.map(o => <option key={o} value={o}>{o.slice(0, 20)}…</option>)}
              </select>
            </>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 32px' }}>

        {/* Status chips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 1, marginRight: 4 }}>
            {isBackoffice ? 'ALL JOBS' : 'MY JOBS'}
          </span>
          {STATUSES.filter(s => counts[s.value]).map(s => (
            <button key={s.value} onClick={() => setFilterStatus(f => f === s.value ? '' : s.value)}
              style={{
                padding: '2px 9px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600,
                background: filterStatus === s.value ? s.color : s.bg,
                color: filterStatus === s.value ? '#fff' : s.color,
              }}>
              {s.label} {counts[s.value]}
            </button>
          ))}
        </div>

        {/* Search + filter tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 180 }}>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search company or role…"
              style={{ width: '100%', padding: '7px 10px 7px 32px', borderRadius: 7, border: '1px solid #E7E5E0', fontSize: 13, background: '#fff', outline: 'none', boxSizing: 'border-box' }} />
            <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#A8A29E' }}>⌕</span>
          </div>
          <div style={{ display: 'flex', background: '#fff', border: '1px solid #E7E5E0', borderRadius: 7, overflow: 'hidden' }}>
            {FILTER_TABS.map(t => {
              const active = filterStatus === t.value;
              return (
                <button key={t.value} onClick={() => setFilterStatus(t.value)}
                  style={{ padding: '7px 12px', border: 'none', borderRight: '1px solid #E7E5E0', background: active ? '#1C1917' : '#fff', color: active ? '#fff' : '#57534E', fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: active ? 600 : 400 }}>
                  {t.label}{t.value && counts[t.value] ? ` (${counts[t.value]})` : ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#A8A29E', fontSize: 13 }}>Loading…</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ ...TH, width: 110 }}>JOB</th>
                  <th style={TH}>COMPANY / ROLE</th>
                  <th style={{ ...TH, width: 110 }}>STATUS</th>
                  <th style={{ ...TH, width: 110 }}>SALARY</th>
                  <th style={{ ...TH, width: 140 }}>LINKS</th>
                  <th style={{ ...TH, width: 180 }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {jobs.length === 0 && (
                  <tr><td colSpan={6} style={{ ...TD, textAlign: 'center', padding: 32, color: '#A8A29E' }}>No jobs found</td></tr>
                )}
                {jobs.map(job => (
                  <>
                    <tr key={job.job_id} style={{ background: editingId === job.job_id ? '#FAFAF7' : 'transparent' }}>
                      <td style={{ ...TD, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E' }}>
                        {job.job_id}
                      </td>
                      <td style={TD}>
                        <div style={{ fontWeight: 600, fontSize: 13 }}>{job.company ?? '—'}</div>
                        <div style={{ fontSize: 12, color: '#78716C', marginTop: 2 }}>{job.role}</div>
                      </td>
                      <td style={TD}><StatusBadge value={job.status} /></td>
                      <td style={{ ...TD, fontSize: 12, color: '#57534E', fontFamily: "'JetBrains Mono', monospace" }}>
                        {job.salary || '—'}
                      </td>
                      <td style={TD}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                          {job.offer_url && <ExternalLink href={job.offer_url} label="Offer" />}
                          {job.guid && (
                            <Link to={`/profile/${job.guid}`} target="_blank"
                              style={{ fontSize: 11, color: '#1C1917', background: '#EDE9FE', padding: '2px 7px', borderRadius: 4, textDecoration: 'none', display: 'inline-block' }}>
                              Profile ↗
                            </Link>
                          )}
                          {job.cv_path && (
                            <a href={getCVUrl(job.cv_path)} target="_blank" rel="noreferrer"
                              style={{ fontSize: 11, color: '#1C1917', background: '#DCFCE7', padding: '2px 7px', borderRadius: 4, textDecoration: 'none', display: 'inline-block' }}>
                              CV ↓
                            </a>
                          )}
                        </div>
                      </td>
                      <td style={TD}>
                        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                          {/* Edit */}
                          <button onClick={() => setEditingId(id => id === job.job_id ? null : job.job_id)}
                            style={{ padding: '4px 9px', borderRadius: 5, border: '1px solid #E7E5E0', background: editingId === job.job_id ? '#1C1917' : '#fff', color: editingId === job.job_id ? '#fff' : '#57534E', fontSize: 11, cursor: 'pointer', fontWeight: editingId === job.job_id ? 600 : 400 }}>
                            {editingId === job.job_id ? 'Close' : 'Edit'}
                          </button>

                          {/* Archive */}
                          {canEdit && job.status !== 'archived' && (
                            confirmArchive === job.job_id ? (
                              <>
                                <button onClick={() => handleArchive(job.job_id)}
                                  style={{ padding: '4px 9px', borderRadius: 5, border: 'none', background: '#FEF3C7', color: '#B45309', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                                  Archive?
                                </button>
                                <button onClick={() => setConfirmArchive(null)}
                                  style={{ padding: '4px 7px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', fontSize: 11, cursor: 'pointer' }}>
                                  ✕
                                </button>
                              </>
                            ) : (
                              <button onClick={() => setConfirmArchive(job.job_id)}
                                style={{ padding: '4px 9px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', color: '#78716C', fontSize: 11, cursor: 'pointer' }}>
                                Archive
                              </button>
                            )
                          )}

                          {/* Delete */}
                          {canEdit && (
                            confirmDelete === job.job_id ? (
                              <>
                                <button onClick={() => handleDelete(job.job_id)}
                                  style={{ padding: '4px 9px', borderRadius: 5, border: 'none', background: '#DC2626', color: '#fff', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                                  Delete?
                                </button>
                                <button onClick={() => setConfirmDelete(null)}
                                  style={{ padding: '4px 7px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', fontSize: 11, cursor: 'pointer' }}>
                                  ✕
                                </button>
                              </>
                            ) : (
                              <button onClick={() => setConfirmDelete(job.job_id)}
                                style={{ padding: '4px 9px', borderRadius: 5, border: 'none', background: '#FEE2E2', color: '#DC2626', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                                Delete
                              </button>
                            )
                          )}
                        </div>
                      </td>
                    </tr>

                    {editingId === job.job_id && (
                      <tr key={`${job.job_id}-edit`}>
                        <td colSpan={6} style={{ padding: 0 }}>
                          <EditPanel
                            job={job}
                            canEdit={canEdit}
                            canDeleteCV={canDeleteCV}
                            onSave={handleSave}
                            onCancel={() => setEditingId(null)}
                            onRefresh={refresh}
                          />
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
            <span style={{ fontSize: 12, color: '#78716C' }}>{from}–{to} of {total}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
                style={{ padding: '5px 11px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', cursor: page === 0 ? 'default' : 'pointer', fontSize: 12, color: page === 0 ? '#D6D3D1' : '#57534E' }}>
                ← Prev
              </button>
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                const p = totalPages <= 7 ? i : page < 4 ? i : page > totalPages - 4 ? totalPages - 7 + i : page - 3 + i;
                return (
                  <button key={p} onClick={() => setPage(p)}
                    style={{ padding: '5px 10px', borderRadius: 5, border: '1px solid #E7E5E0', background: page === p ? '#1C1917' : '#fff', color: page === p ? '#fff' : '#57534E', cursor: 'pointer', fontSize: 12, minWidth: 32, fontWeight: page === p ? 600 : 400 }}>
                    {p + 1}
                  </button>
                );
              })}
              <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}
                style={{ padding: '5px 11px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', cursor: page === totalPages - 1 ? 'default' : 'pointer', fontSize: 12, color: page === totalPages - 1 ? '#D6D3D1' : '#57534E' }}>
                Next →
              </button>
            </div>
          </div>
        )}
        {total > 0 && totalPages <= 1 && (
          <div style={{ marginTop: 10, fontSize: 12, color: '#A8A29E', textAlign: 'right' }}>
            {total} job{total !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
}
