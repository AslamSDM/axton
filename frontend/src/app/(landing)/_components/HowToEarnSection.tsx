"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Image assets from AxtonLandingPage2 & AxtonLandingPage3
const imgTexture =
  "/images/earn_section_container_bg.png";
const imgLine18 =
  "/images/earn_section_line.svg";

export default function HowToEarnSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate heading font size from large to small
  const headingFontSize = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["clamp(48px, 8vw, 125px)", "clamp(28px, 5vw, 45px)"]
  );
  // Animate heading top position
  const headingTop = useTransform(scrollYProgress, [0, 0.2], ["50%", "35px"]);
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

  // Content fades in after heading animation completes and fades out at end
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full h-[300vh]"
      style={{
        backgroundColor: useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          ["#0b0b0d", "#0b0b0d", "#0b0b0d00"]
        ),
      }}
    >
      {/* Fixed container for the animation */}
      < div className="fixed top-20 left-0 w-full h-screen pointer-events-none z-10" >
        {/* Animated Heading */}
        < motion.div
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
            How can you Earn ?
          </motion.h1>
        </motion.div >

        {/* Fading in content from AxtonLandingPage3 */}
        < motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[56px] pt-[100px] md:pt-[120px] pointer-events-auto overflow-y-auto"
        >
          <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] max-w-[1084px] my-3 md:my-4">
            Three powerful income streams working together to maximize your
            returns
          </p>

          {/* Income Cards Section */}
          <div className="relative flex flex-col lg:flex-row gap-4 md:gap-8 justify-center items-start px-0 md:px-8 lg:px-[64px] mt-4 md:mt-8 pb-8">
            {/* Card 1 - ROI Income */}
            <div
              className="relative w-full lg:w-[400px] max-w-[400px] mx-auto lg:mx-0"

            >
              <div className="absolute inset-0 min-h-[300px] md:h-[349.755px] w-full">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>
              <div className="relative p-5 sm:p-6 md:p-8 pt-[80px] sm:pt-[100px] md:pt-[119px]">
                <p className="font-['Space_Mono',monospace] font-bold text-2xl sm:text-3xl md:text-[45px] text-white opacity-20 tracking-[-0.05em] md:tracking-[-2.25px] absolute top-3 sm:top-4 md:top-5 right-5 sm:right-6 md:right-8">
                  1
                </p>
                <h3 className="font-['Space_Mono',monospace] font-bold text-lg sm:text-xl md:text-[25px] text-white tracking-[-0.05em] md:tracking-[-1.25px] mb-3 md:mb-4">
                  ROI Income
                </h3>
                <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.6px] mb-3 md:mb-4 leading-relaxed">
                  Earn fixed daily returns up to 2x gour investment. Consistent,
                  predictable, and automated.
                </p>
                <div className="w-full max-w-[325px] h-[1px] mb-2 md:mb-3">
                  <img alt="" className="w-full" src={imgLine18} />
                </div>
                <div className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                  <p className="mb-0">Example :</p>
                  <p className="mb-0">Investment: 20 USDT</p>
                  <p className="mb-0">Daily ROI: 0.1 USDT</p>
                  <p>200 Days: 40 USDT (2x)</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Referral Commission */}
            <div className="relative w-full lg:w-[400px] max-w-[400px] mx-auto lg:mx-0">
              <div className="absolute inset-0 min-h-[300px] md:h-[349.755px] w-full">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>
              <div className="relative p-5 sm:p-6 md:p-8 pt-[80px] sm:pt-[100px] md:pt-[119px]">
                <p className="font-['Space_Mono',monospace] font-bold text-2xl sm:text-3xl md:text-[45px] text-white opacity-20 tracking-[-0.05em] md:tracking-[-2.25px] absolute top-3 sm:top-4 md:top-5 right-5 sm:right-6 md:right-8">
                  2
                </p>
                <h3 className="font-['Space_Mono',monospace] font-bold text-lg sm:text-xl md:text-[25px] text-white tracking-[-0.05em] md:tracking-[-1.25px] mb-3 md:mb-4">
                  Referral Commission
                </h3>
                <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.6px] mb-3 md:mb-4 leading-relaxed">
                  Earn 5-10% whenever your direct referral activates a package.
                  Build your network, grow your income.
                </p>
                <div className="w-full max-w-[325px] h-[1px] mb-2 md:mb-3">
                  <img alt="" className="w-full" src={imgLine18} />
                </div>
                <div className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                  <p className="mb-0">Example :</p>
                  <p className="mb-0">Referral Investment: 100 USDT</p>
                  <p className="mb-0">Your commission: 10 USDT</p>
                  <p>Instant payout</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Binary Matching Bonus */}
            <div className="relative w-full lg:w-[400px] max-w-[400px] mx-auto lg:mx-0">
              <div className="absolute bg-gradient-to-r from-[#2ef68d] to-[#478ff5] h-[3px] w-full top-0 left-0" />
              <div className="absolute bg-gradient-to-r from-[#2ef68d] to-[#478ff5] blur-[25px] h-[23px] w-full top-[3px] left-0" />
              <div className="absolute inset-0 min-h-[300px] md:h-[351px] w-full">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>
              <div className="relative p-5 sm:p-6 md:p-8 pt-[80px] sm:pt-[100px] md:pt-[121px]">
                <p className="font-['Space_Mono',monospace] font-bold text-2xl sm:text-3xl md:text-[45px] text-white opacity-20 tracking-[-0.05em] md:tracking-[-2.25px] absolute top-4 sm:top-6 md:top-7 right-5 sm:right-6 md:right-8">
                  3
                </p>
                <h3 className="font-['Space_Mono',monospace] font-bold text-lg sm:text-xl md:text-[25px] text-white tracking-[-0.05em] md:tracking-[-1.25px] mb-3 md:mb-4">
                  Binary Matching Bonus
                </h3>
                <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.6px] mb-3 md:mb-4 leading-relaxed">
                  Earn 10% on matched business volume from your weaker leg every
                  24 hours. Unlimited earning potential.
                </p>
                <div className="w-full max-w-[325px] h-[1px] mb-2 md:mb-3">
                  <img alt="" className="w-full" src={imgLine18} />
                </div>
                <div className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                  <p className="mb-0">Example :</p>
                  <p className="mb-0">Left Team: 500 USDT</p>
                  <p className="mb-0">Right Team: 300 USDT</p>
                  <p>Daily Match: 30 USDT (10%)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div >
      </div >
    </motion.section >
  );
}
