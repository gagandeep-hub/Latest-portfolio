"use client";

import { motion } from "framer-motion";
import { HACKATHONS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiAward, FiZap } from "react-icons/fi";

const POSITION_COLORS: Record<string, string> = {
  "Winner":      "#fbbf24",
  "Finalist":    "#22d3ee",
  "Participant": "#a78bfa",
};

export function Hackathons() {
  return (
    <section id="hackathons" className="section">
      <div className="orb orb-blue" style={{ width: "400px", height: "400px", top: "20%", left: "-80px" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Hackathons</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>Competing & Building</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "520px", marginBottom: "4rem" }}>
            Building solutions under pressure, learning through competition, and pushing creative limits.
          </p>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {HACKATHONS.map((hack, i) => {
            const pos = hack.position;
            const posColor = POSITION_COLORS[pos] ?? "#a78bfa";

            return (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    background: "var(--bg-1)",
                    border: "1px solid var(--border)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {/* Top: year + position */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-20)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {hack.year}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        padding: "0.3125rem 0.75rem",
                        background: `${posColor}12`,
                        border: `1px solid ${posColor}25`,
                        borderRadius: "999px",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: posColor,
                        letterSpacing: "0.02em",
                      }}
                    >
                      <FiAward size={12} />
                      {pos}
                    </span>
                  </div>

                  {/* Name + type */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: "var(--text-100)",
                        letterSpacing: "-0.02em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {hack.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--text-40)",
                      }}
                    >
                      {hack.type}
                    </p>
                  </div>

                  {/* Project */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "1rem",
                      background: "var(--bg-2)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.625rem",
                    }}
                  >
                    <FiZap size={16} style={{ color: posColor, flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 600, color: "var(--text-20)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                        Project
                      </p>
                      <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-80)", letterSpacing: "-0.01em" }}>
                        {hack.project}
                      </p>
                    </div>
                  </div>

                  <p className="body-sm" style={{ lineHeight: 1.65, flex: 1 }}>{hack.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {hack.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "0.25rem 0.625rem",
                          background: "var(--bg-2)",
                          border: "1px solid var(--border)",
                          borderRadius: "0.375rem",
                          fontFamily: "var(--font-display)",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "var(--text-40)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
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
