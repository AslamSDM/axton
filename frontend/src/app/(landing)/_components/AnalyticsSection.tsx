"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTailwindBreakpoints } from "@/hooks/useTailwindBreakpoints";
import dynamic from "next/dynamic";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });
const GradualBlur = dynamic(() => import("@/components/GradualBlur"), {
  ssr: false,
});

const imgTexture = "/images/analytics_section_container_bg.png";
const imgFrame = "/images/analytics_section_1.svg";
const imgVector14 = "/images/analytics_section_2.svg";
const imgEllipse18 = "/images/analytics_section_3.svg";

export default function AnalyticsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { isBelowLg } = useTailwindBreakpoints();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Heading animations
  const headingFontSize = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["clamp(48px, 8vw, 125px)", "clamp(24px, 4vw, 35px)"]
  );

  const headingTop = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["50%", "clamp(60px, 8vh, 80px)"]
  );
  const headingTranslateY = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-50%", "0%"]
  );

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

  // Silk opacity - fade in at start, fade out at end
  const silkOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0.35, 0.35, 0]
  );

  return (
    <motion.section
      id="analytics"
      ref={containerRef}
      className="relative w-full h-[400vh] overflow-hidden bg-[#0b0b0d9e]"
      style={{
        backgroundColor: useTransform(
          scrollYProgress,
          [0, 0.5, 0.8, 1],
          ["#0b0b0d00", "#0b0b0d9e", "#0b0b0d9e", "#0b0b0d00"]
        ),
      }}
    >
      {/* Silk Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen mix-blend-overlay z-0"
        style={{ opacity: silkOpacity }}
      >
        <Silk
          speed={3}
          scale={1.5}
          color="#2ef68d"
          noiseIntensity={1.2}
          rotation={0.3}
        />
      </motion.div>

      {/* Dot Grid Background */}
      <div className="absolute h-[150px] left-0 opacity-10 overflow-clip top-0 w-full">
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

      {/* Top Gradient Glow */}
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-gradient-to-r blur-[26.5px] filter from-[rgba(52,113,192,0.7)] h-[605px] left-0 mix-blend-color-dodge to-[rgba(46,246,141,0.7)] top-[-680px] w-full" />

      {/* Fixed container for the animation */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10">
        {/* Animated Heading */}
        <motion.div
          className="absolute w-full px-4 sm:px-8 md:px-[57px]"
          style={{
            top: headingTop,
            y: headingTranslateY,
            opacity: headingOpacity,
          }}
        >
          <motion.h1
            style={{
              fontSize: headingFontSize,
              y: useTransform(scrollYProgress, [0, 0.2], [300, 50]),
              x: useTransform(scrollYProgress, [0, 0.2], [10, 0]),
            }}
            className="font-['Space_Mono',monospace] font-bold text-white tracking-[-0.05em] md:tracking-[-1.75px] leading-tight max-w-full md:max-w-[592px]"
          >
            Analytics Transparency
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <motion.main
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[57px] pt-32 pointer-events-auto overflow-hidden"
          style={{ opacity: contentOpacity }}
        >
          <p className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] mb-8 md:mb-12 max-w-full md:max-w-[1084px] mt-[40px]">
            Real-time insights into network performance and ROI distribution
          </p>

          {/* Analytics Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-full md:max-w-[1263px]">
            {/* Total ROI Distributed Card */}
            <motion.div
              className="relative h-[400px] sm:h-[420px] md:h-[450px]"
              style={{
                y: useTransform(
                  scrollYProgress,
                  isBelowLg ? [0.4, 0.6] : [0, 1],
                  isBelowLg ? [0, -500] : [0, 0]
                ),
                opacity: useTransform(
                  scrollYProgress,
                  [0.4, 0.45, 0.55, 0.6],
                  isBelowLg ? [1, 1, 0, 0] : [1, 1, 1, 1]
                ),
              }}
            >
              {/* Card Background with Texture */}
              <div className="absolute inset-0 bg-black/50">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="relative h-full p-4 sm:p-6 md:p-8 flex flex-col">
                <h2 className="font-['Space_Mono',monospace] font-bold text-base sm:text-lg md:text-[20px] text-white tracking-[-1px] mb-4 md:mb-8">
                  Total ROI Distributed
                </h2>

                {/* Bar Chart */}
                <div className="flex items-end gap-4 sm:gap-6 md:gap-8 h-[150px] sm:h-[160px] md:h-[180px] mt-auto mb-4 md:mb-8">
                  {[115, 138, 149, 160, 171, 182, 193].map((height, index) => (
                    <div
                      key={index}
                      className={`w-[9px] bg-gradient-to-r from-[#2ef68d] to-[#478ff5] ${
                        index === 6 ? "border-2 border-white" : ""
                      }`}
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>

                {/* Hover Info Box */}
                {/* <div className="absolute left-[488px] top-[409px] bg-[#2b2b2b] w-[160px] h-[107px] p-4">
                  <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] mb-2">
                    Oct 6
                  </p>
                  <p className="font-['Space_Mono',monospace] font-bold text-[19px] text-white tracking-[-0.95px] mb-2">
                    10 USDT
                  </p>
                  <p className="font-['Space_Mono',monospace] text-[12px] text-white/50 tracking-[-0.6px]">
                    ROI Distributed
                  </p>
                </div> */}
              </div>

              {/* Bottom Stats Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 h-auto md:h-[126px] p-4 md:p-6">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="relative">
                  <p className="font-['Space_Mono',monospace] font-bold text-lg sm:text-xl md:text-[25px] text-white tracking-[-0.05em] md:tracking-[-1.25px] mb-1 md:mb-2">
                    30,800 USDT
                  </p>
                  <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.6px] mb-1">
                    ROI distribution has grown 43% over the last month
                  </p>
                  <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-[#2ef68d] tracking-[-0.6px]">
                    +8.2% this week
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Live Network Growth Card */}
            <motion.div
              className="relative h-[400px] sm:h-[420px] md:h-[450px]"
              style={{
                y: useTransform(
                  scrollYProgress,
                  isBelowLg ? [0.4, 0.6] : [0, 1],
                  isBelowLg ? [500, -400] : [0, 0]
                ),
                opacity: useTransform(
                  scrollYProgress,
                  [0.4, 0.45, 0.55, 0.6],
                  isBelowLg ? [0, 0, 1, 1] : [1, 1, 1, 1]
                ),
              }}
            >
              {/* Card Background with Texture */}
              <div className="absolute inset-0 bg-black/50">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="relative h-full p-4 sm:p-6 md:p-8 flex flex-col">
                <h2 className="font-['Space_Mono',monospace] font-bold text-base sm:text-lg md:text-[20px] text-white tracking-[-1px] mb-4 md:mb-8">
                  Live Network Growth
                </h2>

                {/* Line Chart */}
                <div className="relative h-[120px] sm:h-[135px] md:h-[150px] mt-4 md:mt-8">
                  <img alt="" className="absolute" src={imgVector14} />
                  {/* Data Points */}
                  {[
                    { left: 60, bottom: 60 },
                    { left: 138, bottom: 88 },
                    { left: 220, bottom: 55 },
                    { left: 294, bottom: 79 },
                    { left: 376, bottom: 83 },
                    { left: 455, bottom: 103 },
                    { left: 530, bottom: 131 },
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="absolute size-[9px]"
                      style={{
                        left: `${point.left}px`,
                        bottom: `${point.bottom}px`,
                      }}
                    >
                      <img alt="" src={imgEllipse18} />
                    </div>
                  ))}

                  {/* X-Axis Labels */}
                  <div className="absolute bottom-[-40px] left-0 right-0 flex justify-between text-white/50 text-[12px] px-4">
                    {["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].map(
                      (month, index) => (
                        <span
                          key={index}
                          className="font-['Space_Mono',monospace] tracking-[-0.6px]"
                        >
                          {month}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Hover Info Box */}
                {/* <div className="absolute left-[1050px] top-[381px] bg-[#2b2b2b] w-[205px] h-[107px] p-4">
                  <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] mb-2">
                    Feb
                  </p>
                  <p className="font-['Space_Mono',monospace] font-bold text-[19px] text-white tracking-[-0.95px] mb-2">
                    125 Activations
                  </p>
                  <p className="font-['Space_Mono',monospace] text-[12px] text-white/50 tracking-[-0.6px]">
                    New Users
                  </p>
                </div> */}
              </div>

              {/* Bottom Stats Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 h-auto md:h-[126px] p-4 md:p-6">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="relative">
                  <p className="font-['Space_Mono',monospace] font-bold text-lg sm:text-xl md:text-[25px] text-white tracking-[-0.05em] md:tracking-[-1.25px] mb-1 md:mb-2">
                    136 New Activations
                  </p>
                  <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.6px] mb-1">
                    User base has expanded 62% in the past 30 days
                  </p>
                  <p className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-[#2ef68d] tracking-[-0.6px]">
                    +15.3% today
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.main>
      </div>

      {/* Gradual Blur at top and bottom */}
      <GradualBlur position="top" strength={3} height="10rem" opacity={0.8} />
      <GradualBlur
        position="bottom"
        strength={3}
        height="12rem"
        opacity={0.9}
      />
    </motion.section>
  );
}
