"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Image assets from AxtonLandingPage5 & AxtonLandingPage6
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/38f2b4bc-591b-4e62-9305-c15f37684b53";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/869caf1d-1aa2-4192-9d0c-003ee75e0607";
const imgTexture =
  "https://www.figma.com/api/mcp/asset/f856b579-dbb2-4edf-86a1-25b32e410fbf";
const imgLine21 =
  "https://www.figma.com/api/mcp/asset/ec536e5f-9771-4c07-bfc4-477714545e59";

// Package data
const packages = [
  {
    amount: "20",
    dailyROI: "0.1 USDT",
    maxIncome: "40 USDT (2x)",
    binaryCap: "50 USDT",
    duration: "200 Days",
  },
  {
    amount: "50",
    dailyROI: "0.25 USDT",
    maxIncome: "100 USDT (2x)",
    binaryCap: "150 USDT",
    duration: "200 Days",
  },
  {
    amount: "100",
    dailyROI: "0.5 USDT",
    maxIncome: "200 USDT (2x)",
    binaryCap: "300 USDT",
    duration: "200 Days",
  },
  {
    amount: "1000",
    dailyROI: "5 USDT",
    maxIncome: "2000 USDT (2x)",
    binaryCap: "3000 USDT",
    duration: "200 Days",
    featured: true,
  },
];

export default function InvestmentPackagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate heading font size from large to small
  const headingFontSize = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["clamp(48px, 8vw, 125px)", "clamp(28px, 5vw, 45px)"]
  );
  // Animate heading top position
  const headingTop = useTransform(scrollYProgress, [0, 0.2], ["50%", "28px"]);
  const headingTranslateY = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-50%", "0%"]
  );
  // Heading visibility - only show when section is active
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );

  // Content fades in after heading animation and fades out at end
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.section
      id="packages"
      ref={containerRef}
      className=" relative w-full h-[300vh] overflow-hidden "
      style={{
        // backgroundColor: useTransform(
        //   scrollYProgress,
        //   [0, 0.2, 1],
        //   ["#0b0b0d", "#0b0b0d", "#0b0b0d00"]
        // ),
      }}
    >
      {/* Background vector pattern
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-3078px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div> */}

      {/* Top gradient glow effect */}
      {/* <div className="absolute backdrop-blur-[2px] bg-gradient-to-r from-[rgba(52,113,192,0.7)] to-[rgba(46,246,141,0.7)] blur-[26.5px] h-[978px] left-0 mix-blend-color-dodge w-full top-[-30px]" /> */}

      {/* Fixed container for the animation */}
      <div className="fixed top-20 left-0 w-full h-screen pointer-events-none z-10">
        {/* Animated Heading */}
        <motion.div
          className="absolute w-full px-4 sm:px-8 md:px-[56px]"
          style={{
            top: headingTop,
            y: headingTranslateY,
            opacity: headingOpacity,
          }}
        >
          <motion.h1
            style={{
              fontSize: headingFontSize,
              y: useTransform(
                scrollYProgress,
                [0, 0.2],
                [300, 0]
              ),
              x: useTransform(
                scrollYProgress,
                [0, 0.2],
                [10, 0]
              )
            }}
            className="font-['Space_Mono',monospace] font-bold text-white tracking-[-0.15em] md:tracking-[-6.25px] leading-tight"
          >
            Choose Your Investment Package
          </motion.h1>
        </motion.div>

        {/* Fading in content from AxtonLandingPage6 */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[56px] pt-[100px] md:pt-[120px] pointer-events-auto overflow-y-auto"
        >
          <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] max-w-[1084px] mb-4 md:mb-8">
            Select the package that fits your investment goals
          </p>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1760px] pb-8">
            {packages.map((pkg, index) => (
              <div key={index} className="relative">
                {/* Texture Background with Gradient Overlay */}
                <div className="absolute inset-0 min-h-[380px] sm:h-[400px] md:h-[426px]">
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `url('${imgTexture}')`,
                      backgroundRepeat: "repeat",
                      backgroundSize: "69.94px 69.94px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] mix-blend-overlay" />
                </div>

                {/* Featured Badge for 1000 USDT package */}
                {pkg.featured && (
                  <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                        <span className="font-['Space_Mono',monospace] text-[8px] sm:text-[9px] md:text-[10px] text-white text-center uppercase leading-tight">
                          Suggested
                          <br />
                          Plans
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative p-5 sm:p-6 md:p-8 min-h-[380px] sm:h-[400px] md:h-[426px]">
                  {/* Package Amount */}
                  <div className="text-center mb-6 md:mb-8 pt-3 md:pt-4">
                    <p className="font-['Space_Mono',monospace] font-bold text-2xl sm:text-3xl md:text-[35px] text-white tracking-[-0.05em] md:tracking-[-1.75px] mb-1">
                      {pkg.amount}
                    </p>
                    <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[15px] text-[#929292] tracking-[-0.05em] md:tracking-[-0.75px]">
                      USDT
                    </p>
                  </div>

                  {/* Package Details */}
                  <div className="space-y-4 md:space-y-6">
                    {/* Daily ROI */}
                    <div className="flex justify-between items-start pb-3 md:pb-4 border-b border-white/10">
                      <img alt="" className="w-full h-[1px]" src={imgLine21} />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Daily ROI
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {pkg.dailyROI}
                      </span>
                    </div>

                    {/* Maximum Income */}
                    <div className="pb-3 md:pb-4 border-b border-white/10">
                      <img alt="" className="w-full h-[1px]" src={imgLine21} />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Maximum Income
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {pkg.maxIncome}
                      </span>
                    </div>

                    {/* Binary Cap */}
                    <div className="pb-3 md:pb-4 border-b border-white/10">
                      <img alt="" className="w-full h-[1px]" src={imgLine21} />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Binary Cap
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {pkg.binaryCap}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Duration
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Activate Button */}
                  <button className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-5 sm:left-6 md:left-8 right-5 sm:right-6 md:right-8 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[38px] sm:h-[40px] md:h-[42px] flex items-center justify-center hover:opacity-90 transition-opacity">
                    <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                      Activate Now
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
