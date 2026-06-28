"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";

const CATEGORY_CONFIG: Record<string, { label: string; color: string; dotColor: string }> = {
  technical: { label: "Technical", color: "#ffffff", dotColor: "#ffffff" },
  creative:  { label: "Creative",  color: "#888888", dotColor: "#888888" },
  soft:      { label: "Soft",      color: "#cccccc", dotColor: "#cccccc" },
};

const SKILL_ICONS: Record<string, string> = {
  "Frontend Development":      "⬡",
  "Backend Development":       "◈",
  "Database Design":           "⬢",
  "REST API Development":      "◇",
  "Data Structures & Algorithms":"∑",
  "Object Oriented Programming":"○",
  "AI Development":            "◎",
  "Machine Learning":          "◉",
  "Electronics Prototyping":   "⊕",
  "Graphic Design":            "⬟",
  "Leadership":                "◆",
  "Communication":             "◯",
  "Project Management":        "▣",
  "Team Collaboration":        "⬡",
  "Analytical Thinking":       "◈",
  "Adaptability":              "∞",
  "Prompt Engineering":        "◇",
  "Open Source":               "◎",
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "0", left: "-80px" }} />

      <div style={{ maxWidth: "1600px", width: "100%", marginInline: "auto", paddingInline: "var(--container-px)", position: "relative", zIndex: 1 }}>
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Expertise</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>
            Skills & Capabilities
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "520px", marginBottom: "4rem" }}>
            Technical depth combined with soft skills — forged through projects, research, and leadership.
          </p>
        </FadeUp>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "1.25rem",
            overflow: "hidden",
          }}
        >
          {SKILLS.map((skill, i) => {
            const cfg = CATEGORY_CONFIG[skill.category] ?? CATEGORY_CONFIG.technical;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.5), duration: 0.4 }}
                style={{
                  padding: "2.25rem",
                  background: "var(--bg-1)",
                  transition: "background 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "var(--bg-2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "var(--bg-1)";
                }}
              >
                {/* Icon + category */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      lineHeight: 1,
                      color: cfg.dotColor,
                      fontWeight: 300,
                    }}
                  >
                    {SKILL_ICONS[skill.name] ?? "◇"}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.625rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: cfg.dotColor,
                      padding: "0.1875rem 0.5rem",
                      background: `${cfg.dotColor}10`,
                      border: `1px solid ${cfg.dotColor}20`,
                      borderRadius: "999px",
                    }}
                  >
                    {cfg.label}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: "var(--text-100)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {skill.name}
                </h3>
                <p className="body-sm" style={{ fontSize: "0.8125rem", lineHeight: 1.55 }}>
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
