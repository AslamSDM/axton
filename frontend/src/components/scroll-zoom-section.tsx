"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollZoomSectionProps {
  children: React.ReactNode;
  className?: string;
  scale?: [number, number]; // [start scale, end scale]
  opacity?: [number, number]; // [start opacity, end opacity]
}

export const ScrollZoomSection: React.FC<ScrollZoomSectionProps> = ({
  children,
  className = "",
  scale = [0.8, 1],
  opacity = [0, 1],
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [scale[0], scale[1], scale[1]]
  );
  const opacityValue = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [opacity[0], opacity[1], opacity[1], opacity[0]]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleValue,
        opacity: opacityValue,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
