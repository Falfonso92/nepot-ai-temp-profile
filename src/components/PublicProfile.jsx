import { useState, useEffect, useRef, useCallback } from "react";

const CSS = `
  html { scroll-behavior: smooth; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .np-hero    { animation: fadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
  .np-outcomes{ animation: fadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.08s both; }
  .np-section { animation: fadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }
  .np-card    { transition: box-shadow 0.18s, transform 0.18s; }
  .np-card:hover { box-shadow: 0 4px 20px rgba(28,25,23,0.09); transform: translateY(-2px); }
`;

function GlobalStyles() {
  return <style>{CSS}</style>;
}

const S = {
  amber: "#D97706", amberDeep: "#B45309", amberTint: "#FEF3C7", amberBorder: "#FCD34D",
  green: "#16A34A", greenLight: "#DCFCE7",
  stone: "#1C1917", stoneMid: "#44403C", stoneMuted: "#57534E",
  stoneFaint: "#78716C", stoneHair: "#A8A29E",
  border: "#E7E5E0", bg: "#FAFAF7", bgWarm: "#FAF7F2", bgTint: "#F5F5F0", white: "#fff",
};

const T = {
  en: {
    nav: ["Now", "Career", "Deep dives", "30 / 60 / 90", "References"],
    onThisPage: "ON THIS PAGE",
    openToTalk: "OPEN TO TALK",
    getInTouch: "Get in touch →",
    contact: "Contact",
    days: "DAYS",
    artifacts: "ARTIFACTS",
    case: "CASE",
    verified: "VERIFIED",
    nowTitle: "What I'm doing now",      nowKicker: "LIVE STATUS",
    careerKicker: "CAREER",
    casesTitle: "Three engagements, in detail.", casesKicker: "DEEP DIVES",
    planTitle: "My first 30 / 60 / 90.",        planKicker: "HOW I START",
    recsTitle: "What people I've worked with say.", recsKicker: "REFERENCES",
    ctaStatus: (d) => d.cta.statusLabel,
    ctaHeadline: (d) => d.cta.headline,
    ctaSub: (d) => d.cta.sub,
    ctaCall: (d) => d.cta.callLabel,
    ctaCv: (d) => d.cta.cvLabel,
    statusLabel: (d) => d.meta.statusLabel,
    summary: (d) => d.summary,
    nowLbl: (x) => x.lbl,
    nowVal: (x) => x.val,
    outcomeLbl: (o) => o.lbl,
    caseTitle: (c) => c.title,
    caseBody: (c) => c.body,
    caseStatLbl: (c) => c.statLbl,
    planT: (b) => b.t,
    planBody: (b) => b.body,
    recQ: (r) => r.q,
  },
  es: {
    nav: ["Ahora", "Carrera", "Proyectos", "30 / 60 / 90", "Referencias"],
    onThisPage: "EN ESTA PÁGINA",
    openToTalk: "DISPONIBLE",
    getInTouch: "Contactar →",
    contact: "Contacto",
    days: "DÍAS",
    artifacts: "ENTREGABLES",
    case: "CASO",
    verified: "VERIFICADO",
    nowTitle: "En qué estoy trabajando ahora",  nowKicker: "ESTADO ACTUAL",
    careerKicker: "CARRERA",
    casesTitle: "Tres proyectos en detalle.",    casesKicker: "PROYECTOS",
    planTitle: "Mis primeros 30 / 60 / 90 días.", planKicker: "CÓMO EMPIEZO",
    recsTitle: "Lo que dicen quienes han trabajado conmigo.", recsKicker: "REFERENCIAS",
    ctaStatus: (d) => d.cta.statusLabelEs,
    ctaHeadline: (d) => d.cta.headlineEs,
    ctaSub: (d) => d.cta.subEs,
    ctaCall: (d) => d.cta.callLabelEs,
    ctaCv: (d) => d.cta.cvLabelEs,
    statusLabel: (d) => d.meta.statusLabelEs,
    summary: (d) => d.summaryEs ?? d.summary,
    nowLbl: (x) => x.lbl_es ?? x.lbl,
    nowVal: (x) => x.val_es ?? x.val,
    outcomeLbl: (o) => o.lblEs ?? o.lbl,
    caseTitle: (c) => c.titleEs ?? c.title,
    caseBody: (c) => c.bodyEs ?? c.body,
    caseStatLbl: (c) => c.statLblEs ?? c.statLbl,
    planT: (b) => b.tEs ?? b.t,
    planBody: (b) => b.bodyEs ?? b.body,
    recQ: (r) => r.qEs ?? r.q,
  },
};

