import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import PublicProfile from "./components/PublicProfile.jsx";
import baseProfile from "./data/profile.js";
import jobs from "./data/jobs/index.js";

const GENERAL_GUID = "edfef3a9-2658-49c0-8dbc-0ba17ea04fda";

function IndexPage() {
  const { name, headline, location, email, linkedin } = baseProfile.meta;
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF7", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ padding: "40px 48px", border: "1px solid #E7E5E0", borderRadius: 12, background: "#fff", maxWidth: 360, width: "100%" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#A8A29E", letterSpacing: 2, marginBottom: 20 }}>PROFILE.NEPOT-AI.COM</div>
        <div style={{ fontWeight: 700, fontSize: 26, letterSpacing: -0.8, color: "#1C1917", lineHeight: 1.1 }}>{name}</div>
        <div style={{ marginTop: 8, fontSize: 14, color: "#57534E", lineHeight: 1.5 }}>{headline}</div>
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#78716C" }}>{location}</div>
          <a href={`mailto:${email}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#D97706", textDecoration: "none" }}>{email}</a>
          <a href={linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#78716C", textDecoration: "none" }}>linkedin.com/in/franciscoal</a>
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  const { profileId } = useParams();
  const data = profileId === GENERAL_GUID ? baseProfile : (jobs[profileId] ?? null);
  if (!data) return <NotFound />;
  return <PublicProfile data={data} />;
}

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono', monospace", color: "#78716C" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: "#1C1917" }}>404</div>
        <div style={{ marginTop: 8, fontSize: 13, letterSpacing: 1.5 }}>PROFILE NOT FOUND</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:profileId" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
