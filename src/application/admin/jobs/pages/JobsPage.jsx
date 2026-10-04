import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { usePermissions } from '../../../../infrastructure/permissions/usePermissions.js';
import {
  listJobs, getStatusCounts,
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

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 5px)', left: '50%',
          transform: 'translateX(-50%)', background: '#1C1917', color: '#F5F4F1',
          fontSize: 10, fontFamily: "'Inter', sans-serif", fontWeight: 500,
          padding: '3px 7px', borderRadius: 4, whiteSpace: 'nowrap',
          pointerEvents: 'none', zIndex: 200,
          boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
        }}>
          {text}
        </div>
      )}
    </div>
  );
}

function IconBtn({ href, onClick, icon, bg, tooltip, target, rel, download }) {
  const s = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 26, height: 26, borderRadius: 5, border: 'none', flexShrink: 0,
    background: bg ?? '#F5F4F1', color: '#1C1917', cursor: 'pointer',
    textDecoration: 'none', transition: 'opacity 0.1s',
  };
  const inner = href
    ? <a href={href} target={target} rel={rel} style={s} download={download}>{icon}</a>
    : <button onClick={onClick} style={s}>{icon}</button>;
  return <Tooltip text={tooltip}>{inner}</Tooltip>;
}

function IconLink() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function IconCV() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  );
}

function IconDownload() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

