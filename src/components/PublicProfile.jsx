const S = {
  amber: "#D97706",
  amberDeep: "#B45309",
  amberTint: "#FEF3C7",
  amberBorder: "#FCD34D",
  green: "#16A34A",
  greenLight: "#DCFCE7",
  stone: "#1C1917",
  stoneMid: "#44403C",
  stoneMuted: "#57534E",
  stoneFaint: "#78716C",
  stoneHair: "#A8A29E",
  border: "#E7E5E0",
  bg: "#FAFAF7",
  bgWarm: "#FAF7F2",
  bgTint: "#F5F5F0",
  white: "#fff",
};

function Pill({ children, dot, color = "amber" }) {
  const palette = {
    amber: { bg: S.amberTint, bd: S.amberBorder, fg: "#92400E", dot: S.amber },
    green: { bg: S.greenLight, bd: "#86EFAC", fg: "#166534", dot: S.green },
    stone: { bg: S.bgTint, bd: S.border, fg: S.stoneMid, dot: S.stoneFaint },
  }[color];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 10px", borderRadius: 999,
      background: palette.bg, border: `1px solid ${palette.bd}`,
      color: palette.fg, fontSize: 11, fontWeight: 500,
      letterSpacing: 0.1,
    }}>
      {dot && (
        <span style={{
          width: 6, height: 6, borderRadius: 999, background: palette.dot,
          boxShadow: `0 0 0 3px ${palette.bg}, 0 0 0 4px ${palette.dot}33`,
        }} />
      )}
      {children}
    </span>
  );
}

function SectionHead({ num, kicker, title, anchor }) {
  return (
    <div id={anchor} style={{ marginBottom: 28, paddingTop: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: S.stoneHair, letterSpacing: 0.1 }}>
          § {num}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.amberDeep, textTransform: "uppercase", letterSpacing: 2, fontWeight: 600 }}>
          {kicker}
        </span>
        <div style={{ flex: 1, height: 1, background: S.border }} />
      </div>
      <h2 style={{ fontWeight: 600, fontSize: 32, letterSpacing: -0.5, lineHeight: 1.05, margin: 0, color: S.stone }}>
        {title}
      </h2>
    </div>
  );
}

function Hero({ data }) {
  const { meta, summary } = data;
  return (
    <section style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 22, flexWrap: "wrap" }}>
        <Pill dot color="green">{meta.statusLabel}</Pill>
        <Pill color="stone">Updated {meta.updatedLabel}</Pill>
        {meta.jobContext && <Pill color="amber">{meta.jobContext}</Pill>}
      </div>
      <h1 style={{ fontWeight: 700, fontSize: "clamp(44px, 7vw, 72px)", letterSpacing: -2, lineHeight: 0.98, margin: "0 0 16px", color: S.stone }}>
        {meta.name}
      </h1>
      <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
        <div style={{ fontSize: 20, color: S.stoneMuted, fontWeight: 400, letterSpacing: -0.3 }}>
          {meta.headline}
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: S.stoneHair }}>
          {meta.location}
        </span>
      </div>
      <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.65, color: S.stoneMid, maxWidth: 680 }}>
        {summary}
      </p>
    </section>
  );
}

