// Auth contract — the rest of the app imports only from here, never from @clerk/react directly.
// To swap providers: change the import below and implement the same four exports.
export { AuthProvider, useAuth, useSignOut, ProtectedRoute } from './clerk.adapter.jsx';
