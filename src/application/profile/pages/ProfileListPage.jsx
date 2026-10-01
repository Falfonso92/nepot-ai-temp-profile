import baseProfile from '../../../data/profile.js';

export default function ProfileListPage() {
  const { name, headline, location, email, linkedin } = baseProfile.meta;
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '40px 48px', border: '1px solid #E7E5E0', borderRadius: 12, background: '#fff', maxWidth: 360, width: '100%' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, marginBottom: 20 }}>PROFILE.NEPOT-AI.COM</div>
        <div style={{ fontWeight: 700, fontSize: 26, letterSpacing: -0.8, color: '#1C1917', lineHeight: 1.1 }}>{name}</div>
        <div style={{ marginTop: 8, fontSize: 14, color: '#57534E', lineHeight: 1.5 }}>{headline}</div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#78716C' }}>{location}</div>
          <a href={`mailto:${email}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#D97706', textDecoration: 'none' }}>{email}</a>
          <a href={linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#78716C', textDecoration: 'none' }}>linkedin.com/in/franciscoal</a>
        </div>
      </div>
    </div>
  );
}
