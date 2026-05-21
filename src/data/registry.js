// Job → profile URL registry.
// Source of truth consumed by TAILOR when generating CV PDFs.
// When a new job is added: generate a UUID, add to registry + jobs/index.js, push.

const BASE_URL = "https://profile.nepot-ai.com";

const registry = [
  {
    jobId: "general",
    guid: "edfef3a9-2658-49c0-8dbc-0ba17ea04fda",
    url: `${BASE_URL}/edfef3a9-2658-49c0-8dbc-0ba17ea04fda`,
    role: "General profile",
    company: null,
  },
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
