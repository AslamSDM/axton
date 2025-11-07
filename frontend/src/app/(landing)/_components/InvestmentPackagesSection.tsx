"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imgTexture = "/images/earn_section_container_bg.png";
const imgLine21 = "/images/earn_section_line.svg";

// Trading Features data
const features = [
  {
    name: "Standard",
    volume: "Up to $1M",
    fee: "0.25%",
    escrowFee: "0.15%",
    settlement: "24H",
  },
  {
    name: "Professional",
    volume: "Up to $10M",
    fee: "0.20%",
    escrowFee: "0.12%",
    settlement: "Instant/24H",
  },
  {
    name: "Enterprise",
    volume: "Up to $50M",
    fee: "0.15%",
    escrowFee: "0.10%",
    settlement: "Custom",
  },
  {
    name: "Whale Tier",
    volume: "Unlimited",
    fee: "0.10%",
    escrowFee: "0.08%",
    settlement: "Priority",
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
      className=" relative w-full h-[300vh] overflow-hidden"
      style={
        {
          // backgroundColor: useTransform(
          //   scrollYProgress,
          //   [0, 0.2, 1],
          //   ["#0b0b0d", "#0b0b0d", "#0b0b0d00"]
          // ),
        }
      }
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
              y: useTransform(scrollYProgress, [0, 0.2], [300, 0]),
              x: useTransform(scrollYProgress, [0, 0.2], [10, 0]),
            }}
            className="font-['Space_Mono',monospace] font-bold text-white tracking-[-0.15em] md:tracking-[-6.25px] leading-tight"
          >
            Trading Tiers & Features
          </motion.h1>
        </motion.div>

        {/* Fading in content from AxtonLandingPage6 */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[56px] pt-[100px] md:pt-[120px] pointer-events-auto overflow-y-auto"
        >
          <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] max-w-[1084px] mb-4 md:mb-8">
            Scale your trading operations with volume-based tier benefits
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1760px] pb-8">
            {features.map((feature, index) => (
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
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(46,246,141,0.6)_0%,_rgba(71,143,245,0.6)_100%)] mix-blend-overlay backdrop-blur-[12px]" />
                </div>

                {/* Featured Badge for Whale Tier */}
                {feature.featured && (
                  <div className="absolute -top-6 sm:-top-1/4 left-1/12 transform -translate-x-1/2 z-20 scale-90">
                    <div className="relative">
                      <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg
                          viewBox="0 0 100 100"
                          className="absolute w-full h-full"
                        >
                          <defs>
                            <path
                              id="circlePath"
                              d="M 50,50
                                m -25,0
                                a 25,25 0 1,1 50,0
                                a 25,25 0 1,1 -50,0"
                            />
                          </defs>
                          <text className="fill-white text-[6px] tracking-[2px] uppercase">
                            <textPath href="#circlePath" startOffset="0%">
                              WHALE TIER • WHALE TIER • WHALE TIER • WHALE TIER
                              •
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative p-5 sm:p-6 md:p-8 min-h-[380px] sm:h-[400px] md:h-[426px]">
                  {/* Tier Name */}
                  <div className="text-center mb-6 md:mb-8 pt-3 md:pt-4">
                    <p className="font-['Space_Mono',monospace] font-bold text-2xl sm:text-3xl md:text-[35px] text-white tracking-[-0.05em] md:tracking-[-1.75px] mb-1">
                      {feature.name}
                    </p>
                    <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[15px] text-[#929292] tracking-[-0.05em] md:tracking-[-0.75px]">
                      TIER
                    </p>
                  </div>

                  {/* Tier Details */}
                  <div className="space-y-4 md:space-y-2">
                    {/* Volume Cap */}
                    <div className="flex justify-between items-start pb-3 md:pb-4 border-b border-white/10">
                      <img alt="" className="w-full h-[1px]" src={imgLine21} />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Volume Cap
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {feature.volume}
                      </span>
                    </div>

                    {/* Platform Fee */}
                    <div className="pb-3 md:pb-4 border-b border-white/10">
                      <img alt="" className="w-full h-[1px]" src={imgLine21} />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Platform Fee
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {feature.fee}
                      </span>
                    </div>

                    {/* Escrow Fee */}
                    <div className="pb-3 md:pb-4 border-b border-white/10">
                      <img alt="" className="w-full h-[1px]" src={imgLine21} />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Escrow Fee
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {feature.escrowFee}
                      </span>
                    </div>

                    {/* Settlement */}
                    <div className="flex justify-between items-start">
                      <span className="font-['Space_Mono',monospace] text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                        Settlement
                      </span>
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-[#02c8c8] tracking-[-0.05em] md:tracking-[-0.7px]">
                        {feature.settlement}
                      </span>
                    </div>
                  </div>

                  {/* Trade Button */}
                  <button className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-5 sm:left-6 md:left-8 right-5 sm:right-6 md:right-8 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[38px] sm:h-[40px] md:h-[42px] flex items-center justify-center hover:opacity-90 transition-opacity">
                    <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.05em] md:tracking-[-0.7px]">
                      Start Trading
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
