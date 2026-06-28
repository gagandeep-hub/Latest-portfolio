"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function Word({ word, progress, start, end }: WordProps) {
  const color = useTransform(progress, [start, end], ["#444444", "#ffffff"]);
  const opacity = useTransform(progress, [start, end], [0.35, 1]);

  return (
    <motion.span
      style={{
        color,
        opacity,
        display: "inline-block",
      }}
    >
      {word}
    </motion.span>
  );
}

export function TextReveal({ children, className = "", style, as: Tag = "h2" }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the text container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "center 0.6"],
  });

  const words = children.split(" ");

  return (
    <div ref={containerRef} className={className} style={style}>
      <Tag style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em", lineHeight: 1.2 }}>
        {words.map((word, i) => {
          // Stagger the activation of each word
          const start = (i / words.length) * 0.8;
          const end = Math.min(start + 0.2, 1.0);
          return <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />;
        })}
      </Tag>
    </div>
  );
}

export function FadeUp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.75"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
