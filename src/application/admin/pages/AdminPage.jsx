import { useAuth } from '../../../infrastructure/auth/auth.repository.jsx';

export default function AdminPage() {
  const { userId } = useAuth();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF7' }}>
      <div style={{ padding: '40px 48px', border: '1px solid #E7E5E0', borderRadius: 12, background: '#fff', maxWidth: 480, width: '100%' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#A8A29E', letterSpacing: 2, marginBottom: 20 }}>ADMIN</div>
        <div style={{ fontWeight: 700, fontSize: 20, color: '#1C1917' }}>Panel de control</div>
        <div style={{ marginTop: 8, fontSize: 13, color: '#78716C', fontFamily: "'JetBrains Mono', monospace" }}>{userId}</div>
      </div>
    </div>
  );
}
