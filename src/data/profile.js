const profile = {
  meta: {
    name: "Francisco Alfonso",
    headline: "Engineering Manager · Staff Engineer",
    location: "Madrid, Spain",
    email: "fabuitrago92@gmail.com",
    linkedin: "https://www.linkedin.com/in/franciscoal/",
    status: "open",
    statusLabel: "Open to talk",
    statusLabelEs: "Disponible",
    updatedLabel: "May 2026",
  },

  summary:
    "I work across the full engineering spectrum — cloud architecture, distributed systems, infrastructure, APIs, and product interfaces — and I lead the teams that build it. Before writing a line of code or opening a planning doc, I need to know what the business is optimising for, how success gets measured, and what the team needs to move without bottlenecks.",

  summaryEs:
    "Trabajo en todo el espectro de la ingeniería — arquitectura cloud, sistemas distribuidos, infraestructura, APIs e interfaces de producto — y lidero los equipos que lo construyen. Antes de escribir una línea de código o abrir un documento de planificación, necesito saber qué está optimizando el negocio, cómo se mide el éxito y qué necesita el equipo para moverse sin fricciones.",

  outcomes: [
    { lbl: "CAREER",    lblEs: "CARRERA",    val: "15yr" },
    { lbl: "INFRA SCALE", lblEs: "ESCALA INFRA", val: "5×" },
    { lbl: "COST CUT",  lblEs: "AHORRO",     val: "30%" },
    { lbl: "ONBOARDING", lblEs: "ONBOARDING", val: "−65%" },
    { lbl: "DELIVERY",  lblEs: "ENTREGA",    val: "5×/yr" },
  ],

  now: [
    { lbl: "Focused on", lbl_es: "Enfocado en",  val: "Job search — EM and Staff Engineer roles in product-led companies",                         val_es: "Búsqueda de empleo — roles de EM y Staff Engineer en empresas product-led" },
    { lbl: "Building",   lbl_es: "Construyendo",  val: "Nepot.ai — AI-assisted job search and CV builder for engineers",                           val_es: "Nepot.ai — búsqueda de empleo con IA y generador de CVs para ingenieros" },
    { lbl: "Open to",    lbl_es: "Abierto a",     val: "Engineering Manager · Staff / Principal Engineer · Tech Lead · Remote or Hybrid Madrid",   val_es: "Engineering Manager · Staff / Principal Engineer · Tech Lead · Remoto o Híbrido Madrid" },
    { lbl: "Available",       lbl_es: "Disponible",  val: "Immediate",                                                                              val_es: "Inmediata" },
  ],

  timeline: {
    y0: 2011,
    y1: 2026,
    nodes: [
      { y: 2011, t: "Conocimiento Corporativo", sub: "Dev Analyst",          side: "top" },
      { y: 2013, t: "Tata Consultancy",          sub: "SharePoint Analyst",   side: "bot" },
      { y: 2015, t: "Intergrupo",                sub: "Senior Developer",     side: "top" },
      { y: 2016, t: "Lagash",                    sub: "Solutions Architect",  side: "bot" },
      { y: 2017, t: "Syntax Informática",        sub: "Engineering Manager",  side: "top" },
      { y: 2021, t: "Sygris",                    sub: "Tech Lead → Team Lead",side: "bot", active: true },
      { y: 2024, t: "Invofox (YC S22)",          sub: "Engineering Manager",  side: "top", active: true },
    ],
  },

  caseStudies: [
    {
      title: "Infra scale at Invofox",
      titleEs: "Escala de infraestructura en Invofox",
      sub: "5× capacity · 30% cost cut · −65% onboarding time",
      tags: ["Engineering Management", "AI Systems", "YC S22", "2024–2026"],
      stat: "5×",
      statLbl: "DOCUMENT PROCESSING CAPACITY",
      statLblEs: "CAPACIDAD DE PROCESAMIENTO",
      body: "Redesigned the document processing pipeline from 100 to 500 docs/minute. Cut infrastructure costs 30% via TTL policies, DB partitioning, and architecture decomposition. Reduced client onboarding from 1–2 months to 2–3 weeks. Built 'The Hive Mind' — an 8-agent AI system (Claude-based) that gave the app team full operational self-service: DB reporting, AWS monitoring, document failure detection, and real-time process health — no engineering involvement required.",
      bodyEs: "Rediseñé el pipeline de procesamiento de documentos de 100 a 500 docs/minuto. Reduje los costes de infraestructura un 30% mediante políticas TTL, particionado de BD y descomposición arquitectónica. Reduje el onboarding de clientes de 1-2 meses a 2-3 semanas. Construí 'The Hive Mind' — un sistema de 8 agentes de IA (basado en Claude) que dio al equipo de app autonomía operativa total: reporting, monitorización AWS, detección de fallos y evaluación de procesos en tiempo real — sin intervención de ingeniería.",
      artifacts: ["Hive Mind system design", "Pipeline architecture", "Onboarding flow redesign"],
    },
    {
      title: "Low-code platform at Sygris",
      titleEs: "Plataforma low-code en Sygris",
      sub: "Greenfield ESG platform · load time −83% · deploy time −95%",
      tags: ["Tech Lead", "ESG", "Architecture", "2021–2024"],
      stat: "10s",
      statLbl: "FROM 1–2 MIN LOAD TIME",
      statLblEs: "DESDE 1-2 MIN DE CARGA",
      body: "Designed and built a greenfield low-code platform for ESG data management — including a proprietary state management system from scratch. Reduced heavy portal load time from 1–2 minutes to 10 seconds by redesigning the core collection entity model. Cut deployment time from 1–2 weeks to 1–2 days via frontend API contract redesign and DB migration. Prevented churn of the top client (20–30% of 2022 billing) through new subscription tier architecture.",
      bodyEs: "Diseñé y construí desde cero una plataforma low-code para gestión de datos ESG — incluyendo un sistema de gestión de estado propio. Reduje el tiempo de carga del portal de 1-2 minutos a 10 segundos rediseñando el modelo de entidades central. Reduje el tiempo de despliegue de 1-2 semanas a 1-2 días mediante rediseño de contratos API y migración de BD. Evité la pérdida del cliente principal (20-30% de la facturación de 2022) con una nueva arquitectura de niveles de suscripción.",
      artifacts: ["Entity model redesign", "Subscription tier model", "API contract spec"],
    },
    {
      title: "Team and revenue scale at Syntax",
      titleEs: "Escalado de equipo e ingresos en Syntax",
      sub: "2 → 10 engineers · 6 new clients · first SaaS product",
      tags: ["Engineering Management", "SaaS", "Team Building", "2017–2021"],
      stat: "30%",
      statLbl: "ROI GROWTH",
      statLblEs: "CRECIMIENTO DE ROI",
      body: "Scaled the engineering team from 2 to 10 developers in 6 months, driven by acquisition of 6 new clients and a new outsourcing delivery model. Signed first 3 clients for a click-and-deploy document management portal. Built partnerships with Hibermática and IECISA, closed first investment-sector client (Qualitas Funds), and launched a first SaaS product for subsidised project management — targeting NGOs including Ayuda en Acción and CEAR.",
      bodyEs: "Escalé el equipo de 2 a 10 desarrolladores en 6 meses, impulsado por la adquisición de 6 nuevos clientes y un nuevo modelo de entrega en outsourcing. Firmé los primeros 3 clientes para un portal de gestión documental. Construí alianzas con Hibermática e IECISA, cerré el primer cliente del sector inversión (Qualitas Funds) y lancé el primer producto SaaS de la empresa para gestión de proyectos subvencionados, dirigido a ONGs como Ayuda en Acción y CEAR.",
      artifacts: ["Outsourcing delivery model", "SaaS product v1", "Partnership agreements"],
    },
  ],

  plan: [
    {
      d: 30,
      t: "Listen and map.",       tEs: "Escuchar y mapear.",
      body:   "1:1 with every team member, peer, and stakeholder. No architectural opinion before week 3. I map the real system — technical and human.",
      bodyEs: "1:1 con cada miembro del equipo, par y stakeholder. Sin opinión arquitectónica antes de la semana 3. Mapeo el sistema real — técnico y humano.",
    },
    {
      d: 60,
      t: "One clear bet.",        tEs: "Una apuesta clara.",
      body:   "Identify the highest-leverage problem. Propose a focused initiative with measurable outcome. Build consensus before committing.",
      bodyEs: "Identificar el problema de mayor impacto. Proponer una iniciativa con resultado medible. Construir consenso antes de comprometer.",
    },
    {
      d: 90,
      t: "Ship something visible.", tEs: "Entregar algo visible.",
      body:   "One thing delivered end-to-end. Roadmap aligned with business objectives. Team processes improved or confirmed. First hire req opened if needed.",
      bodyEs: "Una cosa entregada de extremo a extremo. Roadmap alineado con objetivos de negocio. Procesos del equipo mejorados o confirmados. Primera posición abierta si se necesita.",
    },
  ],

  recommendations: [
    {
      q: "Francisco has a rare combination: he can go deep into the code, step back to the architecture, and then translate the whole thing into business language for a non-technical audience. He made our engineering team coherent for the first time.",
      qEs: "Francisco tiene una combinación poco frecuente: puede profundizar en el código, dar un paso atrás a la arquitectura, y luego traducir todo al lenguaje de negocio para una audiencia no técnica. Hizo que nuestro equipo de ingeniería fuera coherente por primera vez.",
      n: "Available on request",
      r: "Former colleague",
      initials: "—",
    },
  ],

  cta: {
    statusLabel:   "OPEN TO TALK",
    statusLabelEs: "DISPONIBLE",
    headline:   "The fastest way is a short call.",
    headlineEs: "La forma más rápida es una llamada corta.",
    sub:   "Or reach me at",
    subEs: "O escríbeme a",
    email: "fabuitrago92@gmail.com",
    callLabel:   "Get in touch →",
    callLabelEs: "Contactar →",
    cvLabel:   "View LinkedIn",
    cvLabelEs: "Ver LinkedIn",
    cvUrl: "https://www.linkedin.com/in/franciscoal/",
  },

  footer: {
    handle: "francisco.buitrago",
  },
};

export default profile;
