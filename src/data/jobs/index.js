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

  // s01 — Attio (Engineering Manager)
  "e3f1572a-7b2c-4f0c-9a78-67fbc3185b37": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager",
    },
    summary:
      "Engineering Manager and hands-on architect with 15 years building production systems and the teams that ship them — the last two as EM at a YC-backed startup running TypeScript/Node.js microservices, microfrontends, and production multi-agent AI systems. Leads best from inside the code: 70% architecture and systems work, 30% leadership, team development, and product decisions grounded in real customer interactions.",
    summaryEs:
      "Engineering Manager y arquitecto hands-on con 15 años construyendo sistemas en producción y los equipos que los entregan — los últimos dos como EM en una startup respaldada por YC con microservicios TypeScript/Node.js, microfrontends y sistemas de IA multi-agente en producción. Lidera mejor desde dentro del código: 70% arquitectura y sistemas, 30% liderazgo, desarrollo del equipo y decisiones de producto.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "TypeScript · Node.js · Microservices · Multi-agent AI (Claude API) · AWS · Azure",                              val_es: "TypeScript · Node.js · Microservicios · IA multi-agente (Claude API) · AWS · Azure" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "An EM who codes — 70% architecture and systems ownership, 30% people and product decisions",                   val_es: "Un EM que programa — 70% ownership de arquitectura y sistemas, 30% personas y decisiones de producto" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Engineering Manager · Hybrid or Remote (Madrid)",                                                               val_es: "Engineering Manager · Híbrido o Remoto (Madrid)" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                                                     val_es: "Inmediata" },
    ],
  },

  // s02 — Synthesia (Engineering Manager)
  "c4772afc-1cb4-4f01-b86c-ecf53633fe94": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager",
    },
    summary:
      "Engineering Manager with 7+ years leading cross-functional teams across distributed systems, AI/ML systems, and high-throughput backend pipelines. Proven track record bridging research to production — from designing multi-agent AI systems to translating ambiguous platform challenges into structured plans with measurable outcomes. Brings a record of improving system reliability, developer productivity, and team capability at each stage of growth.",
    summaryEs:
      "Engineering Manager con más de 7 años liderando equipos cross-funcionales en sistemas distribuidos, sistemas de IA/ML y pipelines backend de alto throughput. Historial probado de llevar investigación a producción — desde el diseño de sistemas de IA multi-agente hasta traducir retos ambiguos de plataforma en planes estructurados con resultados medibles.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "Multi-agent AI · LLM orchestration · TypeScript · Node.js · Distributed systems · AWS · Azure",                val_es: "IA multi-agente · Orquestación de LLMs · TypeScript · Node.js · Sistemas distribuidos · AWS · Azure" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "Research-to-production engineering leadership — AI systems shipped, reliability improved, teams grown",         val_es: "Liderazgo de ingeniería de investigación a producción — sistemas de IA entregados, fiabilidad mejorada, equipos desarrollados" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Engineering Manager · Remote (Madrid)",                                                                         val_es: "Engineering Manager · Remoto (Madrid)" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                                                     val_es: "Inmediata" },
    ],
  },

  // s04 — Ably (Technical Lead, Developer Experience)
  "e1c331fc-cdb7-4552-b854-a06e75d44636": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Technical Lead, Developer Experience",
    },
    summary:
      "Full-stack technical lead with 15 years of production JavaScript/TypeScript/React engineering and 7 years of engineering management — shipped AI systems, developer tooling, and growth-stage platforms at YC-backed companies. Built and deployed 'The Hive Mind,' an 8-agent Claude-based AI system in production that lifted team feature velocity from 3 to 15 per year. Combines hands-on full-stack ownership with genuine empathy for developer customers, treating technology as a direct engine for product and organisational impact.",
    summaryEs:
      "Technical Lead full-stack con 15 años de ingeniería JavaScript/TypeScript/React en producción y 7 años de engineering management — entregué sistemas de IA, herramientas para desarrolladores y plataformas en etapa de crecimiento en empresas respaldadas por YC. Construí y desplegué 'The Hive Mind', un sistema de 8 agentes basado en Claude que elevó la velocidad de entrega del equipo de 3 a 15 features por año.",
    now: [
      { lbl: "Stack match",    lbl_es: "Stack",         val: "TypeScript · JavaScript · React · Node.js · Developer tooling · SDK · Multi-agent AI (Claude API)",             val_es: "TypeScript · JavaScript · React · Node.js · Herramientas para desarrolladores · SDK · IA multi-agente (Claude API)" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "A technical lead who builds for developers — realtime systems, AI adoption at team scale, and DX as a product", val_es: "Un technical lead que construye para desarrolladores — sistemas en tiempo real, adopción de IA a escala de equipo y DX como producto" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Technical Lead, Developer Experience · Remote (Madrid)",                                                        val_es: "Technical Lead, Developer Experience · Remoto (Madrid)" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",                                                                                                     val_es: "Inmediata" },
    ],
  },

  // j034 — Embat
  "789e335b-3102-4e0e-aef3-d41f1ff279e2": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Engineer",
    },
    summary:
      "Full-stack engineer with 15 years of production software experience and 8 years building distributed systems at scale — scaled a document processing pipeline 5× (100→500 docs/min), cut infrastructure costs 30% on Google Cloud, and built The Hive Mind, an 8-agent AI system that gave the product team full operational self-service. Brings deep Node.js and ReactJS ownership alongside software architecture design patterns and quality culture to make systems robust, scalable, and defensible.",
    summaryEs:
      "Ingeniero full-stack con 15 años de experiencia en ingeniería de software en producción y 8 años construyendo sistemas distribuidos a escala — escalé un pipeline de procesamiento de documentos 5× (100→500 docs/min), reduje costes de infraestructura un 30% en Google Cloud y construí The Hive Mind, un sistema de 8 agentes de IA que dio al equipo de producto autonomía operacional total. Aporto dominio profundo de Node.js y ReactJS junto con patrones de arquitectura y cultura de calidad.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · JavaScript · Node.JS (8yr) · ReactJS · Python · GCP · Distributed systems · CI/CD",  val_es: "TypeScript (9 años) · JavaScript · Node.JS (8 años) · ReactJS · Python · GCP · Sistemas distribuidos · CI/CD" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Scalable backend systems, quality engineering culture, and the technical ownership to build without bureaucracy", val_es: "Sistemas backend escalables, cultura de ingeniería de calidad y la propiedad técnica para construir sin burocracia" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Staff Engineer · Hybrid Madrid",   val_es: "Staff Engineer · Híbrido Madrid" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                        val_es: "Inmediata" },
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

  // j035 — Maze
  "6c622db3-b13c-46e3-8d7b-f369b43d9fda": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Full Stack Engineer",
    },
    summary:
      "Full-stack engineer with 15 years of production software experience across B2B SaaS startups — TypeScript and React expert who owns the complete stack from UI to API. Built The Hive Mind, an 8-agent AI system in production, and scaled a document processing pipeline 5× (100→500 docs/min). Ships without blockers, measures success by customer impact, not ticket count.",
    summaryEs:
      "Ingeniero full-stack con 15 años de experiencia en producción en startups B2B SaaS — experto en TypeScript y React que posee el stack completo de UI a API. Construí The Hive Mind, un sistema de 8 agentes IA en producción, y escalé un pipeline de procesamiento 5× (100→500 docs/min). Entrega sin bloqueadores, mide el éxito por impacto al cliente, no por tickets.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · React (7yr) · Node.js · REST APIs · Python · PostgreSQL · CI/CD · AI agents",  val_es: "TypeScript (9 años) · React (7 años) · Node.js · REST APIs · Python · PostgreSQL · CI/CD · Agentes IA" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "End-to-end feature ownership and startup velocity — deliver from concept to production without hand-offs", val_es: "Propiedad total de features y velocidad de startup — entrega de concepto a producción sin traspasos" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Full Stack Engineer · Remote",   val_es: "Full Stack Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                      val_es: "Inmediata" },
    ],
  },

  // j036 — Junction
  "4d99cef4-c601-441c-b4d1-6da6995b42b2": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Product Engineer",
    },
    summary:
      "Full-stack product engineer with 15 years of experience shipping end-to-end features at B2B SaaS startups — TypeScript, Next.js, and Python across the complete stack. I shape what gets built, not just how: co-designed product models that stabilised two companies financially and consistently join small teams to build from the ground up. I work remote-first, own my scope completely, and measure success by customer outcomes.",
    summaryEs:
      "Ingeniero de producto full-stack con 15 años de experiencia entregando features end-to-end en startups B2B SaaS — TypeScript, Next.js y Python en el stack completo. Defino qué se construye, no solo cómo: co-diseñé modelos de producto que estabilizaron dos empresas financieramente y consistentemente me uno a equipos pequeños para construir desde cero.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · Next.js (5yr) · React · Python · Node.js · PostgreSQL · GCP/Azure · CI/CD",  val_es: "TypeScript (9 años) · Next.js (5 años) · React · Python · Node.js · PostgreSQL · GCP/Azure · CI/CD" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Product instincts plus full-stack execution — I shape what to build and deliver it end-to-end", val_es: "Instinto de producto más ejecución full-stack — defino qué construir y lo entrego de principio a fin" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Product Engineer · Remote-first",   val_es: "Product Engineer · Remote-first" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                          val_es: "Inmediata" },
    ],
  },

  // j037 — Fonoa
  "c876896e-b81e-4703-b156-5f29f95b1dee": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Software Engineer, AI",
    },
    summary:
      "Staff-level engineer with 15 years of full-stack production experience, specialising in LLM systems and multi-agent AI. Architected The Hive Mind — an 8-agent Claude-based system that gave a product team full operational self-service — and led LLM evaluation and hot-balancing strategies across multiple models in production. I build AI products end-to-end, argue for model choices in commercial terms, and thrive in domains where the playbook doesn't exist yet.",
    summaryEs:
      "Ingeniero de nivel Staff con 15 años de experiencia full-stack en producción, especializado en sistemas LLM y IA multi-agente. Arquitecté The Hive Mind — un sistema de 8 agentes basado en Claude que dio autonomía operacional total a un equipo de producto — y lideré estrategias de evaluación y hot-balancing de LLMs en producción. Construyo productos IA end-to-end y prospero en dominios donde el manual no existe.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "LLMs · Multi-agent systems · Prompt engineering · AI evaluation · Python · TypeScript · Node.js · Claude API",  val_es: "LLMs · Sistemas multi-agente · Prompt engineering · Evaluación de IA · Python · TypeScript · Node.js · Claude API" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Production AI systems built from first principles — The Hive Mind is live evidence, not a side project", val_es: "Sistemas IA en producción construidos desde principios fundamentales — The Hive Mind es evidencia real, no un proyecto paralelo" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Staff Software Engineer, AI · Remote",   val_es: "Staff Software Engineer, AI · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                               val_es: "Inmediata" },
    ],
  },
  // j041 — TechTree → Stealth Healthcare AI / Principal Software Engineer
  "0bc78c15-2e6d-4b54-adfe-9d2b250ee62c": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Principal Software Engineer",
    },
    summary:
      "Full-stack engineering leader with 15 years building production-grade systems and the teams that ship them — from greenfield platforms to high-throughput AI pipelines. Architected and shipped a production multi-agent AI system (8 Claude-based agents) running real-time operational monitoring, data analysis, and document failure detection at scale. Translates ambiguous requirements into scalable solutions that move commercial outcomes: 5× throughput, 30% infrastructure cost reduction, onboarding time cut from 6 weeks to 2.",
    summaryEs:
      "Líder de ingeniería full-stack con 15 años construyendo sistemas en producción y los equipos que los despliegan — desde plataformas desde cero hasta pipelines de IA de alto rendimiento. Arquitecté y desplegué un sistema multi-agente en producción (8 agentes basados en Claude) con monitorización operacional en tiempo real a escala.",
    now: [
      { lbl: "Stack",          lbl_es: "Stack",         val: "TypeScript · Python · Node.js · LLMs/Agentic AI · React · Microservices · AWS/Azure",  val_es: "TypeScript · Python · Node.js · LLMs/IA agéntica · React · Microservicios · AWS/Azure" },
      { lbl: "AI in prod",     lbl_es: "IA en prod",    val: "8-agent Claude-based system live — agentic orchestration, LLM benchmarking, multi-model hot-balancing",  val_es: "Sistema de 8 agentes en producción — orquestación agéntica, benchmarking de LLMs, hot-balancing multi-modelo" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Principal Software Engineer · Remote · Spain",  val_es: "Principal Software Engineer · Remoto · España" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",  val_es: "Inmediata" },
    ],
  },

  // j043 — Client Server / Forward Deployed Engineer
  "4584713c-cd12-4484-9296-1169155bc1a3": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Forward Deployed Engineer",
    },
    summary:
      "Full-stack engineering leader with 15 years building production systems and the teams that ship them — now operating at the intersection of client engagement, architecture, and AI. Proven track record entering client environments via pre-sales to diagnose technical problems, shape solutions, and drive measurable outcomes: 5× throughput, 30% cost reduction, onboarding from 6 weeks to 2. Proficient in TypeScript, Python, and modern AI tooling including Claude Code; architect of an 8-agent production AI system currently running real-time monitoring and data analysis at scale.",
    summaryEs:
      "Líder de ingeniería full-stack con 15 años construyendo sistemas en producción — ahora operando en la intersección de cliente, arquitectura e IA. Historial probado diagnosticando problemas técnicos en entornos de cliente y generando resultados medibles: 5× throughput, 30% reducción de costes.",
    now: [
      { lbl: "Stack",          lbl_es: "Stack",         val: "TypeScript · Python · JavaScript · Node.js · React · AI tools (Claude Code, Cursor) · OOP/CS fundamentals",  val_es: "TypeScript · Python · JavaScript · Node.js · React · Herramientas IA · Fundamentos de CS" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "Client-facing engineering + architecture depth — pre-sales to production, hands-on throughout",  val_es: "Ingeniería orientada a cliente + profundidad de arquitectura — de pre-venta a producción" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Forward Deployed Engineer · Hybrid Madrid",  val_es: "Forward Deployed Engineer · Híbrido Madrid" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",  val_es: "Inmediata" },
    ],
  },

  // j046 — Epassi / Engineering Manager
  "b5fc52ed-aa00-4e27-b222-0cc1d5a47d0e": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Engineering Manager",
    },
    summary:
      "Engineering Manager with 15 years building production systems and the cross-functional engineering teams that ship them — from individual contributor to manager across three companies. Strong technical foundation in full-stack architecture (React, Node.js, microservices, cloud infrastructure, CI/CD) combined with a player-coach leadership style that keeps engineers growing while keeping the product moving. Proven at connecting engineering decisions to commercial outcomes: 5× throughput gains, 30% infrastructure cost reduction, and feature delivery scaled from 3 to 15 per year.",
    summaryEs:
      "Engineering Manager con 15 años construyendo sistemas en producción y equipos de ingeniería — de IC a manager en tres empresas. Fundamentos técnicos sólidos en arquitectura full-stack combinados con un liderazgo player-coach que mantiene a los ingenieros creciendo sin perder velocidad de entrega.",
    now: [
      { lbl: "Stack",          lbl_es: "Stack",         val: "React · Node.js · Microservices · Cloud (AWS/GCP/Azure) · CI/CD · TypeScript",  val_es: "React · Node.js · Microservicios · Cloud (AWS/GCP/Azure) · CI/CD · TypeScript" },
      { lbl: "What I bring",   lbl_es: "Lo que aporto", val: "7 years EM experience — team growth, roadmap ownership, commercial outcomes. Player-coach who stays technical",  val_es: "7 años de experiencia EM — crecimiento de equipo, ownership del roadmap, resultados comerciales" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Engineering Manager · Remote · Spain or EU",  val_es: "Engineering Manager · Remoto · España o UE" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",  val_es: "Inmediata" },
    ],
  },

  // j049 — micro1 / Senior Full-Stack Engineer (TypeScript)
  "0c897e72-c4a5-45fe-a7b3-9f8603e4dd29": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Senior Full-Stack Engineer",
    },
    summary:
      "Full-stack TypeScript engineer with 15 years building production systems — expert in TypeScript, Node.js, and React, with deep microservices architecture and CI/CD experience across multiple product-stage companies. Designed and led system-level architecture decisions that scaled document processing 5× and cut load times by more than half. Brings hands-on experience with multi-agent AI systems and LLM orchestration, and a consistent track record of mentoring engineers and elevating team standards.",
    summaryEs:
      "Ingeniero full-stack TypeScript con 15 años construyendo sistemas en producción — experto en TypeScript, Node.js y React, con profunda experiencia en arquitectura de microservicios y CI/CD. Decisiones de arquitectura que escalaron el procesamiento de documentos 5× y redujeron tiempos de carga a la mitad.",
    now: [
      { lbl: "Stack",          lbl_es: "Stack",         val: "TypeScript (9yr expert) · Node.js · React · Microservices · PostgreSQL · MongoDB · CI/CD · AWS/GCP/Azure",  val_es: "TypeScript (9 años, experto) · Node.js · React · Microservicios · PostgreSQL · MongoDB · CI/CD" },
      { lbl: "AI differentiator", lbl_es: "IA en prod", val: "Production multi-agent AI system — LLM orchestration, benchmarking, real-time monitoring at scale",  val_es: "Sistema multi-agente en producción — orquestación de LLMs, benchmarking, monitorización en tiempo real" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Senior Full-Stack Engineer · Remote",  val_es: "Senior Full-Stack Engineer · Remoto" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",  val_es: "Inmediata" },
    ],
  },

  // j052 — Nory / Staff Engineer
  "30172151-5275-4cd6-bb3e-f7888a7e0f20": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Staff Engineer",
    },
    summary:
      "Full-stack engineer with 15 years designing and owning production backend systems, distributed services, and the teams that ship them. Specialises in backend systems design and distributed architecture — from microservices platforms processing 500 documents per minute to 8-agent AI systems running real-time operational monitoring at scale. Driven by engineering that moves commercial outcomes: throughput, cost, and delivery cadence are the metrics that matter.",
    summaryEs:
      "Ingeniero full-stack con 15 años diseñando y owning sistemas backend en producción, servicios distribuidos y los equipos que los despliegan. Especializado en diseño de sistemas backend y arquitectura distribuida — desde plataformas de microservicios a sistemas multi-agente de IA en tiempo real.",
    now: [
      { lbl: "Stack",          lbl_es: "Stack",         val: "TypeScript · Python · Node.js · Distributed Systems · Microservices · AWS/Azure · AI/Agentic",  val_es: "TypeScript · Python · Node.js · Sistemas distribuidos · Microservicios · AWS/Azure · IA agéntica" },
      { lbl: "AI in prod",     lbl_es: "IA en prod",    val: "8-agent Claude-based system live — real-time DB reporting, infra monitoring, document failure detection",  val_es: "Sistema de 8 agentes en producción — reporting de BD, monitorización de infra, detección de fallos en documentos" },
      { lbl: "Open to",        lbl_es: "Abierto a",     val: "Staff Engineer · Remote · Spain",  val_es: "Staff Engineer · Remoto · España" },
      { lbl: "Available",      lbl_es: "Disponible",    val: "Immediate",  val_es: "Inmediata" },
    ],
  },

  // j039 — Franciely / LATAM Freelance
  "7954f5a9-fd35-4049-8345-bf50e505d85f": {
    ...baseProfile,
    meta: {
      ...baseProfile.meta,
      headline: "Senior Full Stack Engineer",
    },
    summary:
      "Full-stack engineer with 15 years building and scaling production systems — TypeScript, Node.js, React, NestJS, .NET, Python, and cloud infrastructure across AWS, GCP, and Azure. Available immediately for long-term remote engagements. Built The Hive Mind, an 8-agent AI system in production at a YC-backed startup. Combines IC depth with 7 years of engineering leadership — ships fast, owns the architecture, and brings systems thinking to every engagement.",
    summaryEs:
      "Ingeniero full-stack con 15 años construyendo y escalando sistemas en producción — TypeScript, Node.js, React, NestJS, .NET, Python e infraestructura cloud en AWS, GCP y Azure. Disponible inmediatamente para proyectos remotos de largo plazo. Construí The Hive Mind, un sistema de 8 agentes IA en producción en una startup respaldada por YC.",
    now: [
      { lbl: "Stack",         lbl_es: "Stack",         val: "TypeScript · JavaScript · Node.js · NestJS · React · Angular · Vue · .NET/C# · Python · AWS · GCP · Azure",  val_es: "TypeScript · JavaScript · Node.js · NestJS · React · Angular · Vue · .NET/C# · Python · AWS · GCP · Azure" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Full-stack depth across the entire modern web stack — backend systems, frontend architecture, cloud, and AI",  val_es: "Profundidad full-stack en todo el stack web moderno — sistemas backend, arquitectura frontend, cloud e IA" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Full Stack Engineer · Remote · Long-term",  val_es: "Senior Full Stack Engineer · Remoto · Largo plazo" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                         val_es: "Inmediata" },
    ],
  },

  // ── batch p2x5 + f4n8 — j066–j084 ──────────────────────────────────────────

  // j066 — Ansys
  "99d55b88-76d3-45cf-9132-a8d8a7a71a4a": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "R&D Engineering, Staff Engineer — Front-end" },
    summary: "Frontend engineering leader with a 15-year career architecting complex, customer-facing web applications — from greenfield low-code platforms to multi-tenant SaaS products at scale. Deep proficiency across JavaScript, TypeScript, React, and Angular, with a track record of establishing codebase maintainability standards, driving rendering optimisation, and mentoring engineers from junior to lead level. Applies rigorous software design patterns and state management discipline to performance-critical systems, and brings the architectural authority and collaborative standards-setting skills the Staff Engineer scope demands.",
    summaryEs: "Líder de ingeniería frontend con 15 años de carrera construyendo aplicaciones web complejas — desde plataformas low-code hasta productos SaaS multi-tenant a escala. Profundidad experta en JavaScript, TypeScript, React y Angular, con historial de establecer estándares de mantenibilidad, optimización de rendering y mentoría de ingenieros.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "JavaScript (11yr) · TypeScript (9yr) · React (7yr) · Angular (10yr) · Vue.js · Next.js · Preact · SolidJS",     val_es: "JavaScript · TypeScript · React · Angular · Vue.js · Next.js" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Staff-level frontend architecture — rendering optimisation, design patterns, and engineering standards at scale", val_es: "Arquitectura frontend Staff — optimización de rendering, patrones de diseño y estándares de ingeniería a escala" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Staff Engineer Front-end · Hybrid or Remote",                                                                    val_es: "Staff Engineer Front-end · Híbrido o Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j067 — Luzia
  "19683e99-abb2-4420-9528-df2b8f6c53ee": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Software Engineer (Fullstack)" },
    summary: "Fullstack engineer with a 15-year career building production systems and the teams that ship them — from greenfield platforms to real-time AI infrastructure at startup scale. Expert in TypeScript and Next.js with hands-on production AI agent experience: architected an 8-agent multi-agent system for real-time operational monitoring, LLM orchestration, and process health evaluation. Thrives in high-ambiguity, rapid-iteration environments where product intuition and end-to-end ownership drive outcomes.",
    summaryEs: "Ingeniero fullstack con 15 años construyendo sistemas de producción — desde plataformas greenfield hasta infraestructura de IA en tiempo real. Experto en TypeScript y Next.js con experiencia en sistemas multi-agente de producción: arquitecté un sistema de 8 agentes para monitorización operativa en tiempo real.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · Next.js · Node.js · Python · AI systems in production (Claude API, multi-agent)",             val_es: "TypeScript · Next.js · Node.js · Python · Sistemas de IA en producción" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "AI-native fullstack — production multi-agent systems, LLM orchestration, startup-speed delivery",               val_es: "Fullstack AI-native — sistemas multi-agente en producción, orquestación LLM, velocidad startup" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Software Engineer · Fullstack · Remote",                                                                  val_es: "Senior Software Engineer · Fullstack · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j068 — Trivelta
  "bb0d6f73-1d30-455b-887e-46b0953ad5bf": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Frontend Software Engineer" },
    summary: "Senior frontend engineer with a 15-year career building high-performance, scalable product platforms — from greenfield low-code systems to microfrontend architectures powering document-processing pipelines. Expert in React and TypeScript with demonstrated ownership across the full feature lifecycle in startup environments, driving measurable results: UI load time halved, portal response cut from 2 minutes to 10 seconds, feature cadence scaled 5×.",
    summaryEs: "Ingeniero frontend senior con 15 años construyendo plataformas de producto escalables. Experto en React y TypeScript con resultados medibles: tiempo de carga UI reducido a la mitad, respuesta de portal de 2 min a 10 seg, cadencia de features multiplicada por 5.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React.js (7yr) · TypeScript (9yr) · Next.js · Angular (10yr) · Vue.js · JavaScript (11yr)",                     val_es: "React.js · TypeScript · Next.js · Angular · Vue.js" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Full feature lifecycle ownership — greenfield architecture to performance wins and team-scale delivery",          val_es: "Propiedad del ciclo de feature completo — arquitectura greenfield, mejoras de rendimiento y entrega en equipo" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Frontend Software Engineer · Remote",                                                                     val_es: "Senior Frontend Software Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j069 — P2 Recruitment
  "6f05a16e-5ae3-478b-adc0-4ea0edc1808f": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Front-end (Angular) Developer" },
    summary: "Senior front-end developer with a 15-year career building production Angular applications, component architectures, and the cross-functional teams that ship them. Expert in Angular, TypeScript, JavaScript, Webpack, and CSS3 — all used continuously to 2026. Brings a track record of measurable UI performance wins (7s→3s, 1–2min→10s), RESTful API design and testing across 12 years, and a principled approach to responsive, usable interfaces.",
    summaryEs: "Desarrollador front-end senior con 15 años construyendo aplicaciones Angular de producción. Experto en Angular, TypeScript, JavaScript, Webpack y CSS3 — todos activos hasta 2026. Historial de mejoras de rendimiento UI medibles y diseño de API RESTful en 12 años.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Angular (10yr expert) · TypeScript · JavaScript · Webpack · CSS3 · RESTful APIs (12yr)",                        val_es: "Angular (10 años, experto) · TypeScript · JavaScript · Webpack · CSS3 · APIs RESTful" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "10 years of Angular production depth — component architecture, API design, responsive interfaces",               val_es: "10 años de profundidad Angular en producción — arquitectura de componentes, diseño de API, interfaces responsivas" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Front-end Angular Developer · Remote",                                                                    val_es: "Senior Desarrollador Front-end Angular · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j070 — Starbridge
  "ecaa83a2-03e3-4b09-858b-4232000a09eb": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Product Engineer · TypeScript/React" },
    summary: "Generalist product engineer with a 15-year career building and shipping production systems at startups and high-growth companies — from greenfield platform architecture through performance optimisation and team-scale delivery. Expert in TypeScript, React, JavaScript, RESTful APIs, and CSS, with a track record of raising engineering and UX quality standards across the full stack. Brings startup-native instincts: shipping fast, measuring impact, and staying close to product and design.",
    summaryEs: "Ingeniero de producto generalista con 15 años construyendo sistemas de producción en startups — desde arquitectura greenfield hasta optimización de rendimiento. Experto en TypeScript, React, JavaScript, APIs RESTful y CSS.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · React (7yr) · JavaScript (11yr) · REST APIs (12yr) · CSS3/HTML (11yr)",                      val_es: "TypeScript · React · JavaScript · APIs REST · CSS3" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Startup-native product engineer — greenfield to scale, full-stack depth, AI systems in production",              val_es: "Ingeniero de producto startup-native — de greenfield a escala, profundidad full-stack, IA en producción" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Product Engineer · Remote",                                                                               val_es: "Senior Product Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j071 — epilot
  "89f53161-bf26-487d-b546-3240b24477be": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior/Staff Product Engineer (Frontend)" },
    summary: "Engineering leader with a 15-year career spanning frontend architecture, product delivery, and team leadership at B2B SaaS companies — including a YC-backed startup where I owned the technical roadmap, drove 5× throughput gains, and reduced infrastructure costs by 30%. Expert in JavaScript, TypeScript, React, and Webpack; demonstrated across a decade of continuous production use, with the multi-framework breadth (Angular, Vue, Preact, SolidJS) and cloud security mindset that a Staff-level product engineer role demands.",
    summaryEs: "Líder de ingeniería con 15 años en arquitectura frontend y B2B SaaS — incluyendo una startup YC donde lideré el roadmap técnico, logré 5× de throughput y reduje costes de infraestructura un 30%. Experto en JavaScript, TypeScript, React y Webpack.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "JavaScript (11yr) · TypeScript (9yr) · React · Webpack · Angular · Vue · Preact · SolidJS · cloud security",    val_es: "JavaScript · TypeScript · React · Webpack · Angular · Vue · cloud security" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Staff-level B2B SaaS frontend — multi-framework depth, cloud security mindset, platform thinking",              val_es: "Frontend Staff B2B SaaS — profundidad multi-framework, seguridad cloud, pensamiento de plataforma" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior/Staff Product Engineer (Frontend) · Remote",                                                              val_es: "Senior/Staff Product Engineer (Frontend) · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j072 — Proxify
  "fc7305bd-4a0e-4ef1-abaa-59706b0e3350": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior React.js & Next.js Engineer" },
    summary: "Senior frontend engineer with a 15-year career building production React.js and Next.js systems — from greenfield low-code platforms to high-throughput microfrontend architectures. Expert in component architecture, state management, and frontend performance optimisation, with a track record of measurable delivery outcomes and a standards-setting mindset developed through IC work, code review, and technical mentorship.",
    summaryEs: "Ingeniero frontend senior con 15 años construyendo sistemas React.js y Next.js en producción. Experto en arquitectura de componentes, gestión de estado y optimización de rendimiento, con historial de resultados medibles y mentoría técnica.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React.js (7yr expert) · Next.js (5yr) · TypeScript (9yr) · component architecture · state management",          val_es: "React.js (experto) · Next.js · TypeScript · arquitectura de componentes" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "15yr React/TS frontend depth — production systems, performance wins, and IC standards-setting",                 val_es: "15 años de profundidad React/TS — sistemas en producción, mejoras de rendimiento y estándares IC" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior React.js & Next.js Engineer · Remote",                                                                    val_es: "Senior React.js & Next.js Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j073 — FINN
  "e7560c82-2e30-4db8-96cc-3ef1756c79f4": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Frontend Lead (Product Engineering)" },
    summary: "Frontend engineer and team lead with a 15-year career building and shipping complex web products — from greenfield low-code platforms to AI-powered pipelines. Deep TypeScript and Angular expertise combined with hands-on engineering management: 10 years leading teams while staying in the code. Treats AI as a force multiplier — designed and shipped an 8-agent production AI system at scale. Ready to own the full frontend surface and raise the bar on quality, speed, and ownership.",
    summaryEs: "Ingeniero frontend y team lead con 15 años construyendo productos web complejos. Experto en TypeScript y Angular con gestión de equipos manos-a-la-obra: 10 años liderando equipos mientras seguía en el código. IA como multiplicador de fuerza — sistema de 8 agentes en producción.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · Angular (10yr) · React.js (7yr) · JavaScript (11yr) · Next.js · Vue.js · AI systems",        val_es: "TypeScript · Angular · React.js · JavaScript · Next.js · Sistemas de IA" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Frontend lead who stays in the code — IC depth + team leadership + AI force multiplication",                    val_es: "Frontend lead que sigue en el código — profundidad IC + liderazgo de equipo + IA como multiplicador" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Frontend Lead (Product Engineering) · Remote",                                                                   val_es: "Frontend Lead (Product Engineering) · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j074 — Exoticca
  "cb09d594-e5da-4170-94e9-6efaf98e31af": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Software Engineer" },
    summary: "Full-stack engineer with a 15-year career building production systems and the teams that ship them. Specialised in RESTful API design, event-driven architecture, and AI-powered product development — including production multi-agent systems that eliminated manual operational friction at scale. Brings a product-oriented perspective grounded in data-informed decision-making and a track record of translating customer pain into measurable business outcomes.",
    summaryEs: "Ingeniero full-stack con 15 años construyendo sistemas de producción. Especializado en diseño de API RESTful, arquitectura event-driven e IA — incluyendo sistemas multi-agente en producción que eliminaron fricción operativa manual a escala.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "REST APIs (12yr) · EDA · DDD · multi-agent AI · Node.js · TypeScript · React · full-stack",                     val_es: "APIs REST · EDA · DDD · IA multi-agente · Node.js · TypeScript · React" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "AI-native full-stack — event-driven architecture, multi-agent production systems, customer-journey thinking",    val_es: "Full-stack AI-native — arquitectura event-driven, sistemas multi-agente en producción" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Software Engineer · Remote",                                                                              val_es: "Senior Software Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j075 — Sporty Group
  "c97f24f4-8f2a-4673-a6c0-a798338200d3": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Frontend Engineering Team Lead" },
    summary: "Frontend engineering leader with a 15-year career spanning IC, tech lead, and engineering manager roles — building production systems and the teams that ship them. Expert in TypeScript, Vue, React, and Angular with deep ownership of Webpack-based build pipelines, state management architecture, and frontend delivery standards across multiple product companies. Drives measurable outcomes: 5× throughput gains, 30% infrastructure cost reduction, feature delivery from 3 to 15 per year.",
    summaryEs: "Líder de ingeniería frontend con 15 años en roles de IC, tech lead y engineering manager. Experto en TypeScript, Vue, React y Angular con dominio de pipelines Webpack, arquitectura de state management y estándares de entrega frontend.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · Vue.js/Vuex (6yr) · React (7yr) · Angular (10yr) · Webpack · AWS · Kubernetes · Playwright", val_es: "TypeScript · Vue.js/Vuex · React · Angular · Webpack · AWS · Kubernetes" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Frontend team lead — IC + management, Webpack ownership, 5× throughput, multi-framework depth across Vue/React/Angular", val_es: "Frontend team lead — IC + gestión, Webpack, 5× throughput, profundidad multi-framework" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Frontend Engineering Team Lead · Remote",                                                                        val_es: "Frontend Engineering Team Lead · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j076 — SNI
  "c696a08f-4f83-4f2a-afbb-e7d17feaf179": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior React Developer" },
    summary: "Senior React developer with a 15-year career building production frontend systems and the engineering teams that ship them. Expert-depth React, TypeScript, Next.js, and CSS3 across startup and scale-up environments, paired with hands-on LLM integration experience — multi-agent AI systems, Claude API orchestration, and real-time data pipelines in production. Brings architectural and Agile leadership alongside IC delivery, with a consistent record of connecting frontend quality to measurable business outcomes.",
    summaryEs: "Desarrollador React senior con 15 años construyendo sistemas frontend de producción. Profundidad experta en React, TypeScript, Next.js y CSS3, combinada con experiencia práctica en integración LLM — sistemas multi-agente, orquestación Claude API y pipelines en tiempo real.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React.js (7yr expert) · TypeScript (9yr) · Next.js · JavaScript · CSS3 · Webpack · LLM integration",            val_es: "React.js (experto) · TypeScript · Next.js · JavaScript · CSS3 · integración LLM" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Expert React/TS depth with production AI/LLM integration — multi-agent systems, Claude API, real-time pipelines", val_es: "Profundidad experta React/TS con integración LLM en producción — sistemas multi-agente, Claude API" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior React Developer · Contract · Remote",                                                                     val_es: "Senior React Developer · Contrato · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j077 — CloudLinux
  "868471e2-c7ad-4cd1-aba9-429c2c231f43": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Product Engineer" },
    summary: "Full-stack engineer with a 15-year career spanning production systems, distributed architecture, and hands-on team leadership. Expert daily user of LLM-based dev tools — built and shipped an 8-agent Claude-based system running real-time observability, data analysis, and incident detection in production at an active YC-backed company. Takes full end-to-end ownership of product domains: from roadmap through CI/CD pipeline, infrastructure, and measurable business outcomes.",
    summaryEs: "Ingeniero full-stack con 15 años en sistemas de producción y arquitectura distribuida. Usuario experto de herramientas LLM — construí y entregué un sistema de 8 agentes Claude ejecutando observabilidad en tiempo real, análisis de datos y detección de incidentes en producción.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Claude API · multi-agent systems · LLM tooling · Node.js · TypeScript · React · full-stack · CI/CD",            val_es: "Claude API · sistemas multi-agente · LLM tooling · Node.js · TypeScript · React" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "LLM power user who shipped a production 8-agent system — end-to-end product ownership, observability mindset",  val_es: "Usuario LLM que entregó un sistema de 8 agentes en producción — propiedad de producto end-to-end" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Product Engineer · Remote",                                                                                      val_es: "Product Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j078 — Foundever
  "4dafda25-b9eb-44fe-bac1-2454345eafc7": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Frontend Software Engineer" },
    summary: "Frontend engineer with a 15-year career delivering responsive, production-grade web applications across React, Vue.js, and the full JavaScript/TypeScript stack. Proven track record closing performance gaps — UI load time cut from 7s to 3s, document throughput scaled 5×, feature delivery lifted from 3 to 15 per year — with the hands-on AI systems experience to contribute directly to an AI-focused product team from day one. Works distributed across European timezones; English C1; Spanish native.",
    summaryEs: "Ingeniero frontend con 15 años entregando aplicaciones web de producción en React, Vue.js y JavaScript/TypeScript. Historial de mejoras de rendimiento: carga UI de 7s a 3s, throughput 5×, entrega de features de 3 a 15 por año. Experiencia práctica en sistemas de IA.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Vue.js · React · Angular · TypeScript · JavaScript · CSS3 · Webpack · AI product team experience",              val_es: "Vue.js · React · Angular · TypeScript · JavaScript · CSS3 · Webpack" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Multi-framework frontend depth — Vue, React, Angular all production; AI product team ready; European timezones", val_es: "Profundidad multi-framework — Vue, React, Angular en producción; listo para equipo de producto IA" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Frontend Software Engineer · Remote · European timezones",                                                       val_es: "Frontend Software Engineer · Remoto · zonas horarias europeas" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j079 — HartleyCo
  "66a5c798-9cce-4d75-bdcc-56e4e4bb8bd2": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Full Stack AI Engineer" },
    summary: "Full-stack engineer with a 15-year career building production systems and the AI architectures that power them. Shipped a production 8-agent Claude-based system for real-time process monitoring, LLM orchestration, and document analysis — directly applicable to LLM API integration and streaming-first AI products. Experienced across the Node.js ecosystem (NestJS in production, Express patterns) and the full React/Next.js stack; brings architectural depth to AI-native legal-tech products that require precision, reliability, and structured extraction from complex documents.",
    summaryEs: "Ingeniero full-stack con 15 años construyendo sistemas de producción y arquitecturas de IA. Entregué un sistema de 8 agentes Claude para monitorización de procesos en tiempo real, orquestación LLM y análisis de documentos. Experiencia en Node.js/NestJS y React/Next.js.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Claude API · OpenAI API · LLM orchestration · Node.js/NestJS · React · Next.js · WebSockets/SSE · streaming",   val_es: "Claude API · OpenAI API · orquestación LLM · Node.js/NestJS · React · Next.js · streaming" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Production AI systems engineer — 8-agent Claude system, LLM streaming, document analysis at precision scale",    val_es: "Ingeniero de sistemas IA en producción — 8 agentes Claude, streaming LLM, análisis de documentos" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Full Stack AI Engineer · Remote",                                                                                val_es: "Full Stack AI Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j080 — InteractiveAI (Forward Deployed Engineer)
  "f6d6ed00-7cb1-4051-86d1-850e00e94ef1": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer" },
    summary: "Full-stack engineering leader with a 15-year career building production systems and the teams that ship them — spanning multi-agent AI architecture, cloud infrastructure, and REST/GraphQL API integration. Architected and deployed an 8-agent Claude-based AI system running real-time data analysis, AWS infrastructure monitoring, and process health evaluation at scale. Brings the technical depth of a senior IC and the customer-impact orientation of a leader who has repeatedly connected engineering output to measurable business results.",
    summaryEs: "Líder de ingeniería full-stack con 15 años construyendo sistemas de producción. Arquitecté y desplegué un sistema de 8 agentes Claude ejecutando análisis de datos en tiempo real, monitorización de infraestructura AWS y evaluación de procesos a escala.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Multi-agent AI · Claude API · AWS (EC2/Lambda/serverless) · Docker (~6yr) · Kubernetes (~5yr) · REST/GraphQL",  val_es: "IA multi-agente · Claude API · AWS · Docker · Kubernetes · REST/GraphQL" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Technical depth + customer impact orientation — 8-agent AI system, cloud infra, API integration, FDE mindset",   val_es: "Profundidad técnica + orientación al impacto — sistema de 8 agentes IA, infra cloud, integración de APIs" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Forward Deployed Engineer · Remote or Hybrid",                                                                   val_es: "Forward Deployed Engineer · Remoto o Híbrido" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j081 — Praktika.ai
  "dac447de-841c-44d1-977f-182481561657": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Lead/Senior Full-Stack Engineer" },
    summary: "Full-stack engineering leader with a 15-year career building production systems and the teams that ship them — from React and Next.js frontends to Node.js and microservices backends. Currently shipping a production multi-agent AI system at a YC-backed startup; bringing that same AI-native, product-outcome mindset to Praktika.ai's 2M MAU language learning platform. Proven lead on TypeScript stacks across multiple growth-stage companies, with deep expertise in auth integrations, analytics pipelines, and A/B-driven product delivery.",
    summaryEs: "Líder de ingeniería full-stack con 15 años. Actualmente entregando un sistema multi-agente de IA en producción en una startup YC; aplicando ese mismo enfoque AI-native a la plataforma de aprendizaje de idiomas de Praktika.ai con 2M MAU.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · React · Next.js · Node.js · auth integrations · analytics · A/B testing · AI systems",       val_es: "TypeScript · React · Next.js · Node.js · integraciones auth · analytics · sistemas IA" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Full-stack lead with AI-native product experience — 2M MAU scale mindset, growth-stage startup delivery",        val_es: "Full-stack lead con experiencia en producto AI-native — escala 2M MAU, entrega en startup de crecimiento" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Lead/Senior Full-Stack Engineer · Remote",                                                                       val_es: "Lead/Senior Full-Stack Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j082 — Toptal
  "f7db6508-13bd-4997-a004-ccf87d72f4a8": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Frontend Engineer" },
    summary: "Senior frontend engineer with a 15-year career building production systems with React, TypeScript, Apollo GraphQL, and Jest — from greenfield platforms to high-throughput distributed architectures. Architect of a custom state management engine for a low-code ESG platform and an 8-agent AI monitoring system in production. Operates independently, delivers asynchronously, and connects technical work directly to measurable business outcomes.",
    summaryEs: "Ingeniero frontend senior con 15 años construyendo sistemas de producción con React, TypeScript, Apollo GraphQL y Jest. Arquitecto de un motor de state management personalizado para una plataforma low-code y un sistema de monitorización IA de 8 agentes en producción.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr) · Apollo GraphQL (5yr) · Jest (7yr expert) · Next.js · Node.js",          val_es: "React (experto) · TypeScript · Apollo GraphQL · Jest (experto) · Next.js" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Expert React/TS/Apollo/Jest depth — custom state engine, AI systems in production, async independent delivery",  val_es: "Profundidad experta React/TS/Apollo/Jest — motor de estado personalizado, IA en producción, entrega asíncrona" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Senior Frontend Engineer · Contract · Remote",                                                                   val_es: "Senior Frontend Engineer · Contrato · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j083 — Invopop (Staff, Backend focus)
  "9726a8ec-8036-4bb6-839d-4489a1e0442a": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Product Engineer" },
    summary: "Backend-oriented engineering leader with a 15-year career designing distributed systems, REST APIs, and event-driven microservices at production scale. Proven track record of end-to-end integrations ownership — 12 years building, scaling, and operating API-first platforms across multiple product companies. Currently closing the Go gap via a dedicated sprint; TypeScript/Node.js and C#/.NET provide the statically-typed, compiled-language foundation that makes the paradigm shift concrete.",
    summaryEs: "Líder de ingeniería orientado al backend con 15 años diseñando sistemas distribuidos, APIs REST y microservicios event-driven a escala de producción. Historial demostrado de 12 años en propiedad end-to-end de integraciones. Actualmente cerrando el gap de Go mediante un sprint dedicado.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "Node.js (8yr) · NestJS · REST APIs (12yr expert) · EDA · CQRS · distributed systems · .NET/C# · TypeScript",   val_es: "Node.js · NestJS · APIs REST (experto 12 años) · EDA · CQRS · sistemas distribuidos · .NET/C#" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Backend-oriented Staff engineer — 12yr integrations ownership, distributed systems depth, Go gap closing actively", val_es: "Staff engineer orientado al backend — 12 años propiedad de integraciones, sistemas distribuidos, cerrando gap Go" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Staff Product Engineer · Remote",                                                                val_es: "Staff Product Engineer (Backend) · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j084 — pubGENIUS
  "fc9c9adc-660d-4064-9c7a-080a55fbed85": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Principal Software Engineer (React + Node)" },
    summary: "Full-stack engineering leader with a 15-year career building production systems — from high-throughput data pipelines to React SSR frontends — and the teams that ship them. Expert in TypeScript, React, and Node.js, with a track record of scaling throughput 5×, cutting infrastructure costs 30%, and turning engineering into a measurable commercial engine. Brings production Node.js/NestJS API depth, MySQL expertise, and GCP-transferable multi-cloud experience to a Principal IC role where output quality and latency matter at scale.",
    summaryEs: "Líder de ingeniería full-stack con 15 años construyendo sistemas de producción — desde pipelines de alto throughput hasta frontends React SSR. Experto en TypeScript, React y Node.js. Historial de 5× throughput, 30% reducción de costes, MySQL y GCP multi-cloud.",
    now: [
      { lbl: "Stack match",   lbl_es: "Stack",         val: "TypeScript (9yr) · React (7yr) · Node.js/NestJS (8yr) · MySQL · BigQuery · GCP · Cloud Run · Fastify",          val_es: "TypeScript · React · Node.js/NestJS · MySQL · BigQuery · GCP · Cloud Run" },
      { lbl: "What I bring",  lbl_es: "Lo que aporto", val: "Full-stack Principal IC — ad-serving latency mindset, Node/React/MySQL depth, 5× throughput track record",      val_es: "Principal IC full-stack — mentalidad de latencia, profundidad Node/React/MySQL, historial 5× throughput" },
      { lbl: "Open to",       lbl_es: "Abierto a",     val: "Principal Software Engineer · Remote",                                                                           val_es: "Principal Software Engineer · Remoto" },
      { lbl: "Available",     lbl_es: "Disponible",    val: "Immediate",                                                                                                      val_es: "Inmediata" },
    ],
  },

  // j085 — Joko
  "39ffb375-c291-4b6f-8d07-494c90203478": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Software Engineer (Senior/Staff Level)" },
    summary: "Full-stack engineering leader with 15-year career of end-to-end ownership across complex, ambitious production systems — from document-processing pipelines to multi-agent AI architectures. Brings staff-level technical direction and mentoring to product-driven teams, connecting engineering decisions directly to commercial outcomes: 5× throughput increase, 30% cost reduction, onboarding from 6 weeks to 2. Currently building and operating production AI systems (Claude-based, 8-agent) that run real-time data analysis, infrastructure monitoring, and process health evaluation — the same analytical, extraction-driven AI challenges Joko is tackling at scale.",
    summaryEs: "Líder de ingeniería full-stack con 15 años de ownership end-to-end en sistemas en producción — desde pipelines de procesamiento de documentos hasta arquitecturas de IA multi-agente. Conecta decisiones técnicas con resultados comerciales: 5× throughput, 30% reducción de costes, onboarding de 6 semanas a 2. Actualmente construye y opera sistemas de IA en producción (8 agentes, Claude) que ejecutan análisis de datos en tiempo real, monitoreo de infraestructura y evaluación de salud de procesos.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "JavaScript (expert) · TypeScript (expert) · Python · C# · Node.js · React · Multi-agent AI (Claude API)", val_es: "JavaScript (experto) · TypeScript (experto) · Python · C# · Node.js · React · IA multi-agente (Claude API)" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Staff-level IC + leadership — end-to-end ownership, AI systems in production, analytical extraction at scale", val_es: "IC + liderazgo a nivel Staff — ownership end-to-end, sistemas de IA en producción, extracción analítica a escala" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Software Engineer (Senior/Staff Level) · Remote", val_es: "Software Engineer (Senior/Staff Level) · Remoto" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },
};

export default jobs;
