import { SignIn } from '@clerk/react';

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF7' }}>
      <SignIn routing="hash" />
    </div>
  );
}
