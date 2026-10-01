import { useState, useEffect } from 'react';
import { useAuth } from '../auth/auth.repository.jsx';
import { getUserPermissions } from './permissions.repository.js';

// Module-level cache keyed by userId so permissions survive re-renders
const cache = new Map();

export function usePermissions() {
  const { isAuthenticated, isLoaded, userId } = useAuth();
  const [permissions, setPermissions] = useState(() => cache.get(userId) ?? null);

  useEffect(() => {
    if (!isLoaded || !isAuthenticated || !userId) return;
    if (cache.has(userId)) { setPermissions(cache.get(userId)); return; }

    getUserPermissions(userId).then(perms => {
      const set = new Set(perms);
      cache.set(userId, set);
      setPermissions(set);
    });
  }, [isLoaded, isAuthenticated, userId]);

  return {
    isLoaded: permissions !== null || (!isAuthenticated && isLoaded),
    can: (perm) => permissions?.has(perm) ?? false,
    permissions,
  };
}

// Invalidate cache when permissions change (call after any write)
export function invalidatePermissionsCache(userId) {
  if (userId) cache.delete(userId);
  else cache.clear();
}
