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

  // j086 — Factorial (Engineering Manager)
  "311c1250-3971-4874-9549-098715474a64": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Engineering Manager" },
    summary: "Engineering Manager with 15 years of full-stack experience and 7 years leading engineering teams — most recently at a YC-backed company where I built and shipped an 8-agent AI system in production, reduced infrastructure costs by 30%, and grew feature delivery from 2–3 to 10–15 releases per year. I bring hands-on AI-native credentials (Claude API, multi-agent orchestration, LLM evaluation and hot-balancing in production) alongside a track record of growing teams from scratch, designing REST/GraphQL APIs at scale, and connecting technical decisions directly to customer and business outcomes. I work best in fast-paced, ownership-driven environments where shipping and learning happen together.",
    summaryEs: "Engineering Manager con 15 años de experiencia full-stack y 7 años liderando equipos de ingeniería — más recientemente en una empresa respaldada por YC donde construí y lancé un sistema de 8 agentes de IA en producción, reduje costes de infraestructura un 30% y crecí la entrega de features de 2–3 a 10–15 por año. Aporto credenciales AI-native reales (Claude API, orquestación multi-agente, evaluación y hot-balancing de LLMs en producción) junto con un historial de construcción de equipos, diseño de APIs REST/GraphQL a escala y conexión de decisiones técnicas con resultados de negocio.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Engineering management · AI-native (Claude API, 8-agent prod) · React (7yr) · TypeScript (9yr) · Node.js/NestJS · REST/GraphQL · AWS · Microservices",  val_es: "Gestión de ingeniería · AI-native (Claude API, 8 agentes en prod) · React · TypeScript · Node.js/NestJS · REST/GraphQL · AWS · Microservicios" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "EM with hands-on AI production depth — 7yr team leadership, 5× throughput, 30% cost reduction, feature delivery 5×", val_es: "EM con profundidad de IA en producción — 7 años liderazgo de equipos, 5× throughput, 30% reducción de costes, entrega 5×" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Engineering Manager · Madrid (hybrid)", val_es: "Engineering Manager · Madrid (híbrido)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // ── Batch 20261001-b2k7 — IC Technical pivot ───────────────────────────────

  // j088 — Ashby / Software Engineer
  "5df4acff-43c1-4336-a41e-41b2595e0f98": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Software Engineer · TypeScript & React" },
    summary: "Software engineer with 15 years of production TypeScript and React experience — currently building banking infrastructure at Embat and previously Staff Engineer at Invofox (YC S22). I own complex product surfaces end-to-end, from React component architecture and GraphQL API design through to backend services and infrastructure. I've shipped an 8-agent production AI system and 5× pipeline throughput improvements. I write production-quality TypeScript at expert depth.",
    summaryEs: "Ingeniero de software con 15 años en TypeScript y React en producción — actualmente en infraestructura bancaria en Embat y anteriormente Staff Engineer en Invofox (YC S22). Entrego superficies de producto complejas de extremo a extremo: arquitectura React, APIs GraphQL, servicios backend e infraestructura.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript (9yr expert) · React (7yr expert) · Node.js (8yr) · GraphQL · GCP · CI/CD", val_es: "TypeScript (9 años, experto) · React · Node.js · GraphQL · GCP · CI/CD" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Expert TypeScript/React + production AI systems (8-agent Claude API) + 15yr IC track record", val_es: "TypeScript/React experto + sistemas de IA en producción (8 agentes) + 15 años de IC" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Software Engineer · Staff Engineer · Remote or Hybrid", val_es: "Software Engineer · Staff Engineer · Remoto o Híbrido" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j089 — Triple / Senior Software Engineer
  "5c1d11ab-fa57-48e8-8296-c24be0db72a8": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Software Engineer · Fintech" },
    summary: "Senior software engineer with 15 years of production experience in fintech and financial infrastructure — currently building banking connectivity services at Embat (treasury management & banking platform) and previously at Invofox (YC S22) where I 5×-ed pipeline throughput and built an 8-agent production AI system. Strong Node.js/NestJS backend, React/Next.js frontend, GCP cloud infrastructure, and deep fintech domain context.",
    summaryEs: "Ingeniero senior con 15 años en fintech e infraestructura financiera — actualmente en Embat (gestión de tesorería y plataforma bancaria) y anteriormente en Invofox (YC S22). Backend Node.js/NestJS sólido, frontend React/Next.js, GCP y profundo contexto de dominio fintech.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · NestJS · React · Next.js · TypeScript · GCP · PostgreSQL · Fintech domain", val_es: "Node.js · NestJS · React · Next.js · TypeScript · GCP · PostgreSQL · Fintech" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Banking infrastructure depth + 5× pipeline throughput + production AI orchestration", val_es: "Infraestructura bancaria + 5× throughput de pipeline + orquestación de IA en producción" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Software Engineer · Fintech · Remote", val_es: "Senior Software Engineer · Fintech · Remoto" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j090 — Checkly / Senior Software Engineer
  "c876862c-74cb-4667-b6e8-28cdc6783347": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Software Engineer · DevTools & AI" },
    summary: "Senior software engineer with 15 years of production experience, currently building infrastructure services at Embat and previously leading engineering at Invofox (YC S22) — where I designed and built 'The Hive Mind', an 8-agent AI system for production reliability monitoring, failure detection, and operational intelligence. I bring deep Node.js/TypeScript backend expertise, React frontend depth, and hands-on experience shipping AI-powered developer tooling. I've worked in developer-first product environments and understand what makes a great DX.",
    summaryEs: "Ingeniero senior con 15 años en producción, construyendo servicios de infraestructura en Embat y anteriormente en Invofox donde diseñé y construí un sistema de 8 agentes de IA para monitorización de fiabilidad y detección de fallos.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · TypeScript · React · GCP · AI reliability systems · Claude API · CI/CD", val_es: "Node.js · TypeScript · React · GCP · Sistemas de fiabilidad con IA · Claude API · CI/CD" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Production AI reliability tooling (8-agent system) + Node.js/TypeScript expert + DevTools sensibility", val_es: "Herramientas de fiabilidad AI en producción (8 agentes) + Node.js/TypeScript experto + sensibilidad DevTools" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Software Engineer · DevTools · Remote", val_es: "Senior Software Engineer · DevTools · Remoto" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j091 — OpenAI / Forward Deployed Engineer
  "6474bb04-c59b-4519-9872-b8a8fe656295": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer · AI Systems" },
    summary: "Engineer with 15 years of production experience deploying AI systems into real operational environments. At Invofox (YC S22) I designed, built, and shipped 'The Hive Mind' — an 8-agent production AI system using the Claude API that gave non-engineering teams full self-service operational intelligence. I write Python and TypeScript, lead complex end-to-end technical implementations, and communicate clearly to both engineering and executive audiences. Native Spanish, professional English — the right combination for a Madrid FDE role.",
    summaryEs: "Ingeniero con 15 años desplegando sistemas de IA en entornos operativos reales. En Invofox diseñé y lancé un sistema de 8 agentes con Claude API que dio a equipos no técnicos autonomía operativa completa. Español nativo, inglés profesional.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Python · TypeScript · LLMs in production · 8-agent Claude API system · end-to-end delivery · Spanish + English", val_es: "Python · TypeScript · LLMs en producción · Sistema 8 agentes · Entrega E2E · Español + Inglés" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Production AI deployment track record + customer-facing implementation experience + bilingual (ES/EN)", val_es: "Historial de despliegue de IA en producción + experiencia en implementación con clientes + bilingüe" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Engineer · AI Systems · Madrid", val_es: "Forward Deployed Engineer · Sistemas de IA · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j092 — Trading 212 / Staff Frontend Engineer
  "21467264-6b1c-4077-9ca9-99bd3e7fa21b": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Frontend Engineer · Monorepo & Design Systems" },
    summary: "Staff-level frontend engineer with 15 years of production React and TypeScript experience, including hands-on architecture of monorepo-based frontend platforms, design systems, and shared component libraries. At Sygris I designed a proprietary state management system from scratch, reduced portal load time 83%, and cut deployment cycles by 95% through API contract redesign. At Embat I contribute to a Turborepo monorepo with shared tooling and DX. I work across platform-level frontend challenges while staying connected to product delivery.",
    summaryEs: "Ingeniero frontend Staff con 15 años en React y TypeScript en producción — arquitectura de monorepos, sistemas de diseño y librerías de componentes compartidas. En Sygris diseñé un sistema de gestión de estado propietario desde cero y reduje los tiempos de carga en un 83%.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React (7yr expert) · TypeScript (9yr expert) · Turborepo · monorepo · design systems · Jest · Playwright", val_es: "React (7 años, experto) · TypeScript · Turborepo · monorepo · sistemas de diseño · Jest · Playwright" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Custom state engine from scratch + 83% load time improvement + Turborepo monorepo experience (current)", val_es: "Motor de estado desde cero + mejora de carga 83% + experiencia en monorepo Turborepo (actual)" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Frontend Engineer · Remote or Hybrid", val_es: "Staff Frontend Engineer · Remoto o Híbrido" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j093 — Mimica / Staff Fullstack Engineer
  "130ca00d-4af5-409d-ac22-98671a483cd7": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Fullstack Engineer · React & AI Systems" },
    summary: "Staff-level fullstack engineer with 15 years of production experience including the design and implementation of a custom state management system from scratch for a complex data-visualization-heavy domain — direct prior art for Mimica's Mapper Team. At Sygris I owned the entire frontend architecture: custom state engine, entity model redesign (1–2min → 10s load times), and real-time collaborative data management interfaces. At Invofox I built AI systems using Claude API in production.",
    summaryEs: "Ingeniero fullstack Staff con 15 años, incluyendo el diseño e implementación de un sistema de gestión de estado personalizado desde cero para un dominio intensivo en visualización de datos — prior art directo para el equipo Mapper de Mimica.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · custom state management · Node.js · AI systems (Claude API) · data visualization", val_es: "React · TypeScript · gestión de estado personalizada · Node.js · Sistemas de IA · visualización de datos" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Custom state engine from scratch + complex domain visualization experience + production AI systems", val_es: "Motor de estado desde cero + visualización de dominios complejos + sistemas de IA en producción" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Fullstack Engineer · Remote or Hybrid", val_es: "Staff Fullstack Engineer · Remoto o Híbrido" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j094 — bunch / Staff Frontend Engineer
  "73a52be7-92b2-43ca-840a-5dcecb660abf": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Frontend Engineer · React Architecture" },
    summary: "Staff-level frontend engineer with 15 years of production React and TypeScript experience — including leading framework migrations, owning design systems, and driving architectural improvements across teams. At Sygris I led the frontend architecture of a greenfield low-code platform: custom state management system from scratch, 83% load time improvement, design system standards across the team. I bring React depth, NestJS/Node.js backend familiarity, and AI-augmented engineering experience.",
    summaryEs: "Ingeniero frontend Staff con 15 años en React y TypeScript en producción — incluyendo migraciones de frameworks, sistemas de diseño y mejoras arquitectónicas. En Sygris lideré la arquitectura frontend de una plataforma low-code desde cero.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React (7yr expert) · TypeScript · NestJS · design systems · DX · monorepo (Turborepo) · AI-augmented eng", val_es: "React (7 años, experto) · TypeScript · NestJS · sistemas de diseño · DX · monorepo · ingeniería aumentada con IA" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "React architecture depth + framework migration leadership + design system ownership + AI engineering", val_es: "Profundidad en arquitectura React + liderazgo de migración de frameworks + ownership de sistema de diseño" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Frontend Engineer · Remote or Hybrid", val_es: "Staff Frontend Engineer · Remoto o Híbrido" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j095 — Elastic / Senior Software Engineer - SSC
  "4d79ea87-f4eb-4ec7-b0cc-3bb2dc86a85b": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Software Engineer · Self-Service & AI" },
    summary: "Full-stack engineer with 15 years of production experience building self-service product flows, onboarding experiences, and agentic interfaces in React, TypeScript, and Node.js. At Invofox (YC S22) I built AI-native tooling — including an 8-agent agentic system — that gave non-technical users complete self-service operational intelligence with no engineering involvement. Strong RESTful API, NoSQL, and cloud integration experience across GCP and AWS-equivalent patterns.",
    summaryEs: "Ingeniero full-stack con 15 años construyendo flujos de autoservicio, experiencias de onboarding e interfaces agénticas en React, TypeScript y Node.js. En Invofox construí un sistema de 8 agentes que dio a usuarios no técnicos autonomía operativa completa.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Node.js · REST APIs · NoSQL · agentic interfaces · cloud integrations · GCP", val_es: "React · TypeScript · Node.js · REST APIs · NoSQL · interfaces agénticas · integraciones cloud · GCP" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Self-service onboarding UX + 8-agent production AI system + cloud integration depth", val_es: "UX de onboarding en autoservicio + sistema de 8 agentes en producción + profundidad en integraciones cloud" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Software Engineer · Remote", val_es: "Senior Software Engineer · Remoto" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j096 — Dwelly / Staff Software Engineer
  "2a0f1342-1f0c-4eb1-93e6-91427b710022": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Software Engineer · AI & Agentic Systems" },
    summary: "Staff-level engineer with 15 years building full-stack production systems in TypeScript, React, and Node.js — with hands-on experience shipping agentic AI systems. At Invofox I designed 'The Hive Mind': an 8-agent production AI system automating operational intelligence for an AI-first platform. At Embat I work on AI-assisted banking connectivity services. I bring startup mentality, full-stack depth, and the architectural judgment to build for scale from day one.",
    summaryEs: "Ingeniero Staff con 15 años construyendo sistemas full-stack en TypeScript, React y Node.js — con experiencia desplegando sistemas de IA agénticos. En Invofox diseñé un sistema de 8 agentes y en Embat trabajo en conectividad bancaria asistida por IA.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · React · Node.js · tRPC (paradigm) · PostgreSQL · AI/agentic workflows · startup mentality", val_es: "TypeScript · React · Node.js · tRPC (paradigma) · PostgreSQL · Flujos agénticos con IA · mentalidad startup" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "AI-native + full-stack + startup pace — 8-agent production system + 5× pipeline throughput", val_es: "AI-native + full-stack + ritmo startup — sistema de 8 agentes en producción + 5× throughput de pipeline" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Software Engineer · Remote (Spain)", val_es: "Staff Software Engineer · Remoto (España)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j097 — Toggl / Senior Full Stack Engineer
  "1a3c804d-b0e2-4fd7-a954-6df564b49cb6": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Full Stack Engineer · Async & Results-Based" },
    summary: "Full-stack engineer with 15 years of production experience owning product domains end-to-end — dashboards, planning tools, reporting interfaces, backend pipelines, and infrastructure. At Invofox I owned the full stack for a financial automation platform with real-time dashboards, Node.js/NestJS backend, PostgreSQL, and an 8-agent AI system. I work results-first in async environments with genuine AI fluency. Backend is Node.js rather than Go, but the patterns are directly transferable.",
    summaryEs: "Ingeniero full-stack con 15 años de experiencia en dominios de producto de extremo a extremo — dashboards, herramientas de planificación, pipelines backend e infraestructura. Trabajo primero en resultados en entornos async.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Node.js · PostgreSQL · AI fluency (8-agent prod) · async · end-to-end ownership", val_es: "React · TypeScript · Node.js · PostgreSQL · Fluidez en IA (8 agentes en prod) · async · ownership E2E" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Full-stack depth + AI-native + async-first work ethic + production dashboards and reporting", val_es: "Profundidad full-stack + AI-native + ética de trabajo async-first + dashboards y reporting en producción" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Full Stack Engineer · Remote", val_es: "Senior Full Stack Engineer · Remoto" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j098 — MarsBased / Full Stack TypeScript Engineer
  "e152c279-6685-4229-bb13-f532393bdce4": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Full Stack TypeScript Engineer · AI-Augmented Dev" },
    summary: "Full-stack TypeScript engineer with 15 years of production experience and genuine hands-on depth in multi-agent AI workflows — as a builder, not just a user. At Invofox I designed and built an 8-agent agentic system (Claude API) for automated testing, analysis, monitoring, and failure detection. I design prompting strategies, build multi-agent workflows, and work daily with AI coding agents. Strong Node.js/TypeScript backend + React/Next.js frontend + Docker + Jest. Native Spanish, professional English.",
    summaryEs: "Ingeniero TypeScript full-stack con 15 años en producción y profundidad real en flujos de trabajo multi-agente de IA — como constructor, no solo usuario. En Invofox diseñé un sistema de 8 agentes. Español nativo, inglés profesional.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · Node.js · React · Next.js · Docker · Jest · multi-agent AI · prompt engineering · Spanish + EN", val_es: "TypeScript · Node.js · React · Next.js · Docker · Jest · IA multi-agente · Español + Inglés" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "AI workflow builder (not just user) + full-stack TypeScript expert + bilingual + agency-compatible", val_es: "Constructor de flujos de trabajo de IA + experto TypeScript full-stack + bilingüe + compatible con agencia" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Full Stack TypeScript Engineer · Remote (Europe)", val_es: "Ingeniero TypeScript Full Stack · Remoto (Europa)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j099 — ZeinCrew / Forward Deployed Engineer
  "e8140b65-82af-4c36-8bd0-1058c0d142cc": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer · AI & Integrations" },
    summary: "Engineer with 15 years of production experience leading end-to-end implementations in customer-facing environments — system design to org adoption. I write production-quality TypeScript and Python, build integrations, debug production AI systems under pressure, and communicate clearly to non-technical stakeholders. At Invofox I led customer integration implementations and built a production 8-agent AI system with full observability. High autonomy and travel are features.",
    summaryEs: "Ingeniero con 15 años liderando implementaciones E2E en entornos de cara al cliente — desde el diseño del sistema hasta la adopción organizacional. Escribo Python y TypeScript en producción, construyo integraciones y me comunico con stakeholders no técnicos.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · Python · LLMs · AI agents · integrations · production debugging · customer-facing", val_es: "TypeScript · Python · LLMs · Agentes de IA · Integraciones · Debugging en producción · Cara al cliente" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "FDE instinct — end-to-end ownership, customer empathy, production AI deployment, and autonomous execution", val_es: "Instinto FDE — ownership E2E, empatía con clientes, despliegue de IA en producción y ejecución autónoma" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Engineer · AI · Madrid + travel", val_es: "Forward Deployed Engineer · IA · Madrid + viajes" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j100 — Alan / Fullstack Software Engineer - Global Architecture
  "04d14806-71c6-4dfd-be82-b0053e503a19": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Fullstack Engineer · Cross-Cutting Architecture" },
    summary: "Fullstack engineer with 15 years of cross-cutting architecture experience — harmonizing data models, designing shared modules, and removing technical blockers that slow the whole organisation. At Sygris I rebuilt the core entity model and data schema for a complex multi-tenant SaaS platform, cutting load times 83% and deployment cycles 95%. I bring Python, Node.js/NestJS (OOP), React, and PostgreSQL depth alongside a self-starting entrepreneurial mindset. Fluent English; Spanish native.",
    summaryEs: "Ingeniero fullstack con 15 años en arquitectura transversal — armonizando modelos de datos, diseñando módulos compartidos y eliminando bloqueos técnicos. En Sygris reconstruí el modelo de entidad central reduciendo tiempos de carga en un 83%.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Python · Node.js/NestJS (OOP) · React · PostgreSQL · cross-cutting architecture · data model design", val_es: "Python · Node.js/NestJS (OOP) · React · PostgreSQL · Arquitectura transversal · Diseño de modelos de datos" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Cross-cutting architecture track record + entity model redesign expertise + entrepreneurial IC mindset", val_es: "Historial en arquitectura transversal + experiencia en rediseño de modelos de entidad + mentalidad IC emprendedora" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Fullstack Software Engineer · Madrid (flexible)", val_es: "Ingeniero Fullstack · Madrid (flexible)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j101 — NAIIAN / Founding Software Engineer
  "2ddc749a-2659-4b53-8f6b-3d29028a26bd": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Founding Software Engineer · Full-Stack & AI" },
    summary: "Full-stack generalist with 15 years of production B2B/B2G SaaS experience — the 'depth plus breadth' profile a founding engineer role demands. I've built data ingestion and normalization pipelines, complex multi-dimensional data platforms, and production AI agent systems (8-agent Claude API orchestration). Strong judgment on APIs, data models, permissions, and observability. TypeScript/Node.js/NestJS backend, React/Next.js frontend, PostgreSQL/Aurora-compatible, Terraform on GCP.",
    summaryEs: "Generalista full-stack con 15 años en SaaS B2B/B2G en producción — el perfil de 'profundidad más amplitud' que demanda un rol de ingeniero fundador. Pipelines de ingesta y normalización de datos, plataformas de datos multidimensionales y sistemas de agentes de IA en producción.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · Node.js · NestJS · React · Next.js · PostgreSQL · Python · Terraform · AI agents (LangGraph-equiv)", val_es: "TypeScript · Node.js · NestJS · React · Next.js · PostgreSQL · Python · Terraform · Agentes de IA" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Founding engineer instinct — full-stack, data pipelines, AI agents, infrastructure, production SaaS from zero", val_es: "Instinto de ingeniero fundador — full-stack, pipelines de datos, agentes de IA, infraestructura, SaaS en producción desde cero" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Founding Software Engineer · Madrid (onsite)", val_es: "Ingeniero Fundador · Madrid (presencial)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j102 — Accenture España / Forward Deployed Engineer - AI Platforms
  "0aafbc18-0ab5-4788-8df3-584930d5cd7a": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer · AI Platform Deployment" },
    summary: "Engineer with 15 years of production experience deploying and operationalizing AI systems — specifically on the Anthropic/Claude API stack, one of the platforms Accenture's FDE team works with. I designed and built a production 8-agent agentic system that delivered measurable business outcomes. I bring cloud-native expertise (GCP, Terraform, Docker, Kubernetes), production CI/CD and monitoring, and the ability to communicate business impact clearly to executive stakeholders.",
    summaryEs: "Ingeniero con 15 años desplegando y operacionalizando sistemas de IA — específicamente en el stack Anthropic/Claude API. Diseñé y construí un sistema de 8 agentes en producción con resultados de negocio medibles. Experto en cloud-native (GCP, Terraform, Docker, Kubernetes).",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Anthropic API · cloud-native · microservices · Terraform · Docker · Kubernetes · CI/CD · Grafana · Sentry", val_es: "Anthropic API · cloud-native · microservicios · Terraform · Docker · Kubernetes · CI/CD · Grafana · Sentry" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Anthropic production deployment depth + business impact quantification + enterprise technical communication", val_es: "Profundidad en despliegue Anthropic en producción + cuantificación de impacto de negocio + comunicación técnica empresarial" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Engineer · AI Platforms · Madrid", val_es: "Forward Deployed Engineer · Plataformas de IA · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j103 — Mercedes-Benz / Software Architect / Tech Lead
  "1ca9a0df-ae2c-450e-9bc5-4e0e669e8bcf": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Software Architect / Tech Lead · TypeScript & React" },
    summary: "Software architect and tech lead with 15 years as the technical reference for engineering teams — designing system architecture, driving code quality, and mentoring engineers. At Sygris I was the sole architectural decision-maker for a greenfield SaaS platform built on React, TypeScript, Node.js, REST APIs, and PostgreSQL — the exact stack Mercedes-Benz uses. I bring full-stack depth and team leadership experience for a hybrid, Agile technical reference role.",
    summaryEs: "Arquitecto de software y tech lead con 15 años como referencia técnica para equipos de ingeniería — diseño de arquitectura, calidad de código y mentoría. En Sygris fui el único tomador de decisiones arquitectónicas para una plataforma SaaS desde cero.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · React · Node.js/NestJS · REST APIs · PostgreSQL · Redis · Docker · CI/CD", val_es: "TypeScript · React · Node.js/NestJS · REST APIs · PostgreSQL · Redis · Docker · CI/CD" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Greenfield SaaS architecture track record + full-stack depth + technical reference leadership + code review", val_es: "Historial de arquitectura SaaS desde cero + profundidad full-stack + liderazgo técnico de referencia + revisión de código" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Software Architect / Tech Lead · Madrid (hybrid)", val_es: "Arquitecto de Software / Tech Lead · Madrid (híbrido)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j104 — Palantir Technologies / Forward Deployed Software Engineer
  "d87df9f8-923e-467d-a6e6-fc1bce116541": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Software Engineer" },
    summary: "Engineer with 15 years of production experience owning end-to-end technical execution in customer-facing environments — architecture discussions through production custom applications and executive strategy. I write TypeScript and Python, build custom web applications on demand, and communicate technical system design clearly to both engineering and non-technical audiences. Complex data problems — transaction systems, document pipelines, financial analytics — are my domain. Native Spanish.",
    summaryEs: "Ingeniero con 15 años de ejecución técnica E2E en entornos de cara al cliente — desde discusiones de arquitectura hasta aplicaciones web personalizadas y estrategia ejecutiva. Escribo TypeScript y Python, construyo apps web a medida y comunico diseño de sistemas a audiencias técnicas y no técnicas. Español nativo.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · Python · React · complex data systems · end-to-end delivery · executive communication · Spanish", val_es: "TypeScript · Python · React · sistemas de datos complejos · entrega E2E · comunicación ejecutiva · Español" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "FDE execution track record + complex data problem ownership + bilingual (ES/EN) + custom app delivery speed", val_es: "Historial de ejecución FDE + ownership de problemas de datos complejos + bilingüe + velocidad de entrega de apps a medida" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Software Engineer · Madrid + travel", val_es: "Forward Deployed Software Engineer · Madrid + viajes" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j105 — Indra Group / Front-End Architecture Lead
  "6ff8b6ed-7fd8-4e9f-9b44-bda910be0bdb": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Front-End Architecture Lead · Angular & TypeScript" },
    summary: "Frontend architect with 15 years of professional experience — including 10 years hands-on with Angular. I've served as the technical architecture lead for frontend teams at three consecutive companies: defining SPA architecture, Angular/RxJS patterns, code quality standards, and DX, while collaborating with backend, QA, and UX. At Sygris I designed the frontend architecture of a complex low-code ESG platform from scratch, built a proprietary state management system, and reduced portal load times 83%.",
    summaryEs: "Arquitecto frontend con 15 años de experiencia profesional — incluyendo 10 años con Angular. He sido el líder de arquitectura técnica frontend en tres empresas consecutivas: definiendo arquitectura SPA, patrones Angular/RxJS, estándares de calidad y DX.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Angular/AngularJS (10yr expert) · TypeScript · RxJS · SPA architecture · Angular CLI · REST APIs · HTML/CSS", val_es: "Angular/AngularJS (10 años, experto) · TypeScript · RxJS · Arquitectura SPA · Angular CLI · REST APIs" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "10yr Angular expertise + 3 companies as frontend architecture lead + custom state engine from scratch", val_es: "10 años de expertise en Angular + 3 empresas como líder de arquitectura frontend + motor de estado desde cero" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Front-End Architecture Lead · Madrid (hybrid)", val_es: "Líder de Arquitectura Front-End · Madrid (híbrido)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j106 — Moove Cars / Senior SE Tech Lead
  "6d17456b-48d7-48c1-b261-52cf486046ad": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior SE Tech Lead · Architecture & GenAI" },
    summary: "Tech lead and senior engineer with 15 years of production experience in technical architecture, Agile team leadership, React/TypeScript frontend, and applied AI/GenAI. I've designed and built Kubernetes-orchestrated microservice architectures and shipped a production 8-agent GenAI system. Background includes 6 years of C# from earlier enterprise roles. Primary backend is Node.js/TypeScript; the Azure/.NET 8 stack is a gap but architecturally close.",
    summaryEs: "Tech lead e ingeniero senior con 15 años en arquitectura técnica, liderazgo Agile, frontend React/TypeScript y GenAI aplicado. He diseñado arquitecturas de microservicios en Kubernetes y lanzado un sistema de 8 agentes GenAI en producción.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Kubernetes · Docker · Terraform · GenAI (8-agent prod) · C# background · Agile leadership", val_es: "React · TypeScript · Kubernetes · Docker · Terraform · GenAI (8 agentes) · Background en C# · Liderazgo Agile" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "GenAI production system + tech architecture leadership + Kubernetes microservices + C# foundation for .NET onboarding", val_es: "Sistema GenAI en producción + liderazgo de arquitectura técnica + microservicios en Kubernetes + base en C# para .NET" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior SE Tech Lead · Madrid (hybrid)", val_es: "Senior SE Tech Lead · Madrid (híbrido)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j107 — Aircall / Front End / Fullstack Engineer, Messaging Team
  "d9f53b70-67ca-4c53-a5e5-9a471fe8a758": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Frontend / Fullstack Engineer · Event-Driven Systems" },
    summary: "Fullstack engineer with 15 years of production experience in React, TypeScript, and Node.js — with event-driven, real-time architecture experience. At Invofox I designed event-driven document processing pipelines (GCP Pub/Sub) and built real-time operational dashboards. Strong Node.js/NestJS backend (8yr), React/TypeScript frontend, and cloud-native GCP experience equivalent to AWS Lambda/AppSync patterns. Fluent English.",
    summaryEs: "Ingeniero fullstack con 15 años en React, TypeScript y Node.js — con experiencia en arquitecturas event-driven y en tiempo real. En Invofox diseñé pipelines de procesamiento event-driven y dashboards operacionales en tiempo real.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Node.js · event-driven (GCP Pub/Sub) · PostgreSQL · real-time systems · CI/CD", val_es: "React · TypeScript · Node.js · Event-driven (GCP Pub/Sub) · PostgreSQL · Sistemas en tiempo real · CI/CD" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Event-driven architecture experience + React/TS/Node.js depth + real-time dashboard delivery + 8yr backend", val_es: "Experiencia en arquitectura event-driven + profundidad React/TS/Node.js + dashboards en tiempo real + 8 años de backend" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Frontend / Fullstack Engineer · Remote", val_es: "Ingeniero Frontend / Fullstack · Remoto" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j108 — Yuno / Staff Engineer - Client Experience
  "d0142c51-7341-4c30-9fca-adcadc4105d1": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Engineer · Fintech & Distributed Systems" },
    summary: "Staff engineer with 15 years of production experience in fintech platforms, distributed systems, and scalable backend architecture — currently working on banking infrastructure at Embat. I bring staff-level system design judgment, Kubernetes microservices, PostgreSQL and Redis depth, and demonstrated leadership in complex financial domain engineering. Primary backend is Node.js/TypeScript; Go/Kotlin is a gap but distributed systems patterns transfer directly.",
    summaryEs: "Ingeniero Staff con 15 años en plataformas fintech, sistemas distribuidos y arquitectura backend escalable — actualmente en infraestructura bancaria en Embat. Traigo juicio de diseño de sistemas a nivel Staff, microservicios en Kubernetes, PostgreSQL y Redis.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js/NestJS · TypeScript · Kubernetes · PostgreSQL · Redis · Docker · Terraform · fintech domain", val_es: "Node.js/NestJS · TypeScript · Kubernetes · PostgreSQL · Redis · Docker · Terraform · Dominio fintech" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Staff-level distributed systems + fintech domain depth + Kubernetes + current banking infrastructure experience", val_es: "Sistemas distribuidos a nivel Staff + profundidad en dominio fintech + Kubernetes + experiencia actual en infraestructura bancaria" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Engineer · Fintech · Remote (Madrid)", val_es: "Staff Engineer · Fintech · Remoto (Madrid)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j109 — Kraken / Senior Software Engineer - Agent Systems
  "0791e634-e6d2-46af-b3c0-701ab3184494": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Software Engineer · Agent Systems & LLMs" },
    summary: "Engineer with 15 years of production experience who has built and shipped multi-agent AI systems from 0→1 in real operational environments. At Invofox (YC S22) I designed and built 'The Hive Mind': an 8-agent production system running LLMs in live inference pipelines — DB reporting, infrastructure monitoring, failure detection — with full orchestration, failure mode handling, and observability. I own the full systems-thinking dimension for agent architectures.",
    summaryEs: "Ingeniero con 15 años que ha construido y lanzado sistemas multi-agente de IA desde 0→1 en entornos operativos reales. En Invofox diseñé un sistema de 8 agentes con LLMs en pipelines de inferencia en vivo, con orquestación completa y observabilidad.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "LLMs in production · multi-agent orchestration · inference pipelines · backend services · observability · 0→1", val_es: "LLMs en producción · Orquestación multi-agente · Pipelines de inferencia · Servicios backend · Observabilidad · 0→1" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "8-agent production system from 0→1 + orchestration + failure modes + LLM benchmarking + internal API integration", val_es: "Sistema de 8 agentes desde 0→1 + orquestación + modos de fallo + benchmarking de LLMs + integración de APIs internas" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Software Engineer · Agent Systems · Madrid", val_es: "Senior Software Engineer · Sistemas de Agentes · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j110 — Super / Staff Software Engineer
  "44d7d358-2dd9-4aa3-a4f7-9fc342942653": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Software Engineer · Distributed Systems" },
    summary: "Staff engineer with 15 years of production experience in distributed systems and cross-team technical initiatives — with fintech background at Embat. I've led cross-cutting improvements affecting dozens of services: API contract redesigns, service decompositions, infrastructure cost reductions (30%). I work with senior engineering leadership on strategic platform planning. Primary backend is Node.js/TypeScript; Go/Erlang is a learning gap but distributed systems fundamentals are native.",
    summaryEs: "Ingeniero Staff con 15 años en sistemas distribuidos e iniciativas técnicas transversales — con background fintech en Embat. He liderado mejoras transversales que afectan a docenas de servicios y trabajo con liderazgo de ingeniería senior.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · Node.js · Kubernetes · Docker · Terraform · GCP · distributed systems · cross-team initiatives", val_es: "TypeScript · Node.js · Kubernetes · Docker · Terraform · GCP · Sistemas distribuidos · Iniciativas transversales" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Staff distributed systems track record + cross-team initiative leadership + fintech context + Go willingness", val_es: "Historial Staff en sistemas distribuidos + liderazgo de iniciativas transversales + contexto fintech + disposición para Go" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Software Engineer · Distributed Systems · Madrid", val_es: "Staff Software Engineer · Sistemas Distribuidos · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j111 — Green Eagle Solutions / Staff Software Engineer
  "5c5e3be9-52e5-41f0-ac17-f219c308461c": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Software Engineer · Platform Architecture" },
    summary: "Staff-level individual contributor with 15 years solving cross-cutting technical challenges, defining engineering standards, and guiding AI-assisted engineering. Deep Angular expertise (10yr), Kubernetes and Terraform hands-on, PostgreSQL and Redis depth, and a genuine track record as an AI-assisted engineering practitioner (8-agent production system). C# background from earlier roles (6yr) makes the .NET primary stack approachable despite Node.js being my current backend home.",
    summaryEs: "Contribuidor individual Staff con 15 años resolviendo desafíos técnicos transversales, definiendo estándares de ingeniería y guiando la ingeniería asistida por IA. Experto en Angular (10 años), Kubernetes, Terraform, PostgreSQL y Redis.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Angular (10yr expert) · TypeScript · Terraform · Kubernetes · PostgreSQL · Redis · AI-assisted eng · C# background", val_es: "Angular (10 años, experto) · TypeScript · Terraform · Kubernetes · PostgreSQL · Redis · Ingeniería asistida por IA" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Angular expert + platform architecture IC + AI-assisted engineering practitioner + engineering standards leadership", val_es: "Experto en Angular + IC en arquitectura de plataforma + practicante de ingeniería asistida por IA + liderazgo de estándares" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Software Engineer · Madrid (hybrid)", val_es: "Staff Software Engineer · Madrid (híbrido)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j112 — Xe.com / Team Lead Software Engineer
  "54b93893-e61f-4d86-aa8b-14678abcb7ca": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Team Lead Software Engineer · Payments & API Platform" },
    summary: "Technical team lead with 15 years of production experience in platform API layers, partner integrations, and end-to-end service delivery. Currently working in banking infrastructure and payment connectivity at Embat. I set technical direction, own delivery, mentor engineers, and lead cross-team initiatives. Backend is Node.js/TypeScript — C# background from earlier roles makes .NET/.NET onboarding realistic. React is primary frontend (equivalent to Vue).",
    summaryEs: "Tech lead con 15 años en capas de API de plataforma, integraciones con socios y entrega de servicios E2E. Actualmente en infraestructura bancaria y conectividad de pagos en Embat. Definir dirección técnica, ownership de entrega y mentoría de ingenieros.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · TypeScript · React · REST APIs · partner integrations · C# background · AWS-equivalent patterns", val_es: "Node.js · TypeScript · React · REST APIs · Integraciones con socios · Background C# · Patrones AWS-equivalentes" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Technical lead + partner API integration track record + payments domain + cross-team initiative leadership", val_es: "Tech lead + historial de integración de APIs de socios + dominio de pagos + liderazgo de iniciativas transversales" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Team Lead Software Engineer · Madrid (hybrid)", val_es: "Team Lead Software Engineer · Madrid (híbrido)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j113 — Xe.com / Full Stack Software Engineer (Senior)
  "abd15d0c-d78c-40db-b3e6-5004b2168932": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Full Stack Software Engineer · Payments" },
    summary: "Senior full-stack engineer with 15 years owning end-to-end technical solutions in payments-adjacent financial platforms. Currently building banking infrastructure at Embat; strong React frontend and Node.js/TypeScript backend. C# background from earlier enterprise roles (6yr). Regulated financial domain experience is current. Architecture decisions, end-to-end ownership, and mentoring are the core of how I work.",
    summaryEs: "Ingeniero full-stack senior con 15 años en soluciones técnicas E2E en plataformas financieras adyacentes a pagos. Actualmente en infraestructura bancaria en Embat. Background en C# (6 años). Experiencia en dominio financiero regulado actual.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · Node.js · TypeScript · PostgreSQL · SQL · microservices · C# background · payments domain", val_es: "React · Node.js · TypeScript · PostgreSQL · SQL · Microservicios · Background C# · Dominio de pagos" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Current financial domain experience + end-to-end ownership + architecture decisions + C# foundation for .NET stack", val_es: "Experiencia actual en dominio financiero + ownership E2E + decisiones de arquitectura + base en C# para stack .NET" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Full Stack Engineer · Madrid (hybrid)", val_es: "Ingeniero Full Stack Senior · Madrid (híbrido)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j114 — Personio / Lead Full Stack Software Engineer
  "b37f282e-a8d4-45f6-a08e-e41840fca3e3": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Lead Full Stack Software Engineer · SaaS Workflows" },
    summary: "Lead full-stack engineer with 15 years building complex SaaS workflows end-to-end in React and Node.js — the exact stack Personio uses. I've built management interfaces for complex, multi-state business processes: financial document workflows, ESG data collection and approval flows, and banking transaction management. Genuine AI fluency: designed and built a production 8-agent AI system. Strong complex workflow experience, SaaS domain, and end-to-end delivery.",
    summaryEs: "Ingeniero full-stack líder con 15 años construyendo flujos de trabajo SaaS complejos E2E en React y Node.js. He construido interfaces de gestión para procesos de negocio multi-estado: flujos de documentos financieros, aprobación de datos y gestión de transacciones bancarias.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · Node.js · TypeScript · NestJS · complex workflow UI · AI fluency (8-agent prod) · SaaS", val_es: "React · Node.js · TypeScript · NestJS · UI de flujos complejos · Fluidez en IA (8 agentes) · SaaS" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Complex SaaS workflow depth + React/Node.js expert + production AI + end-to-end payroll-adjacent delivery", val_es: "Profundidad en flujos de trabajo SaaS complejos + experto React/Node.js + IA en producción + entrega adyacente a nóminas" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Lead Full Stack Software Engineer · Madrid", val_es: "Lead Full Stack Software Engineer · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j115 — Bending Spoons / Software Engineer
  "4696b0f5-7d73-4442-a6d0-c669b4e4f311": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Software Engineer · Full-Stack Generalist & AI" },
    summary: "Full-stack generalist with 15 years of production engineering across diverse stacks — TypeScript, JavaScript, Python, React, Node.js, Angular, GCP — with genuine end-to-end ownership and AI integrated throughout. At Invofox I worked in a small autonomous team with full ownership across backend, frontend, AI systems, and infrastructure. I've shipped 5× pipeline throughput, 30% cost reductions, and an 8-agent production AI system. High drive, strong reasoning, and professional English. Open to initial Milan onboarding.",
    summaryEs: "Generalista full-stack con 15 años en producción a través de stacks diversos — TypeScript, JavaScript, Python, React, Node.js, Angular, GCP — con ownership E2E real e IA integrada. En Invofox trabajé en un equipo pequeño y autónomo con propiedad total.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "TypeScript · JavaScript · Python · React · Node.js · Angular · GCP · AI integrated · diverse stacks · autonomous teams", val_es: "TypeScript · JavaScript · Python · React · Node.js · Angular · GCP · IA integrada · stacks diversos · equipos autónomos" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Full-stack generalist + AI-native + 15yr track record of end-to-end ownership across diverse stacks and problem domains", val_es: "Generalista full-stack + AI-native + 15 años de ownership E2E a través de stacks y dominios de problema diversos" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Software Engineer · Remote (initial months Milan)", val_es: "Software Engineer · Remoto (meses iniciales en Milán)" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // ── Batch 20261008 — j116–j123 ─────────────────────────────────────────────

  // j116 — MyInvestor / Engineering Manager
  "0b8199bd-9bb5-4a89-b270-1a5b8ffebaf3": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Engineering Manager · Fintech Platform" },
    summary: "Engineering Manager with 15 years of production software experience — 8 of them building and leading engineering teams that ship at scale. Has scaled teams from 2 to 10 engineers, driven 5× pipeline throughput improvements, cut infrastructure costs 30%, and accelerated feature delivery from 3/year to 15. Combines hands-on technical depth across full-stack systems with the organisational skills to align engineering output to commercial outcomes. Has architected and shipped production AI systems — including an 8-agent Claude-based platform running real-time monitoring and data analysis.",
    summaryEs: "Engineering Manager con 15 años de experiencia — 8 de ellos liderando equipos de ingeniería que entregan a escala. Ha escalado equipos de 2 a 10 ingenieros, mejorado el throughput 5×, reducido costes de infraestructura un 30% y acelerado la entrega de funcionalidades de 3/año a 15.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Engineering org design · Technical roadmap · AI systems · TypeScript · React · Node.js · GCP", val_es: "Diseño de organización · Roadmap técnico · Sistemas de IA · TypeScript · React · Node.js · GCP" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Track record of building coherent, high-output engineering teams aligned to product and commercial goals", val_es: "Historial de construcción de equipos de ingeniería coherentes y de alto rendimiento alineados con producto y objetivos comerciales" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Engineering Manager · Hybrid Madrid", val_es: "Engineering Manager · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j117 — Experis / PropTech Coliving / Senior Backend Engineer
  "a3f8c21d-5b6e-4d91-8c47-2e9f0a1b3d5c": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Backend Engineer · Distributed Systems" },
    summary: "Full-stack engineer with 15 years of production software experience — 8 of them building distributed backend systems at scale. Scaled a Node.js/Python document processing pipeline 5× to 500 docs/minute, reduced infrastructure costs 30% on GCP, and currently delivering backend services for real-time transaction ingestion and balance calculation across multiple banking APIs at Embat. Brings ownership of REST API design, microservices architecture, and data pipeline engineering alongside the quality culture that keeps backend systems defensible over time.",
    summaryEs: "Ingeniero full-stack con 15 años de experiencia en sistemas backend distribuidos a escala. Escaló un pipeline de procesamiento 5× hasta 500 docs/minuto, redujo costes un 30% en GCP, y actualmente entrega servicios backend para ingesta de transacciones en tiempo real.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · NestJS · Python · REST APIs · microservices · GCP · PostgreSQL · TypeScript", val_es: "Node.js · NestJS · Python · REST APIs · Microservicios · GCP · PostgreSQL · TypeScript" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Distributed backend depth + data pipeline track record + banking domain + production AI systems (8-agent)", val_es: "Profundidad en backend distribuido + historial de pipelines de datos + dominio bancario + sistemas de IA en producción" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Backend Engineer · Hybrid Madrid", val_es: "Senior Backend Engineer · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j118 — XCEED / Staff Software Engineer (Frontend)
  "7e2d9f4a-3c18-4b72-a6e5-8d0c9f2b4e6a": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Software Engineer · Frontend Platform" },
    summary: "Full-stack engineer with 15 years of production software experience — 8 years building frontend systems at staff level. Has designed and owned React/TypeScript architectures from greenfield platforms to high-scale fintech UIs: cut load times from 7s → 3s through microfrontend decomposition, reduced portal load from 1–2 min to 10s through deep model refactoring, and built a proprietary state management system from scratch. Expert-level command of the React ecosystem (Angular 10yr · Vue.js · SolidJS). Also ships across the full stack: Node.js/NestJS backend services and cloud infrastructure.",
    summaryEs: "Ingeniero full-stack con 15 años — 8 de ellos construyendo sistemas frontend a nivel staff. Ha diseñado arquitecturas React/TypeScript desde plataformas greenfield hasta UIs fintech de alta escala. Experto en el ecosistema React. También entrega en el stack completo.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React (8yr expert) · TypeScript · Angular · Vue.js · SolidJS · microfrontends · Node.js · NestJS", val_es: "React (8 años, experto) · TypeScript · Angular · Vue.js · SolidJS · Microfrontends · Node.js · NestJS" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Staff-level frontend architecture + performance track record + proprietary state management + full-stack delivery", val_es: "Arquitectura frontend a nivel staff + historial de rendimiento + sistema de estado propio + entrega full-stack" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Software Engineer · Hybrid Madrid", val_es: "Staff Software Engineer · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j119 — Recodme / Tech Lead (React & Node.js)
  "1b5a8e3c-9d27-4f63-b8a1-5c7e2d0f9b3e": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Tech Lead · React & Node.js" },
    summary: "Tech Lead with 15 years of production software experience — 8 of them leading teams on React and Node.js stacks. Owns full-stack architecture from greenfield ESG platforms to fintech banking infrastructure. Key metrics: portal load from 1–2 min to 10s, deployment cycle from 2 weeks to 2 days, feature delivery from 3/year to 15. Expert-level TypeScript/React on the frontend, Node.js/NestJS on the backend, combined with the team leadership and process discipline to keep engineering aligned to product delivery.",
    summaryEs: "Tech Lead con 15 años de experiencia — 8 de ellos liderando equipos en stacks React y Node.js. Métricas clave: carga de portal de 1-2 min a 10s, ciclo de despliegue de 2 semanas a 2 días, entrega de funcionalidades de 3/año a 15.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React (8yr expert) · TypeScript · Node.js · NestJS · team leadership · architecture ownership", val_es: "React (8 años, experto) · TypeScript · Node.js · NestJS · liderazgo de equipo · ownership de arquitectura" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Tech lead + React/Node.js expert + delivery acceleration track record + mentoring + process improvement", val_es: "Tech lead + experto React/Node.js + historial de aceleración de entrega + mentoría + mejora de procesos" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Tech Lead · Hybrid Madrid", val_es: "Tech Lead · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j120 — ToBeIT / Tech Lead - React + Node
  "4c9d2b7e-6f31-4a85-c2b9-7e4f1a0d8c5b": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Tech Lead · React + Node.js" },
    summary: "Tech Lead with 15 years of production software experience — 8 of them leading teams on React and Node.js stacks. Owns full-stack architecture from greenfield ESG platforms to fintech banking infrastructure. Key metrics: portal load from 1–2 min to 10s, deployment cycle from 2 weeks to 2 days, feature delivery from 3/year to 15. Expert-level TypeScript/React on the frontend, Node.js/NestJS on the backend, combined with the team leadership and process discipline to keep engineering aligned to product delivery.",
    summaryEs: "Tech Lead con 15 años de experiencia — 8 de ellos liderando equipos en stacks React y Node.js. Métricas clave: carga de portal de 1-2 min a 10s, ciclo de despliegue de 2 semanas a 2 días, entrega de funcionalidades de 3/año a 15.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React (8yr expert) · TypeScript · Node.js · NestJS · team leadership · architecture ownership", val_es: "React (8 años, experto) · TypeScript · Node.js · NestJS · liderazgo de equipo · ownership de arquitectura" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Tech lead + React/Node.js expert + delivery acceleration track record + mentoring + process improvement", val_es: "Tech lead + experto React/Node.js + historial de aceleración de entrega + mentoría + mejora de procesos" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Tech Lead · Hybrid Madrid", val_es: "Tech Lead · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j121 — Draiver / Forward Deployed Engineer
  "9f3e7d2b-8a45-4c61-b3d7-2e9a0f5c8b1d": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer · Customer-Facing Technical" },
    summary: "Engineer with 15 years of production software experience — comfortable moving between customer environments, complex technical requirements, and internal engineering teams. Has worked pre-sales, solutioning, and delivery across consulting, SaaS, and scale-up contexts. Designed and shipped production AI systems (Claude-based 8-agent platform), scaled backend infrastructure 5×, and built the technical trust with clients that protects revenue and accelerates adoption. Broad full-stack toolkit (React/TypeScript · Node.js/NestJS · Python · GCP/AWS), strong communication under pressure, rapid diagnosis in unfamiliar environments.",
    summaryEs: "Ingeniero con 15 años de experiencia — cómodo moviéndose entre entornos de clientes, requisitos técnicos complejos y equipos internos. Ha trabajado en pre-ventas, solutioning y entrega en contextos de consultoría, SaaS y scale-ups.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Node.js · NestJS · Python · GCP · AWS · AI systems · pre-sales", val_es: "React · TypeScript · Node.js · NestJS · Python · GCP · AWS · Sistemas de IA · Pre-ventas" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Client-facing technical depth + rapid diagnosis in unknown environments + AI/ML in production + consulting track record", val_es: "Profundidad técnica cara al cliente + diagnóstico rápido en entornos desconocidos + IA/ML en producción + historial de consultoría" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Engineer · Hybrid Madrid", val_es: "Forward Deployed Engineer · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j122 — cloro / Founding Engineer
  "2a6b9e4f-7c38-4d52-a9b6-5e8f3c1d0b7a": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Founding Engineer · 0→1 Builder" },
    summary: "Full-stack engineer with 15 years of production software experience and a repeated pattern of being the technical foundation of a company — at Sygris, Invofox, and Syntax Informática, joined early, owned the architecture, scaled the team, and shipped the product. Has designed greenfield platforms from scratch, scaled infrastructure 5× on Google Cloud, and shipped production AI systems (Claude-based 8-agent platform). Comfortable across the full stack (React/TypeScript · Node.js/NestJS · Python · GCP/AWS), comfortable at 0→1, and has the business instinct — pre-sales, ROI alignment, subscription model design — that early engineering decisions at a startup actually require.",
    summaryEs: "Ingeniero full-stack con 15 años y un patrón repetido de ser la base técnica de una empresa — en Sygris, Invofox y Syntax Informática, se incorporó pronto, fue dueño de la arquitectura, escaló el equipo y entregó el producto.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Node.js · NestJS · Python · GCP · AWS · 0→1 · greenfield · AI systems", val_es: "React · TypeScript · Node.js · NestJS · Python · GCP · AWS · 0→1 · Greenfield · Sistemas de IA" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Founding engineer track record + greenfield architecture + team scaling + business instinct for early-stage decisions", val_es: "Historial como founding engineer + arquitectura greenfield + escalado de equipo + instinto de negocio para decisiones en etapas tempranas" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Founding Engineer · Hybrid Madrid", val_es: "Founding Engineer · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j123 — Orbio AI / Forward Deployed Engineer
  "6d1c8b5e-4a29-4e73-b7c3-9f2e5a0d8b4c": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer · AI-Forward" },
    summary: "Engineer with 15 years of production software experience — combining deep AI/ML system design with the customer-facing and solutioning skills that FDE roles require. Has designed and shipped an 8-agent Claude-based AI platform running real-time infrastructure monitoring, data analysis, and process health evaluation in production; led LLM benchmarking and multi-model hot-balancing strategies; and evaluated model performance trade-offs across the current frontier model landscape (Claude, GPT-6, DeepSeek, GLM). Brings a broad full-stack toolkit and the communication and problem-solving skills to work across customer environments, complex technical requirements, and internal engineering teams.",
    summaryEs: "Ingeniero con 15 años de experiencia — combinando diseño profundo de sistemas AI/ML con las habilidades cara al cliente que requieren los roles FDE. Ha diseñado y entregado una plataforma de 8 agentes basada en Claude. Lidera benchmarking de LLMs y estrategias de hot-balancing multi-modelo.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Claude API · multi-agent systems · LLM benchmarking · React · TypeScript · Node.js · Python · GCP", val_es: "Claude API · Sistemas multi-agente · Benchmarking LLMs · React · TypeScript · Node.js · Python · GCP" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Production AI systems + FDE client skills + LLM multi-model expertise + full-stack delivery + rapid technical diagnosis", val_es: "Sistemas de IA en producción + habilidades FDE con clientes + experiencia multi-modelo LLM + entrega full-stack + diagnóstico técnico rápido" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Engineer · Hybrid or Remote Madrid", val_es: "Forward Deployed Engineer · Híbrido o Remoto Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // ── Batch 20261009 — j124–j130 ─────────────────────────────────────────────

  // j124 — Appinio / Senior Backend Engineer
  "8dea6d7c-d6c8-4c99-b05b-86560d53d370": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Backend Engineer · Node.js + TypeScript" },
    summary: "Full-stack engineer with 15 years of production software experience — 8 years building backend systems at scale. Deep expertise in the Node.js and TypeScript ecosystems: architected distributed document processing pipelines scaled to 500 docs/minute, designed NestJS backend services for fintech-grade banking integrations, and delivered Node.js infrastructure across multiple production systems. Strong command of Express, MongoDB, REST API design, event-driven architecture, and cloud-native patterns on AWS and GCP.",
    summaryEs: "Ingeniero full-stack con 15 años de experiencia en producción — 8 años construyendo sistemas backend a escala. Experto en Node.js, TypeScript, Express y NestJS. Ha diseñado pipelines distribuidos escalados a 500 docs/minuto y servicios backend para integraciones bancarias en fintech.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · NestJS · TypeScript · Express · MongoDB · AWS · Docker · Terraform", val_es: "Node.js · NestJS · TypeScript · Express · MongoDB · AWS · Docker · Terraform" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Backend architecture at scale + distributed systems + Node.js/TypeScript expert + cloud-native delivery", val_es: "Arquitectura backend a escala + sistemas distribuidos + experto Node.js/TypeScript + entrega cloud-native" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Backend Engineer · Remote Madrid", val_es: "Senior Backend Engineer · Remote Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j125 — Cobee by Pluxee / Senior Product Engineer
  "59b03456-c009-491b-9bae-b60e0142f939": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Product Engineer · Full-Stack Node.js + React" },
    summary: "Full-stack product engineer with 15 years of production software experience, owning features end-to-end across backend services, frontend interfaces, and AI-assisted workflows. Has delivered high-scale Node.js/NestJS backend systems — including distributed pipelines handling 500 transactions/minute — and React/TypeScript frontend platforms at fintech scale. Strong command of distributed systems patterns: idempotency, fault tolerance, event-driven architecture, MongoDB, Redis, and PostgreSQL. Daily user of AI coding tools (Claude, GitHub Copilot) to accelerate delivery. Fluent in Spanish and English.",
    summaryEs: "Ingeniero de producto full-stack con 15 años de experiencia — entrega features de extremo a extremo: backend Node.js/NestJS, frontend React/TypeScript, y flujos asistidos por IA. Dominio sólido de sistemas distribuidos, idempotencia, MongoDB, Redis y PostgreSQL.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · NestJS · TypeScript · React · MongoDB · Redis · PostgreSQL · Docker · Kubernetes", val_es: "Node.js · NestJS · TypeScript · React · MongoDB · Redis · PostgreSQL · Docker · Kubernetes" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "End-to-end feature ownership + distributed systems + AI-native developer + full-stack delivery", val_es: "Ownership de features end-to-end + sistemas distribuidos + desarrollador AI-native + entrega full-stack" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Product Engineer · Madrid", val_es: "Senior Product Engineer · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j126 — SGS / AI Native Founding Product & Platform Engineer
  "8a623f21-84df-4229-98af-b4c206cd0dd5": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "AI Native Founding Engineer · Full-Stack + Platform" },
    summary: "Full-stack founding engineer with 15 years of production software experience and a strong AI-native practice. Has built greenfield platforms from scratch: designed and owned a complete low-code ESG platform including proprietary state management, CI/CD pipelines, and cloud infrastructure. Architected an 8-agent Claude-based AI system in production; led LLM benchmarking and multi-model hot-balancing strategies. Expert React/TypeScript frontend, Node.js/TypeScript backend, and hands-on cloud infrastructure (GCP, AWS, Terraform, Docker, Kubernetes). Brings the founding-engineer mindset: architectural ownership from day one, platform thinking, and delivery without process overhead.",
    summaryEs: "Ingeniero fundador full-stack con 15 años de experiencia. Ha construido plataformas greenfield desde cero, diseñado sistemas de IA con 8 agentes en producción, y liderado benchmarking de LLMs. Experto React/TypeScript + Node.js + infraestructura cloud (GCP, AWS, Terraform).",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Node.js · GCP · AWS · Terraform · Docker · Kubernetes · CI/CD · AI agents", val_es: "React · TypeScript · Node.js · GCP · AWS · Terraform · Docker · Kubernetes · CI/CD · agentes IA" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Founding-engineer mindset + full-stack ownership + AI-native + platform architecture + greenfield delivery", val_es: "Mentalidad de fundador + ownership full-stack + AI-native + arquitectura de plataforma + entrega greenfield" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Founding Product & Platform Engineer · Madrid", val_es: "Founding Product & Platform Engineer · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j127 — Ebury / Staff Engineer – Credit & Underwriting
  "c8aa9d5f-b148-4ca2-8349-63b90e6747e5": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Staff Engineer · Financial Systems Architecture" },
    summary: "Staff-level engineer with 15 years of production software experience, specialising in backend systems architecture for financial and fintech domains. Has owned architectural direction for banking connectivity infrastructure at Embat (multi-bank API integrations, real-time transaction processing) and scaled distributed backend systems at Invofox — 5x throughput increase, 30% cost reduction, fintech-grade reliability. Brings the Staff Engineer profile: deep technical judgment, systems thinking across the full lifecycle, and the ability to influence engineering direction beyond individual delivery.",
    summaryEs: "Ingeniero a nivel Staff con 15 años de experiencia, especializado en arquitectura de sistemas backend para dominios financieros y fintech. Ha dirigido conectividad bancaria en Embat y escalado sistemas distribuidos en Invofox. Liderazgo técnico cross-squad y juicio arquitectónico de nivel Staff.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · TypeScript · NestJS · distributed systems · banking APIs · GCP · AWS · Docker", val_es: "Node.js · TypeScript · NestJS · sistemas distribuidos · APIs bancarias · GCP · AWS · Docker" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Staff-level architectural judgment + fintech backend expertise + cross-squad technical leadership + systems lifecycle ownership", val_es: "Juicio arquitectónico nivel Staff + backend fintech + liderazgo técnico cross-squad + ownership del ciclo completo" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Staff Engineer · Hybrid Madrid", val_es: "Staff Engineer · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j128 — GFT / Senior Java Engineer
  "6d6264e2-936d-4178-b499-fc9733f058a3": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Java Engineer · Spring Boot · Microservices" },
    summary: "Java backend engineer with 15 years of production software experience. Strong background in microservices architecture with Spring Boot, TDD and DDD practices, event-driven systems with Kafka, and cloud infrastructure on GCP and AWS. Currently building banking connectivity services at Embat in Java/Spring Boot. Has led engineering teams delivering distributed Java systems at scale in fintech and consulting environments.",
    summaryEs: "Ingeniero Java backend con 15 años de experiencia en producción. Arquitectura de microservicios con Spring Boot, TDD, DDD, Kafka y cloud. Actualmente construyendo servicios de conectividad bancaria en Java/Spring Boot en Embat.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Java · Spring Boot · Kafka · microservices · TDD · DDD · GCP · Docker · CI/CD", val_es: "Java · Spring Boot · Kafka · microservicios · TDD · DDD · GCP · Docker · CI/CD" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Java production engineering + Spring Boot microservices + TDD/DDD discipline + distributed systems at scale + team leadership", val_es: "Ingeniería Java en producción + microservicios Spring Boot + disciplina TDD/DDD + sistemas distribuidos a escala + liderazgo de equipo" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Java Engineer · Madrid", val_es: "Senior Java Engineer · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j129 — Airflows / Forward Deployed Engineer
  "9a88feb9-634a-4b81-bfe4-e54d6573a40b": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer · AI Platform" },
    summary: "Forward-deployed engineer with 15 years of production software experience — combining deep AI agent system design with the discovery-to-production delivery that FDE roles require. Has architected and shipped an 8-agent Claude-based AI platform running real-time operational workflows in production; led LLM benchmarking and multi-model routing in live systems; and cut client onboarding from 6 to 8 weeks to 2 to 3 weeks through hands-on technical engagement. Full-stack range: React/TypeScript frontend, Node.js/NestJS backend, GCP/AWS cloud.",
    summaryEs: "Ingeniero forward-deployed con 15 años de experiencia — diseño de sistemas de IA con agentes + entrega de discovery a producción. Ha construido una plataforma de 8 agentes Claude en producción y reducido el onboarding de clientes de 6 a 8 semanas a 2 a 3 semanas.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Claude API · multi-agent systems · Node.js · NestJS · React · TypeScript · GCP · AWS", val_es: "Claude API · sistemas multi-agente · Node.js · NestJS · React · TypeScript · GCP · AWS" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "AI agent architecture + discovery-to-production delivery + client-facing technical leadership + full-stack range", val_es: "Arquitectura de agentes IA + entrega discovery-to-production + liderazgo técnico cliente + rango full-stack" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Engineer · Madrid", val_es: "Forward Deployed Engineer · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j130 — Esolution & City Hub España / Senior Backend Developer (CTO path)
  "cfacf413-dc70-4a41-a82a-d59c23e7eb29": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Backend Engineer · Node.js + AI · CTO Track" },
    summary: "Senior backend engineer with 15 years of production software experience and a clear architectural leadership trajectory. Deep expertise in Node.js/TypeScript ecosystems and a strong AI integration practice — has designed and shipped multi-agent AI systems integrated directly into production products (8-agent Claude-based platform at Invofox). Hands-on with cloud infrastructure (GCP, Docker/Kubernetes) and enterprise system integrations. Has led engineering teams from 2 to 10 engineers and owned technical roadmaps end-to-end.",
    summaryEs: "Ingeniero backend senior con 15 años de experiencia y trayectoria hacia liderazgo técnico. Experto en Node.js/TypeScript, con práctica sólida en sistemas de IA con agentes integrados en productos reales. Ha escalado equipos de 2 a 10 ingenieros y liderado roadmaps técnicos completos.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · TypeScript · NestJS · GCP · Docker · Kubernetes · AI agents · multi-agent systems", val_es: "Node.js · TypeScript · NestJS · GCP · Docker · Kubernetes · agentes IA · sistemas multi-agente" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Senior backend + AI integration in product + architectural ownership + engineering leadership track record + CTO trajectory", val_es: "Backend senior + IA integrada en producto + ownership arquitectónico + historial de liderazgo + trayectoria CTO" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Backend Engineer (CTO path) · Madrid", val_es: "Senior Backend Engineer (ruta CTO) · Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j131 — Backbase / Senior Engineering Team Lead
  "749bc8fc-9059-49df-a85c-d979a006f7eb": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Engineering Team Lead · Squad Captain" },
    summary: "Engineering leader with 15 years of production experience — combining hands-on technical depth with the people leadership and delivery discipline that Squad Lead roles require. Has led teams from 2 to 10 engineers, driven deployment cycles from 2 weeks to 2 days, and grown feature delivery from 3 to 15 releases per year. Currently shipping production code as Expert Backend Engineer at Embat. Known for maintaining technical depth while managing: opens the IDE, debugs production issues, and unblocks the team directly.",
    summaryEs: "Líder técnico con 15 años de experiencia en producción — combina profundidad técnica real con liderazgo de personas y disciplina de entrega. Ha liderado equipos de 2 a 10 ingenieros, reducido ciclos de despliegue de 2 semanas a 2 días, y multiplicado la entrega de funcionalidades de 3 a 15 por año.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Angular (10yr expert) · React (8yr expert) · TypeScript · Node.js · NestJS · full-stack", val_es: "Angular (10 años, experto) · React (8 años, experto) · TypeScript · Node.js · NestJS · full-stack" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Hands-on tech lead + delivery acceleration + team scaling + AI-native squad leadership", val_es: "Tech lead hands-on + aceleración de entrega + escalado de equipo + liderazgo AI-native" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Engineering Team Lead · Hybrid Madrid", val_es: "Senior Engineering Team Lead · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j132 — Wave Group / Forward Deployed Engineer + AI
  "235bc5f2-c4eb-46bb-8c13-84735f05fbf3": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Forward Deployed Engineer · AI Platform" },
    summary: "Engineer with 15 years of production experience — combining deep AI and multi-agent system design with the customer-facing delivery skills that FDE roles require. Designed and shipped an 8-agent Claude-based AI platform running real-time infrastructure monitoring, data analysis, and process health evaluation in production. Led LLM benchmarking, multi-model hot-balancing, and agentic pipeline design across the current frontier model landscape. Full-stack toolkit: Python, Node.js, React, cloud infrastructure.",
    summaryEs: "Ingeniero con 15 años de experiencia — combina diseño de sistemas de IA y multi-agente con las habilidades de entrega orientada al cliente que requieren los roles FDE.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Python · FastAPI · Node.js · React · LLM/agentic AI · multi-agent orchestration · AWS/GCP", val_es: "Python · FastAPI · Node.js · React · IA agentic · orquestación multi-agente · AWS/GCP" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "FDE track record + AI production systems + client-facing delivery + multi-agent architecture", val_es: "Historial FDE + sistemas de IA en producción + entrega orientada al cliente + arquitectura multi-agente" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Forward Deployed Engineer · Hybrid Madrid/Barcelona", val_es: "Forward Deployed Engineer · Híbrido Madrid/Barcelona" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j133 — Indra Group / Senior Frontend Engineer Vue.js
  "6ab9dec7-7701-44e6-a56a-c4ef480d8dde": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Frontend Engineer · Vue.js" },
    summary: "Frontend engineer with 15 years of production experience across Vue.js, React, and Angular — with deep expertise in complex, data-intensive web applications: dashboards, simulation interfaces, operational systems, and high-criticality UIs. Has led the architecture of a greenfield low-code platform from scratch, implemented proprietary state management systems, and built real-time data flows via WebSockets and event-driven patterns.",
    summaryEs: "Ingeniero frontend con 15 años de experiencia en Vue.js, React y Angular — con profunda experiencia en aplicaciones web complejas e intensivas en datos.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Vue.js · React · Angular · TypeScript · WebSockets · REST APIs · real-time UI", val_es: "Vue.js · React · Angular · TypeScript · WebSockets · REST APIs · UI en tiempo real" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Multi-framework frontend expertise + complex UI architecture + real-time systems + high-criticality delivery", val_es: "Experiencia multi-framework + arquitectura UI compleja + sistemas en tiempo real + entrega de alta criticidad" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Frontend Engineer · Vue.js · Hybrid Madrid", val_es: "Senior Frontend Engineer · Vue.js · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j134 — METRICA / Senior Fullstack Engineer
  "6700b8b9-f2ec-47ae-b409-c6474aba503e": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Fullstack Engineer" },
    summary: "Full-stack engineer with 15 years of production software experience — delivering end-to-end across React, TypeScript, Node.js, NestJS, and cloud infrastructure. Has owned full-stack architecture from greenfield platforms to high-scale fintech systems. Works autonomously on complex implementation tasks and brings the communication and agile discipline that consulting and integration projects require. Fluent in English.",
    summaryEs: "Ingeniero full-stack con 15 años de experiencia — entregando de extremo a extremo en React, TypeScript, Node.js, NestJS e infraestructura cloud.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Node.js · NestJS · PostgreSQL · GCP · AWS · Docker · Kubernetes", val_es: "React · TypeScript · Node.js · NestJS · PostgreSQL · GCP · AWS · Docker · Kubernetes" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Full-stack end-to-end ownership + cloud architecture + measurable delivery track record + English fluency", val_es: "Ownership full-stack + arquitectura cloud + historial de entrega medible + inglés fluido" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Fullstack Engineer · Hybrid Madrid", val_es: "Senior Fullstack Engineer · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j135 — ActioGlobal / Senior Frontend Developer
  "ceee80df-6eb4-4ed8-84a4-4b76d254e465": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Frontend Developer · Component Architecture" },
    summary: "Frontend engineer with 15 years of production experience — expert-level React, Angular, and Vue.js, with deep component architecture ownership across consulting and product environments. Has built and maintained component libraries, design systems, and Storybook-driven component documentation across multiple client projects. Brings the cross-framework breadth that component migration and Web Components projects require.",
    summaryEs: "Ingeniero frontend con 15 años de experiencia — React, Angular y Vue.js a nivel experto, con profunda propiedad de arquitectura de componentes en entornos de consultoría y producto.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · Angular · Vue.js · TypeScript · Web Components · Storybook · component libraries", val_es: "React · Angular · Vue.js · TypeScript · Web Components · Storybook · librerías de componentes" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Multi-framework expertise + component library ownership + Storybook documentation + consulting delivery", val_es: "Experiencia multi-framework + ownership de librerías de componentes + documentación Storybook + entrega en consultoría" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Frontend Developer · Hybrid Madrid", val_es: "Senior Frontend Developer · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j136 — E-Frontiers / Senior Full Stack Developer (Freelance)
  "38c73ffb-df3b-42fb-9206-48136b67ccab": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Senior Full Stack Developer · Node.js / React" },
    summary: "Full-stack engineer with 15 years of production experience — Node.js, React, TypeScript, AWS, Terraform, and Docker as the core stack. Has designed and operated microservices architectures, distributed systems, and cloud infrastructure at scale. Brings Clean Architecture discipline, comprehensive test coverage practices (Jest, Vitest, Playwright), and the autonomous delivery mindset that freelance and contractor roles require.",
    summaryEs: "Ingeniero full-stack con 15 años de experiencia — Node.js, React, TypeScript, AWS, Terraform y Docker como stack principal.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "Node.js · React · TypeScript · AWS · GCP · Terraform · Docker · Kubernetes · microservices", val_es: "Node.js · React · TypeScript · AWS · GCP · Terraform · Docker · Kubernetes · microservicios" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "Clean Architecture + full test coverage + cloud infrastructure + autonomous contractor delivery", val_es: "Clean Architecture + cobertura de tests completa + infraestructura cloud + entrega autónoma como contratista" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Senior Full Stack Developer · Freelance/Contract", val_es: "Senior Full Stack Developer · Freelance/Contrato" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },

  // j137 — Hunter Bond / Fullstack Software Engineer Python/React (FinTech)
  "32afe087-2d21-47da-a731-871322252703": {
    ...baseProfile,
    meta: { ...baseProfile.meta, headline: "Fullstack Software Engineer · FinTech" },
    summary: "Full-stack engineer with 15 years of production experience — expert-level React and TypeScript on the frontend, with backend delivery in Python and Node.js. Has built real-time data platforms, trading-adjacent dashboards, and financial connectivity infrastructure: currently at Embat delivering banking API integrations, balance calculations, and transaction processing systems. Brings the ownership mindset and end-to-end delivery discipline that FinTech engineering requires.",
    summaryEs: "Ingeniero full-stack con 15 años de experiencia — React y TypeScript a nivel experto en frontend, con entrega de backend en Python y Node.js. Actualmente en Embat entregando integraciones bancarias, cálculos de balance y sistemas de procesamiento de transacciones.",
    now: [
      { lbl: "Stack match",  lbl_es: "Stack",         val: "React · TypeScript · Python · Node.js · PostgreSQL · GCP · AWS · Docker · banking APIs", val_es: "React · TypeScript · Python · Node.js · PostgreSQL · GCP · AWS · Docker · APIs bancarias" },
      { lbl: "What I bring", lbl_es: "Lo que aporto", val: "FinTech domain expertise + banking connectivity + real-time data + end-to-end ownership", val_es: "Experiencia en dominio FinTech + conectividad bancaria + datos en tiempo real + ownership end-to-end" },
      { lbl: "Open to",      lbl_es: "Abierto a",     val: "Fullstack Software Engineer · FinTech · Hybrid Madrid", val_es: "Fullstack Software Engineer · FinTech · Híbrido Madrid" },
      { lbl: "Available",    lbl_es: "Disponible",    val: "Immediate", val_es: "Inmediata" },
    ],
  },
};

export default jobs;
