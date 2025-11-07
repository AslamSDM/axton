"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AxtonHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const statsY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const statsOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9, 1],
    [0, 1, 1, 0]
  );

  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const titleFontSize = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["clamp(48px, 8vw, 125px)", "clamp(32px, 5vw, 60px)"]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9, 1],
    [1, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden h-[300vh]"
    >
      {/* Content Container - Fixed and Animated */}
      <motion.div
        className="fixed top-16 md:top-20 left-0 right-0 h-screen w-full px-4 sm:px-8 md:px-16 lg:px-[94px] "
        style={{ opacity: contentOpacity }}
      >
        <div className="relative z-10 w-full max-w-[1512px] mx-auto h-full flex flex-col justify-center pt-8 md:pt-0">
          <motion.h1
            style={{
              y: titleY,
              fontSize: titleFontSize,
              mixBlendMode: "exclusion",
            }}
            className="font-['Space_Mono',monospace] font-bold text-[#d9d9d9] tracking-[-0.02em] max-w-full md:max-w-[80%] mb-4 md:mb-8 leading-[1.125em] mt-[200px]"
          >
            Anonymized OTC Trading for Crypto Whales
          </motion.h1>

          <motion.p
            style={{
              opacity: statsOpacity,
              y: statsY,
            }}
            className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-base text-white/80 tracking-[-0.02em] max-w-full md:max-w-[624px] mb-6 md:mb-8"
          >
            Axton Protocol enables secure, private, and large-scale OTC deals
            with built-in escrow protection, collateral management, and
            zero-knowledge identity verification on Binance Smart Chain.
          </motion.p>

          <motion.div
            style={{ opacity: statsOpacity, y: statsY }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12"
          >
            <button className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[42px] px-6 md:px-8 flex items-center justify-center hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-['Space_Mono',monospace] font-bold text-xs md:text-sm text-white tracking-[-0.02em]">
                Start Trading OTC
              </span>
            </button>

            <button className="border border-[#2ef68d] h-[42px] px-6 md:px-8 flex items-center justify-center hover:bg-[#2ef68d]/10 transition-colors w-full sm:w-auto">
              <span className="font-['Space_Mono',monospace] font-bold text-xs md:text-sm text-white tracking-[-0.02em]">
                View Documentation
              </span>
            </button>
          </motion.div>

          <motion.div
            style={{ opacity: statsOpacity, y: statsY }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl"
          >
            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] p-4 md:p-6">
              <p className="font-['Space_Mono',monospace] text-[10px] md:text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                Total OTC Volume
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-lg md:text-2xl text-white tracking-[-0.02em]">
                $1.2B
              </p>
            </div>

            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2f2f2f] p-4 md:p-6">
              <p className="font-['Space_Mono',monospace] text-[10px] md:text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                Active Deals
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-lg md:text-2xl text-white tracking-[-0.02em]">
                2,547
              </p>
            </div>

            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] p-4 md:p-6">
              <p className="font-['Space_Mono',monospace] text-[10px] md:text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                Verified Traders
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-lg md:text-2xl text-white tracking-[-0.02em]">
                8,432
              </p>
            </div>

            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] p-4 md:p-6">
              <p className="font-['Space_Mono',monospace] text-[10px] md:text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                Avg Deal Size
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-lg md:text-2xl text-white tracking-[-0.02em]">
                $425K
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