const NAV_IDS = ["now", "timeline", "cases", "plan", "recs"];

function Pill({ children, dot, color = "stone" }) {
  const palette = {
    green: { bg: S.greenLight, bd: "#86EFAC", fg: "#166534", dot: S.green },
    stone: { bg: S.bgTint, bd: S.border, fg: S.stoneMid, dot: S.stoneFaint },
  }[color];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 10px", borderRadius: 999,
      background: palette.bg, border: `1px solid ${palette.bd}`,
      color: palette.fg, fontSize: 11, fontWeight: 500, letterSpacing: 0.1,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: palette.dot, boxShadow: `0 0 0 3px ${palette.bg}, 0 0 0 4px ${palette.dot}33` }} />}
      {children}
    </span>
  );
}

function SectionHead({ num, kicker, title, anchor }) {
  return (
    <div id={anchor} style={{ marginBottom: 28, paddingTop: 12, scrollMarginTop: 72 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: S.stoneHair, letterSpacing: 0.1 }}>§ {num}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.amberDeep, textTransform: "uppercase", letterSpacing: 2, fontWeight: 600 }}>{kicker}</span>
        <div style={{ flex: 1, height: 1, background: S.border }} />
      </div>
      <h2 style={{ fontWeight: 600, fontSize: 30, letterSpacing: -0.5, lineHeight: 1.05, margin: 0, color: S.stone }}>{title}</h2>
    </div>
  );
}

function Hero({ data, t }) {
  return (
    <section className="np-hero" style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 22, flexWrap: "wrap" }}>
        <Pill dot color="green">{t.statusLabel(data)}</Pill>
      </div>
      <h1 style={{ fontWeight: 700, fontSize: "clamp(42px, 6.5vw, 68px)", letterSpacing: -2, lineHeight: 0.98, margin: "0 0 16px", color: S.stone }}>
        {data.meta.name}
      </h1>
      <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
        <div style={{ fontSize: 19, color: S.stoneMuted, fontWeight: 400, letterSpacing: -0.3 }}>{data.meta.headline}</div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: S.stoneHair }}>{data.meta.location}</span>
      </div>
      <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.65, color: S.stoneMid, maxWidth: 680 }}>
        {t.summary(data)}
      </p>
    </section>
  );
}

