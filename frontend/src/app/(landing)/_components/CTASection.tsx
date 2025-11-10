"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const GradientBlinds = dynamic(() => import("@/components/GradientBlinds"), {
  ssr: false,
});
const GradualBlur = dynamic(() => import("@/components/GradualBlur"), {
  ssr: false,
});

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // GradientBlinds opacity - fade in when section enters, fade out when it exits
  const gradientBlindsOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.5, 0.5, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#0b0b0d] px-4 sm:px-8"
    >
      {/* GradientBlinds Background - Mouse Interactive */}
      <motion.div
        className="absolute inset-0 mix-blend-lighten z-0"
        style={{ opacity: gradientBlindsOpacity }}
      >
        <GradientBlinds
          gradientColors={["#2ef68d", "#478ff5", "#2ef68d"]}
          angle={45}
          noise={0.2}
          blindCount={12}
          mouseDampening={0.1}
          mirrorGradient={true}
          spotlightRadius={0.6}
          spotlightSoftness={1.2}
          spotlightOpacity={0.8}
          distortAmount={0.5}
          shineDirection="right"
          mixBlendMode="lighten"
        />
      </motion.div>

      {/* Top Gradient Glow */}
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-gradient-to-r blur-[26.5px] filter from-[rgba(52,113,192,0.7)] h-[605px] left-0 mix-blend-color-dodge to-[rgba(46,246,141,0.7)] top-[-680px] w-full pointer-events-none z-0" />

      {/* Main CTA Content - Fixed in Center */}
      <main className="relative z-10 text-center max-w-4xl pointer-events-none">
        <h1
          className="font-['Space_Mono',monospace] font-bold text-2xl sm:text-3xl md:text-[35px] tracking-[-0.05em] md:tracking-[-1.75px] bg-gradient-to-r from-[#2ef68d] to-[#478ff5] bg-clip-text mb-4 md:mb-6"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Execute Your Next OTC Deal with Complete Anonymity
        </h1>

        <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] max-w-full md:max-w-[1084px] mx-auto mb-8 md:mb-12">
          Built on smart contracts. Secured by blockchain. Protected by
          zero-knowledge proofs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 pointer-events-auto">
          {/* Start Trading Button - Filled with Gradient */}
          <button className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[42px] w-full sm:w-[205px] flex items-center justify-center hover:opacity-90 transition-opacity">
            <span className="font-['Space_Mono',monospace] font-bold text-xs md:text-[14px] text-white tracking-[-0.7px]">
              Start Trading
            </span>
          </button>

          {/* View Platform Button - Outlined */}
          <button className="border border-[#2ef68d] h-[42px] w-full sm:w-[205px] flex items-center justify-center hover:bg-[#2ef68d]/10 transition-colors">
            <span className="font-['Space_Mono',monospace] font-bold text-xs md:text-[14px] text-white tracking-[-0.7px]">
              View Platform
            </span>
          </button>
        </div>
      </main>

      {/* Gradual Blur at top */}
      <GradualBlur position="top" strength={3} height="10rem" opacity={0.8} />
    </section>
  );
}
