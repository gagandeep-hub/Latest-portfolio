"use client";

import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiPrisma, SiFirebase, SiDocker, SiGit, SiGithub, SiLinux,
  SiVercel, SiTailwindcss, SiRedux, SiHtml5,
  SiTensorflow, SiFigma, SiPostman, SiArduino, SiCplusplus,
} from "react-icons/si";

const TECH_MAP: Record<string, { icon: React.ElementType; color: string }> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  "Python": { icon: SiPython, color: "#F7CC42" },
  "MongoDB": { icon: SiMongodb, color: "#4DB33D" },
  "TailwindCSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Redux": { icon: SiRedux, color: "#764ABC" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCplusplus, color: "#1572B6" },
  "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Prisma": { icon: SiPrisma, color: "#ffffff" },
  "Prisma ORM": { icon: SiPrisma, color: "#ffffff" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#ffffff" },
  "Linux": { icon: SiLinux, color: "#FCC624" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "C++": { icon: SiCplusplus, color: "#5C3EE8" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "VS Code": { icon: SiGithub, color: "#007ACC" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Arduino": { icon: SiArduino, color: "#00979D" },
};

import { FadeUp } from "@/components/ui/TextReveal";

const TECH_ROWS = [
  [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
    { icon: SiExpress, name: "Express.js", color: "#ffffff" },
    { icon: SiPython, name: "Python", color: "#F7CC42" },
    { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "#38BDF8" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCplusplus, name: "CSS/C++", color: "#1572B6" },
  ],
  [
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiPrisma, name: "Prisma", color: "#ffffff" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", color: "#ffffff" },
    { icon: SiLinux, name: "Linux", color: "#FCC624" },
    { icon: SiVercel, name: "Vercel", color: "#ffffff" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
    { icon: SiCplusplus, name: "C++/OpenCV", color: "#5C3EE8" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  ],
];

const CATEGORIES = [
  {
    title: "Frontend",
    desc: "React, Next.js, TypeScript, TailwindCSS, Redux, Framer Motion",
    icon: SiReact,
    iconColor: "#61DAFB",
    techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    desc: "Node.js, Express.js, REST APIs, JWT, Prisma ORM, Firebase",
    icon: SiNodedotjs,
    iconColor: "#68A063",
    techs: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Prisma", "Firebase"],
  },
  {
    title: "Database",
    desc: "MongoDB, MySQL, PostgreSQL, schema design and optimization",
    icon: SiMongodb,
    iconColor: "#4DB33D",
    techs: ["MongoDB", "MySQL", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "AI / ML",
    desc: "Python, TensorFlow, OpenCV, LLMs, Prompt Engineering",
    icon: SiPython,
    iconColor: "#F7CC42",
    techs: ["Python", "TensorFlow", "C++", "LLMs", "Prompt Eng."],
  },
  {
    title: "DevOps",
    desc: "Git, GitHub, Docker, Linux, Vercel, Render, CI/CD",
    icon: SiDocker,
    iconColor: "#2496ED",
    techs: ["Git", "GitHub", "Docker", "Linux", "Vercel", "Render"],
  },
  {
    title: "Tools",
    desc: "Figma, VS Code, Postman, Arduino, MATLAB, Canva",
    icon: SiFigma,
    iconColor: "#F24E1E",
    techs: ["Figma", "VS Code", "Postman", "Arduino", "MATLAB"],
  },
];

function TechPillItem({ icon: Icon, name, color }: { icon: React.ElementType; name: string; color: string }) {
  return (
    <div className="tech-pill">
      <Icon style={{ color, width: "1.125rem", height: "1.125rem", flexShrink: 0 }} />
      <span>{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="tech"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "#000000"
      }}
    >
      {/* The Dezerv Dome Shape */}
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

      {/* Glossy White Faded Overlay above/on the dome arc */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "180px",
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.06) 45%, rgba(255, 255, 255, 0) 75%)",
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
          textAlign: "center"
        }}
      >
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Tech Stack</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem", maxWidth: "800px" }}>
            Technologies I Work With
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "600px" }}>
            A broad toolkit spanning frontend, backend, ML, and DevOps — always evolving.
          </p>
        </FadeUp>
      </div>



      {/* Category cards */}
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <FadeUp key={cat.title} delay={i * 0.06}>
              <div
                className="glass-card border-gradient"
                style={{
                  padding: "2.5rem 2.25rem",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.01)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "1.5rem",
                  backdropFilter: "blur(20px) saturate(120%)",
                  boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.4)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 12px 40px 0 rgba(0, 0, 0, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.01)";
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.4)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                  <div className="icon-box" style={{ background: `${cat.iconColor}10`, borderColor: `${cat.iconColor}20`, display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "12px" }}>
                    <cat.icon size={24} style={{ color: cat.iconColor }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 650,
                      fontSize: "1.375rem",
                      color: "var(--text-100)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                  {cat.techs.map((t) => {
                    const techInfo = TECH_MAP[t];
                    return (
                      <div
                        key={t}
                        style={{
                          padding: "0.6rem 1.1rem",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          borderRadius: "0.625rem",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: "var(--text-80)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                          transition: "all 0.2s ease",
                          cursor: "default"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                          if (techInfo) {
                            e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 10px ${techInfo.color}15`;
                            e.currentTarget.style.transform = "scale(1.05)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                          e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        {techInfo ? (
                          <techInfo.icon style={{ color: techInfo.color, width: "1.75rem", height: "1.75rem", transition: "all 0.2s ease" }} />
                        ) : (
                          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.5rem" }}>◆</span>
                        )}
                        <span>{t}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
