// Job → profile URL registry.
// This is the source of truth consumed by TAILOR when generating CV PDFs.
// When a new job is added, generate a UUID and add it here + in jobs/index.js.

const BASE_URL = "https://nepot-ai-temp-profile.vercel.app";

const registry = [
  {
    jobId: "J1-ashby-em",
    guid: "ded9ee7e-8445-4f64-9d59-44fbe47204bb",
    url: `${BASE_URL}/ded9ee7e-8445-4f64-9d59-44fbe47204bb`,
    role: "Engineering Manager",
    company: "Ashby",
  },
  {
    jobId: "J2-daniel-russo",
    guid: "40fd9954-d4fd-456b-a94e-38d4737cc076",
    url: `${BASE_URL}/40fd9954-d4fd-456b-a94e-38d4737cc076`,
    role: "Full-Stack Developer",
    company: "Daniel Russo",
  },
  {
    jobId: "J3-oneclick-staff",
    guid: "463bd5b0-d8e4-419d-a9bb-5b57d1bee042",
    url: `${BASE_URL}/463bd5b0-d8e4-419d-a9bb-5b57d1bee042`,
    role: "Staff Frontend Engineer",
    company: "Oneclick",
  },
];

export default registry;
