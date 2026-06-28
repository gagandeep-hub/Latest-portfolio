"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });

  const rx = useSpring(x, { stiffness: 150, damping: 25, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 150, damping: 25, mass: 0.6 });

  useEffect(() => {
    const update = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, [x, y]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="cursor-outer"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(79,142,247,0.5)",
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#4f8ef7",
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
