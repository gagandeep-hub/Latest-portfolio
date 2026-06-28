"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiGithub, FiCode, FiStar, FiGitBranch, FiGitCommit } from "react-icons/fi";

const PRINCIPLES = [
  { icon: "📖", title: "Learning in Public",     desc: "Sharing the journey openly — every step, mistake, and win." },
  { icon: "✏️",  title: "Clean Code",             desc: "Readable, maintainable, well-structured code above all." },
  { icon: "♻️",  title: "Reusable Components",    desc: "Build once, use everywhere — DRY principles in practice." },
  { icon: "🎨",  title: "Beautiful UIs",          desc: "Accessible, responsive, and visually excellent interfaces." },
  { icon: "🚢",  title: "Ship Often",             desc: "Iterate, ship, learn, improve — fast feedback loops." },
  { icon: "🤝",  title: "Open Collaboration",     desc: "PRs welcome, pair programming encouraged, ego optional." },
];

// Deterministic GitHub contribution heat map
function ContribCell({ index }: { index: number }) {
  const seed = (index * 2654435761) % 256;
  const alpha = seed > 220 ? 0.85 : seed > 180 ? 0.55 : seed > 130 ? 0.28 : seed > 80 ? 0.1 : 0.04;
  return (
    <div
      style={{
        aspectRatio: "1",
        borderRadius: "2px",
        background: `rgba(79,142,247,${alpha})`,
      }}
    />
  );
}

export function OpenSource() {
  return (
    <section id="opensource" className="section">
      <div className="orb orb-purple" style={{ width: "450px", height: "450px", top: "20%", left: "-80px" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Open Source</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>Building in Public</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "520px", marginBottom: "4rem" }}>
            Learning openly, contributing to the community, and building products others can learn from.
          </p>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* GitHub card */}
          <FadeUp delay={0.1}>
            <div
              style={{
                background: "var(--bg-1)",
                border: "1px solid var(--border)",
                borderRadius: "1.25rem",
                padding: "2rem",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <div className="icon-box" style={{ background: "var(--bg-2)" }}>
                  <FiGithub size={20} style={{ color: "var(--text-60)" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--text-100)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.125rem",
                    }}
                  >
                    GitHub Activity
                  </h3>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-display)", fontSize: "0.8125rem", color: "var(--blue)" }}
                  >
                    {PERSONAL_INFO.github.replace("https://", "")}
                  </a>
                </div>
              </div>

              {/* Contribution graph */}
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 500, color: "var(--text-20)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Contributions (6 months)
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(26, 1fr)", gap: "3px" }}>
                  {Array.from({ length: 182 }).map((_, i) => (
                    <ContribCell key={i} index={i} />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "1px",
                  background: "var(--border)",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                {[
                  { Icon: FiCode,      label: "Repos",   value: "20+" },
                  { Icon: FiStar,      label: "Stars",   value: "15+" },
                  { Icon: FiGitCommit, label: "Commits", value: "200+" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} style={{ padding: "1.25rem", background: "var(--bg-2)", textAlign: "center" }}>
                    <Icon size={16} style={{ color: "var(--text-20)", margin: "0 auto 0.5rem" }} />
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        letterSpacing: "-0.03em",
                        background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.5))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {value}
                    </p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", color: "var(--text-20)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Principles grid */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "1.25rem", overflow: "hidden" }}>
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    padding: "1.75rem",
                    background: "var(--bg-1)",
                    transition: "background 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--bg-1)"; }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.875rem", lineHeight: 1 }}>{p.icon}</div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "var(--text-100)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.title}
                  </h4>
                  <p className="body-sm" style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