async function downloadFile(url, filename) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  } catch {
    window.open(url, '_blank');
  }
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
  const [uploading, setUploading]   = useState(false);
  const [deletingCV, setDeletingCV] = useState(false);
  const [saving, setSaving]         = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);
  const fileRef = useRef(null);

  const cvUrl = getCVUrl(job.cv_path);
  const cvExpiresIn = (() => {
    if (!job.cv_uploaded_at) return null;
    return Math.ceil(
      (new Date(job.cv_uploaded_at).getTime() + CV_RETENTION_DAYS * 86400_000 - Date.now()) / 86400_000
    );
  })();

  async function save() {
    setSaving(true);
    try { await onSave(job.jp_id, form); }
    finally { setSaving(false); }
  }

  async function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try { await uploadCV(job.jp_id, file); onRefresh(); }
    catch (err) { alert('Upload failed: ' + err.message); }
    finally { setUploading(false); }
  }

  async function handleDeleteCV() {
    if (!job.cv_path) return;
    setDeletingCV(true);
    try { await deleteCV(job.jp_id, job.cv_path); onRefresh(); }
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
              <IconBtn
                onClick={() => downloadFile(cvUrl, `${job.company ?? 'cv'}-${job.job_id}.pdf`)}
                icon={<IconDownload />} bg="#DCFCE7" tooltip="Download CV (PDF)"
              />
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

      {canEdit ? (
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
      ) : (
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

// ─── actions menu (popover) ───────────────────────────────────────────────────

const MENU_ITEM   = { display: 'block', width: '100%', padding: '9px 14px', border: 'none', background: 'transparent', textAlign: 'left', fontSize: 13, cursor: 'pointer', color: '#1C1917', borderBottom: '1px solid #F5F4F1' };
const MENU_DANGER = { ...MENU_ITEM, color: '#DC2626', borderBottom: 'none' };
const MENU_MUTED  = { ...MENU_ITEM, color: '#78716C' };

function ActionsMenu({ job, isEditing, canEdit, onEdit, onArchive, onDelete }) {
  const [open, setOpen]       = useState(false);
  const [confirm, setConfirm] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) { setOpen(false); setConfirm(null); }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  function close() { setOpen(false); setConfirm(null); }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={ref}>
      <button
        onClick={() => { setOpen(o => !o); setConfirm(null); }}
        style={{
          padding: '5px 10px', borderRadius: 6, border: '1px solid #E7E5E0',
          background: open ? '#1C1917' : '#fff', color: open ? '#fff' : '#57534E',
          fontSize: 13, cursor: 'pointer', lineHeight: 1, fontWeight: 700, letterSpacing: 1,
        }}
        title="Actions"
      >
        ···
      </button>

      {open && (
        <div style={{
          position: 'absolute', right: 0, top: 'calc(100% + 4px)',
          background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8,
          boxShadow: '0 4px 16px rgba(0,0,0,0.10)', zIndex: 200, minWidth: 160, overflow: 'hidden',
        }}>
          {confirm === null && (
            <>
              <button onClick={() => { onEdit(); close(); }} style={MENU_ITEM}
                onMouseEnter={e => e.currentTarget.style.background = '#FAFAF7'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                {isEditing ? 'Close edit' : 'Edit'}
              </button>
              {canEdit && job.status !== 'archived' && (
                <button onClick={() => setConfirm('archive')} style={MENU_MUTED}
                  onMouseEnter={e => e.currentTarget.style.background = '#FAFAF7'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  Archive
                </button>
              )}
              {canEdit && (
                <button onClick={() => setConfirm('delete')} style={MENU_DANGER}
                  onMouseEnter={e => e.currentTarget.style.background = '#FEF2F2'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  Delete
                </button>
              )}
            </>
          )}
          {confirm === 'archive' && (
            <div style={{ padding: '10px 14px' }}>
              <div style={{ fontSize: 12, color: '#57534E', marginBottom: 10 }}>Archive this job?</div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => { onArchive(); close(); }}
                  style={{ padding: '5px 12px', borderRadius: 5, border: 'none', background: '#FEF3C7', color: '#B45309', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  Archive
                </button>
                <button onClick={() => setConfirm(null)}
                  style={{ padding: '5px 10px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', fontSize: 12, cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </div>
          )}
          {confirm === 'delete' && (
            <div style={{ padding: '10px 14px' }}>
              <div style={{ fontSize: 12, color: '#DC2626', fontWeight: 600, marginBottom: 4 }}>Delete permanently?</div>
              <div style={{ fontSize: 11, color: '#78716C', marginBottom: 10 }}>This will also remove the CV from storage.</div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => { onDelete(); close(); }}
                  style={{ padding: '5px 12px', borderRadius: 5, border: 'none', background: '#DC2626', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  Delete
                </button>
                <button onClick={() => setConfirm(null)}
                  style={{ padding: '5px 10px', borderRadius: 5, border: '1px solid #E7E5E0', background: '#fff', fontSize: 12, cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </div>
          )}
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

export default function JobsPage({ ownerId, backLink = '/admin', backLabel = '← ADMIN', secondCrumb, secondCrumbLink }) {
  const { can } = usePermissions();
  const canRead     = can('backoffice:read') || can('user:jobs:read');
  const canEdit     = can('backoffice:edit') || can('user:jobs:edit');
  const canDeleteCV = can('backoffice:edit');

  const [jobs, setJobs]         = useState([]);
  const [total, setTotal]       = useState(0);
  const [counts, setCounts]     = useState({});
  const [page, setPage]         = useState(0);
  const [search, setSearch]     = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [editingId, setEditingId]       = useState(null);
  const [loading, setLoading]           = useState(true);
  const [countsLoaded, setCountsLoaded] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

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

  useEffect(() => {
    if (countsLoaded) return;
    getStatusCounts(ownerId).then(c => {
      setCounts(c);
      setCountsLoaded(true);
    });
  }, [ownerId, countsLoaded]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    setPage(0);
    setEditingId(null);
  }, [debouncedSearch, filterStatus]);

  async function handleSave(jpId, fields) {
    await updateJob(jpId, fields);
    refresh();
    setEditingId(null);
  }

  async function handleArchive(jpId) {
    await archiveJob(jpId);
    refresh();
  }

  async function handleDelete(jpId) {
    await deleteJob(jpId);
    refresh();
  }

  async function refresh() {
    const [result, c] = await Promise.all([
      listJobs({ page, search: debouncedSearch, status: filterStatus, ownerId }),
      getStatusCounts(ownerId),
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
          <Link to={backLink} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, textDecoration: 'none' }}>
            {backLabel}
          </Link>
          {secondCrumb && secondCrumbLink && (
            <>
              <span style={{ color: '#D6D3D1' }}>/</span>
              <Link to={secondCrumbLink} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, textDecoration: 'none' }}>
                {secondCrumb}
              </Link>
            </>
          )}
          <span style={{ color: '#D6D3D1' }}>/</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#1C1917', letterSpacing: 2 }}>JOBS</span>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 32px' }}>

        {/* Status chips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
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
                  <th style={{ ...TH, width: 52 }}></th>
                </tr>
              </thead>
              <tbody>
                {jobs.length === 0 && (
                  <tr><td colSpan={6} style={{ ...TD, textAlign: 'center', padding: 32, color: '#A8A29E' }}>No jobs found</td></tr>
                )}
                {jobs.map(job => (
                  <>
                    <tr key={job.jp_id} style={{ background: editingId === job.jp_id ? '#FAFAF7' : 'transparent' }}>
                      <td style={{ ...TD, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E' }}>
                        {job.job_id}
                      </td>
                      <td style={TD}>
                        {job.offer_url ? (
                          <a href={job.offer_url} target="_blank" rel="noreferrer"
                            style={{ fontWeight: 600, fontSize: 13, color: '#1C1917', textDecoration: 'none' }}
                            title={job.offer_url}>
                            {job.company ?? '—'} ↗
                          </a>
                        ) : (
                          <div style={{ fontWeight: 600, fontSize: 13 }}>{job.company ?? '—'}</div>
                        )}
                        <div style={{ fontSize: 12, color: '#78716C', marginTop: 2 }}>{job.role}</div>
                      </td>
                      <td style={TD}><StatusBadge value={job.status} /></td>
                      <td style={{ ...TD, fontSize: 12, color: '#57534E', fontFamily: "'JetBrains Mono', monospace" }}>
                        {job.salary || '—'}
                      </td>
                      <td style={TD}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                          {job.offer_url && (
                            <IconBtn href={job.offer_url} icon={<IconLink />} bg="#F5F4F1" tooltip="Job offer" target="_blank" rel="noreferrer" />
                          )}
                          {job.guid && (
                            <IconBtn href={`/cvs/${job.guid}`} icon={<IconCV />} bg="#EDE9FE" tooltip="View CV profile" target="_blank" rel="noreferrer" />
                          )}
                          {job.cv_path && (
                            <IconBtn
                              onClick={() => downloadFile(getCVUrl(job.cv_path), `${job.company ?? 'cv'}-${job.job_id}.pdf`)}
                              icon={<IconDownload />} bg="#DCFCE7" tooltip="Download CV (PDF)"
                            />
                          )}
                        </div>
                      </td>
                      <td style={{ ...TD, textAlign: 'right' }}>
                        <ActionsMenu
                          job={job}
                          isEditing={editingId === job.jp_id}
                          canEdit={canEdit}
                          onEdit={() => setEditingId(id => id === job.jp_id ? null : job.jp_id)}
                          onArchive={() => handleArchive(job.jp_id)}
                          onDelete={() => handleDelete(job.jp_id)}
                        />
                      </td>
                    </tr>

                    {editingId === job.jp_id && (
                      <tr key={`${job.jp_id}-edit`}>
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
