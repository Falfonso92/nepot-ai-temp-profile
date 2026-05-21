const profile = {
  meta: {
    name: "Francisco Buitrago",
    headline: "Engineering Manager · Staff Engineer",
    location: "Madrid, Spain",
    email: "fabuitrago92@gmail.com",
    linkedin: "https://www.linkedin.com/in/franciscoal/",
    status: "open",
    statusLabel: "Open to talk",
    updatedLabel: "May 2026",
  },

  summary:
    "13 years building engineering teams and product-critical systems across B2B SaaS, fintech, and ESG. Most recently led a 5× infrastructure scale at Invofox (YC S22) and designed an 8-agent AI system that gave a non-engineering team full operational self-service. I grow into roles — joined every company as a contributor, left as the technical pillar.",

  outcomes: [
    { lbl: "CAREER", val: "13yr" },
    { lbl: "INFRA SCALE", val: "5×" },
    { lbl: "COST CUT", val: "30%" },
    { lbl: "ONBOARDING", val: "−65%" },
    { lbl: "DELIVERY", val: "5×/yr" },
  ],

  now: [
    { lbl: "Focused on", val: "Job search — EM and Staff Engineer roles in product-led companies" },
    { lbl: "Building", val: "Nepot.ai — AI-assisted job search and CV builder for engineers" },
    { lbl: "Open to", val: "Engineering Manager · Staff / Principal Engineer · Tech Lead · Remote or Hybrid Madrid" },
    { lbl: "Not looking for", val: "VP, Director, Enterprise Architect, pure consulting roles" },
  ],

  timeline: {
    y0: 2011,
    y1: 2026,
    nodes: [
      { y: 2011, t: "Conocimiento Corporativo", sub: "Dev Analyst", side: "top" },
      { y: 2013, t: "Tata Consultancy", sub: "SharePoint Analyst", side: "bot" },
      { y: 2015, t: "Intergrupo", sub: "Senior Developer", side: "top" },
      { y: 2016, t: "Lagash", sub: "Solutions Architect", side: "bot" },
      { y: 2017, t: "Syntax Informática", sub: "Engineering Manager", side: "top" },
      { y: 2021, t: "Sygris", sub: "Tech Lead → Team Lead", side: "bot", active: true },
      { y: 2024, t: "Invofox (YC S22)", sub: "Engineering Manager", side: "top", active: true },
    ],
  },

  caseStudies: [
    {
      title: "Infra scale at Invofox",
      sub: "5× capacity · 30% cost cut · −65% onboarding time",
      tags: ["Engineering Management", "AI Systems", "YC S22", "2024–2026"],
      stat: "5×",
      statLbl: "DOCUMENT PROCESSING CAPACITY",
      body: "Redesigned the document processing pipeline from 100 to 500 docs/minute. Cut infrastructure costs 30% via TTL policies, DB partitioning, and architecture decomposition. Reduced client onboarding from 1–2 months to 2–3 weeks. Built 'The Hive Mind' — an 8-agent AI system (Claude-based) that gave the app team full operational self-service: DB reporting, AWS monitoring, document failure detection, and real-time process health — no engineering involvement required.",
      artifacts: ["Hive Mind system design", "Pipeline architecture", "Onboarding flow redesign"],
    },
    {
      title: "Low-code platform at Sygris",
      sub: "Greenfield ESG platform · load time −83% · deploy time −95%",
      tags: ["Tech Lead", "ESG", "Architecture", "2021–2024"],
      stat: "10s",
      statLbl: "FROM 1–2 MIN LOAD TIME",
      body: "Designed and built a greenfield low-code platform for ESG data management — including a proprietary state management system from scratch. Reduced heavy portal load time from 1–2 minutes to 10 seconds by redesigning the core collection entity model. Cut deployment time from 1–2 weeks to 1–2 days via frontend API contract redesign and DB migration. Prevented churn of the top client (20–30% of 2022 billing) through new subscription tier architecture.",
      artifacts: ["Entity model redesign", "Subscription tier model", "API contract spec"],
    },
    {
      title: "Team and revenue scale at Syntax",
      sub: "2 → 10 engineers · 6 new clients · first SaaS product",
      tags: ["Engineering Management", "SaaS", "Team Building", "2017–2021"],
      stat: "30%",
      statLbl: "ROI GROWTH",
      body: "Scaled the engineering team from 2 to 10 developers in 6 months, driven by acquisition of 6 new clients and a new outsourcing delivery model. Signed first 3 clients for a click-and-deploy document management portal. Built partnerships with Hibermática and IECISA, closed first investment-sector client (Qualitas Funds), and launched a first SaaS product for subsidised project management — targeting NGOs including Ayuda en Acción and CEAR.",
      artifacts: ["Outsourcing delivery model", "SaaS product v1", "Partnership agreements"],
    },
  ],

  plan: [
    {
      d: 30,
      t: "Listen and map.",
      body: "1:1 with every team member, peer, and stakeholder. No architectural opinion before week 3. I map the real system — technical and human.",
    },
    {
      d: 60,
      t: "One clear bet.",
      body: "Identify the highest-leverage problem. Propose a focused initiative with measurable outcome. Build consensus before committing.",
    },
    {
      d: 90,
      t: "Ship something visible.",
      body: "One thing delivered end-to-end. Roadmap aligned with business objectives. Team processes improved or confirmed. First hire req opened if needed.",
    },
  ],

  recommendations: [
    {
      q: "Francisco has a rare combination: he can go deep into the code, step back to the architecture, and then translate the whole thing into business language for a non-technical audience. He made our engineering team coherent for the first time.",
      n: "Available on request",
      r: "Former colleague",
      initials: "—",
    },
  ],

  cta: {
    statusLabel: "OPEN TO TALK",
    headline: "The fastest way is a short call.",
    sub: "Or reach me at",
    email: "fabuitrago92@gmail.com",
    callLabel: "Book a call →",
    cvLabel: "View LinkedIn",
    cvUrl: "https://www.linkedin.com/in/franciscoal/",
  },

  footer: {
    handle: "francisco.buitrago",
    version: "v2026.05",
  },
};

export default profile;
