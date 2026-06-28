"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiGithub, FiExternalLink, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export function Projects() {
  const displayProjects = PROJECTS.slice(0, 6);

  return (
    <section
      id="projects"
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
          height: "2500px", /* Fixed height so curve doesn't change when filtering */
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

      {/* ── Heading ── */}
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
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Work</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem", maxWidth: "800px" }}>
            Featured Projects
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "600px" }}>
            A selection of my best work across web, AI, and hardware.
          </p>
        </FadeUp>
      </div>

      {/* ── Content ── */}
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Projects grid */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 330px), 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <AnimatePresence>
            {displayProjects.map((project, i) => {
              return (
                <FadeUp key={project.id} delay={i * 0.06} className={`project-item project-item-${i}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className="glass-card liquid-glass-card"
                    style={{
                      height: "100%",
                      /* Liquid glass gradient */
                      background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                      /* Lighter top/left borders for specular highlight */
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderTop: "1px solid rgba(255,255,255,0.15)",
                      borderLeft: "1px solid rgba(255,255,255,0.1)",
                      borderBottom: "1px solid rgba(255,255,255,0.55)",
                      borderRadius: "1.5rem",
                      backdropFilter: "blur(12px) saturate(140%)",
                      /* Strong inner light reflection and outer drop shadow */
                      boxShadow: "inset 0 1px 3px rgba(255,255,255,0.3), inset 0 28px 36px -18px rgba(255,255,255,0.14), 0 0 0 1px rgba(255,255,255,0.14), 0 18px 44px rgba(0,0,0,0.7), 0 0 32px rgba(255,255,255,0.14)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `rgba(255,255,255,0.4)`;
                      el.style.borderTopColor = `rgba(255,255,255,0.6)`;
                      el.style.borderBottomColor = `rgba(255,255,255,0.75)`;
                      el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)";
                      el.style.boxShadow = `inset 0 1px 3px rgba(255,255,255,0.36), inset 0 28px 36px -18px rgba(255,255,255,0.18), 0 0 0 1px rgba(255,255,255,0.22), 0 22px 56px rgba(0,0,0,0.84), 0 0 44px rgba(255,255,255,0.24)`;
                      el.style.transform = "translateY(-6px) scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.05)";
                      el.style.borderTopColor = "rgba(255,255,255,0.15)";
                      el.style.borderBottomColor = "rgba(255,255,255,0.55)";
                      el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)";
                      el.style.boxShadow = "inset 0 1px 3px rgba(255,255,255,0.3), inset 0 28px 36px -18px rgba(255,255,255,0.14), 0 0 0 1px rgba(255,255,255,0.14), 0 18px 44px rgba(0,0,0,0.7), 0 0 32px rgba(255,255,255,0.14)";
                      el.style.transform = "translateY(0) scale(1)";
                    }}
                  >
                    {/* Image / mesh header */}
                    <div
                      style={{
                        height: "150px", /* Reduced height */
                        position: "relative",
                        overflow: "hidden",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        background: `radial-gradient(ellipse at 50% 120%, rgba(255,255,255,0.08), transparent 70%), #030303`,
                      }}
                    >
                      {/* Subtly animated glossy overlay for the liquid effect */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                          pointerEvents: "none",
                          zIndex: 3,
                        }}
                      />
                      {(project as { image?: string }).image ? (
                        <img
                          src={(project as { image?: string }).image}
                          alt={project.name}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: "100%", height: "100%", objectFit: "cover", objectPosition: "top",
                            filter: "brightness(0.85) contrast(1.1)",
                            transition: "filter 0.5s ease, transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.filter = "brightness(1) contrast(1.15)";
                            e.currentTarget.style.transform = "scale(1.08)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.filter = "brightness(0.85) contrast(1.1)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                      ) : (
                        /* Grid mesh pattern */
                        <div
                          style={{
                            position: "absolute", inset: 0,
                            backgroundImage: `
                              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                            `,
                            backgroundSize: "32px 32px",
                          }}
                        />
                      )}

                      {/* Badges overlay - Removed numbers */}
                      <div
                        style={{
                          position: "absolute", top: "1rem", right: "1rem",
                          display: "flex", alignItems: "center", justifyContent: "flex-end", zIndex: 2,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          {project.featured && (
                            <span
                              style={{
                                fontFamily: "var(--font-display)", fontSize: "0.6rem", fontWeight: 700,
                                letterSpacing: "0.1em", textTransform: "uppercase",
                                padding: "0.2rem 0.6rem",
                                background: "rgba(0,0,0,0.7)", border: `1px solid rgba(255,255,255,0.3)`,
                                borderRadius: "999px", color: "#ffffff",
                                backdropFilter: "blur(8px)",
                                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1)`,
                              }}
                            >
                              ★ Featured
                            </span>
                          )}
                          <span
                            style={{
                              fontFamily: "var(--font-display)", fontSize: "0.65rem", fontWeight: 600,
                              letterSpacing: "0.08em", textTransform: "uppercase",
                              padding: "0.2rem 0.6rem",
                              background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.1)",
                              borderRadius: "999px", color: "rgba(255,255,255,0.65)",
                              backdropFilter: "blur(8px)",
                              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                            }}
                          >
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>

                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)", fontWeight: 650,
                            fontSize: "1.2rem", color: "var(--text-100)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {project.name}
                        </h3>
                      </div>

                      <p
                        style={{
                          fontFamily: "var(--font-body)", fontSize: "0.85rem",
                          color: "var(--text-40)", lineHeight: 1.5,
                          marginBottom: "1rem", flex: 1,
                          /* Limit to 1 line as requested */
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Tech pills — monochromatic */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                        {project.tech.slice(0, 4).map((t) => (
                          <div
                            key={t}
                            style={{
                              padding: "0.35rem 0.875rem",
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.05)",
                              borderRadius: "0.625rem",
                              display: "inline-flex", alignItems: "center", gap: "0.5rem",
                              fontFamily: "var(--font-display)",
                              fontSize: "0.8rem", fontWeight: 500,
                              color: "var(--text-80)",
                              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                              transition: "all 0.2s ease",
                              cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                              e.currentTarget.style.transform = "scale(1.04)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >
                            {t}
                          </div>
                        ))}
                        {project.tech.length > 4 && (
                          <div
                            style={{
                              padding: "0.35rem 0.875rem",
                              background: "rgba(255,255,255,0.02)",
                              border: "1px solid rgba(255,255,255,0.04)",
                              borderRadius: "0.625rem",
                              fontFamily: "var(--font-display)",
                              fontSize: "0.8rem", color: "var(--text-20)",
                              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                            }}
                          >
                            +{project.tech.length - 4}
                          </div>
                        )}
                      </div>

                      {/* Links footer */}
                      <div
                        style={{
                          display: "flex", alignItems: "center", gap: "1.25rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <a
                          href={project.github} target="_blank" rel="noopener noreferrer"
                          style={{
                            display: "flex", alignItems: "center", gap: "0.375rem",
                            fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 500,
                            color: "var(--text-40)", transition: "color 0.2s ease", textDecoration: "none",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-100)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-40)")}
                        >
                          <FiGithub size={14} /> Code
                        </a>
                        {project.live !== "#" && (
                          <a
                            href={project.live} target="_blank" rel="noopener noreferrer"
                            style={{
                              display: "flex", alignItems: "center", gap: "0.375rem",
                              fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 500,
                              color: "var(--text-40)", transition: "color 0.2s ease", textDecoration: "none",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-40)")}
                          >
                            <FiExternalLink size={14} /> Live
                          </a>
                        )}
                        <div style={{ marginLeft: "auto" }}>
                          <FiArrowUpRight size={15} style={{ color: "var(--text-20)" }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeUp>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <FadeUp delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1rem",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.borderColor = "#ffffff";
                e.currentTarget.style.color = "#000000";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              See All Projects <FiArrowRight />
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
