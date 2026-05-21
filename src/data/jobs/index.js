import baseProfile from "../profile.js";

// Job-specific profile overrides.
// Each job merges over the base profile — only provide what differs.
// Add a new entry here + push → Vercel auto-deploys the new /:jobId page.

const jobs = {
  "J1-ashby-em": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager — Application for Ashby",
      jobContext: "Ashby · Engineering Manager",
    },
    summary:
      "Engineering Manager with 13 years of experience scaling product-critical teams across B2B SaaS. At Invofox (YC S22) I rebuilt the engineering org, scaled infra 5×, and delivered AI-driven operational tooling that gave non-engineering teams full self-service. I thrive in product-led environments where engineering decisions connect directly to revenue.",
    now: [
      { lbl: "Why Ashby", val: "Product-led culture, clear engineering craft values, and a team that cares about both delivery and quality" },
      { lbl: "What I bring", val: "A track record of making engineering teams coherent, fast, and product-aligned" },
      { lbl: "Open to", val: "Engineering Manager · Hybrid or Remote" },
      { lbl: "Available", val: "Immediate" },
    ],
  },
};

export default jobs;