function Outcomes({ outcomes, t }) {
  return (
    <section className="np-outcomes" style={{ marginBottom: 56 }}>
      <div style={{
        display: "grid", gridTemplateColumns: `repeat(${outcomes.length}, 1fr)`,
        border: `1px solid ${S.border}`, borderRadius: 10, overflow: "hidden", background: S.bgWarm,
      }}>
        {outcomes.map((it, i) => (
          <div key={i} style={{ padding: "18px 16px", borderLeft: i ? `1px solid ${S.border}` : "none" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: S.stoneFaint, letterSpacing: 1.6, fontWeight: 600 }}>{t.outcomeLbl(it)}</div>
            <div style={{ fontWeight: 700, fontSize: 26, letterSpacing: -0.8, lineHeight: 1, marginTop: 8, color: S.stone }}>{it.val}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NowBlock({ now, t }) {
  return (
    <section className="np-section" style={{ marginBottom: 56 }}>
      <SectionHead num="01" kicker={t.nowKicker} title={t.nowTitle} anchor="now" />
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1,
        background: S.border, border: `1px solid ${S.border}`, borderRadius: 10, overflow: "hidden",
      }}>
        {now.map((x, i) => (
          <div key={i} style={{ background: S.white, padding: "20px 22px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneFaint, textTransform: "uppercase", letterSpacing: 1.6, fontWeight: 600, marginBottom: 8 }}>{t.nowLbl(x)}</div>
            <div style={{ fontSize: 14, color: S.stone, lineHeight: 1.5 }}>{t.nowVal(x)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline({ timeline, t }) {
  const { y0, y1, nodes } = timeline;
  const pct = (y) => ((y - y0) / (y1 - y0)) * 100;
  const activeNodes = nodes.filter((n) => n.active);
  const activeFrom = activeNodes.length ? pct(Math.min(...activeNodes.map((n) => n.y))) : null;
  const years = y1 - y0;

  return (
    <section className="np-section" style={{ marginBottom: 56 }}>
      <SectionHead num="02" kicker={t.careerKicker} title={`${years} years, traced.`} anchor="timeline" />
      <div style={{
        position: "relative", background: S.white, border: `1px solid ${S.border}`,
        borderRadius: 10, padding: "80px 28px 80px",
      }}>
        <div style={{ position: "relative", height: 12 }}>
          {/* Axis */}
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: S.border }} />
          {/* Active region */}
          {activeFrom !== null && (
            <div style={{ position: "absolute", left: `${activeFrom}%`, width: `${100 - activeFrom}%`, top: "calc(50% - 1px)", height: 2, background: S.amber }} />
          )}
          {/* NOW dot */}
          <div style={{ position: "absolute", left: "100%", top: "50%", transform: "translate(-50%, -50%)", width: 10, height: 10, borderRadius: 999, background: S.green, boxShadow: `0 0 0 4px rgba(22,163,74,0.18), 0 0 0 5px ${S.white}` }} />
          <div style={{ position: "absolute", left: "100%", top: "calc(50% + 16px)", transform: "translateX(-50%)", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#166534", letterSpacing: 1.6, fontWeight: 600, whiteSpace: "nowrap" }}>NOW</div>

          {nodes.map((n, i) => {
            const x = pct(n.y);
            const r = n.active ? 6 : 4;
            const labelW = 130;
            const anchor = `clamp(${labelW / 2}px, ${x}%, calc(100% - ${labelW / 2}px))`;
            return (
              <div key={i} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: `${x}%`, top: "50%",
                  width: r * 2, height: r * 2, borderRadius: 999,
                  background: n.active ? S.amber : S.stone,
                  transform: "translate(-50%, -50%)",
                  boxShadow: n.active ? `0 0 0 5px ${S.amberTint}` : "none",
                }} />
                {/* Tick */}
                <div style={{
                  position: "absolute", left: `${x}%`,
                  top: n.side === "top" ? "calc(50% - 10px - 14px)" : "calc(50% + 10px)",
                  width: 1, height: 14, background: n.active ? S.amberBorder : S.border,
                  transform: "translateX(-50%)",
                }} />
                {/* Label */}
                <div style={{
                  position: "absolute",
                  left: anchor, transform: "translateX(-50%)",
                  top: n.side === "top" ? "calc(50% - 10px - 14px - 56px)" : "calc(50% + 10px + 14px)",
                  width: labelW, textAlign: "center",
                }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: n.active ? S.amberDeep : S.stoneFaint, fontWeight: 600, marginBottom: 3, letterSpacing: 0.5 }}>
                    '{String(n.y).slice(2)}
                  </div>
                  <div style={{ fontSize: 11, lineHeight: 1.3, color: n.active ? S.stone : S.stoneMid, fontWeight: n.active ? 600 : 400 }}>{n.t}</div>
                  {n.sub && <div style={{ fontSize: 10, color: S.stoneFaint, marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{n.sub}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{
        marginTop: 10, display: "flex", justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 1.5,
      }}>
        <span>{y0} → {y1}</span>
        <span>{nodes.length} ROLES</span>
      </div>
    </section>
  );
}

function CaseStudies({ caseStudies, t }) {
  return (
    <section className="np-section" style={{ marginBottom: 56 }}>
      <SectionHead num="03" kicker={t.casesKicker} title={t.casesTitle} anchor="cases" />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {caseStudies.map((c, i) => (
          <article key={i} className="np-card" style={{ border: `1px solid ${S.border}`, borderRadius: 10, background: S.white, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr" }}>
              <div style={{ padding: "26px 28px", borderRight: `1px solid ${S.border}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 2, marginBottom: 8 }}>{t.case} 0{i + 1}</div>
                <h3 style={{ fontWeight: 600, fontSize: 22, letterSpacing: -0.5, color: S.stone, margin: 0 }}>{t.caseTitle(c)}</h3>
                <div style={{ marginTop: 6, fontSize: 12, color: S.stoneFaint, fontFamily: "'JetBrains Mono', monospace" }}>{c.sub}</div>
                <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, color: S.stoneMid }}>{t.caseBody(c)}</p>
                <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
                  {c.tags.map((tag, j) => (
                    <span key={j} style={{ padding: "3px 9px", borderRadius: 999, fontSize: 10.5, background: S.bgTint, color: S.stoneMuted, fontFamily: "'JetBrains Mono', monospace" }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: 24, background: S.bgWarm, display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: 700, fontSize: 36, letterSpacing: -1.4, lineHeight: 1, color: S.amberDeep }}>{c.stat}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneFaint, letterSpacing: 1.6, marginTop: 6, fontWeight: 600 }}>{t.caseStatLbl(c)}</div>
                <div style={{ marginTop: 22 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneFaint, letterSpacing: 1.6, fontWeight: 600, marginBottom: 8 }}>{t.artifacts}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {c.artifacts.map((a, j) => (
                      <div key={j} style={{ padding: "8px 12px", background: S.white, border: `1px solid ${S.border}`, borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: S.stone }}>
                        <span>{a}</span>
                        <span style={{ color: S.stoneHair, fontSize: 11 }}>→</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Plan({ plan, t }) {
  return (
    <section className="np-section" style={{ marginBottom: 56 }}>
      <SectionHead num="04" kicker={t.planKicker} title={t.planTitle} anchor="plan" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {plan.map((b, i) => (
          <div key={i} style={{ background: S.stone, color: S.bg, borderRadius: 10, padding: "26px 24px" }}>
            <div style={{ fontWeight: 700, fontSize: 60, letterSpacing: -2.5, lineHeight: 0.9, color: S.amber }}>{b.d}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 1.6, marginTop: 4, fontWeight: 600 }}>{t.days}</div>
            <h4 style={{ margin: "20px 0 8px", fontWeight: 600, fontSize: 16, color: S.bg, letterSpacing: -0.3 }}>{t.planT(b)}</h4>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#D6D3CE" }}>{t.planBody(b)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Recommendations({ recommendations, t }) {
  if (!recommendations?.length) return null;
  return (
    <section className="np-section" style={{ marginBottom: 56 }}>
      <SectionHead num="05" kicker={t.recsKicker} title={t.recsTitle} anchor="recs" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {recommendations.map((r, i) => (
          <div key={i} style={{ background: S.white, border: `1px solid ${S.border}`, borderRadius: 10, padding: "26px 28px" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: 18, lineHeight: 1.55, color: S.stone, letterSpacing: -0.2 }}>
              "{t.recQ(r)}"
            </div>
            <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: "linear-gradient(135deg, #F4E4CB, #B45309)", display: "flex", alignItems: "center", justifyContent: "center", color: S.white, fontWeight: 600, fontSize: 13 }}>{r.initials}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: S.stone }}>{r.n}</div>
                <div style={{ fontSize: 11.5, color: S.stoneFaint }}>{r.r}</div>
              </div>
              <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 1.4 }}>{t.verified}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterCTA({ data, t }) {
  return (
    <section style={{
      marginTop: 24, marginBottom: 24, padding: "36px 40px",
      background: S.stone, color: S.bg, borderRadius: 14,
      display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "center",
    }}>
      <div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.amberBorder, letterSpacing: 2, marginBottom: 10 }}>{t.ctaStatus(data)}</div>
        <h3 style={{ fontWeight: 600, fontSize: 24, letterSpacing: -0.6, lineHeight: 1.1, margin: 0 }}>{t.ctaHeadline(data)}</h3>
        <p style={{ margin: "10px 0 0", color: S.stoneHair, fontSize: 14, lineHeight: 1.55, maxWidth: 520 }}>
          {t.ctaSub(data)} <span style={{ color: S.amberBorder }}>{data.cta.email}</span>
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <a href={`mailto:${data.cta.email}`} style={{ padding: "13px 22px", background: S.amber, color: S.white, borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap", textAlign: "center" }}>{t.ctaCall(data)}</a>
        <a href={data.cta.cvUrl} target="_blank" rel="noreferrer" style={{ padding: "13px 22px", background: "transparent", color: S.bg, border: "1px solid #44403C", borderRadius: 8, fontSize: 14, textDecoration: "none", textAlign: "center" }}>{t.ctaCv(data)}</a>
      </div>
    </section>
  );
}

export default function PublicProfile({ data }) {
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("now");
  const t = T[lang];

  const navItems = [
    ["now", t.nav[0]],
    ["timeline", t.nav[1]],
    ["cases", t.nav[2]],
    ["plan", t.nav[3]],
    ["recs", t.nav[4]],
  ];

  // Scroll spy — fires when section enters the viewport
  useEffect(() => {
    const observers = NAV_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-25% 0px -65% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Click nav: set active immediately, then scroll smoothly
  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f0eee9", paddingBottom: 40 }}>
      <GlobalStyles />
      {/* Top bar — minimal: just Contact, LinkedIn, lang toggle */}
      <div style={{
        background: S.white, borderBottom: `1px solid ${S.border}`,
        padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8,
        height: 48, position: "sticky", top: 0, zIndex: 10,
      }}>
        <a href={`mailto:${data.meta.email}`} style={{
          padding: "6px 14px", background: S.bgTint, borderRadius: 6,
          textDecoration: "none", color: S.stoneMid,
          fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
        }}>Contact</a>
        <a href={data.meta.linkedin} target="_blank" rel="noreferrer" style={{
          padding: "6px 14px", background: S.bgTint, borderRadius: 6,
          textDecoration: "none", color: S.stoneMid,
          fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
        }}>LinkedIn</a>
        <button onClick={() => setLang(l => l === "en" ? "es" : "en")} style={{
          padding: "6px 14px", background: S.stone, color: S.bg, border: 0, borderRadius: 6,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600,
          cursor: "pointer", letterSpacing: 0.5,
        }}>{lang === "en" ? "ES" : "EN"}</button>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "180px 1fr", gap: 0, padding: "48px 32px 32px" }}>

        {/* Side nav */}
        <aside style={{ paddingRight: 16 }}>
          <div style={{ position: "sticky", top: 68 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 2, fontWeight: 600, marginBottom: 14 }}>{t.onThisPage}</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {navItems.map(([id, label]) => {
                const isActive = activeSection === id;
                return (
                  <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)} style={{
                    display: "flex", alignItems: "center", gap: 10, fontSize: 12.5,
                    color: isActive ? S.stone : S.stoneFaint,
                    textDecoration: "none", padding: "5px 0",
                    fontWeight: isActive ? 600 : 400,
                    fontFamily: "'Inter', sans-serif",
                    transition: "color 0.2s, font-weight 0.2s",
                    cursor: "pointer",
                  }}>
                    <span style={{
                      width: isActive ? 20 : 12, height: 1,
                      background: isActive ? S.amber : "#D6D3CE",
                      display: "inline-block",
                      transition: "width 0.25s cubic-bezier(.22,1,.36,1), background 0.2s",
                    }} />
                    {label}
                  </a>
                );
              })}
            </nav>

            <div style={{ marginTop: 36, padding: "16px 14px", background: S.white, border: `1px solid ${S.border}`, borderRadius: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: S.green, boxShadow: "0 0 0 3px rgba(22,163,74,0.18)", display: "inline-block" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#166534", letterSpacing: 1.4, fontWeight: 600 }}>{t.openToTalk}</span>
              </div>
              <a href={`mailto:${data.meta.email}`} style={{
                display: "block", marginTop: 12, padding: "8px 12px",
                background: S.stone, color: S.white, borderRadius: 6,
                fontSize: 12, fontWeight: 500, textDecoration: "none", textAlign: "center",
              }}>{t.getInTouch}</a>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main>
          <Hero data={data} t={t} />
          <Outcomes outcomes={data.outcomes} t={t} />
          <NowBlock now={data.now} t={t} />
          <Timeline timeline={data.timeline} t={t} />
          <CaseStudies caseStudies={data.caseStudies} t={t} />
          <Plan plan={data.plan} t={t} />
          <Recommendations recommendations={data.recommendations} t={t} />
          <FooterCTA data={data} t={t} />

          <footer style={{
            marginTop: 16, paddingTop: 18, borderTop: `1px solid ${S.border}`,
            display: "flex", justifyContent: "flex-end",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: S.stoneHair, letterSpacing: 1.2,
          }}>
            <span>BUILT WITH NEPOT.AI</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
