"use client";


import { LEADERSHIP } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="orb orb-blue" style={{ width: "400px", height: "400px", bottom: "0", right: "-60px" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <FadeUp delay={0}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Leadership</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>Leading & Building</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="body-lg" style={{ maxWidth: "520px", marginBottom: "4rem" }}>
            Beyond code — organizing communities, building startups, and mentoring developers.
          </p>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {LEADERSHIP.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className="glass-card"
                style={{
                  padding: "2.25rem",
                  background: "var(--bg-1)",
                  border: "1px solid var(--border)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Icon + org */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: item.color,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.org}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        color: "var(--text-100)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.role}
                    </h3>
                  </div>
                </div>

                <p className="body-sm" style={{ lineHeight: 1.7, flex: 1 }}>{item.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {item.activities.map((act) => (
                    <span
                      key={act}
                      style={{
                        padding: "0.25rem 0.625rem",
                        background: `${item.color}08`,
                        border: `1px solid ${item.color}18`,
                        borderRadius: "0.375rem",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: item.color,
                      }}
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
