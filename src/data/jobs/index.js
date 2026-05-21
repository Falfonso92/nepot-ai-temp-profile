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

  "J2-daniel-russo": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Full-Stack Developer — Application for Daniel Russo",
      jobContext: "Daniel Russo · Full-Stack Developer",
    },
    summary:
      "Full-stack developer with 13 years across TypeScript, React, and Node.js — expert level in all three, active through 2026. I bring both technical depth and the product mindset to go with it: at Invofox I built an 8-agent AI system (Claude API) that gave the app team full operational self-service, and at Sygris I redesigned a B2B portal's core data model to cut load time from 2 minutes to 10 seconds. I write code, I also know when not to.",
    now: [
      { lbl: "Stack match", val: "TypeScript (9yr expert) · React (7yr expert) · Node.js (8yr) · CI/CD · Cloud (Azure/AWS)" },
      { lbl: "AI differentiator", val: "Built production 8-agent AI system with Claude API — LLM benchmarking, hot-balancing, multi-model orchestration" },
      { lbl: "Open to", val: "Full-Stack Developer · Remote or Hybrid" },
      { lbl: "Available", val: "Immediate" },
    ],
    caseStudies: [
      baseProfile.caseStudies[0],
      baseProfile.caseStudies[1],
      {
        title: "Full-stack product ownership at Syntax",
        sub: "2 → 10 engineers · first SaaS product · 30% ROI growth",
        tags: ["Full-Stack", "SaaS", "Team Lead", "2017–2021"],
        stat: "10×",
        statLbl: "TEAM SIZE IN 6 MONTHS",
        body: "Led full-stack delivery across multiple client projects while simultaneously building the company's first SaaS product and scaling the engineering team from 2 to 10. Designed architecture, defined the tech stack, ran DevOps, CI/CD setup, and UX flows — all of it. Closed the first investment-sector client and launched a subsidised project management SaaS for NGOs.",
        artifacts: ["SaaS product architecture", "DevOps/CI-CD setup", "Client delivery playbook"],
      },
    ],
  },

  "J3-oneclick-staff": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Frontend Engineer — Application for Oneclick",
      jobContext: "Oneclick · Staff Frontend Engineer",
    },
    summary:
      "Staff-level frontend engineer with 10+ years of React and TypeScript at expert depth, active through 2026. I've led legacy modernisations with measurable results (1–2 min portal → 10s, deployment 2 weeks → 1 day), built a proprietary state management system from scratch for a greenfield low-code platform, and integrated AI agents into production workflows well beyond autocomplete. I operate at the intersection of technical depth and organisational impact.",
    now: [
      { lbl: "Frontend depth", val: "React (7yr expert) · TypeScript (9yr expert) · legacy modernisation · performance ownership" },
      { lbl: "AI in prod", val: "8-agent system with Claude API in production — the kind of AI-native work most teams are still planning" },
      { lbl: "Open to", val: "Staff Frontend Engineer · Remote or Hybrid Madrid" },
      { lbl: "Available", val: "Immediate" },
    ],
    caseStudies: [
      {
        title: "Low-code platform at Sygris",
        sub: "Greenfield ESG · load −83% · deploy −95% · custom state management",
        tags: ["React", "TypeScript", "Architecture", "Staff IC", "2021–2024"],
        stat: "10s",
        statLbl: "FROM 1–2 MIN LOAD TIME",
        body: "Designed and built a greenfield low-code platform from scratch — including a proprietary state management system with no off-the-shelf fit. Reduced heavy portal load time from 1–2 minutes to 10 seconds by redesigning the core collection entity model. Cut deployment time from 1–2 weeks to 1–2 days via frontend API contract redesign and DB migration. Led the frontend technical direction across 4–5 developers while shipping in parallel.",
        artifacts: ["Custom state management design", "Entity model redesign", "Frontend API contract spec"],
      },
      {
        title: "AI-native frontend tooling at Invofox",
        sub: "8-agent Claude system · UI perf 7s → 3s · feature delivery 5×",
        tags: ["AI Systems", "React", "Performance", "Staff IC", "2024–2026"],
        stat: "5×",
        statLbl: "FEATURE DELIVERY CADENCE",
        body: "Built 'The Hive Mind' — an 8-agent AI system (Claude API) giving the app team self-service operational insights: DB reporting, AWS monitoring, document failure detection, real-time process health. Improved UI load time from 7s → 3s in complex environments and 4s → 2.5s in lite environments. Increased feature delivery from 2–3/year to 10–15 by simplifying structure and leading AI adoption for non-engineering roles.",
        artifacts: ["Hive Mind system design", "UI performance audit", "AI adoption playbook"],
      },
      baseProfile.caseStudies[2],
    ],
    plan: [
      {
        d: 30,
        t: "Understand the codebase.",
        body: "Full audit of the frontend architecture, state management patterns, build tooling, and test coverage. No refactor proposals before week 4 — I listen first.",
      },
      {
        d: 60,
        t: "First ownership.",
        body: "Own one meaningful slice end-to-end. Identify the highest-leverage improvement (performance, DX, or test coverage) and propose with data.",
      },
      {
        d: 90,
        t: "Raise the bar.",
        body: "One measurable improvement shipped. Patterns documented. At least one team member levelled up through collaboration. CI/CD tightened if needed.",
      },
    ],
  },
};

export default jobs;
