"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Image assets from AxtonLandingPage7 & AxtonLandingPage8
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/c0f71f40-93b6-44cc-b7f0-1f0e8a71d969";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/58c8fe9e-6b25-44ef-a19b-895b00a46bd9";
const imgFrame =
  "https://www.figma.com/api/mcp/asset/f0424ca8-0598-4d00-9fae-0cccf4cada43";
const imgGroup58 =
  "https://www.figma.com/api/mcp/asset/5367076d-5fcb-4f44-b7df-a9ed1d1c5fe6";
const imgGroup59 =
  "https://www.figma.com/api/mcp/asset/c69a1609-371a-4bea-96fb-51c3e1acc23b";

export default function BinaryPlanSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate heading font size from large to small
  const headingFontSize = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["125px", "45px"]
  );
  // Animate heading top position
  const headingTop = useTransform(scrollYProgress, [0, 0.2], ["50%", "80px"]);
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
    <section
      ref={containerRef}
      className="bg-[#0b0b0d] relative w-full h-[300vh] overflow-hidden"
    >
      {/* Dot Grid Background */}
      <div className="absolute h-[914px] left-0 opacity-10 overflow-clip top-0 w-full">
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[9px] left-0 w-[100px]"
            style={{ top: `${i * 9}px` }}
          >
            <img alt="" className="block max-w-none size-full" src={imgFrame} />
          </div>
        ))}
      </div>

      {/* Background vector pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-3758px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Top gradient glow effect */}
      <div className="absolute backdrop-blur-[2px] bg-gradient-to-r from-[rgba(52,113,192,0.7)] to-[rgba(46,246,141,0.7)] blur-[26.5px] h-[203px] left-0 mix-blend-color-dodge w-full top-[-50px]" />

      {/* Fixed container for the animation */}
      <div className="fixed top-20 left-0 w-full h-screen pointer-events-none z-10">
        {/* Animated Heading */}
        <motion.div
          className="absolute w-full px-[100px]"
          style={{
            top: headingTop,
            y: headingTranslateY,
            opacity: headingOpacity,
          }}
        >
          <motion.h1
            style={{
              fontSize: headingFontSize,
            }}
            className="font-['Space_Mono',monospace] font-bold text-white tracking-[-6.25px] leading-tight"
          >
            Binary Plan Structure
          </motion.h1>
          <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] mt-4 mb-8">
            Build two teams and earn matching bonuses daily
          </p>
        </motion.div>

        {/* Fading in content from AxtonLandingPage8 */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-[56px] pt-[80px] pointer-events-auto"
        >
          {/* Binary Tree Structure */}
          <div className="relative mt-20">
            {/* You (Top User) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 text-center">
              <div className="relative w-[100px] h-[100px] mb-4 mx-auto">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgGroup58}
                />
              </div>
              <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                You
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-white tracking-[-1.2px]">
                $1000
              </p>
            </div>

            {/* Connection Lines */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[150px] h-[88.527px] w-[125.32px]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgGroup59}
              />
            </div>

            {/* Left and Right Teams */}
            <div className="flex justify-center gap-32 mt-[250px]">
              {/* Left Team */}
              <div className="text-center">
                <div className="relative w-[100px] h-[100px] mb-4 mx-auto">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup58}
                  />
                </div>
                <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                  Left Team
                </p>
                <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-white tracking-[-1.2px]">
                  $1000
                </p>
              </div>

              {/* Right Team */}
              <div className="text-center">
                <div className="relative w-[100px] h-[100px] mb-4 mx-auto">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup58}
                  />
                </div>
                <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                  Right Team
                </p>
                <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-white tracking-[-1.2px]">
                  $1000
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="flex justify-center gap-8 mt-12">
              {/* Weaker */}
              <div className="backdrop-blur-[17.5px] backdrop-filter bg-[rgba(15,15,15,0.2)] border border-[#2f2f2f] h-[118px] w-[205px] p-6">
                <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                  Weaker
                </p>
                <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-[#02c8c8] tracking-[-1.2px] text-center">
                  $1000
                </p>
              </div>

              {/* Daily Match */}
              <div className="backdrop-blur-[17.5px] backdrop-filter bg-[rgba(15,15,15,0.2)] border border-[#2f2f2f] h-[118px] w-[205px] p-6">
                <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                  Daily Match (10%)
                </p>
                <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-[#02c8c8] tracking-[-1.2px] text-center">
                  $1000
                </p>
              </div>

              {/* Carry Forward */}
              <div className="backdrop-blur-[17.5px] backdrop-filter bg-[rgba(15,15,15,0.2)] border border-[#2f2f2f] h-[118px] w-[205px] p-6">
                <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                  Carry Forward
                </p>
                <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-[#02c8c8] tracking-[-1.2px] text-center">
                  $1000
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
