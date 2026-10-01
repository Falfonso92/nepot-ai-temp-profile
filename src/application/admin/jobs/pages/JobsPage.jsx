import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';
import {
  listJobs, getStatusCounts, updateJob, uploadCV, getCVUrl,
  STATUSES, PAGE_SIZE, CV_RETENTION_DAYS,
} from '../../../../infrastructure/storage/jobs.repository.js';

// ─── helpers ────────────────────────────────────────────────────────────────

const STATUS_MAP = Object.fromEntries(STATUSES.map(s => [s.value, s]));

function StatusBadge({ value }) {
  const s = STATUS_MAP[value] ?? { label: value, bg: '#F5F4F1', color: '#78716C' };
  return (
    <span style={{
      display: 'inline-block', padding: '2px 8px', borderRadius: 12,
      fontSize: 11, fontWeight: 600, background: s.bg, color: s.color,
      whiteSpace: 'nowrap',
    }}>
      {s.label}
    </span>
  );
}

function ExternalLink({ href, label }) {
  if (!href) return <span style={{ color: '#D6D3D1', fontSize: 12 }}>—</span>;
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      fontSize: 12, color: '#1C1917', background: '#F5F4F1',
      padding: '3px 8px', borderRadius: 4, textDecoration: 'none',
      display: 'inline-block', whiteSpace: 'nowrap',
    }}>
      {label} ↗
    </a>
  );
}

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// ─── edit panel ─────────────────────────────────────────────────────────────

