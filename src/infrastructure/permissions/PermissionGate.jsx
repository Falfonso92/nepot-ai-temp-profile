import { usePermissions } from './usePermissions.js';

export default function PermissionGate({ require: perm, requireAny, children, fallback = null }) {
  const { isLoaded, can } = usePermissions();
  if (!isLoaded) return null;

  const allowed = requireAny
    ? requireAny.some(p => can(p))
    : can(perm);

  return allowed ? children : fallback;
}
