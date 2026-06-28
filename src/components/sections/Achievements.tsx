"use client";

import { ACHIEVEMENTS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiAward, FiUsers, FiStar, FiFileText, FiUserCheck, FiGithub } from "react-icons/fi";

const ICONS = [FiAward, FiUsers, FiStar, FiFileText, FiUserCheck, FiGithub];

export function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "#000000",
      }}
    >
      {/* ── Dezerv-style Dome Shape (Fixed curvature) ── */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: "4rem",
          left: "-50%",
          width: "200%",
          height: "2500px",
          borderRadius: "50%",
          background: "linear-gradient(to bottom, #070707, #000000)",
          borderTop: "1.5px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 -20px 60px rgba(255, 255, 255, 0.04)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Glossy White Glow above dome arc ── */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "180px",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 75%)",
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="wrap"
        style={{
          position: "relative",
          zIndex: 1,
          marginBottom: "3.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Achievements</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem", maxWidth: "800px" }}>Milestones</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "600px" }}>
            A growing track record of wins, research, leadership, and technical contributions.
          </p>
        </FadeUp>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .milestone-card:hover {
            background: #ffffff !important;
            border-color: #ffffff !important;
            box-shadow: 0 15px 30px rgba(255,255,255,0.1) !important;
          }
          .milestone-card:hover h3,
          .milestone-card:hover p,
          .milestone-card:hover span {
            color: #000000 !important;
          }
          .milestone-card:hover svg {
            color: #000000 !important;
          }
        `
      }} />
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="glass-card milestone-card"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    borderLeft: "1px solid rgba(255,255,255,0.1)",
                    borderBottom: "1px solid rgba(255,255,255,0.55)",
                    borderRadius: "1.5rem",
                    backdropFilter: "blur(44px) saturate(180%)",
                    boxShadow: "inset 0 1px 3px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05), 0 18px 44px rgba(0,0,0,0.7)",
                    padding: "2.5rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-6px) scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  <Icon size={32} style={{ color: "var(--text-60)" }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.45rem",
                      color: "var(--text-100)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      color: "var(--text-40)",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      marginTop: "auto",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