function EditPanel({ job, onSave, onCancel, canEdit }) {
  const [form, setForm] = useState({
    status: job.status,
    offer_url: job.offer_url ?? '',
    salary: job.salary ?? '',
    notes: job.notes ?? '',
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef(null);

  const cvUrl = getCVUrl(job.cv_path);

  const cvExpiresIn = (() => {
    if (!job.cv_uploaded_at) return null;
    const uploaded = new Date(job.cv_uploaded_at);
    const expiresAt = new Date(uploaded.getTime() + CV_RETENTION_DAYS * 86400_000);
    const days = Math.ceil((expiresAt - Date.now()) / 86400_000);
    return days;
  })();

  async function save() {
    setSaving(true);
    try { await onSave(job.job_id, form); }
    finally { setSaving(false); }
  }

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try { await uploadCV(job.job_id, file); onSave(job.job_id, {}); }
    catch (err) { alert('Upload failed: ' + err.message); }
    finally { setUploading(false); }
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
    <div style={{ padding: '16px 16px 16px 40px', background: '#FAFAF7', borderTop: '1px dashed #E7E5E0', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-start' }}>
      {canEdit && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>STATUS</label>
          <select
            value={form.status}
            onChange={e => setForm(p => ({ ...p, status: e.target.value }))}
            style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #E7E5E0', fontSize: 12, background: '#fff', outline: 'none' }}
          >
            {STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1, minWidth: 200 }}>
        <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>OFFER URL</label>
        {inp('offer_url', 'https://...', true)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, width: 140 }}>
        <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>SALARY</label>
        {inp('salary', 'e.g. €70K–€90K')}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 2, minWidth: 200 }}>
        <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>NOTES</label>
        {inp('notes', 'Internal notes…', true)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <label style={{ fontSize: 10, color: '#A8A29E', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>CV</label>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {cvUrl && (
            <a href={cvUrl} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#1C1917', background: '#DCFCE7', padding: '5px 10px', borderRadius: 5, textDecoration: 'none', fontWeight: 600 }}>
              Download ↓
            </a>
          )}
          {canEdit && (
            <>
              <input type="file" accept=".pdf" ref={fileRef} style={{ display: 'none' }} onChange={handleFileChange} />
              <button onClick={() => fileRef.current?.click()} disabled={uploading}
                style={{ padding: '5px 10px', borderRadius: 5, border: '1px dashed #C4B5A0', background: '#fff', fontSize: 11, cursor: uploading ? 'wait' : 'pointer', color: '#78716C' }}>
                {uploading ? 'Uploading…' : job.cv_path ? 'Replace PDF' : 'Upload PDF'}
              </button>
            </>
          )}
          {cvExpiresIn !== null && (
            <span style={{
              fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
              color: cvExpiresIn <= 14 ? '#DC2626' : cvExpiresIn <= 30 ? '#B45309' : '#A8A29E',
              alignSelf: 'center',
            }}>
              {cvExpiresIn > 0 ? `expires in ${cvExpiresIn}d` : 'expired'}
            </span>
          )}
        </div>
      </div>

      {canEdit && (
        <div style={{ display: 'flex', gap: 8, alignSelf: 'flex-end' }}>
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
        <button onClick={onCancel} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #E7E5E0', background: '#fff', fontSize: 12, cursor: 'pointer', alignSelf: 'flex-end' }}>
          Close
        </button>
      )}
    </div>
  );
}

// ─── main page ───────────────────────────────────────────────────────────────

const TH = { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#78716C', letterSpacing: 1.5, textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #E7E5E0', whiteSpace: 'nowrap' };
const TD = { fontSize: 13, color: '#1C1917', padding: '10px 12px', borderBottom: '1px solid #F5F4F1', verticalAlign: 'middle' };

const FILTER_TABS = [
  { value: '', label: 'All' },
  { value: 'prospect', label: 'Prospect' },
  { value: 'applied', label: 'Applied' },
  { value: 'screening', label: 'Screening' },
  { value: 'interviewing', label: 'Interviewing' },
  { value: 'offer_pending', label: 'Offer' },
  { value: 'archived', label: 'Archived' },
];

export default function JobsPage() {
  const { can } = usePermissions();
  const canEdit = can('backoffice:permissions:edit');

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState({});
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search, 300);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [result, c] = await Promise.all([
        listJobs({ page, search: debouncedSearch, status: filterStatus }),
        counts && Object.keys(counts).length > 0 ? Promise.resolve(counts) : getStatusCounts(),
      ]);
      setJobs(result.jobs);
      setTotal(result.total);
      if (Object.keys(counts).length === 0) setCounts(c);
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch, filterStatus]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    setPage(0);
    setEditingId(null);
  }, [debouncedSearch, filterStatus]);

  async function handleSave(jobId, fields) {
    await updateJob(jobId, fields);
    // Refresh counts and list
    const [result, newCounts] = await Promise.all([
      listJobs({ page, search: debouncedSearch, status: filterStatus }),
      getStatusCounts(),
    ]);
    setJobs(result.jobs);
    setTotal(result.total);
    setCounts(newCounts);
    setEditingId(null);
  }

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const from = page * PAGE_SIZE + 1;
  const to = Math.min((page + 1) * PAGE_SIZE, total);

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #E7E5E0', background: '#fff', padding: '0 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0' }}>
          <Link to="/admin" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, textDecoration: 'none' }}>
            ← ADMIN
          </Link>
          <span style={{ color: '#D6D3D1' }}>/</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#1C1917', letterSpacing: 2 }}>JOBS</span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 32px' }}>

        {/* Title + stats */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1C1917', margin: 0 }}>Jobs</h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {STATUSES.filter(s => counts[s.value]).map(s => (
              <button key={s.value} onClick={() => setFilterStatus(filterStatus === s.value ? '' : s.value)}
                style={{
                  padding: '3px 10px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600,
                  background: filterStatus === s.value ? s.color : s.bg,
                  color: filterStatus === s.value ? '#fff' : s.color,
                  transition: 'all 0.12s',
                }}>
                {s.label} {counts[s.value]}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search company or role…"
              style={{
                width: '100%', padding: '8px 12px 8px 36px', borderRadius: 7, border: '1px solid #E7E5E0',
                fontSize: 13, background: '#fff', outline: 'none', boxSizing: 'border-box',
              }}
            />
            <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#A8A29E', fontSize: 14 }}>⌕</span>
          </div>
          {/* Status tabs (desktop) */}
          <div style={{ display: 'flex', gap: 0, background: '#fff', border: '1px solid #E7E5E0', borderRadius: 7, overflow: 'hidden' }}>
            {FILTER_TABS.map(t => {
              const active = filterStatus === t.value;
              return (
                <button key={t.value} onClick={() => setFilterStatus(t.value)} style={{
                  padding: '8px 14px', border: 'none', borderRight: '1px solid #E7E5E0',
                  background: active ? '#1C1917' : '#fff', color: active ? '#fff' : '#57534E',
                  fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap',
                  fontWeight: active ? 600 : 400,
                }}>
                  {t.label}
                  {t.value && counts[t.value] ? ` (${counts[t.value]})` : ''}
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
                  <th style={{ ...TH, width: 120 }}>JOB ID</th>
                  <th style={TH}>COMPANY / ROLE</th>
                  <th style={{ ...TH, width: 120 }}>STATUS</th>
                  <th style={{ ...TH, width: 120 }}>SALARY</th>
                  <th style={{ ...TH, width: 180 }}>LINKS</th>
                  <th style={{ ...TH, width: 80 }}></th>
                </tr>
              </thead>
              <tbody>
                {jobs.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ ...TD, textAlign: 'center', padding: 32, color: '#A8A29E' }}>
                      No jobs found
                    </td>
                  </tr>
                )}
                {jobs.map(job => (
                  <>
                    <tr key={job.job_id} style={{ background: editingId === job.job_id ? '#FAFAF7' : 'transparent' }}>
                      <td style={{ ...TD, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#78716C' }}>
                        {job.job_id}
                      </td>
                      <td style={TD}>
                        <div style={{ fontWeight: 600, fontSize: 13, color: '#1C1917' }}>{job.company ?? '—'}</div>
                        <div style={{ fontSize: 12, color: '#78716C', marginTop: 2 }}>{job.role}</div>
                      </td>
                      <td style={TD}><StatusBadge value={job.status} /></td>
                      <td style={{ ...TD, fontSize: 12, color: '#57534E', fontFamily: "'JetBrains Mono', monospace" }}>
                        {job.salary || '—'}
                      </td>
                      <td style={TD}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <ExternalLink href={job.offer_url} label="Offer" />
                          {job.guid && (
                            <Link to={`/profile/${job.guid}`} target="_blank"
                              style={{ fontSize: 12, color: '#1C1917', background: '#EDE9FE', padding: '3px 8px', borderRadius: 4, textDecoration: 'none', display: 'inline-block' }}>
                              Profile ↗
                            </Link>
                          )}
                          {job.cv_path && (
                            <a href={getCVUrl(job.cv_path)} target="_blank" rel="noreferrer"
                              style={{ fontSize: 12, color: '#1C1917', background: '#DCFCE7', padding: '3px 8px', borderRadius: 4, textDecoration: 'none', display: 'inline-block' }}>
                              CV ↓
                            </a>
                          )}
                        </div>
                      </td>
                      <td style={{ ...TD, textAlign: 'right' }}>
                        <button
                          onClick={() => setEditingId(editingId === job.job_id ? null : job.job_id)}
                          style={{
                            padding: '4px 10px', borderRadius: 5, border: '1px solid #E7E5E0',
                            background: editingId === job.job_id ? '#1C1917' : '#fff',
                            color: editingId === job.job_id ? '#fff' : '#57534E',
                            fontSize: 11, cursor: 'pointer',
                          }}>
                          {editingId === job.job_id ? 'Close' : 'Edit'}
                        </button>
                      </td>
                    </tr>
                    {editingId === job.job_id && (
                      <tr key={`${job.job_id}-edit`}>
                        <td colSpan={6} style={{ padding: 0 }}>
                          <EditPanel
                            job={job}
                            canEdit={canEdit}
                            onSave={handleSave}
                            onCancel={() => setEditingId(null)}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
            <span style={{ fontSize: 12, color: '#78716C' }}>
              {from}–{to} of {total} jobs
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
                style={{ padding: '6px 12px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', cursor: page === 0 ? 'default' : 'pointer', fontSize: 12, color: page === 0 ? '#D6D3D1' : '#57534E' }}>
                ← Prev
              </button>
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                const p = totalPages <= 7 ? i : page < 4 ? i : page > totalPages - 4 ? totalPages - 7 + i : page - 3 + i;
                return (
                  <button key={p} onClick={() => setPage(p)}
                    style={{ padding: '6px 10px', borderRadius: 5, border: '1px solid #E7E5E0', background: page === p ? '#1C1917' : '#fff', color: page === p ? '#fff' : '#57534E', cursor: 'pointer', fontSize: 12, minWidth: 34, fontWeight: page === p ? 600 : 400 }}>
                    {p + 1}
                  </button>
                );
              })}
              <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}
                style={{ padding: '6px 12px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', cursor: page === totalPages - 1 ? 'default' : 'pointer', fontSize: 12, color: page === totalPages - 1 ? '#D6D3D1' : '#57534E' }}>
                Next →
              </button>
            </div>
          </div>
        )}
        {total > 0 && totalPages <= 1 && (
          <div style={{ marginTop: 12, fontSize: 12, color: '#A8A29E', textAlign: 'right' }}>
            {total} job{total !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
}