function Outcomes({ outcomes }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <div style={{
        display: "grid", gridTemplateColumns: `repeat(${outcomes.length}, 1fr)`,
        border: `1px solid ${S.border}`, borderRadius: 10, overflow: "hidden",
        background: S.bgWarm,
      }}>
        {outcomes.map((it, i) => (
          <div key={i} style={{ padding: "18px 16px", borderLeft: i ? `1px solid ${S.border}` : "none" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: S.stoneFaint, letterSpacing: 1.6, fontWeight: 600 }}>
              {it.lbl}
            </div>
            <div style={{ fontWeight: 700, fontSize: 26, letterSpacing: -0.8, lineHeight: 1, marginTop: 8, color: S.stone }}>
              {it.val}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NowBlock({ now }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <SectionHead num="01" kicker="LIVE STATUS" title="What I'm doing now" anchor="now" />
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1,
        background: S.border, border: `1px solid ${S.border}`, borderRadius: 10, overflow: "hidden",
      }}>
        {now.map((x, i) => (
          <div key={i} style={{ background: S.white, padding: "20px 22px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneFaint, textTransform: "uppercase", letterSpacing: 1.6, fontWeight: 600, marginBottom: 8 }}>
              {x.lbl}
            </div>
            <div style={{ fontSize: 14, color: S.stone, lineHeight: 1.5 }}>
              {x.val}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline({ timeline }) {
  const { y0, y1, nodes } = timeline;
  const pct = (y) => ((y - y0) / (y1 - y0)) * 100;
  const activeNodes = nodes.filter((n) => n.active);
  const activeFrom = activeNodes.length ? pct(Math.min(...activeNodes.map((n) => n.y))) : null;
  const activeTo = pct(y1);

  return (
    <section style={{ marginBottom: 56 }}>
      <SectionHead num="02" kicker="CAREER" title={`${y1 - y0} years, traced.`} anchor="timeline" />
      <div style={{
        position: "relative", background: S.white, border: `1px solid ${S.border}`,
        borderRadius: 10, padding: "80px 28px", overflow: "hidden",
      }}>
        <div style={{ position: "relative", height: 12 }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: S.border }} />
          {activeFrom !== null && (
            <div style={{
              position: "absolute", left: `${activeFrom}%`, width: `${activeTo - activeFrom}%`,
              top: "calc(50% - 1px)", height: 2, background: S.amber,
            }} />
          )}
          <div style={{
            position: "absolute", left: "100%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: 10, height: 10, borderRadius: 999, background: S.green,
            boxShadow: `0 0 0 4px rgba(22,163,74,0.18), 0 0 0 5px ${S.white}`,
          }} />
          <div style={{
            position: "absolute", left: "100%", top: "calc(50% + 14px)",
            transform: "translateX(-50%)",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5,
            color: "#166534", letterSpacing: 1.6, fontWeight: 600, whiteSpace: "nowrap",
          }}>NOW</div>

          {nodes.map((n, i) => {
            const x = pct(n.y);
            const r = n.active ? 6 : 4;
            const labelW = 130;
            const anchor = `clamp(${labelW / 2}px, ${x}%, calc(100% - ${labelW / 2}px))`;
            return (
              <span key={i}>
                <span style={{
                  position: "absolute", left: `${x}%`, top: "50%",
                  width: r * 2, height: r * 2, borderRadius: 999,
                  background: n.active ? S.amber : S.stone,
                  transform: "translate(-50%, -50%)",
                  boxShadow: n.active ? `0 0 0 5px ${S.amberTint}` : "none",
                  display: "block",
                }} />
                <span style={{
                  position: "absolute",
                  left: anchor, transform: "translateX(-50%)",
                  top: n.side === "top" ? -68 : 20,
                  width: labelW, textAlign: "center", pointerEvents: "none", display: "block",
                }}>
                  <span style={{
                    display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                    color: n.active ? S.amberDeep : S.stoneFaint, fontWeight: 600,
                    marginBottom: 3, letterSpacing: 0.5,
                  }}>'{String(n.y).slice(2)}</span>
                  <span style={{
                    display: "block", fontSize: 11, lineHeight: 1.3,
                    color: n.active ? S.stone : S.stoneMid, fontWeight: n.active ? 600 : 400,
                  }}>{n.t}</span>
                  {n.sub && (
                    <span style={{
                      display: "block", fontSize: 10, color: S.stoneFaint, marginTop: 2,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>{n.sub}</span>
                  )}
                </span>
                <span style={{
                  position: "absolute", left: `${x}%`,
                  top: n.side === "top" ? -10 : 14,
                  width: 1, height: 14,
                  background: n.active ? S.amberBorder : S.border,
                  transform: "translateX(-50%)",
                  display: "block",
                }} />
              </span>
            );
          })}
        </div>
      </div>
      <div style={{
        marginTop: 10, display: "flex", justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 1.5,
      }}>
        <span>{y0} → {y1}</span>
        <span>{nodes.length} ROLES · {new Set(nodes.map(n => n.t.split(" ")[0])).size} ORGS</span>
      </div>
    </section>
  );
}

function CaseStudies({ caseStudies }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <SectionHead num="03" kicker="DEEP DIVES" title="Three engagements, in detail." anchor="cases" />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {caseStudies.map((c, i) => (
          <article key={i} style={{ border: `1px solid ${S.border}`, borderRadius: 10, background: S.white, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr" }}>
              <div style={{ padding: "26px 28px", borderRight: `1px solid ${S.border}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 2, marginBottom: 8 }}>
                  CASE 0{i + 1}
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 24, letterSpacing: -0.6, color: S.stone, margin: 0 }}>{c.title}</h3>
                <div style={{ marginTop: 6, fontSize: 12, color: S.stoneFaint, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.1 }}>
                  {c.sub}
                </div>
                <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, color: S.stoneMid }}>{c.body}</p>
                <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
                  {c.tags.map((t, j) => (
                    <span key={j} style={{ padding: "3px 9px", borderRadius: 999, fontSize: 10.5, background: S.bgTint, color: S.stoneMuted, fontFamily: "'JetBrains Mono', monospace" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ padding: 24, background: S.bgWarm, display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: 700, fontSize: 38, letterSpacing: -1.4, lineHeight: 1, color: S.amberDeep }}>{c.stat}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneFaint, letterSpacing: 1.6, marginTop: 6, fontWeight: 600 }}>{c.statLbl}</div>
                <div style={{ marginTop: 22 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneFaint, letterSpacing: 1.6, fontWeight: 600, marginBottom: 8 }}>ARTIFACTS</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {c.artifacts.map((a, j) => (
                      <div key={j} style={{
                        padding: "8px 12px", background: S.white, border: `1px solid ${S.border}`,
                        borderRadius: 6, display: "flex", justifyContent: "space-between",
                        alignItems: "center", fontSize: 12, color: S.stone,
                      }}>
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

function Plan({ plan }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <SectionHead num="04" kicker="HOW I START" title="My first 30 / 60 / 90." anchor="plan" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {plan.map((b, i) => (
          <div key={i} style={{ background: S.stone, color: S.bg, borderRadius: 10, padding: "26px 24px" }}>
            <div style={{ fontWeight: 700, fontSize: 64, letterSpacing: -2.5, lineHeight: 0.9, color: S.amber }}>{b.d}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 1.6, marginTop: 4, fontWeight: 600 }}>DAYS</div>
            <h4 style={{ margin: "20px 0 8px", fontWeight: 600, fontSize: 17, color: S.bg, letterSpacing: -0.3 }}>{b.t}</h4>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#D6D3CE" }}>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Recommendations({ recommendations }) {
  if (!recommendations?.length) return null;
  return (
    <section style={{ marginBottom: 56 }}>
      <SectionHead num="05" kicker="REFERENCES" title="What people I've worked with say." anchor="recs" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {recommendations.map((r, i) => (
          <div key={i} style={{ background: S.white, border: `1px solid ${S.border}`, borderRadius: 10, padding: "26px 28px" }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: 18, lineHeight: 1.5, color: S.stone, letterSpacing: -0.2 }}>
              "{r.q}"
            </div>
            <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999,
                background: "linear-gradient(135deg, #F4E4CB, #B45309)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: S.white, fontWeight: 600, fontSize: 13, letterSpacing: 0.5,
              }}>{r.initials}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: S.stone }}>{r.n}</div>
                <div style={{ fontSize: 11.5, color: S.stoneFaint }}>{r.r}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterCTA({ cta }) {
  return (
    <section style={{
      marginTop: 24, marginBottom: 24, padding: "36px 40px",
      background: S.stone, color: S.bg, borderRadius: 14,
      display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "center",
    }}>
      <div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.amberBorder, letterSpacing: 2, marginBottom: 10 }}>
          {cta.statusLabel}
        </div>
        <h3 style={{ fontWeight: 600, fontSize: 26, letterSpacing: -0.6, lineHeight: 1.1, margin: 0 }}>
          {cta.headline}
        </h3>
        <p style={{ margin: "10px 0 0", color: S.stoneHair, fontSize: 14, lineHeight: 1.55, maxWidth: 560 }}>
          {cta.sub} <span style={{ color: S.amberBorder }}>{cta.email}</span>
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <a href={`mailto:${cta.email}`} style={{
          padding: "13px 22px", background: S.amber, color: S.white,
          borderRadius: 8, fontSize: 14, fontWeight: 600,
          textDecoration: "none", whiteSpace: "nowrap", textAlign: "center",
        }}>{cta.callLabel}</a>
        <a href={cta.cvUrl} target="_blank" rel="noreferrer" style={{
          padding: "13px 22px", background: "transparent", color: S.bg,
          border: `1px solid #44403C`, borderRadius: 8, fontSize: 14,
          textDecoration: "none", textAlign: "center",
        }}>{cta.cvLabel}</a>
      </div>
    </section>
  );
}

export default function PublicProfile({ data }) {
  const nav = [
    ["now", "Now"],
    ["timeline", "Career"],
    ["cases", "Deep dives"],
    ["plan", "30/60/90"],
    ["recs", "References"],
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f0eee9", paddingBottom: 40 }}>
      {/* Fake browser bar */}
      <div style={{
        background: S.white, borderBottom: `1px solid ${S.border}`,
        padding: "10px 24px", display: "flex", alignItems: "center", gap: 12,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: S.stoneFaint,
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FCA5A5", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: S.amberBorder, display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#86EFAC", display: "inline-block" }} />
        </div>
        <div style={{ flex: 1, background: S.bgWarm, border: `1px solid ${S.border}`, padding: "5px 12px", borderRadius: 6 }}>
          <span style={{ color: S.stoneHair }}>🔒 </span>
          <span style={{ color: S.stone }}>{data.footer.handle}</span>
          <span style={{ color: S.stoneHair }}>.nepot.ai</span>
        </div>
        <a href={`mailto:${data.meta.email}`} style={{ padding: "4px 10px", background: S.bgTint, borderRadius: 4, textDecoration: "none", color: S.stoneMid }}>
          Contact
        </a>
        <a href={data.meta.linkedin} target="_blank" rel="noreferrer" style={{ padding: "4px 10px", background: S.bgTint, borderRadius: 4, textDecoration: "none", color: S.stoneMid }}>
          LinkedIn
        </a>
      </div>

      {/* Body */}
      <div style={{
        maxWidth: 1080, margin: "0 auto",
        display: "grid", gridTemplateColumns: "180px 1fr",
        gap: 0, padding: "48px 32px 32px",
      }}>
        {/* Side nav */}
        <aside style={{ paddingRight: 16 }}>
          <div style={{ position: "sticky", top: 72 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: S.stoneHair, letterSpacing: 2, fontWeight: 600, marginBottom: 14 }}>
              ON THIS PAGE
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {nav.map(([id, label], i) => (
                <a key={id} href={`#${id}`} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  fontSize: 12.5, color: i === 0 ? S.stone : S.stoneFaint,
                  textDecoration: "none", padding: "4px 0",
                  fontWeight: i === 0 ? 600 : 400,
                }}>
                  <span style={{ width: 12, height: 1, background: i === 0 ? S.amber : "#D6D3CE", display: "inline-block" }} />
                  {label}
                </a>
              ))}
            </nav>

            <div style={{ marginTop: 36, padding: "16px 14px", background: S.white, border: `1px solid ${S.border}`, borderRadius: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: S.green, boxShadow: "0 0 0 3px rgba(22,163,74,0.18)", display: "inline-block" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#166534", letterSpacing: 1.4, fontWeight: 600 }}>
                  OPEN TO TALK
                </span>
              </div>
              <a href={`mailto:${data.meta.email}`} style={{
                display: "block", width: "100%", marginTop: 12, padding: "8px 12px",
                background: S.stone, color: S.white, border: 0, borderRadius: 6,
                fontSize: 12, fontWeight: 500, cursor: "pointer",
                textDecoration: "none", textAlign: "center",
              }}>
                Get in touch →
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main>
          <Hero data={data} />
          <Outcomes outcomes={data.outcomes} />
          <NowBlock now={data.now} />
          <Timeline timeline={data.timeline} />
          <CaseStudies caseStudies={data.caseStudies} />
          <Plan plan={data.plan} />
          <Recommendations recommendations={data.recommendations} />
          <FooterCTA cta={data.cta} />

          <footer style={{
            marginTop: 16, paddingTop: 18, borderTop: `1px solid ${S.border}`,
            display: "flex", justifyContent: "space-between",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: S.stoneHair, letterSpacing: 1.2,
          }}>
            <span>{data.footer.handle}.nepot.ai · {data.footer.version}</span>
            <span>BUILT WITH NEPOT.AI</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
