"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Image assets (valid for 7 days from Figma API)
const imgImage28 =
  "https://www.figma.com/api/mcp/asset/8a150328-ecb4-4fa2-91c5-8e588f231212";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/d49c8135-7c4d-4a9e-af1a-1dc89703bb77";

export default function AxtonHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to opacity values
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9, 1],
    [1, 1, 0, 0]
  );
  const statsOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9, 1],
    [0, 1, 1, 0]
  );
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const titleFontSize = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["125px", "60px"]
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
        className="fixed top-20 left-0 right-0 h-screen w-full px-4 md:px-[94px]"
        style={{ opacity: contentOpacity }}
      >
        <div className="relative z-10 w-full max-w-[1512px] mx-auto h-full flex flex-col justify-center">
          {/* Hero Heading - Animated */}
          <motion.h1
            style={{
              y: titleY,
              fontSize: titleFontSize,
            }}
            className="font-['Space_Mono',monospace] font-bold text-[#d9d9d9] tracking-[-0.02em] max-w-[1296px] mb-8 leading-tight"
          >
            Reinventing Passive Income Through Blockchain Intelligence
          </motion.h1>

          {/* Hero Subtext */}
          <motion.p
            style={{ opacity: statsOpacity }}
            className="font-['Space_Mono',monospace] text-sm md:text-base text-white/80 tracking-[-0.02em] max-w-[624px] mb-8"
          >
            Axton Protocol merges DeFi transparency with network-powered earning
            — built on Binance Smart Chain (BEP-20 USDT).
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{ opacity: statsOpacity }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[42px] px-8 flex items-center justify-center hover:opacity-90 transition-opacity">
              <span className="font-['Space_Mono',monospace] font-bold text-sm text-white tracking-[-0.02em]">
                Start Earning
              </span>
            </button>

            <button className="border border-[#2ef68d] h-[42px] px-8 flex items-center justify-center hover:bg-[#2ef68d]/10 transition-colors">
              <span className="font-['Space_Mono',monospace] font-bold text-sm text-white tracking-[-0.02em]">
                View Smart Contract
              </span>
            </button>
          </motion.div>

          {/* Stats Cards - Fade in on scroll */}
          <motion.div
            style={{ opacity: statsOpacity }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl"
          >
            {/* Stat Card 1 */}
            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] p-6">
              <p className="font-['Space_Mono',monospace] text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                Total Investors
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-2xl text-white tracking-[-0.02em]">
                12,254
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2f2f2f] p-6">
              <p className="font-['Space_Mono',monospace] text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                24h ROI Paid
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-2xl text-white tracking-[-0.02em]">
                $1,20,254
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] p-6">
              <p className="font-['Space_Mono',monospace] text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                Active Referrals
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-2xl text-white tracking-[-0.02em]">
                25,689
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] p-6">
              <p className="font-['Space_Mono',monospace] text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                Binary Volume
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-2xl text-white tracking-[-0.02em]">
                $5.1M
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
