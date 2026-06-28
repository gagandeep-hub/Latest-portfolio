"use client";


import { EXPERIENCE } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#080808",
        position: "relative",
        overflow: "hidden",
        padding: 0,
      }}
    >
      {/* Curved Dome Transition Header — Liquid Glass Style */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,1) 100%)",
          borderTopLeftRadius: "50% 120px",
          borderTopRightRadius: "50% 120px",
          paddingTop: "7rem",
          paddingBottom: "3rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "inset 0px 1px 30px rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeUp delay={0}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>Approach</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display-lg" style={{ color: "#ffffff", marginBottom: "1.5rem", fontWeight: 800 }}>
              How Gagandeep does things differently
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body-lg" style={{ maxWidth: "620px", marginInline: "auto", color: "var(--text-40)" }}>
              Combining core electronics engineering foundations with advanced full-stack development, ML engineering, and AI systems.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Main Experience Content */}
      <div style={{ background: "#000000", paddingBottom: "9rem" }}>
        <div className="wrap">

          <style dangerouslySetInnerHTML={{
            __html: `
          .exp-card {
            padding: 1.75rem 2.25rem;
            background: var(--bg-1);
            border: 1px solid var(--border);
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 1.5rem;
            align-items: start;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 14px;
            color: var(--text-100);
          }
          .exp-card:hover {
            background: #ffffff;
            color: #000000;
            border-color: #ffffff;
            transform: translateY(-4px);
            box-shadow: 0 15px 30px rgba(255,255,255,0.1);
          }
          .exp-card:hover h3, 
          .exp-card:hover p, 
          .exp-card:hover span, 
          .exp-card:hover .exp-duration {
            color: #000000 !important;
          }
          .exp-card:hover .exp-icon-box {
            background: rgba(0,0,0,0.05) !important;
            border-color: rgba(0,0,0,0.1) !important;
          }
          .exp-card:hover .exp-icon-box svg {
            color: #000000 !important;
          }
          .exp-card:hover .skill-tag {
            background: rgba(0,0,0,0.05);
            border-color: rgba(0,0,0,0.1);
            color: #000000 !important;
          }
          
          @media (max-width: 768px) {
            .exp-card {
              grid-template-columns: 1fr;
              padding: 1.5rem;
              gap: 1.25rem;
            }
          }
        `}} />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="glass-card exp-card">
                  {/* Icon */}
                  <div
                    className="exp-icon-box"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FiBriefcase size={22} style={{ color: exp.color, transition: "color 0.3s ease" }} />
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: exp.color,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.65rem",
                        color: "var(--text-100)",
                        letterSpacing: "-0.02em",
                        marginBottom: "0.25rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        color: "var(--text-60)",
                        marginBottom: "0.85rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {exp.company}
                    </p>
                    <p className="body-sm" style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "1.25rem", transition: "color 0.3s ease" }}>
                      {exp.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className="skill-tag" style={{ fontSize: "0.85rem", padding: "0.25rem 0.65rem", transition: "all 0.3s ease" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div
                    className="exp-duration"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.85rem",
                      color: "var(--text-40)",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      transition: "color 0.3s ease",
                    }}
                  >
                    <FiCalendar size={15} />
                    {exp.duration}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
