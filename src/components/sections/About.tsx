"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { JOURNEY } from "@/lib/constants";
import { FadeUp, TextReveal } from "@/components/ui/TextReveal";

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ position: "relative", overflow: "hidden", paddingTop: "4rem", paddingBottom: "2rem" }}>

      {/* Outer Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* The Dezerv Dome Shape */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "var(--bg-1)",
          borderTopLeftRadius: "50% 200px",
          borderTopRightRadius: "50% 200px",
          borderTop: "1px solid rgba(255,255,255,0.03)",
          boxShadow: "0 -20px 60px rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        {/* Eyebrow */}
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "2rem" }}>About Me</p>
        </FadeUp>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* LEFT: Narrative & Timeline */}
          <div>
            <FadeUp delay={0.05}>
              <h2 className="display-md" style={{ marginBottom: "1.75rem", fontFamily: "var(--font-display)" }}>
                <span style={{ color: "#ffffff", WebkitTextStroke: "2.5px rgba(255,255,255,0.4)" }}>
                  My Journey
                </span>
                <br />
                <span className="text-gradient">So Far</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <TextReveal as="p" style={{ marginBottom: "2.5rem", lineHeight: 1.4, fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.4rem, 2.8vw, 2.15rem)", fontWeight: 300, color: "var(--text-100)" }}>
                I engineer digital products that bridge the gap between complex logic and beautiful design. My journey from electronics to full-stack engineering is driven by a singular focus: building scalable solutions that matter.
              </TextReveal>
              <TextReveal as="p" className="mb-4 md:mb-12" style={{ lineHeight: 1.6, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.15rem, 2.3vw, 1.75rem)", fontWeight: 400, color: "var(--text-80)", letterSpacing: "0.02em" }}>
                &quot;Whether I am architecting a high-performance Next.js dashboard or integrating Machine Learning models into production, I believe in writing code that is as elegant as it is powerful.&quot;
              </TextReveal>
            </FadeUp>


          </div>

          {/* RIGHT: Profile Cutout & Quote */}
          <div ref={statsRef}>
            {/* Massive Cutout Layered Profile */}
            <FadeUp delay={0.1} className="hidden md:block">
              <div
                className="glass-card border-gradient"
                style={{
                  padding: "1.25rem",
                  marginBottom: "2rem",
                  background: "var(--bg-1)",
                  border: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1.25rem"
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "390px", display: "flex", justifyContent: "center", alignItems: "flex-end", marginBottom: "1rem" }}>

                  {/* Background Text */}
                  <div style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 12vw, 8rem)",
                    fontWeight: 900,
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(255,255,255,0.06)",
                    whiteSpace: "nowrap",
                    zIndex: 0,
                    pointerEvents: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                  }}>
                    Engineer
                  </div>

                  {/* Cutout Image */}
                  <img
                    src="/gagandeep.png"
                    alt="Gagandeep Cutout"
                    style={{
                      height: "100%",
                      width: "auto",
                      objectFit: "contain",
                      zIndex: 1,
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
                      maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
                      WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)"
                    }}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 2, textAlign: "center", paddingBottom: "1rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "var(--text-100)",
                      marginBottom: "0.25rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Gagandeep Kushwah
                  </h3>
                  <p className="body-sm" style={{ color: "var(--blue)", fontWeight: 500, marginBottom: "1rem" }}>
                    B.Tech ECE · Full Stack · ML
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Quote */}
            <FadeUp delay={0.25}>
              <div
                className="mt-1 lg:mt-4"
                style={{
                  padding: "1.75rem",
                  background: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--blue)",
                  borderRadius: "0.75rem",
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "0.9375rem",
                    color: "var(--text-80)",
                    lineHeight: 1.65,
                    letterSpacing: "-0.01em",
                  }}
                >
                  &quot;My goal is to become a Software Engineer building scalable products
                  using Machine Learning and Full Stack Engineering.&quot;
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
