import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './infrastructure/auth/auth.repository.jsx';
import PermissionGate from './infrastructure/permissions/PermissionGate.jsx';

import LoginPage      from './application/auth/pages/LoginPage.jsx';
import LogoutPage     from './application/auth/pages/LogoutPage.jsx';
import HomeRedirect   from './application/auth/pages/HomeRedirect.jsx';
import AdminPage      from './application/admin/pages/AdminPage.jsx';
import UsersListPage  from './application/admin/users/pages/UsersListPage.jsx';
import UserProfilePage from './application/admin/users/pages/UserProfilePage.jsx';
import UserJobsPage   from './application/admin/users/pages/UserJobsPage.jsx';
import BackofficePage from './application/admin/backoffice/pages/BackofficePage.jsx';
import RolesPage      from './application/admin/backoffice/pages/RolesPage.jsx';
import ActionsPage    from './application/admin/backoffice/pages/ActionsPage.jsx';
import PermissionsPage from './application/admin/backoffice/pages/PermissionsPage.jsx';
import MyProfilePage  from './application/profile/pages/MyProfilePage.jsx';
import MyJobsPage     from './application/profile/pages/MyJobsPage.jsx';
import PublicCVPage   from './application/public/pages/PublicCVPage.jsx';
import NotFoundPage   from './packages/ui/NotFoundPage.jsx';

function AdminRoute({ require: perm, requireAny, element }) {
  return (
    <ProtectedRoute>
      <PermissionGate require={perm} requireAny={requireAny}>{element}</PermissionGate>
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/"          element={<HomeRedirect />} />
          <Route path="/login"     element={<LoginPage />} />
          <Route path="/logout"    element={<LogoutPage />} />
          <Route path="/cvs/:id"   element={<PublicCVPage />} />
          <Route path="/cvs"       element={<NotFoundPage />} />

          {/* User portal */}
          <Route path="/profile"      element={<AdminRoute requireAny={['user:edit', 'user:jobs:read', 'user:bio:edit']} element={<MyProfilePage />} />} />
          <Route path="/profile/jobs" element={<AdminRoute requireAny={['user:jobs:read', 'backoffice:read']} element={<MyJobsPage />} />} />

          {/* Admin */}
          <Route path="/admin"                      element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          <Route path="/admin/users"                element={<AdminRoute require="backoffice:read" element={<UsersListPage />} />} />
          <Route path="/admin/users/:userId"        element={<AdminRoute require="backoffice:read" element={<UserProfilePage />} />} />
          <Route path="/admin/users/:userId/jobs"   element={<AdminRoute require="backoffice:read" element={<UserJobsPage />} />} />
          <Route path="/admin/backoffice"           element={<AdminRoute require="backoffice:read" element={<BackofficePage />} />} />
          <Route path="/admin/backoffice/roles"     element={<AdminRoute require="backoffice:permissions:read" element={<RolesPage />} />} />
          <Route path="/admin/backoffice/actions"   element={<AdminRoute require="backoffice:permissions:read" element={<ActionsPage />} />} />
          <Route path="/admin/backoffice/permissions" element={<AdminRoute require="backoffice:permissions:read" element={<PermissionsPage />} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
