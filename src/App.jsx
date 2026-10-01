import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './infrastructure/auth/auth.repository.jsx';
import ProfileListPage from './application/profile/pages/ProfileListPage.jsx';
import ProfileDetailPage from './application/profile/pages/ProfileDetailPage.jsx';
import LoginPage from './application/auth/pages/LoginPage.jsx';
import LogoutPage from './application/auth/pages/LogoutPage.jsx';
import HomeRedirect from './application/auth/pages/HomeRedirect.jsx';
import AdminPage from './application/admin/pages/AdminPage.jsx';
import NotFoundPage from './packages/ui/NotFoundPage.jsx';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/profile" element={<ProfileListPage />} />
          <Route path="/profile/:id" element={<ProfileDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/admin/*" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
