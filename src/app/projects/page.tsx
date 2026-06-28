"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Electronics", "Web Dev", "AI / ML"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <main
      style={{
        background: "#000000",
        minHeight: "100vh",
        paddingTop: "8rem",
        paddingBottom: "6rem",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse at top, rgba(255,255,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

        {/* Top Header Section */}
        <div style={{ position: "relative", marginBottom: "3rem", textAlign: "center" }}>
          {/* Back Button */}
          <Link
            href="/"
            style={{
              position: "absolute",
              left: 0,
              top: "0.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              color: "var(--text-60)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.background = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-60)";
              e.currentTarget.style.background = "var(--bg-2)";
            }}
          >
            <FiArrowLeft size={20} />
          </Link>

          {/* Titles */}
          <FadeUp delay={0}>
            <h1 className="display-lg" style={{ color: "#ffffff", marginBottom: "1rem", fontWeight: 800 }}>
              All Projects
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body-lg" style={{ color: "var(--text-40)", maxWidth: "600px", margin: "0 auto" }}>
              A comprehensive list of my work, including detailed descriptions of what I built and the technologies used.
            </p>
          </FadeUp>
        </div>

        {/* Category filter */}
        <FadeUp delay={0.15}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "3rem" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.625rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  border: "1px solid",
                  borderColor: active === cat ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.07)",
                  background: active === cat ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.02)",
                  color: active === cat ? "#ffffff" : "var(--text-40)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Projects grid - Unclamped, detailed view */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <FadeUp key={project.id} delay={i * 0.05}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card liquid-glass-card"
                  style={{
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    borderLeft: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "1.5rem",
                    backdropFilter: "blur(12px) saturate(140%)",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.2), inset 0 24px 32px -16px rgba(255,255,255,0.05), 0 16px 40px rgba(0,0,0,0.6)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.4)";
                    el.style.borderTopColor = "rgba(255,255,255,0.6)";
                    el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)";
                    el.style.boxShadow = "inset 0 1px 2px rgba(255,255,255,0.3), inset 0 24px 32px -16px rgba(255,255,255,0.1), 0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.1)";
                    el.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.05)";
                    el.style.borderTopColor = "rgba(255,255,255,0.15)";
                    el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)";
                    el.style.boxShadow = "inset 0 1px 2px rgba(255,255,255,0.2), inset 0 24px 32px -16px rgba(255,255,255,0.05), 0 16px 40px rgba(0,0,0,0.6)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Image Header */}
                  <div
                    style={{
                      height: "220px",
                      position: "relative",
                      overflow: "hidden",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      background: "radial-gradient(ellipse at 50% 120%, rgba(255,255,255,0.08), transparent 70%), #030303",
                    }}
                  >
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
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = "brightness(0.85) contrast(1.1)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    ) : (
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

                    <div
                      style={{
                        position: "absolute", top: "1rem", right: "1rem",
                        display: "flex", alignItems: "center", justifyContent: "flex-end", zIndex: 2,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-display)", fontSize: "0.65rem", fontWeight: 600,
                            letterSpacing: "0.08em", textTransform: "uppercase",
                            padding: "0.3rem 0.7rem",
                            background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "999px", color: "rgba(255,255,255,0.8)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body with full details */}
                  <div style={{ padding: "1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: "1.5rem", color: "var(--text-100)",
                        letterSpacing: "-0.02em", marginBottom: "0.5rem"
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-display)", fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.6)", fontWeight: 500, marginBottom: "1rem",
                      }}
                    >
                      {project.tagline}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)", fontSize: "0.95rem",
                        color: "var(--text-40)", lineHeight: 1.6,
                        marginBottom: "1.5rem", flex: 1,
                      }}
                    >
                      {project.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      {project.tech.map((t) => (
                        <div
                          key={t}
                          style={{
                            padding: "0.4rem 1rem",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: "0.5rem",
                            fontFamily: "var(--font-display)",
                            fontSize: "0.85rem", fontWeight: 500,
                            color: "var(--text-80)",
                          }}
                        >
                          {t}
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex", alignItems: "center", gap: "1.5rem",
                        paddingTop: "1.25rem",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <a
                        href={project.github} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: "flex", alignItems: "center", gap: "0.5rem",
                          fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 500,
                          color: "var(--text-40)", textDecoration: "none", transition: "color 0.2s"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-40)")}
                      >
                        <FiGithub size={16} /> Code
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live} target="_blank" rel="noopener noreferrer"
                          style={{
                            display: "flex", alignItems: "center", gap: "0.5rem",
                            fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 500,
                            color: "var(--text-40)", textDecoration: "none", transition: "color 0.2s"
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-40)")}
                        >
                          <FiExternalLink size={16} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
