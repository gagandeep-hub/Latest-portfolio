"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiBook, FiCalendar } from "react-icons/fi";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="orb orb-purple" style={{ width: "400px", height: "400px", top: "30%", left: "-80px" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Education</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>Academic Background</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "520px", marginBottom: "4rem" }}>
            Formal engineering education fueling software curiosity.
          </p>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", alignItems: "start" }}>
          {/* Degree card */}
          <FadeUp delay={0.1}>
            <div
              style={{
                background: "var(--bg-1)",
                border: "1px solid var(--border)",
                borderRadius: "1.25rem",
                overflow: "hidden",
              }}
            >
              {/* Color header */}
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  background: "linear-gradient(135deg, rgba(79,142,247,0.08), rgba(167,139,250,0.06), transparent)",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(79,142,247,0.12)",
                    border: "1px solid rgba(79,142,247,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  🎓
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.25rem" }}>
                    Current Degree
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      color: "var(--text-100)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {EDUCATION.degree}
                  </h3>
                </div>
              </div>

              <div style={{ padding: "1.5rem 1.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    background: "linear-gradient(135deg, #4f8ef7, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {EDUCATION.field}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <FiCalendar size={14} style={{ color: "var(--text-20)" }} />
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", color: "var(--text-40)", fontWeight: 500 }}>
                    {EDUCATION.duration}
                  </p>
                </div>
                <p className="body-sm" style={{ lineHeight: 1.7 }}>
                  Studying Electronics & Communication Engineering with a deep focus on software development,
                  AI integration, and full-stack systems — bridging hardware and software worlds.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Interests */}
          <FadeUp delay={0.15}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--text-60)",
                  letterSpacing: "-0.01em",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <FiBook size={15} /> Areas of Interest
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {EDUCATION.interests.map((interest, i) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.875rem",
                      padding: "0.875rem 1.25rem",
                      background: "var(--bg-1)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.625rem",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-md)";
                      (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLDivElement).style.background = "var(--bg-1)";
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: ["#4f8ef7","#a78bfa","#22d3ee","#fbbf24","#34d399","#f43f5e","#f97316","#8b5cf6"][i % 8],
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--text-60)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {interest}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
