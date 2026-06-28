"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["Problem Solver", "ML Developer", "Software Engineer"];

export function LoadingScreen() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show each role for 600ms
    const interval = setInterval(() => {
      setRoleIdx((prev) => {
        if (prev >= ROLES.length - 1) {
          clearInterval(interval);
          // After the last role has been shown for 600ms, hide the loading screen
          setTimeout(() => setVisible(false), 600);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIdx}
              initial={{ y: 45, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -45, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
