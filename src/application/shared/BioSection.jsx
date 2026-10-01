import { useState, useEffect } from 'react';
import { marked } from 'marked';

const MONO = { fontFamily: "'JetBrains Mono', monospace" };

export default function BioSection({ bioUrl, updatedAt, extraActions }) {
  const [html, setHtml]       = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!bioUrl) return;
    setLoading(true);
    setError(null);
    fetch(bioUrl)
      .then(r => {
        if (!r.ok) throw new Error(`${r.status}`);
        return r.text();
      })
      .then(md => setHtml(marked.parse(md)))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [bioUrl]);

  return (
    <div style={{ background: '#fff', border: '1px solid #E7E5E0', borderRadius: 8, padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ ...MONO, fontSize: 10, color: '#A8A29E', letterSpacing: 2 }}>BIO</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {updatedAt && (
            <span style={{ fontSize: 11, color: '#A8A29E' }}>
              Updated {new Date(updatedAt).toLocaleDateString()}
            </span>
          )}
          {bioUrl && (
            <a href={bioUrl} target="_blank" rel="noreferrer"
              style={{ ...MONO, fontSize: 10, color: '#78716C', letterSpacing: 1, textDecoration: 'none' }}>
              RAW ↗
            </a>
          )}
        </div>
      </div>

      {!bioUrl && (
        <div style={{ fontSize: 13, color: '#A8A29E', fontStyle: 'italic' }}>
          No bio yet. The SCOUT agent will generate it after onboarding.
        </div>
      )}

      {bioUrl && loading && (
        <div style={{ fontSize: 13, color: '#A8A29E' }}>Loading…</div>
      )}

      {bioUrl && error && (
        <div style={{ fontSize: 13, color: '#DC2626' }}>Failed to load bio: {error}</div>
      )}

      {html && (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              maxHeight: expanded ? 'none' : 320,
              overflow: 'hidden',
              fontSize: 13,
              lineHeight: 1.65,
              color: '#292524',
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {!expanded && (
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: 64,
              background: 'linear-gradient(transparent, #fff)',
              pointerEvents: 'none',
            }} />
          )}
          <button
            onClick={() => setExpanded(x => !x)}
            style={{
              marginTop: 8, border: 'none', background: 'none',
              cursor: 'pointer', fontSize: 12, color: '#78716C',
              padding: 0, textDecoration: 'underline',
            }}
          >
            {expanded ? 'Show less ↑' : 'Show more ↓'}
          </button>
        </div>
      )}

      {extraActions && <div style={{ marginTop: 12 }}>{extraActions}</div>}
    </div>
  );
}
