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

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[56px] pt-24 md:pt-[120px] pointer-events-auto overflow-y-auto mt-24"
        >

          <motion.div className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] max-w-full md:max-w-[1084px] mb-8 md:mb-16">
            <p className="mb-4">
              Axton Protocol is a next-generation decentralized wealth system
              that allows users to invest, refer, and earn through a sustainable
              ROI model backed by blockchain verification. Designed on BSC for
              high-speed, low-cost transactions.
            </p>
          </motion.div>

          <motion.div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
            {/* Left card - Hidden on mobile */}
            <div className="relative z-10 md:translate-x-40 md:scale-90 opacity-80 hidden md:block">
              <div className="h-[240px] sm:h-[280px] md:h-[300px] w-[320px] md:w-[370px] relative">
                <div className="absolute inset-0 backdrop-blur-[2px] opacity-80 overflow-hidden">
                  <img
                    className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                    src={imgImage29}
                  />

                </div>
                <div className="absolute top-4 left-15 h-[30%] w-[25%]">
                  <img
                    alt=""
                    className="block max-w-none size-full mix-blend-color-burn"
                    src={imgVector}
                  />
                </div>
              </div>
            </div>

            {/* Center card (bigger & on top) */}
            <div className="relative z-20 md:scale-105 w-full max-w-[400px] md:max-w-none">
              <div className="h-[280px] sm:h-[320px] md:h-[360px] w-full md:w-[468px] relative shadow-[0px_0px_80px_0px_rgba(255,166,133,0.5)]">
                <div className="absolute inset-0 backdrop-blur-[2px] opacity-90 overflow-hidden">
                  <img
                    className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                    src={imgImage29}
                  />
                </div>
                <div className="absolute top-4 left-4 h-[40%] w-[40%]">
                  <img
                    alt=""
                    className="block max-w-none size-full mix-blend-color-burn"
                    src={imgGroup}
                  />
                </div>
              </div>
            </div>

            {/* Right card - Hidden on mobile */}
            <div className="relative z-10 md:-translate-x-40 md:scale-90 opacity-80 hidden md:block">
              <div className="h-[240px] sm:h-[280px] md:h-[300px] w-[320px] md:w-[370px] relative">
                <div className="absolute inset-0 backdrop-blur-[2px] opacity-80 overflow-hidden">
                  <img
                    className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                    src={imgImage29}
                  />
                </div>
                <div className="absolute top-4 right-15 h-[30%] w-[30%]">
                  <img
                    alt=""
                    className="block max-w-none size-full mix-blend-color-burn"
                    src={imgGroup29}
                  />
                </div>
              </div>
            </div>
          </motion.div>


          {/* Gradient bottom line - appears last */}
          <motion.div className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] h-[3px] w-full max-w-[470px] mx-auto mt-6" />
        </motion.div>
      </div>
    </motion.section>
  );
}
