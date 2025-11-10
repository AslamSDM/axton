"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SVGMasks } from "./CustomSVGMasks";
import { useMemo } from "react";

interface ClipCardProps {
  children: React.ReactNode;
  variant?: "glass" | "dark" | "gradient" | "outline";
  className?: string;
  animate?: boolean;
  maskVariant?: 1 | 2 | 3 | 4;
}

export function ClipCard({
  children,
  variant = "glass",
  className,
  animate = true,
  maskVariant,
}: ClipCardProps) {
  const variants = {
    glass: "bg-[rgba(15,15,15,0.5)] backdrop-blur-[17.5px]",
    dark: "bg-[rgba(15,15,15,0.8)] backdrop-blur-md",
    gradient:
      "bg-gradient-to-br from-[#2ef68d]/10 to-[#478ff5]/10 backdrop-blur-lg",
    outline: "bg-transparent border-2 border-[#2ef68d]/50",
  };

  // Generate a stable random ID for this card instance
  const clipId = useMemo(
    () => `clip-card-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  // Select mask variant (use provided or random)
  const selectedVariant = maskVariant || Math.floor(Math.random() * 4) + 1;
  const MaskComponent =
    selectedVariant === 1
      ? SVGMasks.card1
      : selectedVariant === 2
      ? SVGMasks.card2
      : selectedVariant === 3
      ? SVGMasks.card3
      : SVGMasks.card4;

  const Component = animate ? motion.div : "div";

  return (
    <>
      {MaskComponent(clipId)}
      <Component
        className={cn("relative overflow-hidden", variants[variant], className)}
        style={{
          clipPath: `url(#${clipId})`,
        }}
        {...(animate && {
          whileHover: { scale: 1.02, transition: { duration: 0.3 } },
          whileTap: { scale: 0.98 },
        })}
      >
        <div className="relative z-10">{children}</div>

        {/* Shine effect on hover */}
        {animate && (
          <motion.div
            className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
            transition={{ duration: 0.6 }}
          />
        )}
      </Component>
    </>
  );
}
