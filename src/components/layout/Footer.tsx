"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const SOCIALS = [
  { Icon: FiGithub,   label: "GitHub",   href: PERSONAL_INFO.github },
  { Icon: FiLinkedin, label: "LinkedIn", href: PERSONAL_INFO.linkedin },
  { Icon: FiMail,     label: "Email",    href: `mailto:${PERSONAL_INFO.email}` },
];

const FOOTER_TECH = ["Next.js 15", "TypeScript", "TailwindCSS v4", "Framer Motion", "GSAP", "Lenis", "React Three Fiber"];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "4rem",
        paddingBottom: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2.5rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border)",
            marginBottom: "2rem",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "300px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--text-80)",
                  letterSpacing: "-0.02em",
                }}
              >
                Gagandeep Kushwah
              </span>
            </div>
            <p className="body-sm" style={{ lineHeight: 1.65 }}>
              Building intelligent digital experiences with Full Stack Development, AI, and Electronics.
            </p>
          </div>

          {/* Social + Back to top */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {SOCIALS.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-40)",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-100)";
                  e.currentTarget.style.borderColor = "var(--border-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-40)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <Icon size={17} />
              </motion.a>
            ))}

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "var(--text-100)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <FiArrowUp size={17} />
            </motion.button>
          </div>
        </div>

        {/* Tech stack credits */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem" }}>
          
          {FOOTER_TECH.map((t) => (
            <motion.span
              key={t}
              style={{
                padding: "0.25rem 0.625rem",
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: "0.375rem",
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--text-40)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              whileHover={{ 
                background: "#ffffff", 
                color: "#000000", 
                borderColor: "#ffffff",
                y: -2 
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.8125rem", color: "var(--text-20)" }}>
            © 2025 Gagandeep Kushwah. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
