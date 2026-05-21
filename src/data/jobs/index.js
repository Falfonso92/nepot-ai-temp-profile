import baseProfile from "../profile.js";

// Opaque GUID-based IDs — URLs reveal nothing about the company or role.
// Add a new entry + push → Vercel auto-deploys the new /:guid page.
// The profile URL for each job goes into the CV PDF at generation time.
// Source of truth for job→guid mapping: src/data/registry.js

const jobs = {
  "ded9ee7e-8445-4f64-9d59-44fbe47204bb": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager",
    },
    summary:
      "Engineering Manager with 15 years of experience scaling product-critical teams across B2B SaaS. At Invofox (YC S22) I rebuilt the engineering org, scaled infra 5×, and delivered AI-driven operational tooling that gave non-engineering teams full self-service. I thrive in product-led environments where engineering decisions connect directly to revenue.",
    summaryEs:
      "Engineering Manager con 15 años de experiencia escalando equipos en B2B SaaS. En Invofox (YC S22) reconstruí la organización de ingeniería, escalé la infraestructura 5× y entregué herramientas operativas basadas en IA que dieron autonomía total a equipos no técnicos.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",        val: "Engineering org design · Technical roadmap · AI systems · Microservices",           val_es: "Diseño de org de ingeniería · Roadmap técnico · Sistemas de IA · Microservicios" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "A track record of making engineering teams coherent, fast, and product-aligned",    val_es: "Un historial de hacer equipos de ingeniería coherentes, rápidos y alineados con producto" },
      { lbl: "Open to",        lbl_es: "Abierto a",    val: "Engineering Manager · Hybrid or Remote",                                             val_es: "Engineering Manager · Híbrido o Remoto" },
      { lbl: "Available",      lbl_es: "Disponible",   val: "Immediate",                                                                          val_es: "Inmediata" },
    ],
  },

  "40fd9954-d4fd-456b-a94e-38d4737cc076": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Full-Stack Developer",
    },
    summary:
      "Full-stack developer with 15 years across TypeScript, React, and Node.js — expert level in all three, active through 2026. At Invofox I built an 8-agent AI system that gave the app team full operational self-service. At Sygris I redesigned a B2B portal's core data model to cut load time from 2 minutes to 10 seconds. I write code, I also know when not to.",
    summaryEs:
      "Desarrollador full-stack con 15 años en TypeScript, React y Node.js — nivel experto en los tres, activo hasta 2026. En Invofox construí un sistema de 8 agentes de IA y en Sygris rediseñé el modelo de datos central de un portal B2B para reducir el tiempo de carga de 2 minutos a 10 segundos.",
    now: [
      { lbl: "Stack match",        lbl_es: "Stack",        val: "TypeScript (9yr expert) · React (7yr expert) · Node.js (8yr) · CI/CD · Azure/AWS",                   val_es: "TypeScript (9 años, experto) · React (7 años, experto) · Node.js (8 años) · CI/CD · Azure/AWS" },
      { lbl: "AI differentiator",  lbl_es: "IA en prod",   val: "8-agent AI system with Claude API — LLM benchmarking, hot-balancing, multi-model orchestration",     val_es: "Sistema de 8 agentes con Claude API — benchmarking de LLMs, hot-balancing, orquestación multi-modelo" },
      { lbl: "Open to",            lbl_es: "Abierto a",    val: "Full-Stack Developer · Remote or Hybrid",                                                             val_es: "Desarrollador Full-Stack · Remoto o Híbrido" },
      { lbl: "Available",          lbl_es: "Disponible",   val: "Immediate",                                                                                           val_es: "Inmediata" },
    ],
    caseStudies: [
      baseProfile.caseStudies[0],
      baseProfile.caseStudies[1],
      {
        title: "Full-stack delivery at Syntax",
        titleEs: "Entrega full-stack en Syntax",
        sub: "2 → 10 engineers · first SaaS product · 30% ROI growth",
        tags: ["Full-Stack", "SaaS", "Team Lead", "2017–2021"],
        stat: "10×",
        statLbl: "TEAM SIZE IN 6 MONTHS",
        statLblEs: "TAMAÑO DE EQUIPO EN 6 MESES",
        body: "Led full-stack delivery across multiple client projects while building the company's first SaaS product and scaling the team from 2 to 10 engineers. Designed the architecture, defined the tech stack, ran DevOps and CI/CD, and designed UX flows. Closed the first investment-sector client and launched a subsidised project management SaaS targeting NGOs.",
        bodyEs: "Lideré la entrega full-stack en múltiples proyectos de cliente mientras construía el primer producto SaaS de la empresa y escalaba el equipo de 2 a 10 ingenieros. Diseñé la arquitectura, definí el stack técnico, gestioné DevOps y CI/CD, y diseñé los flujos UX.",
        artifacts: ["SaaS product architecture", "DevOps/CI-CD setup", "Client delivery playbook"],
      },
    ],
  },

  "463bd5b0-d8e4-419d-a9bb-5b57d1bee042": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Frontend Engineer",
    },
    summary:
      "Staff-level frontend engineer with 10+ years of React and TypeScript at expert depth, active through 2026. I've led legacy modernisations with measurable results (1–2 min portal → 10s, deployment 2 weeks → 1 day), built a proprietary state management system from scratch, and integrated AI agents into production workflows well beyond autocomplete. I operate at the intersection of technical depth and organisational impact.",
    summaryEs:
      "Ingeniero frontend a nivel Staff con más de 10 años en React y TypeScript a profundidad experta, activo hasta 2026. He liderado modernizaciones legacy con resultados medibles (portal de 1-2 min → 10s, despliegue de 2 semanas → 1 día), construido un sistema de gestión de estado propio desde cero e integrado agentes de IA en producción.",
    now: [
      { lbl: "Frontend depth",  lbl_es: "Frontend",      val: "React (7yr expert) · TypeScript (9yr expert) · legacy modernisation · performance ownership",          val_es: "React (7 años, experto) · TypeScript (9 años, experto) · modernización legacy · rendimiento" },
      { lbl: "AI in prod",      lbl_es: "IA en prod",    val: "8-agent system with Claude API in production — the kind of AI-native work most teams are still planning", val_es: "Sistema de 8 agentes con Claude API en producción — el tipo de trabajo AI-native que la mayoría aún planifica" },
      { lbl: "Open to",         lbl_es: "Abierto a",     val: "Staff Frontend Engineer · Remote or Hybrid Madrid",                                                    val_es: "Staff Frontend Engineer · Remoto o Híbrido Madrid" },
      { lbl: "Available",       lbl_es: "Disponible",    val: "Immediate",                                                                                             val_es: "Inmediata" },
    ],
    caseStudies: [
      {
        title: "Low-code platform at Sygris",
        titleEs: "Plataforma low-code en Sygris",
        sub: "Greenfield ESG · load −83% · deploy −95% · custom state management",
        tags: ["React", "TypeScript", "Architecture", "Staff IC", "2021–2024"],
        stat: "10s",
        statLbl: "FROM 1–2 MIN LOAD TIME",
        statLblEs: "DESDE 1-2 MIN DE CARGA",
        body: "Designed and built a greenfield low-code platform from scratch — including a proprietary state management system with no off-the-shelf fit. Reduced portal load time from 1–2 minutes to 10 seconds by redesigning the core entity model. Cut deployment time from 1–2 weeks to 1–2 days via frontend API contract redesign. Led frontend technical direction across 4–5 developers while shipping in parallel.",
        bodyEs: "Diseñé y construí desde cero una plataforma low-code — incluyendo un sistema de gestión de estado propio sin alternativas comerciales. Reduje el tiempo de carga del portal de 1-2 minutos a 10 segundos rediseñando el modelo de entidades central. Reduje el tiempo de despliegue de 1-2 semanas a 1-2 días.",
        artifacts: ["Custom state management design", "Entity model redesign", "Frontend API contract spec"],
      },
      {
        title: "AI-native tooling at Invofox",
        titleEs: "Herramientas AI-native en Invofox",
        sub: "8-agent Claude system · UI perf 7s → 3s · feature delivery 5×",
        tags: ["AI Systems", "React", "Performance", "Staff IC", "2024–2026"],
        stat: "5×",
        statLbl: "FEATURE DELIVERY CADENCE",
        statLblEs: "CADENCIA DE ENTREGA",
        body: "Built 'The Hive Mind' — an 8-agent AI system (Claude API) giving the app team self-service operational insights. Improved UI load time from 7s → 3s in complex environments. Increased feature delivery from 2–3/year to 10–15 by simplifying structure and leading AI adoption for non-engineering roles.",
        bodyEs: "Construí 'The Hive Mind' — un sistema de 8 agentes de IA (Claude API) que da al equipo de app autonomía operativa total. Mejoré el tiempo de carga de UI de 7s → 3s. Aumenté la entrega de features de 2-3/año a 10-15.",
        artifacts: ["Hive Mind system design", "UI performance audit", "AI adoption playbook"],
      },
      baseProfile.caseStudies[2],
    ],
    plan: [
      {
        d: 30,
        t: "Understand the codebase.",   tEs: "Entender el código.",
        body:   "Full audit of frontend architecture, state management, build tooling, and test coverage. No refactor proposals before week 4 — I listen first.",
        bodyEs: "Auditoría completa de la arquitectura frontend, gestión de estado, build tooling y cobertura de tests. Sin propuestas de refactor antes de la semana 4.",
      },
      {
        d: 60,
        t: "First ownership.",           tEs: "Primera responsabilidad.",
        body:   "Own one meaningful slice end-to-end. Identify the highest-leverage improvement (performance, DX, or test coverage) and propose with data.",
        bodyEs: "Liderar una parte significativa de extremo a extremo. Identificar la mejora de mayor impacto (rendimiento, DX o cobertura de tests) y proponer con datos.",
      },
      {
        d: 90,
        t: "Raise the bar.",             tEs: "Elevar el nivel.",
        body:   "One measurable improvement shipped. Patterns documented. At least one team member levelled up through collaboration. CI/CD tightened if needed.",
        bodyEs: "Una mejora medible entregada. Patrones documentados. Al menos un miembro del equipo ha mejorado a través de la colaboración. CI/CD optimizado si es necesario.",
      },
    ],
  },
};

export default jobs;
