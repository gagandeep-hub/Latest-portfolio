"use client";


import { RESEARCH } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiFileText, FiClock, FiCheckCircle } from "react-icons/fi";

const STATUS_CFG: Record<string, { Icon: React.ElementType; color: string }> = {
  "In Progress": { Icon: FiClock, color: "#fbbf24" },
  "Submitted": { Icon: FiCheckCircle, color: "#22d3ee" },
  "Published": { Icon: FiCheckCircle, color: "#34d399" },
};

export function Research() {
  return (
    <section id="research" className="section research-section" style={{ position: "relative", paddingTop: 0, marginTop: "-2rem" }}>
      {/* Dome arc — desktop: oval big element, mobile: overridden by CSS */}
      <div className="research-dome">
        {/* Glow Line at top of dome */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
            boxShadow: "0 0 20px 3px rgba(255,255,255,0.6), 0 0 40px 5px rgba(255,255,255,0.2)",
            zIndex: 2,
          }}
        />
      </div>
      <div className="orb orb-purple" style={{ width: "450px", height: "450px", bottom: "-80px", right: "-80px" }} />

      <div className="wrap research-content-wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2rem" }}>
          <FadeUp delay={0}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Research</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>Published Research</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body-lg" style={{ maxWidth: "600px" }}>
              Academic research bridging AI, IoT, and Computer Vision with Electronics Engineering.
            </p>
          </FadeUp>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))", gap: "2rem" }}>
          {RESEARCH.map((paper, i) => {
            const cfg = STATUS_CFG[paper.status] ?? STATUS_CFG["In Progress"];
            return (
              <FadeUp key={paper.id} delay={i * 0.1}>
                <div style={{ position: "relative", width: "100%" }}>
                  {/* Street light glow line below the card */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                      boxShadow: "0 0 15px 2px rgba(255,255,255,0.4), 0 0 30px 4px rgba(255,255,255,0.1)",
                      zIndex: 2,
                    }}
                  />
                  <div
                    className="glass-card"
                    style={{
                      padding: "2.5rem",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderTop: "1px solid rgba(255,255,255,0.15)",
                      borderLeft: "1px solid rgba(255,255,255,0.1)",
                      borderBottom: "1px solid rgba(255,255,255,0.55)",
                      borderRadius: "1.5rem",
                      backdropFilter: "blur(44px) saturate(180%)",
                      boxShadow: "inset 0 1px 3px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05), 0 18px 44px rgba(0,0,0,0.7)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "2rem",
                      position: "relative",
                      overflow: "hidden",
                      minHeight: "420px",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `rgba(255,255,255,0.4)`;
                      el.style.borderTopColor = `rgba(255,255,255,0.6)`;
                      el.style.borderBottomColor = `rgba(255,255,255,0.75)`;
                      el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)";
                      el.style.boxShadow = `inset 0 1px 3px rgba(255,255,255,0.15), 0 0 0 1px rgba(255,255,255,0.1), 0 22px 56px rgba(0,0,0,0.8)`;
                      el.style.transform = "translateY(-6px) scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.05)";
                      el.style.borderTopColor = "rgba(255,255,255,0.15)";
                      el.style.borderBottomColor = "rgba(255,255,255,0.55)";
                      el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)";
                      el.style.boxShadow = "inset 0 1px 3px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05), 0 18px 44px rgba(0,0,0,0.7)";
                      el.style.transform = "translateY(0) scale(1)";
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                      <div className="icon-box" style={{ background: "var(--bg-2)", width: "64px", height: "64px", flexShrink: 0 }}>
                        <FiFileText size={28} style={{ color: "var(--text-40)" }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.375rem",
                              padding: "0.25rem 0.75rem",
                              background: `${cfg.color}12`,
                              border: `1px solid ${cfg.color}25`,
                              borderRadius: "999px",
                              fontFamily: "var(--font-display)",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              color: cfg.color,
                            }}
                          >
                            <cfg.Icon size={14} />
                            {paper.status}
                          </span>
                          <span style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "var(--text-20)" }}>
                            {paper.year}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "1.75rem",
                            color: "var(--text-100)",
                            lineHeight: 1.3,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {paper.title}
                        </h3>
                      </div>
                    </div>

                    {/* Conference */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        background: "var(--bg-2)",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-40)", flexShrink: 0 }} />
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.05rem",
                          fontWeight: 500,
                          color: "var(--text-100)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {paper.conference}
                      </p>
                    </div>

                    {/* Abstract */}
                    <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-60)", flex: 1 }}>{paper.abstract}</p>

                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
