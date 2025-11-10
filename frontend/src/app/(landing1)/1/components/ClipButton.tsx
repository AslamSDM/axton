"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SVGMasks } from "./CustomSVGMasks";
import { useMemo } from "react";

interface ClipButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export function ClipButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ClipButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-[#2ef68d] to-[#478ff5] text-white",
    outline:
      "bg-transparent border-2 border-[#2ef68d] text-[#2ef68d] hover:bg-[#2ef68d]/10",
    ghost: "bg-white/5 text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-6 text-xl",
  };

  // Generate a stable random ID for this button instance
  const clipId = useMemo(
    () => `clip-button-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  // Select mask based on variant
  const MaskComponent =
    variant === "primary"
      ? SVGMasks.button1
      : variant === "outline"
      ? SVGMasks.button2
      : SVGMasks.button3;

  return (
    <>
      {MaskComponent(clipId)}
      <motion.button
        onClick={onClick}
        className={cn(
          "font-['Space_Mono',monospace] relative overflow-hidden font-bold transition-all tracking-[-0.02em]",
          variants[variant],
          sizes[size],
          className
        )}
        style={{
          clipPath: `url(#${clipId})`,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow:
            variant === "primary"
              ? "0 0 30px rgba(46, 246, 141, 0.5)"
              : "0 0 20px rgba(46, 246, 141, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <span className="relative z-10">{children}</span>

        {/* Animated background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#478ff5] to-[#2ef68d]"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </motion.button>
    </>
  );
}
