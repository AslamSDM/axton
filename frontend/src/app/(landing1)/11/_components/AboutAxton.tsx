"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Iridescence = dynamic(() => import("@/components/Iridescence"), {
  ssr: false,
});
const GradualBlur = dynamic(() => import("@/components/GradualBlur"), {
  ssr: false,
});

const imgImage = "/images/about_section_img.png";

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

  // Iridescence opacity - fade in at start, fade out at end
  const iridescenceOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0.25, 0.25, 0]
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
        ),
      }}
    >
      {/* Iridescence Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen mix-blend-lighten z-0"
        style={{ opacity: iridescenceOpacity }}
      >
        <Iridescence
          color={[0.18, 0.95, 0.55]}
          speed={0.5}
          amplitude={0.05}
          mouseReact={true}
        />
      </motion.div>

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
              y: useTransform(scrollYProgress, [0, 0.2], [300, 0]),
              x: useTransform(scrollYProgress, [0, 0.2], [10, 0]),
            }}
            className="absolute top-0 font-['Space_Mono',monospace] font-bold text-white tracking-[-0.05em] md:tracking-[-2.25px] leading-tight"
          >
            Secure OTC Trading Platform
          </motion.h2>
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-[56px] pt-24 md:pt-[120px] pointer-events-auto overflow-y-auto mt-24"
        >
          <motion.div className="font-['Space_Mono',monospace] text-xs sm:text-sm md:text-[14px] text-white tracking-[-0.7px] max-w-full md:max-w-[1084px] mb-8 md:mb-16">
            <p className="mb-4">
              Axton Protocol revolutionizes large-scale cryptocurrency trading
              by providing institutional-grade OTC services with complete
              anonymity and security. Our platform enables whales and
              high-net-worth individuals to execute multi-million dollar deals
              with built-in escrow protection, collateral management, and
              zero-knowledge proof verification on Binance Smart Chain.
            </p>
            <p className="mb-4">
              Every transaction is secured through smart contracts, ensuring
              trustless execution while maintaining complete privacy for all
              participants. No KYC required for counterparties, only wallet
              verification.
            </p>
          </motion.div>
          <div className="relative flex justify-center w-full">
            <img className="md:w-[80vw] lg:w-[50vw]" src={imgImage} />
          </div>

          <motion.div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0"></motion.div>
        </motion.div>
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
