"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpTextProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountUpText({
  value,
  duration = 2000,
  delay = 0,
  className = "",
}: CountUpTextProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Extract number from string (e.g., "$1.2B" -> 1.2)
  const extractNumber = (str: string): number => {
    const match = str.match(/[\d,.]+/);
    if (!match) return 0;
    return parseFloat(match[0].replace(/,/g, ""));
  };

  // Get prefix and suffix (e.g., "$1.2B" -> prefix="$", suffix="B")
  const getAffixes = (str: string) => {
    const numberMatch = str.match(/[\d,.]+/);
    if (!numberMatch) return { prefix: "", suffix: str };

    const numberIndex = numberMatch.index || 0;
    const numberLength = numberMatch[0].length;

    return {
      prefix: str.slice(0, numberIndex),
      suffix: str.slice(numberIndex + numberLength),
    };
  };

  const targetNumber = extractNumber(value);
  const { prefix, suffix } = getAffixes(value);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const timeout = setTimeout(() => {
      setHasAnimated(true);
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuad = (t: number) => t * (2 - t);
        const easedProgress = easeOutQuad(progress);

        setCount(
          Math.floor(startValue + (targetNumber - startValue) * easedProgress)
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetNumber);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, targetNumber, duration, delay, hasAnimated]);

  // Format the number (preserve decimals if original had them)
  const formatNumber = (num: number): string => {
    if (value.includes(".")) {
      return num.toFixed(1);
    }
    return num.toLocaleString();
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
