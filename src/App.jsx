import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import PublicProfile from "./components/PublicProfile.jsx";
import baseProfile from "./data/profile.js";
import jobs from "./data/jobs/index.js";

// General profile GUID — fixed, never changes
const GENERAL_GUID = "edfef3a9-2658-49c0-8dbc-0ba17ea04fda";

function ProfilePage() {
  const { profileId } = useParams();
  let data;
  if (!profileId || profileId === GENERAL_GUID) {
    data = baseProfile;
  } else {
    data = jobs[profileId] ?? null;
  }
  if (!data) return <NotFound />;
  return <PublicProfile data={data} />;
}

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono', monospace", color: "#78716C" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: "#1C1917" }}>404</div>
        <div style={{ marginTop: 8, fontSize: 13, letterSpacing: 1.5 }}>PROFILE NOT FOUND</div>
        <a href={`/${GENERAL_GUID}`} style={{ display: "inline-block", marginTop: 20, color: "#D97706", fontSize: 12 }}>Back to profile</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${GENERAL_GUID}`} replace />} />
        <Route path="/:profileId" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
