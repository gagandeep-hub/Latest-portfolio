"use client";



const WORDS = [
  "Mentorship",
  "Leadership",
  "Open Source",
  "Problem Solving",
  "System Architecture",
  "Full Stack",
  "Machine Learning",
];

export function TextMarquee() {
  return (
    <section style={{ 
      background: "#000000",  
      overflow: "hidden",
      position: "relative"
    }}>
      <div
        style={{
          transform: "rotate(-4deg) scale(1)",
          borderTop: "1px solid rgba(255,255,255,0.03)", 
          borderBottom: "1px solid rgba(255,255,255,0.03)",
          paddingBlock: "0rem",
          background: "rgba(255, 255, 255, 0.01)"
        }}
      >
        <div 
          className="marquee-wrap"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 5%, black 25%, black 75%, transparent 95%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, transparent 5%, black 25%, black 75%, transparent 95%, transparent 100%)"
          }}
        >
          <div className="marquee-row" style={{ gap: "4rem" }}>
            {[...WORDS, ...WORDS, ...WORDS, ...WORDS, ...WORDS].map((word, idx) => (
              <span
                key={`${word}-${idx}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  color: "var(--text-60)",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.03em",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
