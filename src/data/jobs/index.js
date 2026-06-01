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
  "375b33bd-18fa-4845-91d4-dffbbaa9bc44": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Lead · Staff Engineer",
    },
    summary:
      "I work across the full engineering spectrum — cloud architecture, distributed systems, infrastructure, APIs, and product interfaces — and I lead the teams that build it. Before writing a line of code or opening a planning doc, I need to know what the business is optimising for, how success gets measured, and what the team needs to move without bottlenecks.",
    summaryEs:
      "Trabajo en todo el espectro de la ingeniería — arquitectura cloud, sistemas distribuidos, infraestructura, APIs e interfaces de producto — y lidero los equipos que lo construyen. Antes de escribir una línea de código necesito saber qué está optimizando el negocio, cómo se mide el éxito y qué necesita el equipo para moverse sin fricciones.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",        val: "React · Next.js · Node.js · .NET · Python · AWS",                                            val_es: "React · Next.js · Node.js · .NET · Python · AWS" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "15 years of full-stack depth — hands-on IC and engineering leadership, both at once if needed", val_es: "15 años de profundidad full-stack — IC hands-on y liderazgo técnico, ambos a la vez si hace falta" },
      { lbl: "Open to",        lbl_es: "Abierto a",    val: "Engineering Lead · Staff Engineer · Engineering Manager · Hybrid or Remote",                  val_es: "Engineering Lead · Staff Engineer · Engineering Manager · Híbrido o Remoto" },
      { lbl: "Available",      lbl_es: "Disponible",   val: "Immediate",                                                                                   val_es: "Inmediata" },
    ],
  },

  // j001 — Jotelulu
  "fb257785-c31a-43fb-a24b-a18b1b7f31ff": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Senior Frontend Engineer & Team Lead",
    },
    summary:
      "Frontend engineering leader with 15 years building production systems and the teams that ship them — 7 years in React and TypeScript at expert depth. I own frontend architecture end-to-end: microfrontends at scale, monorepo structures, shared libraries, design standards, and performance.",
    summaryEs:
      "Líder de ingeniería frontend con 15 años construyendo sistemas en producción y los equipos que los entregan — 7 años en React y TypeScript a nivel experto. Soy responsable de la arquitectura frontend de extremo a extremo: microfrontends a escala, monorepos, librerías compartidas, estándares de diseño y rendimiento.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr expert) · Microfrontends · Node.js · AI systems (Claude API)", val_es: "React (7 años, experto) · TypeScript (9 años, experto) · Microfrontends · Node.js · Sistemas de IA (Claude API)" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Frontend architecture ownership — from microfrontend strategy to team technical growth",            val_es: "Ownership de arquitectura frontend — desde la estrategia de microfrontends hasta el crecimiento técnico del equipo" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Frontend Engineer & Team Lead · Hybrid Madrid",                                                val_es: "Senior Frontend Engineer & Team Lead · Híbrido Madrid" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                           val_es: "Inmediata" },
    ],
  },

  // j002 — Alan
  "eb94c6ce-012e-43de-b113-250d519b64d5": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Fullstack Software Engineer",
    },
    summary:
      "Fullstack engineer and technical leader with 15 years of professional experience building and shipping web applications — TypeScript and React expert with a deep Node.js backend history. I design and own systems end-to-end: from architecture to production monitoring.",
    summaryEs:
      "Ingeniero fullstack y líder técnico con 15 años de experiencia construyendo y entregando aplicaciones web — experto en TypeScript y React, con sólida trayectoria en backend Node.js. Diseño y soy responsable de los sistemas de extremo a extremo: desde la arquitectura hasta el monitoreo en producción.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript · React · Node.js · Microservices · Claude API · LLM integration · AWS", val_es: "TypeScript · React · Node.js · Microservicios · Claude API · Integración LLM · AWS" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "End-to-end system design from architecture to production — healthcare-scale reliability", val_es: "Diseño de sistemas de extremo a extremo, de la arquitectura a producción — fiabilidad a escala healthcare" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Fullstack Software Engineer · Remote or Hybrid", val_es: "Fullstack Software Engineer · Remoto o Híbrido" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j003 — Topi
  "247a5f72-d21b-4451-8085-22d57a2ad68a": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Senior React Engineer, Full Stack",
    },
    summary:
      "Senior Full-Stack engineer with 11 years of production experience and deep React / TypeScript expertise — 7 years designing, building, and owning frontend architectures at scale. Expert in modern React tooling, microfrontend patterns, and CI/CD pipelines in cloud environments.",
    summaryEs:
      "Ingeniero Senior Full-Stack con 11 años de experiencia en producción y profunda experiencia en React/TypeScript — 7 años diseñando, construyendo y siendo responsable de arquitecturas frontend a escala. Experto en herramientas modernas de React, patrones de microfrontends y pipelines de CI/CD en entornos cloud.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr expert) · Node.js · GraphQL · Storybook · Jest · Cypress", val_es: "React (7 años, experto) · TypeScript (9 años, experto) · Node.js · GraphQL · Storybook · Jest · Cypress" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "IC frontend depth with architectural thinking and a performance culture", val_es: "Profundidad frontend como IC con pensamiento arquitectónico y cultura de rendimiento" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior React Engineer · Remote", val_es: "Senior React Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j005 — Linear (via Dex aggregator)
  "c4919d21-bb6c-4660-869e-f08b0d273e93": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Senior Software Engineer",
    },
    summary:
      "Full-stack engineer with 15 years building production systems and a strong bias toward product craft. TypeScript and React at expert depth — 9 and 7 years, both current and daily. I shape features from problem to production without a PM layer. At Invofox I embedded AI into the core product, going from blank canvas to a production 8-agent system handling real-time operational intelligence. Performance is a design constraint for me — I've cut load times from 90s to 10s and driven 5× throughput gains by fixing root causes, not symptoms.",
    summaryEs:
      "Ingeniero full-stack con 15 años construyendo sistemas en producción y un fuerte sesgo hacia la calidad del producto. TypeScript y React a nivel experto — 9 y 7 años respectivamente, ambos actuales y diarios. Desarrollo features de principio a fin sin capa de PM. En Invofox integré IA en el producto principal, desde lienzo en blanco hasta un sistema de 8 agentes en producción con inteligencia operativa en tiempo real. El rendimiento es una restricción de diseño para mí — he reducido tiempos de carga de 90s a 10s y logrado 5× de throughput resolviendo causas raíz.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr expert) · React (7yr expert) · Node.js · GraphQL · PostgreSQL · Claude API · Multi-agent AI · AWS", val_es: "TypeScript (9 años, experto) · React (7 años, experto) · Node.js · GraphQL · PostgreSQL · Claude API · IA multi-agente · AWS" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Product-craft IC — end-to-end ownership, AI feature embedding, and obsessive performance optimisation", val_es: "IC orientado al producto — ownership completo, integración de IA y optimización de rendimiento obsesiva" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Engineer · Remote", val_es: "Senior Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j009 — RevenueCat
  "2ae17a8b-9c5b-4eb7-a767-14d309edad41": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager",
    },
    summary:
      "Engineering manager with 7 years leading distributed teams and 15 years shipping production systems — TypeScript, React, Node.js, cloud infrastructure. I build the conditions for engineers to do their best work: distributed team leadership, hiring, coaching, and predictable iterative delivery.",
    summaryEs:
      "Engineering manager con 7 años liderando equipos distribuidos y 15 años entregando sistemas en producción — TypeScript, React, Node.js, infraestructura cloud. Creo las condiciones para que los ingenieros hagan su mejor trabajo: liderazgo distribuido, contratación, mentoring y entrega iterativa predecible.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Engineering Management · TypeScript · React · Node.js · AWS · Multi-agent AI systems", val_es: "Engineering Management · TypeScript · React · Node.js · AWS · Sistemas multi-agente de IA" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Distributed team leadership with a track record of connecting engineering to commercial outcomes", val_es: "Liderazgo de equipos distribuidos con historial conectando ingeniería a resultados comerciales" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Engineering Manager · Remote", val_es: "Engineering Manager · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j010 — Taxfix
  "e762ffa0-d768-45ac-842f-9871c75c52bf": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager — Monetization",
    },
    summary:
      "Engineering Manager with 15 years building production systems and the teams that ship them. I connect engineering to commercial outcomes — 5× throughput, 30% infrastructure cost reduction, feature delivery from 3/year to 15. Shipped an 8-agent AI system enabling real-time infrastructure monitoring and process health evaluation for a YC-backed company.",
    summaryEs:
      "Engineering Manager con 15 años construyendo sistemas en producción y los equipos que los entregan. Conecto ingeniería con resultados comerciales — 5× throughput, 30% de reducción de coste de infraestructura, entrega de features de 3/año a 15. Entregué un sistema de 8 agentes de IA que permite monitoreo en tiempo real y evaluación de salud de procesos para una empresa respaldada por YC.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Engineering Management · Multi-agent AI · TypeScript · React · Node.js · Microservices · Azure · AWS", val_es: "Engineering Management · IA multi-agente · TypeScript · React · Node.js · Microservicios · Azure · AWS" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Revenue-connected engineering leadership — monetization, velocity, and team growth in one", val_es: "Liderazgo de ingeniería conectado a ingresos — monetización, velocidad y crecimiento del equipo en uno" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Engineering Manager · Hybrid or Remote", val_es: "Engineering Manager · Híbrido o Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j011 — Prima
  "44c62acc-bba4-4978-adfc-662dc3da1c2c": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager",
    },
    summary:
      "Engineering Manager with 7 years of management experience and 15 years building and shipping production systems. I connect engineering to measurable business outcomes — 5× throughput, 30% infrastructure cost reduction, onboarding compressed from 6 weeks to 2, and feature delivery lifted from 3 releases/year to 15.",
    summaryEs:
      "Engineering Manager con 7 años de experiencia de gestión y 15 años construyendo y entregando sistemas en producción. Conecto ingeniería con resultados de negocio medibles — 5× throughput, 30% de reducción de coste de infraestructura, onboarding comprimido de 6 semanas a 2, y entrega de features pasada de 3 releases/año a 15.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Engineering Management · TypeScript · Node.js · Microservices · Domain-Driven Design · Azure", val_es: "Engineering Management · TypeScript · Node.js · Microservicios · Domain-Driven Design · Azure" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Technical roadmap ownership with four documented junior-to-senior progressions across two companies", val_es: "Ownership de roadmap técnico con cuatro progresiones documentadas de junior a senior en dos empresas" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Engineering Manager · Hybrid or Remote", val_es: "Engineering Manager · Híbrido o Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j014 — Deel
  "936fc926-916e-420a-8dcd-668e684b57a4": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Team Lead, Engineering",
    },
    summary:
      "Engineering Team Lead with 15 years building distributed systems and the teams that operate them. I split my time between hands-on technical delivery and people leadership — I do not choose one or the other. My background is Node.js, TypeScript, and API-first backend systems.",
    summaryEs:
      "Team Lead de Ingeniería con 15 años construyendo sistemas distribuidos y los equipos que los operan. Reparto mi tiempo entre entrega técnica hands-on y liderazgo de personas — no elijo entre uno u otro. Mi background es Node.js, TypeScript y sistemas backend API-first.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Node.js · TypeScript · SQL (MySQL, PostgreSQL) · Microservices · REST · GraphQL · AWS · CI/CD", val_es: "Node.js · TypeScript · SQL (MySQL, PostgreSQL) · Microservicios · REST · GraphQL · AWS · CI/CD" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Player-coach leadership — hands-on system design and people development in parallel", val_es: "Liderazgo player-coach — diseño de sistemas hands-on y desarrollo de personas en paralelo" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Team Lead, Engineering · Remote", val_es: "Team Lead, Engineering · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j015 — Fever
  "27a7ecb9-d987-4a1b-8486-31e1ee8cf67e": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Engineer",
    },
    summary:
      "Staff-level engineering leader — 15 years building distributed systems and the teams that ship them. Combines deep technical execution with cross-team influence, roadmap ownership, and measurable business impact: 5× throughput, 30% infrastructure cost reduction, feature delivery 5× faster.",
    summaryEs:
      "Líder de ingeniería a nivel Staff — 15 años construyendo sistemas distribuidos y los equipos que los entregan. Combino ejecución técnica profunda con influencia cross-team, ownership del roadmap e impacto de negocio medible: 5× throughput, 30% de reducción de coste de infraestructura, entrega de features 5× más rápida.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript · React · Node.js · Microservices · Multi-agent AI (Claude API) · AWS · Architecture", val_es: "TypeScript · React · Node.js · Microservicios · IA multi-agente (Claude API) · AWS · Arquitectura" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Staff-level technical influence — system design, cross-team alignment, and production AI systems", val_es: "Influencia técnica a nivel Staff — diseño de sistemas, alineamiento cross-team y sistemas de IA en producción" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Staff Engineer · Hybrid or Remote", val_es: "Staff Engineer · Híbrido o Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j016 — E-Frontiers
  "452c380e-0a26-4677-b289-6f9abf5f4144": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Lead Full-Stack Software Engineer",
    },
    summary:
      "Full-stack engineering leader with 15 years building production systems across the complete stack — React frontends, .NET/C# and Node.js backends, cloud infrastructure, and AI-powered capabilities. I began my career writing C# with .NET on enterprise platforms; the last decade extended that foundation into modern React, TypeScript, microservices, and production multi-agent AI systems.",
    summaryEs:
      "Líder de ingeniería full-stack con 15 años construyendo sistemas en producción en el stack completo — frontends en React, backends en .NET/C# y Node.js, infraestructura cloud y capacidades basadas en IA. Empecé mi carrera escribiendo C# con .NET en plataformas enterprise; la última década extendió esa base a React moderno, TypeScript, microservicios y sistemas de IA multi-agente en producción.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React · TypeScript · .NET / C# · Node.js · Azure · Microservices · Claude API · CI/CD", val_es: "React · TypeScript · .NET / C# · Node.js · Azure · Microservicios · Claude API · CI/CD" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Full-stack breadth from .NET origins through React expertise to production AI systems", val_es: "Amplitud full-stack desde orígenes en .NET, pasando por experiencia en React, hasta sistemas de IA en producción" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Lead Full-Stack Software Engineer · Remote or Hybrid", val_es: "Lead Full-Stack Software Engineer · Remoto o Híbrido" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j019 — Nory
  "7d38d9f9-380d-4f38-a71e-4119a1cf8fe9": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager",
    },
    summary:
      "Engineering manager with 7+ years leading cross-functional squads and owning technical roadmaps at SaaS and platform companies. Built integration-heavy systems, reduced client onboarding from 6 weeks to 2, and scaled platform throughput 5× — each time by connecting engineering decisions directly to commercial outcomes.",
    summaryEs:
      "Engineering manager con más de 7 años liderando squads cross-funcionales y siendo responsable de roadmaps técnicos en empresas SaaS y de plataforma. Construí sistemas con muchas integraciones, reduje el onboarding de clientes de 6 semanas a 2 y escalé el throughput de la plataforma 5× — siempre conectando decisiones de ingeniería directamente con resultados comerciales.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Engineering Management · TypeScript · Node.js · Integrations · REST APIs · Microservices · AWS", val_es: "Engineering Management · TypeScript · Node.js · Integraciones · REST APIs · Microservicios · AWS" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Integration-led engineering management — platform throughput, onboarding speed, and team growth", val_es: "Gestión de ingeniería liderada por integraciones — throughput de plataforma, velocidad de onboarding y crecimiento del equipo" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Engineering Manager · Remote", val_es: "Engineering Manager · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j021 — eDreams ODIGEO
  "b99d8460-4b3e-4626-84a2-8497e6655876": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Frontend Lead Engineer · AI",
    },
    summary:
      "Frontend engineering leader with 15 years shipping production systems and the teams that build them. I lead squads of 7–10 engineers in player-coach roles — owning technical architecture while running mentoring cycles that have produced measurable career outcomes. Designed and shipped a production multi-agent AI system enabling cross-functional self-serve on operational data without engineering involvement.",
    summaryEs:
      "Líder de ingeniería frontend con 15 años entregando sistemas en producción y los equipos que los construyen. Lidero squads de 7-10 ingenieros como player-coach — ownership de arquitectura técnica mientras ejecuto ciclos de mentoring con resultados de carrera medibles. Diseñé y entregué un sistema de IA multi-agente en producción que permite self-serve cross-funcional sobre datos operativos sin intervención de ingeniería.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React · TypeScript · JavaScript · Microfrontends · Claude API · Multi-agent AI · CI/CD · Performance", val_es: "React · TypeScript · JavaScript · Microfrontends · Claude API · IA multi-agente · CI/CD · Rendimiento" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Frontend leadership depth — microfrontend architecture, AI systems, and measurable team growth", val_es: "Profundidad de liderazgo frontend — arquitectura de microfrontends, sistemas de IA y crecimiento medible del equipo" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Frontend Lead Engineer · Hybrid Barcelona or Remote", val_es: "Frontend Lead Engineer · Híbrido Barcelona o Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j023 — Jobgether
  "43e92b69-6766-483c-a2b3-c49820d3d707": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Engineer, Full-Stack",
    },
    summary:
      "Full-stack staff engineer with 15 years building production systems and the teams that ship them. Deep Node.js and TypeScript expertise on the backend; React and Vue.js on the frontend. Built and orchestrated an 8-agent AI system in production using Claude API for real-time monitoring and process evaluation at scale.",
    summaryEs:
      "Staff engineer full-stack con 15 años construyendo sistemas en producción y los equipos que los entregan. Profunda experiencia en Node.js y TypeScript en el backend; React y Vue.js en el frontend. Construí y orquesté un sistema de 8 agentes de IA en producción con Claude API para monitoreo en tiempo real y evaluación de procesos a escala.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Node.js · TypeScript · React · Vue.js · GraphQL · PostgreSQL · Microservices · Claude API", val_es: "Node.js · TypeScript · React · Vue.js · GraphQL · PostgreSQL · Microservicios · Claude API" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Full-stack systems thinking — backend depth, frontend ownership, and AI integration in production", val_es: "Pensamiento sistémico full-stack — profundidad backend, ownership frontend e integración de IA en producción" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Staff Engineer, Full-Stack · Remote", val_es: "Staff Engineer, Full-Stack · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j025 — Wizeline
  "44c04837-5158-44fd-adbd-5690ab85bf39": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff React Engineer · TypeScript + AI",
    },
    summary:
      "Staff-level React and TypeScript engineer with 15 years building enterprise front-end systems and the teams that deliver them. Architected a production 8-agent AI system using the Anthropic/Claude API enabling autonomous operational insights for a YC-backed company without engineering intervention.",
    summaryEs:
      "Ingeniero React y TypeScript a nivel Staff con 15 años construyendo sistemas front-end enterprise y los equipos que los entregan. Diseñé un sistema de IA de 8 agentes en producción usando la API de Anthropic/Claude que permite insights operativos autónomos para una empresa respaldada por YC sin intervención de ingeniería.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr expert) · Claude API · Multi-agent AI · Microfrontends · Azure", val_es: "React (7 años, experto) · TypeScript (9 años, experto) · Claude API · IA multi-agente · Microfrontends · Azure" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Staff React depth combined with hands-on AI system architecture in production", val_es: "Profundidad React a nivel Staff combinada con arquitectura hands-on de sistemas de IA en producción" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Staff React Engineer · Remote", val_es: "Staff React Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j027 — n8n
  "999c771e-e49e-44c7-a0c3-4ea6627523a6": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager, Core Platform",
    },
    summary:
      "Engineering leader with 15 years of hands-on software engineering and 7 years building and developing the teams that ship production systems. I work at the boundary of platform thinking and business outcomes: not what the platform can do, but what it enables — and how to measure that.",
    summaryEs:
      "Líder de ingeniería con 15 años de ingeniería de software hands-on y 7 años construyendo y desarrollando los equipos que entregan sistemas en producción. Trabajo en la frontera entre el pensamiento de plataforma y los resultados de negocio: no qué puede hacer la plataforma, sino qué habilita — y cómo medirlo.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Engineering Management · TypeScript · Node.js · Platform systems · Observability · Multi-agent AI", val_es: "Engineering Management · TypeScript · Node.js · Sistemas de plataforma · Observabilidad · IA multi-agente" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Platform-first engineering leadership — outcomes over features, ownership over instruction", val_es: "Liderazgo de ingeniería platform-first — resultados sobre features, ownership sobre instrucción" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Engineering Manager, Core Platform · Remote", val_es: "Engineering Manager, Core Platform · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // r01 — Playbook
  "a4e1f8a4-d4f8-4460-bee3-f06a95fee087": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Team Lead (ReactJS / Node.js)",
    },
    summary:
      "Team Lead with 7 years of hands-on engineering leadership and deep React, TypeScript, and Node.js expertise — the exact stack Playbook requires. At Invofox (YC S22) I led a player-coach role: shipped production features including an 8-agent AI system while accelerating team delivery from 3 to 15 features per year.",
    summaryEs:
      "Team Lead con 7 años de liderazgo técnico hands-on y profunda experiencia en React, TypeScript y Node.js — el stack exacto que Playbook necesita. En Invofox (YC S22) ejercí un rol player-coach: entregué features en producción incluyendo un sistema de 8 agentes de IA mientras aceleraba la entrega del equipo de 3 a 15 features por año.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr expert) · Node.js · GraphQL · Claude API",           val_es: "React (7 años, experto) · TypeScript (9 años, experto) · Node.js · GraphQL · Claude API" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "Player-coach Team Lead — hands-on delivery and team acceleration simultaneously",          val_es: "Team Lead player-coach — entrega hands-on y aceleración del equipo de forma simultánea" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Team Lead (ReactJS / Node.js) · Remote or Hybrid",                                         val_es: "Team Lead (ReactJS / Node.js) · Remoto o Híbrido" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                                 val_es: "Inmediata" },
    ],
  },

  // r02 — Aircall
  "955d68be-c43d-42ac-bc2f-1ea1c638b49e": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Engineer",
    },
    summary:
      "Staff Engineer with 15 years building distributed systems and a proven ability to lead transversal projects autonomously — from ideation to production. At Invofox (YC S22) I architected and shipped an 8-agent AI system, scaled infra 5×, and drove cross-functional delivery across architecture and app teams.",
    summaryEs:
      "Staff Engineer con 15 años construyendo sistemas distribuidos y capacidad probada para liderar proyectos transversales de forma autónoma — desde la ideación hasta producción. En Invofox (YC S22) diseñé y entregué un sistema de 8 agentes de IA, escalé la infraestructura 5× y lideré la entrega cross-funcional entre equipos de arquitectura y aplicación.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "TypeScript · Node.js · Microservices · System design · Multi-agent AI (Claude API)",        val_es: "TypeScript · Node.js · Microservicios · Diseño de sistemas · IA multi-agente (Claude API)" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "Staff-level technical leadership — autonomous project ownership, cross-team mentorship, and AI-powered system design", val_es: "Liderazgo técnico a nivel Staff — ownership autónomo de proyectos, mentoring cross-team y diseño de sistemas de IA" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Staff Engineer · Remote or Hybrid Madrid",                                                  val_es: "Staff Engineer · Remoto o Híbrido Madrid" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                                 val_es: "Inmediata" },
    ],
  },

  // r03 — TechShack
  "bf98476f-b1cf-49fb-b3bf-863a06306b2d": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Senior Frontend Developer",
    },
    summary:
      "Senior Frontend Developer with 7 years of React and 9 years of TypeScript at expert depth, and AI tooling in production beyond autocomplete. At Invofox (YC S22) I built a production 8-agent AI system using Claude API and cut UI load time from 7s to 3s; at Sygris I reduced portal load from 2 minutes to 10 seconds by redesigning the core data model.",
    summaryEs:
      "Desarrollador Frontend Senior con 7 años en React y 9 años en TypeScript a nivel experto, con herramientas de IA en producción más allá del autocompletado. En Invofox (YC S22) construí un sistema de 8 agentes de IA con Claude API y reduje el tiempo de carga de UI de 7s a 3s; en Sygris reduje la carga del portal de 2 minutos a 10 segundos rediseñando el modelo de datos central.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr expert) · GraphQL · Claude API · CI/CD",               val_es: "React (7 años, experto) · TypeScript (9 años, experto) · GraphQL · Claude API · CI/CD" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "Frontend depth with quantified performance outcomes and AI-native production systems",       val_es: "Profundidad frontend con resultados de rendimiento cuantificados y sistemas de IA en producción" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Senior Frontend Developer · Remote or Hybrid",                                              val_es: "Senior Frontend Developer · Remoto o Híbrido" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                                 val_es: "Inmediata" },
    ],
  },

  // r04 — Civislend
  "cd6f1186-6968-4796-a1e0-c5eec2351c9b": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Technical Lead",
    },
    summary:
      "Technical Lead with a career-defining pattern of joining as the first in-house engineer, building the technical function from scratch, and scaling it into a high-output team — exactly what Civislend is looking for. At Invofox (YC S22) I owned architecture, roadmap, and engineering org, scaling delivery 5× and infra to match; my 5-year trajectory points directly to CTO.",
    summaryEs:
      "Technical Lead con un patrón de carrera definido: unirse como primer ingeniero interno, construir la función técnica desde cero y escalarla hasta un equipo de alto rendimiento — exactamente lo que Civislend busca. En Invofox (YC S22) fui responsable de la arquitectura, el roadmap y la organización de ingeniería, escalando la entrega 5× y la infraestructura al mismo ritmo; mi trayectoria a 5 años apunta directamente a CTO.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "React · TypeScript · Node.js · PostgreSQL · Microservices · Architecture · CI/CD",           val_es: "React · TypeScript · Node.js · PostgreSQL · Microservicios · Arquitectura · CI/CD" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "First-TL pattern with a track record: hands-on delivery, team building, and CTO-track ownership", val_es: "Patrón de primer TL con historial probado: entrega hands-on, construcción de equipo y ownership en trayectoria hacia CTO" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Technical Lead · Hybrid Madrid",                                                            val_es: "Technical Lead · Híbrido Madrid" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                                 val_es: "Inmediata" },
    ],
  },

  // r05 — nineDots.io
  "2974887d-2856-41c3-bcde-d26f7c8ed7b4": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Software Engineer",
    },
    summary:
      "Staff Software Engineer with 15 years of TypeScript depth and a proven ability to own backend systems end-to-end in high-growth startup environments. At Invofox (YC S22) I architected an 8-agent AI system using the Claude API, scaled infra 5×, and mentored four engineers from junior to senior — delivering production-grade work at pace.",
    summaryEs:
      "Staff Software Engineer con 15 años de profundidad en TypeScript y capacidad probada para ser responsable de sistemas backend de extremo a extremo en entornos startup de alto crecimiento. En Invofox (YC S22) diseñé un sistema de 8 agentes de IA con Claude API, escalé la infraestructura 5× y mentorié a cuatro ingenieros de junior a senior.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "TypeScript (9yr expert) · Node.js · AWS · Multi-agent AI (Claude API)",                 val_es: "TypeScript (9 años, experto) · Node.js · AWS · IA multi-agente (Claude API)" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "Backend ownership at startup pace — systems that scale, AI-native from day one",         val_es: "Ownership backend a ritmo de startup — sistemas que escalan, AI-native desde el primer día" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Staff Software Engineer · Remote",                                                       val_es: "Staff Software Engineer · Remoto" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                              val_es: "Inmediata" },
    ],
  },

  // r07 — Kepler Search
  "5778691b-1a7c-433d-8e75-64c4668b9527": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Frontend Developer",
    },
    summary:
      "Senior Frontend Developer with 9 years of TypeScript and 7 years of React at expert depth, bringing a strong bias toward production quality, proactive refactoring, and measurable performance outcomes. At Invofox (YC S22) I cut UI load time from 7s to 3s; at Sygris I reduced portal load from 2 minutes to 10 seconds by redesigning the core data model.",
    summaryEs:
      "Desarrollador Frontend Senior con 9 años en TypeScript y 7 años en React a nivel experto, con un fuerte sesgo hacia la calidad en producción, la refactorización proactiva y los resultados de rendimiento medibles. En Invofox (YC S22) reduje el tiempo de carga de UI de 7s a 3s; en Sygris reduje la carga del portal de 2 minutos a 10 segundos.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "TypeScript (9yr expert) · React (7yr expert) · HTML/CSS · CI/CD · Git",                  val_es: "TypeScript (9 años, experto) · React (7 años, experto) · HTML/CSS · CI/CD · Git" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "Production-first frontend engineering — performance, code quality, and team guidance",    val_es: "Ingeniería frontend production-first — rendimiento, calidad de código y orientación al equipo" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Frontend Developer · Remote or Hybrid",                                                  val_es: "Frontend Developer · Remoto o Híbrido" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                              val_es: "Inmediata" },
    ],
  },

  // j028 — Huspy
  "f26931c9-279c-42f0-a591-ee70e3eaedcb": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Frontend Engineer",
    },
    summary:
      "Senior frontend engineer with 11 years of JavaScript/TypeScript depth and 7 years of React experience, specialising in high-performance interfaces, scalable frontend architecture, and cross-functional delivery with Product and Design.",
    summaryEs:
      "Ingeniero frontend senior con 11 años de profundidad en JavaScript/TypeScript y 7 años de experiencia en React, especializado en interfaces de alto rendimiento, arquitectura frontend escalable y entrega cross-funcional con Producto y Diseño.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr expert) · JavaScript · Next.js · CSS · Microfrontends · CI/CD", val_es: "React (7 años, experto) · TypeScript (9 años, experto) · JavaScript · Next.js · CSS · Microfrontends · CI/CD" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Performance-first frontend delivery — UI load time from 7s to 3s, architecture that scales", val_es: "Entrega frontend performance-first — tiempo de carga de UI de 7s a 3s, arquitectura que escala" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Frontend Engineer · Hybrid Madrid", val_es: "Frontend Engineer · Híbrido Madrid" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },
};

export default jobs;
