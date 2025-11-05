"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imgFrame =
  "/images/binary_section_1.svg";
const binaryImg = "/images/binaryplan.png"
// const dotgrid = "/images/dotgrid.svg"

export default function BinaryPlanSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Animate heading font size from large to small
  const headingFontSize = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["clamp(48px, 8vw, 125px)", "clamp(28px, 5vw, 45px)"]
  );
  // Animate heading top position
  const headingTop = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["50%", "clamp(40px, 8vw, 80px)"]
  );
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
      id="structure"
      ref={containerRef}
      className="bg-[#0b0b0d] relative w-full h-[300vh] overflow-hidden"
      style={{
        backgroundColor: useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          ["#0b0b0d", "#0b0b0d", "#0b0b0d00"]
        ),
      }}
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
      {/* <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-3758px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div> */}

      {/* Top gradient glow effect */}
      {/* <div className="absolute backdrop-blur-[2px] bg-gradient-to-r from-[rgba(52,113,192,0.7)] to-[rgba(46,246,141,0.7)] blur-[26.5px] h-[203px] left-0 mix-blend-color-dodge w-full top-[-50px]" /> */}

      {/* Fixed container for the animation */}
      <div className="fixed top-20 left-0 w-full h-screen pointer-events-none z-10">
        {/* Animated Heading */}
        <motion.div
          className="absolute w-full px-4 sm:px-8 md:px-16 lg:px-[100px]"
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
            Binary Plan Structure
          </motion.h1>
          <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] mt-3 md:mt-4 mb-4 md:mb-8">
            Build two teams and earn matching bonuses daily
          </p>
        </motion.div>

        {/* Fading in content from AxtonLandingPage8 */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[56px] pt-[60px] sm:pt-[70px] md:pt-[80px] pointer-events-auto overflow-y-auto"
        >
          <div className="flex justify-center w-full pt-28 ">
            <img src={binaryImg} className="w-[90vw] md:w-[80vw] lg:w-[50vw]" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
