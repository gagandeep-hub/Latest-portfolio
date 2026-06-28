"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const go = (href: string) => {
    setMobileOpen(false);
    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── CSS for show/hide ── */}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-resume-btn { display: inline-flex; }
        .nav-hamburger { display: none; }

        @media (max-width: 768px) {
          .nav-desktop    { display: none !important; }
          .nav-resume-btn { display: none !important; }
          .nav-hamburger  { display: flex !important; }
        }

        .mobile-nav-item {
          color: rgba(255,255,255,0.65);
          background: transparent;
        }
        .mobile-nav-item:hover {
          color: #000000 !important;
          background: #ffffff !important;
          box-shadow: 0 4px 14px rgba(255, 255, 255, 0.25);
        }
        .mobile-nav-item:hover span:last-child {
          color: #000000 !important;
        }
      `}</style>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 9000,
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.03)",
          background: scrolled ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.15)",
          backdropFilter: "blur(28px) saturate(200%)",
          WebkitBackdropFilter: "blur(28px) saturate(200%)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "none",
          transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container)",
            marginInline: "auto",
            paddingInline: "var(--container-px)",
            height: scrolled ? "60px" : "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "height 0.4s ease",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => {
              if (pathname !== "/") router.push("/");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              background: "none", border: "none", padding: 0,
              cursor: "pointer", display: "flex", alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(0.95rem, 3vw, 1.2rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              Gagandeep<span style={{ color: "rgba(255,255,255,0.3)" }}> Kushwah</span>
            </span>
          </button>

          {/* Desktop center nav */}
          <nav
            className="nav-desktop"
            style={{
              alignItems: "center",
              gap: "0.25rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "999px",
              padding: "0.25rem",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="nav-link"
                style={{
                  background: "none", border: "none",
                  padding: "0.5rem 1.125rem",
                  borderRadius: "999px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: Desktop resume btn + Mobile hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Desktop resume button */}
            <a
              href="/assests/resume (1).pdf"
              download
              className="nav-resume-btn btn btn-primary"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem", borderRadius: "999px" }}
            >
              Resume ↓
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                border: `1px solid ${mobileOpen ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
                background: mobileOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block", width: "20px", height: "2px",
                  background: "#ffffff", borderRadius: "2px",
                  transformOrigin: "center",
                }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "block", width: "20px", height: "2px",
                  background: "#ffffff", borderRadius: "2px",
                }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block", width: "20px", height: "2px",
                  background: "#ffffff", borderRadius: "2px",
                  transformOrigin: "center",
                }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Overlay Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 8999,
              background: "rgba(0,0,0,0.96)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "80px",
              paddingInline: "1.5rem",
              paddingBottom: "2rem",
            }}
          >
            {/* Nav links */}
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: "340px",
                gap: "0.375rem",
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => go(link.href)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: i * 0.055, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mobile-nav-item"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.875rem",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    border: "1px solid transparent",
                    cursor: "pointer",
                    letterSpacing: "-0.02em",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.2)", transition: "color 0.2s ease" }}>↗</span>
                </motion.button>
              ))}
            </nav>

            {/* Resume CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.38, duration: 0.35 }}
              style={{ marginTop: "2rem", width: "100%", maxWidth: "340px" }}
            >
              <a
                href="/resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  width: "100%",
                  padding: "0.9rem 2rem",
                  borderRadius: "999px",
                  background: "#ffffff",
                  color: "#000000",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Download Resume ↓
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
