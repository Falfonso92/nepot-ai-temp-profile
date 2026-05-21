import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import PublicProfile from "./components/PublicProfile.jsx";
import baseProfile from "./data/profile.js";
import jobs from "./data/jobs/index.js";

function ProfilePage() {
  const { jobId } = useParams();
  const data = jobId ? (jobs[jobId] ?? baseProfile) : baseProfile;
  return <PublicProfile data={data} />;
}

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono', monospace", color: "#78716C" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: "#1C1917" }}>404</div>
        <div style={{ marginTop: 8, fontSize: 13, letterSpacing: 1.5 }}>PROFILE NOT FOUND</div>
        <a href="/" style={{ display: "inline-block", marginTop: 20, color: "#D97706", fontSize: 12 }}>Back to main profile</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/:jobId" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
