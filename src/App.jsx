import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './infrastructure/auth/auth.repository.jsx';
import PermissionGate from './infrastructure/permissions/PermissionGate.jsx';
import ProfileDetailPage from './application/profile/pages/ProfileDetailPage.jsx';
import LoginPage from './application/auth/pages/LoginPage.jsx';
import LogoutPage from './application/auth/pages/LogoutPage.jsx';
import HomeRedirect from './application/auth/pages/HomeRedirect.jsx';
import AdminPage from './application/admin/pages/AdminPage.jsx';
import JobsPage from './application/admin/jobs/pages/JobsPage.jsx';
import BackofficePage from './application/admin/backoffice/pages/BackofficePage.jsx';
import RolesPage from './application/admin/backoffice/pages/RolesPage.jsx';
import ActionsPage from './application/admin/backoffice/pages/ActionsPage.jsx';
import PermissionsPage from './application/admin/backoffice/pages/PermissionsPage.jsx';
import NotFoundPage from './packages/ui/NotFoundPage.jsx';

function AdminRoute({ require: perm, element }) {
  return (
    <ProtectedRoute>
      <PermissionGate require={perm}>{element}</PermissionGate>
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/profile/:id" element={<ProfileDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          <Route path="/admin/jobs" element={<AdminRoute require="backoffice:read" element={<JobsPage />} />} />
          <Route path="/admin/backoffice" element={<AdminRoute require="backoffice:read" element={<BackofficePage />} />} />
          <Route path="/admin/backoffice/roles" element={<AdminRoute require="backoffice:permissions:read" element={<RolesPage />} />} />
          <Route path="/admin/backoffice/actions" element={<AdminRoute require="backoffice:permissions:read" element={<ActionsPage />} />} />
          <Route path="/admin/backoffice/permissions" element={<AdminRoute require="backoffice:permissions:read" element={<PermissionsPage />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
