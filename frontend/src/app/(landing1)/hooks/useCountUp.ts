"use client";

import { useState, useEffect } from "react";

export function useCountUp(
  end: number,
  duration: number = 2000,
  startDelay: number = 0
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuad = (t: number) => t * (2 - t);
        const easedProgress = easeOutQuad(progress);

        setCount(Math.floor(startValue + (end - startValue) * easedProgress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [end, duration, startDelay]);

  return count;
}
