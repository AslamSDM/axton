"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CRYPTIC_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

interface CrypticTextProps {
  text: string;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
}

export function CrypticText({
  text,
  duration = 2000,
  className = "",
  as: Component = "span",
  delay = 0,
}: CrypticTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const startDelay = setTimeout(() => {
      setHasAnimated(true);
      let frame = 0;
      const totalFrames = duration / 50; // 50ms per frame
      const chars = text.split("");

      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        if (progress >= 1) {
          setDisplayText(text);
          clearInterval(interval);
          return;
        }

        const newText = chars
          .map((char, index) => {
            if (char === " " || char === "\n") return char;

            const charProgress = (progress * chars.length - index) / 3;

            if (charProgress >= 1) {
              return char;
            } else if (charProgress > 0) {
              return CRYPTIC_CHARS[
                Math.floor(Math.random() * CRYPTIC_CHARS.length)
              ];
            } else {
              return CRYPTIC_CHARS[
                Math.floor(Math.random() * CRYPTIC_CHARS.length)
              ];
            }
          })
          .join("");

        setDisplayText(newText);
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [isInView, text, duration, delay, hasAnimated]);

  return (
    <Component ref={ref} className={className}>
      {displayText || text}
    </Component>
  );
}
