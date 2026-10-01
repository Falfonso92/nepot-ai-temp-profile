import { ClerkProvider, useAuth as useClerkAuth, useClerk, useUser } from '@clerk/react';
import { Navigate } from 'react-router-dom';

export function AuthProvider({ children }) {
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      {children}
    </ClerkProvider>
  );
}

export function useAuth() {
  const { isSignedIn, isLoaded, userId } = useClerkAuth();
  return { isAuthenticated: !!isSignedIn, isLoaded, userId };
}

export function useCurrentUser() {
  const { user } = useUser();
  return {
    email:     user?.primaryEmailAddress?.emailAddress ?? null,
    firstName: user?.firstName ?? null,
    fullName:  user?.fullName ?? null,
  };
}

export function useSignOut() {
  const { signOut } = useClerk();
  return signOut;
}

export function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoaded } = useAuth();
  if (!isLoaded) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}
