"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { FadeUp } from "@/components/ui/TextReveal";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";

const SOCIALS = [
  { Icon: FiMail,     label: "Email",    value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
  { Icon: FiLinkedin, label: "LinkedIn", value: "gagandeepkushwah730221b",  href: PERSONAL_INFO.linkedin },
  { Icon: FiGithub,   label: "GitHub",   value: "gagandeep-hub",  href: PERSONAL_INFO.github },
  { Icon: FiMapPin,   label: "Location", value: "India 🇮🇳",         href: "#" },
];

export function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent]   = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section" style={{ position: "relative", paddingTop: 0 }}>
      {/* Top Glow Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          boxShadow: "0 0 15px 2px rgba(255,255,255,0.4), 0 0 30px 4px rgba(255,255,255,0.1)",
          zIndex: 2,
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1, paddingTop: "6rem" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
          <FadeUp delay={0}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Contact</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>
              Let&apos;s Work Together
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body-lg" style={{ maxWidth: "500px" }}>
              Internship, freelance, research collaboration, or just a conversation about tech — I&apos;d love to hear from you.
            </p>
          </FadeUp>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div
                className="contact-form-row"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
              >
                <div>
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="input"
                  />
                </div>
              </div>

              <div>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship / Collaboration / Hello"
                  required
                  className="input"
                />
              </div>

              <div>
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="input"
                  style={{ resize: "none" }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                className="btn btn-primary"
                style={{ gap: "0.625rem", fontSize: "1rem" }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  <><FiCheck size={16} /> Sent!</>
                ) : sending ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                    style={{ display: "inline-block" }}
                  >
                    ◌
                  </motion.span>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </FadeUp>

          {/* Right side */}
          <FadeUp delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <style dangerouslySetInnerHTML={{__html: `
                .contact-card {
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                .contact-card:hover {
                  background: #ffffff !important;
                  border-color: #ffffff !important;
                  transform: translateY(-4px) !important;
                  box-shadow: 0 15px 30px rgba(255,255,255,0.1);
                }
                .contact-card:hover .contact-label,
                .contact-card:hover .contact-value,
                .contact-card:hover .contact-arrow {
                  color: #000000 !important;
                }
                .contact-card:hover .contact-icon-box {
                  background: rgba(0,0,0,0.05) !important;
                  border-color: rgba(0,0,0,0.1) !important;
                }
                .contact-card:hover .contact-icon-box svg {
                  color: #000000 !important;
                }
              `}} />

              {/* Social cards */}
              {SOCIALS.map(({ Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="contact-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    background: "var(--bg-1)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.875rem",
                  }}
                >
                  <div
                    className="contact-icon-box"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "var(--bg-2)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--text-60)", transition: "color 0.3s ease" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      className="contact-label"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-20)",
                        marginBottom: "0.125rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      className="contact-value"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--text-80)",
                        letterSpacing: "-0.01em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                  <span className="contact-arrow" style={{ color: "var(--text-20)", fontSize: "1rem", transition: "color 0.3s ease" }}>→</span>
                </motion.a>
              ))}

              {/* Available for */}
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--bg-1)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-20)",
                    marginBottom: "1rem",
                  }}
                >
                  Available For
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {PERSONAL_INFO.availableFor.map((item) => (
                    <span
                      key={item}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        padding: "0.4375rem 0.875rem",
                        background: "var(--bg-2)",
                        border: "1px solid var(--border)",
                        borderRadius: "999px",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--text-80)",
                      }}
                    >
                      <FiCheck size={12} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
