"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiPython,
  SiMongodb, SiDocker, SiGit, SiJavascript, SiExpress,
  SiTailwindcss, SiRedux, SiHtml5, SiPostgresql, SiMysql,
  SiPrisma, SiFirebase, SiLinux, SiVercel, SiTensorflow,
  SiFigma, SiPostman, SiArduino, SiCplusplus, SiGithub
} from "react-icons/si";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { PERSONAL_INFO } from "@/lib/constants";

const ROLES = [
  "Problem Solver",
  "ML Developer",
  "Software Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
  "ECE Student",
  "MERN Developer",
  "Creative Developer",
];

const TECH_ICONS = [
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
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiArduino, name: "Arduino", color: "#00979D" },
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fastMode, setFastMode] = useState(true);

  useEffect(() => {
    const speed = fastMode ? 700 : 2400;
    const t = setInterval(() => {
      setRoleIdx((p) => {
        const next = (p + 1) % ROLES.length;
        if (next === 3 && fastMode) {
          setFastMode(false);
        }
        return next;
      });
    }, speed);
    return () => clearInterval(t);
  }, [fastMode]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "140px",
        paddingBottom: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        className="orb orb-blue"
        style={{ width: "700px", height: "700px", top: "-200px", left: "-150px", opacity: 0.6 }}
      />
      <div
        className="orb orb-purple"
        style={{ width: "500px", height: "500px", top: "30%", right: "-100px", opacity: 0.5 }}
      />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

        {/* ── DESKTOP LAYOUT (UNCHANGED) ── */}
        <div className="hero-desktop-layout">
          {/* Floating profile image — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              top: "20px",
              right: "5%",
              height: "480px",
              zIndex: 0,
              pointerEvents: "none",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            className="animate-float"
          >
            {/* Background "Developer" text */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(6rem, 15vw, 10rem)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.06)",
              whiteSpace: "nowrap",
              zIndex: 0,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}>
              Developer
            </div>
            <img
              src="/hero-chatgpt.png"
              alt="Gagandeep Kushwah"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                zIndex: 1,
                position: "relative",
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.8))",
                maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
              }}
            />
          </motion.div>

          {/* Name */}
          <div style={{ marginBottom: "1.25rem" }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl glow-white"
              style={{ marginBottom: "0.25rem" }}
            >
              Gagandeep
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl text-gradient"
            >
              Kushwah
            </motion.h1>
          </div>

          {/* Animated role */}
          <div style={{ height: "3.5rem", overflow: "hidden", marginBottom: "1.5rem" }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -55, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 500,
                  color: "var(--text-60)",
                  letterSpacing: "-0.02em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "var(--text-20)" }}>—</span>
                {ROLES[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Intro + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            style={{ maxWidth: "580px" }}
          >
            <p className="body-lg" style={{ marginBottom: "2rem", lineHeight: 1.75 }}>
              {PERSONAL_INFO.intro}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-primary"
              >
                View Projects <FiArrowRight size={16} />
              </button>
              <a href="/resume.pdf" download className="btn btn-outline">
                <FiDownload size={16} /> Resume
              </a>
              <a href="#contact" className="btn btn-outline"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Contact
              </a>
            </div>

            {/* Social */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-40)", fontSize: "0.875rem", fontFamily: "var(--font-display)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-100)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-40)")}
              >
                <FiGithub size={16} /> GitHub
              </a>
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--text-20)", flexShrink: 0 }} />
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-40)", fontSize: "0.875rem", fontFamily: "var(--font-display)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-100)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-40)")}
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden flex flex-col items-center w-full overflow-x-hidden pt-6 pb-12">
          
          {/* HERO VISUAL SANDWICH */}
          <div className="relative w-full flex flex-col items-center mb-4 mt-6">
            
            {/* GAGAN */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.2 }} className="text-white font-black tracking-tighter leading-[0.85] text-[5.5rem] md:text-[6.5rem] text-center relative z-0">
              GAGAN
            </motion.div>

            {/* Glow */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-white/30 rounded-full blur-[40px] z-10 pointer-events-none" />

            {/* DEEP - Absolute positioned behind the image, below GAGAN */}
            <div className="absolute top-[4.5rem] md:top-[5.5rem] left-0 right-0 w-full flex justify-center z-10 pointer-events-none">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.3 }} className="font-black tracking-tighter leading-[0.85] text-[5.5rem] md:text-[6.5rem] text-center" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)', color: 'transparent' }}>
                DEEP
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.7 }}
              className="relative z-20 flex justify-center -mt-8 md:-mt-12 w-full max-w-[280px] md:max-w-[360px]"
            >
              <img
                src="/hero-chatgpt.png"
                alt="Gagandeep Kushwah"
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </motion.div>

            {/* KUSHWAH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="relative z-30 font-black tracking-tighter leading-none text-white text-[4rem] md:text-[5rem] text-center -mt-16 md:-mt-24"
              style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
            >
              KUSHWAH
            </motion.div>
          </div>

          {/* 3. Role ticker */}
          <div style={{ height: "3rem", overflow: "hidden", marginTop: "1.5rem", marginBottom: "1rem", width: "100%" }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ y: 45, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -45, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "var(--text-60)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "var(--text-20)" }}>—</span>
                {ROLES[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* 4. Intro + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            className="w-full px-4"
          >
            <p className="body-lg" style={{ marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "1rem", textAlign: "center" }}>
              {PERSONAL_INFO.intro}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem", width: "100%", maxWidth: "400px" }}>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                View Projects <FiArrowRight size={16} />
              </button>
              <div style={{ display: "flex", gap: "0.625rem", width: "100%" }}>
                <a href="/resume.pdf" download className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }}>
                  <FiDownload size={16} /> Resume
                </a>
                <a href="#contact" className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }}
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Social */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-40)", fontSize: "0.875rem", fontFamily: "var(--font-display)" }}
              >
                <FiGithub size={15} /> GitHub
              </a>
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--text-20)" }} />
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-40)", fontSize: "0.875rem", fontFamily: "var(--font-display)" }}
              >
                <FiLinkedin size={15} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tech marquee — both desktop and mobile */}
        <motion.div
          className="lg:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9, duration: 0.6 }}
          style={{ marginTop: "3rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-40)",
              marginBottom: "0.75rem",
            }}
          >
            Core Technologies
          </p>
          <div className="marquee-wrap">
            <div className="marquee-row" style={{ gap: "1.25rem" }}>
              {[...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS].map(({ icon: Icon, name, color }, idx) => (
                <div
                  key={`${name}-${idx}`}
                  className="tech-pill"
                  style={{
                    padding: "0.875rem 1.75rem",
                    fontSize: "1.125rem",
                    borderRadius: "0.875rem",
                    border: "1px solid var(--border-md)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Icon style={{ color, width: "1.5rem", height: "1.5rem", flexShrink: 0 }} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}