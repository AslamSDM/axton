"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imgImage29 =
  "/images/about_section_bg.png";
const imgVector =
  "/images/about_section_icon1.svg";
const imgGroup29 =
  "/images/about_section_icon2.svg";
const imgGroup =
  "/images/about_section_icon3.svg";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate heading top position
  const headingTop = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["50%", "clamp(20px, 3vw, 28px)"]
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

  // Cards and description fade in after heading animation and fade out at end
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="relative w-full overflow-hidden h-[300vh]"
      style={{
        backgroundColor: useTransform(
          scrollYProgress,
          [0, 1],
          ["#0b0b0d7e", "#0b0b0ddd"]
        )
      }}
    >


      {/* Fixed container for the animation */}
      <div className="fixed top-16 md:top-20 left-0 w-full h-screen pointer-events-none z-10">
        {/* Animated Heading */}
        <motion.div
          className="absolute w-full px-4 sm:px-8 md:px-[56px] mt-24"
          style={{
            top: headingTop,
            y: headingTranslateY,
            opacity: headingOpacity,
          }}
        >
          <motion.h2
            style={{
              fontSize: useTransform(
                scrollYProgress,
                [0, 0.2],
                ["clamp(48px, 8vw, 100px)", "clamp(24px, 4vw, 50px)"]
              ),
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
            className="absolute top-0 font-['Space_Mono',monospace] font-bold text-white tracking-[-0.05em] md:tracking-[-2.25px] leading-tight"
          >
            About Axton Protocol
          </motion.h2>
        </motion.div>

        {/* Fading in content */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[56px] pt-24 md:pt-[120px] pointer-events-auto overflow-y-auto mt-24"
        >
          {/* Animated About Heading */}

          {/* About Description - appears last */}
          <motion.div className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] max-w-full md:max-w-[1084px] mb-8 md:mb-16">
            <p className="mb-4">
              Axton Protocol is a next-generation decentralized wealth system
              that allows users to invest, refer, and earn through a sustainable
              ROI model backed by blockchain verification. Designed on BSC for
              high-speed, low-cost transactions.
            </p>
          </motion.div>

          {/* Feature Cards Section - appears last */}
          <motion.div className="relative flex flex-col md:flex-row items-center justify-center gap-3 mb-8">
            {/* Left card */}
            <div className="h-[200px] sm:h-[240px] md:h-[265px] w-full sm:w-[320px] md:w-[370px] relative">
              <div className="absolute backdrop-blur-[2px] inset-0 opacity-80 overflow-hidden">
                <img
                  alt=""
                  className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                  src={imgImage29}
                />
              </div>
            </div>

            {/* Center card (larger with shadow) */}
            <div className="h-[240px] sm:h-[280px] md:h-[336px] w-full sm:w-[380px] md:w-[468px] relative shadow-[0px_0px_80px_0px_rgba(255,166,133,0.5)] z-20">
              <div className="absolute backdrop-blur-[2px] inset-0 opacity-80 overflow-hidden">
                <img
                  alt=""
                  className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                  src={imgImage29}
                />
              </div>

              {/* Info Card Overlay */}
              <div className="absolute backdrop-blur-[17.5px] bg-[rgba(0,0,0,0.7)] border-[0.5px] border-neutral-900 h-auto md:h-[113px] w-[90%] sm:w-[380px] md:w-[421px] bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 px-4 md:px-8 py-3 md:py-4">
                <h3 className="font-['Space_Mono',monospace] font-bold text-lg sm:text-xl md:text-[25px] text-white tracking-[-0.05em] md:tracking-[-1.25px] mb-1 md:mb-2">
                  Built on BSC
                </h3>
                <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.6px] max-w-full md:max-w-[333px]">
                  Fast, secure, BEP-20 USDT based transactions with minimal fees
                  and maximum efficiency.
                </p>
              </div>
            </div>

            {/* Right card */}
            <div className="h-[200px] sm:h-[240px] md:h-[265px] w-full sm:w-[320px] md:w-[370px] relative">
              <div className="absolute backdrop-blur-[2px] inset-0 opacity-80 overflow-hidden">
                <img
                  alt=""
                  className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                  src={imgImage29}
                />
              </div>
            </div>

            {/* Decorative vector elements - hidden on mobile */}
            <div className="hidden md:block absolute top-[51.31%] left-[24.8%] w-[5.09%] h-[10.07%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector}
              />
            </div>

            <div className="hidden md:block absolute top-[51.31%] right-[32.39%] w-[6.3%] h-[10.08%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgGroup29}
              />
            </div>

            <div className="hidden md:block absolute top-1/2 left-[33%] w-[9.76%] h-[13%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgGroup}
              />
            </div>
          </motion.div>

          {/* Gradient bottom line - appears last */}
          <motion.div className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] h-[3px] w-full max-w-[470px] mx-auto" />
        </motion.div>
      </div>
    </motion.section>
  );
}
