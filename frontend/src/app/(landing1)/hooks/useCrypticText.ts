"use client";

import { useState, useEffect } from "react";

const CRYPTIC_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

export function useCrypticText(finalText: string, duration: number = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let frame = 0;
    const totalFrames = duration / 50; // 50ms per frame
    const chars = finalText.split("");

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      if (progress >= 1) {
        setDisplayText(finalText);
        setIsComplete(true);
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
  }, [finalText, duration]);

  return { displayText, isComplete };
}
