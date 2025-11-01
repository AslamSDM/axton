"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Image assets from AxtonLandingPage2 & AxtonLandingPage3
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/43a3cbc7-9957-43d7-b3ff-80b861133535";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/9a0e2963-ea40-4ddb-81fb-69a50d1450d0";
const imgTexture =
  "https://www.figma.com/api/mcp/asset/88261558-f306-4aef-9abf-bf7c69423c73";
const imgLine18 =
  "https://www.figma.com/api/mcp/asset/8ab9162f-1922-446b-a86c-dc012f33369d";

export default function HowToEarnSection() {
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
    <section
      ref={containerRef}
      className="bg-[#0b0b0d] relative w-full h-[300vh] overflow-hidden"
    >
      {/* Background vector pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-2048px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Fixed container for the animation */}
      <div className="fixed top-20 left-0 w-full h-screen pointer-events-none z-10">
        {/* Animated Heading */}
        <motion.div
          className="absolute w-full px-[56px]"
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
            How can you Earn ?
          </motion.h1>
        </motion.div>

        {/* Fading in content from AxtonLandingPage3 */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-[56px] pt-[120px] pointer-events-auto"
        >
          <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] max-w-[1084px] my-4">
            Three powerful income streams working together to maximize your
            returns
          </p>

          {/* Income Cards Section */}
          <div className="relative flex gap-8 justify-center items-start px-[64px] mt-8">
            {/* Card 1 - ROI Income */}
            <div className="relative w-[400px]">
              <div className="absolute inset-0 h-[349.755px] w-[400px]">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>
              <div className="relative p-8 pt-[119px]">
                <p className="font-['Space_Mono',monospace] font-bold text-[45px] text-white opacity-20 tracking-[-2.25px] absolute top-5 right-8">
                  1
                </p>
                <h3 className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-4">
                  ROI Income
                </h3>
                <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-4 leading-relaxed">
                  Earn fixed daily returns up to 2x gour investment. Consistent,
                  predictable, and automated.
                </p>
                <div className="w-[325px] h-[1px] mb-3">
                  <img alt="" className="w-full" src={imgLine18} />
                </div>
                <div className="font-['Space_Mono',monospace] text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                  <p className="mb-0">Example :</p>
                  <p className="mb-0">Investment: 20 USDT</p>
                  <p className="mb-0">Daily ROI: 0.1 USDT</p>
                  <p>200 Days: 40 USDT (2x)</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Referral Commission */}
            <div className="relative w-[400px]">
              <div className="absolute inset-0 h-[349.755px] w-[400px]">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>
              <div className="relative p-8 pt-[119px]">
                <p className="font-['Space_Mono',monospace] font-bold text-[45px] text-white opacity-20 tracking-[-2.25px] absolute top-5 right-8">
                  2
                </p>
                <h3 className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-4">
                  Referral Commission
                </h3>
                <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-4 leading-relaxed">
                  Earn 5-10% whenever your direct referral activates a package.
                  Build your network, grow your income.
                </p>
                <div className="w-[325px] h-[1px] mb-3">
                  <img alt="" className="w-full" src={imgLine18} />
                </div>
                <div className="font-['Space_Mono',monospace] text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                  <p className="mb-0">Example :</p>
                  <p className="mb-0">Referral Investment: 100 USDT</p>
                  <p className="mb-0">Your commission: 10 USDT</p>
                  <p>Instant payout</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Binary Matching Bonus */}
            <div className="relative w-[400px]">
              <div className="absolute bg-gradient-to-r from-[#2ef68d] to-[#478ff5] h-[3px] w-full top-0 left-0" />
              <div className="absolute bg-gradient-to-r from-[#2ef68d] to-[#478ff5] blur-[25px] h-[23px] w-full top-[3px] left-0" />
              <div className="absolute inset-0 h-[351px] w-[400px]">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>
              <div className="relative p-8 pt-[121px]">
                <p className="font-['Space_Mono',monospace] font-bold text-[45px] text-white opacity-20 tracking-[-2.25px] absolute top-7 right-8">
                  3
                </p>
                <h3 className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-4">
                  Binary Matching Bonus
                </h3>
                <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-4 leading-relaxed">
                  Earn 10% on matched business volume from your weaker leg every
                  24 hours. Unlimited earning potential.
                </p>
                <div className="w-[325px] h-[1px] mb-3">
                  <img alt="" className="w-full" src={imgLine18} />
                </div>
                <div className="font-['Space_Mono',monospace] text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                  <p className="mb-0">Example :</p>
                  <p className="mb-0">Left Team: 500 USDT</p>
                  <p className="mb-0">Right Team: 300 USDT</p>
                  <p>Daily Match: 30 USDT (10%)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
