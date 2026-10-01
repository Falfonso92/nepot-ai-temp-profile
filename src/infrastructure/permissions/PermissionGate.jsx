import { usePermissions } from './usePermissions.js';

export default function PermissionGate({ require: perm, children, fallback = null }) {
  const { isLoaded, can } = usePermissions();
  if (!isLoaded) return null;
  if (!can(perm)) return fallback;
  return children;
}
