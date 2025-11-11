"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Beams from "@/components/Beams";
import Orb from "@/components/Orb";
import Iridescence from "@/components/Iridescence";
import Dither from "@/components/Dither";
import GradientBlinds from "@/components/GradientBlinds";
import { GridScan } from "@/components/GridScan";
import { ClipCard } from "./components/ClipCard";
import { ClipButton } from "./components/ClipButton";
import { FeatureCard } from "./components/FeatureCard";
import { HorizontalScroll } from "./components/HorizontalScroll";
import { ValueProposition } from "./components/ValueProposition";
import Silk from "@/components/Silk";
import { Navbar } from "./components/Navbar";
import { CrypticText } from "./components/CrypticText";
import { CountUpText } from "./components/CountUpText";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0b0b0d] overflow-x-hidden"
    >
      {/* Navbar with Staggered Menu */}
      <Navbar />
      {/* Hero Section with Orb Background */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* <Orb
            hue={160}
            hoverIntensity={0.3}
            rotateOnHover={true}
            forceHoverState={false}
          /> */}
        </div>

        {/* Floating Grid Overlay */}
        <div className="absolute inset-0 z-10 opacity-30">
          <GridScan
            enableWebcam={false}
            lineThickness={0.8}
            linesColor="#2ef68d"
            scanColor="#478ff5"
            scanOpacity={0.5}
            gridScale={0.15}
            lineStyle="solid"
            scanDirection="pingpong"
            enablePost={true}
            bloomIntensity={0.3}
            scanGlow={0.7}
            scanDuration={3.0}
            scanDelay={1.5}
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <h1 className="font-['Space_Mono',monospace] text-[clamp(56px,10vw,140px)] font-bold tracking-[-0.04em] mb-8 leading-[0.95]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ef68d] via-[#478ff5] to-[#2ef68d] animate-gradient bg-[length:200%_auto]">
                  <CrypticText text="Anonymized OTC Trading" duration={1500} />
                  <br />
                  <CrypticText text="for Crypto Whales" duration={1500} />
                </span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Link href="/dashboard">
                <ClipButton variant="primary" size="lg">
                  Enter Ecosystem
                </ClipButton>
              </Link>
              {/* <ClipButton variant="outline" size="lg">
                Explore Docs
              </ClipButton> */}
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: "Total OTC Volume", value: "$1.2B" },
              { label: "Active Deals", value: "2,547" },
              { label: "Verified Traders", value: "8,432" },
              { label: "Avg Deal Size", value: "$425K" },
            ].map((stat, i) => (
              <ClipCard key={i} variant="glass" className="p-4 md:p-6">
                <div className="font-['Space_Mono',monospace] text-xs text-white/70 tracking-[-0.02em] uppercase mb-2">
                  <CrypticText text={stat.label} duration={1000} />
                </div>
                <div className="font-['Space_Mono',monospace] font-bold text-xl md:text-2xl text-white tracking-[-0.02em]">
                  <CountUpText
                    value={stat.value}
                    duration={2000}
                    delay={1200 + i * 100}
                  />
                </div>
              </ClipCard>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#2ef68d] rounded-full p-2"
          >
            <motion.div className="w-1 h-2 bg-[#2ef68d] rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition Section with Beams */}
      <ValueProposition />

      {/* Horizontal Scroll Section */}
      <section id="features">
        <HorizontalScroll />
      </section>

      {/* Real Yield Section with Silk Background */}
      {/* <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={2}
            color="#0f3d2f"
            noiseIntensity={1.2}
            rotation={0.3}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            <h2
              className="font-['Space_Mono',monospace] text-6xl md:text-8xl font-black mb-16 text-center tracking-[-0.05em]"
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                background: "linear-gradient(90deg, #2ef68d 0%, #478ff5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              REAL YIELD
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                title="Revenue Powered"
                description="Returns from live ecosystem platforms"
                icon={
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                delay={0.2}
              />
              <FeatureCard
                title="Unified Ecosystem"
                description="All utilities connected through AXTO"
                icon={
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="5"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="19"
                      cy="12"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="19"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="5"
                      cy="12"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 9V7M15 12H17M12 15V17M9 12H7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                }
                delay={0.3}
              />
              <FeatureCard
                title="Transparent & Secure"
                description="On-chain transactions for full visibility"
                icon={
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="5"
                      y="11"
                      width="14"
                      height="10"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 3C10.5 3 8 4 8 7V11H16V7C16 4 13.5 3 12 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="16" r="1" fill="currentColor" />
                  </svg>
                }
                delay={0.4}
              />
              <FeatureCard
                title="Scalable Growth"
                description="New utilities drive token demand"
                icon={
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 17L9 11L13 15L21 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 7V12M21 7H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                delay={0.5}
              />
              <FeatureCard
                title="Zero Slippage"
                description="Precise OTC execution with no price impact"
                icon={
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 11L12 14L22 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                delay={0.6}
              />
              <FeatureCard
                title="Multi-Chain Support"
                description="Seamless cross-chain interoperability"
                icon={
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.5 16.5C3 14.26 3 11 3 11C3 11 3 7.74 4.5 5.5M19.5 16.5C21 14.26 21 11 21 11C21 11 21 7.74 19.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 20C10.5 18.5 12 16 12 12C12 8 10.5 5.5 9 4M15 20C13.5 18.5 12 16 12 12C12 8 13.5 5.5 15 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                delay={0.7}
              />
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Community OTC Section with Dither */}
      <section
        id="community"
        className="relative min-h-screen flex items-center py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Dither
            waveSpeed={0.04}
            waveFrequency={4}
            waveAmplitude={0.25}
            waveColor={[0.18, 0.95, 0.55]}
            colorNum={5}
            pixelSize={3}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={1.2}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <ClipCard variant="dark" className="p-12 md:p-16">
              <h2 className="font-['Space_Mono',monospace] text-5xl md:text-7xl font-black mb-6 text-white tracking-[-0.05em]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ef68d] to-[#478ff5]">
                  <CrypticText text="OTC DESK" duration={1200} />
                </span>
              </h2>
              <p className="font-['Space_Mono',monospace] text-lg text-gray-400 mb-8 max-w-2xl tracking-[-0.02em]">
                <CrypticText
                  text="Zero slippage. Full transparency. Whale-sized deals."
                  duration={1500}
                />
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard">
                  <ClipButton variant="primary" size="lg">
                    Start Trading
                  </ClipButton>
                </Link>
                <Link href="/dashboard">
                  <ClipButton variant="ghost" size="lg">
                    View Analytics
                  </ClipButton>
                </Link>
              </div>
            </ClipCard>
          </motion.div>

          {/* Additional OTC Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl"
          >
            {[
              {
                title: "Escrow Protection",
                desc: "Smart contract escrow for secure settlements",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#2ef68d]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Private Identity",
                desc: "Anonymous verification with zero-knowledge proofs",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#2ef68d]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ),
              },
              {
                title: "Collateral Management",
                desc: "Real-time valuation and flexible options",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#2ef68d]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 9H21M9 21V9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              >
                <ClipCard variant="dark" className="p-6 h-full">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-['Space_Mono',monospace] text-lg font-bold mb-2 text-white tracking-[-0.02em]">
                    <CrypticText text={item.title} duration={1000} />
                  </h4>
                  <p className="font-['Space_Mono',monospace] text-sm text-gray-400 tracking-[-0.01em]">
                    <CrypticText text={item.desc} duration={1200} />
                  </p>
                </ClipCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Usability with GradientBlinds */}
      <section
        id="global"
        className="relative min-h-screen flex items-center py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <GradientBlinds
            gradientColors={["#2ef68d", "#478ff5", "#2ef68d", "#478ff5"]}
            angle={45}
            noise={0.2}
            blindCount={20}
            mouseDampening={0.2}
            mirrorGradient={true}
            spotlightRadius={0.6}
            spotlightSoftness={1.5}
            spotlightOpacity={0.8}
            distortAmount={0.3}
            shineDirection="right"
            mixBlendMode="lighten"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-['Space_Mono',monospace] text-6xl md:text-8xl font-black mb-8 text-white tracking-[-0.05em]">
              <CrypticText text="GLOBAL" duration={1000} />
              <br />
              <CrypticText text="USABILITY" duration={1000} />
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: "User Empowerment",
                  desc: "Full control of digital assets",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#2ef68d]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Decentralized Control",
                  desc: "Own your financial future",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#2ef68d]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.39C8.38291 19.1177 7.66219 19.2483 7.18 19.72L7.12 19.78C6.74486 20.1556 6.23582 20.3666 5.705 20.3666C5.17418 20.3666 4.66514 20.1556 4.29 19.78C3.91445 19.4049 3.70343 18.8958 3.70343 18.365C3.70343 17.8342 3.91445 17.3251 4.29 16.95L4.35 16.89C4.82167 16.4078 4.95225 15.6871 4.68 15.07C4.42093 14.4655 3.82764 14.0726 3.17 14.07H3C1.89543 14.07 1 13.1746 1 12.07C1 10.9654 1.89543 10.07 3 10.07H3.09C3.76733 10.0542 4.36613 9.62587 4.61 9C4.88225 8.38291 4.75167 7.66219 4.28 7.18L4.22 7.12C3.84445 6.74486 3.63343 6.23582 3.63343 5.705C3.63343 5.17418 3.84445 4.66514 4.22 4.29C4.59514 3.91445 5.10418 3.70343 5.635 3.70343C6.16582 3.70343 6.67486 3.91445 7.05 4.29L7.11 4.35C7.59219 4.82167 8.31291 4.95225 8.93 4.68H9C9.60447 4.42093 9.99736 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87225 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99736 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Real-World Impact",
                  desc: "Blockchain meets daily finance",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#2ef68d]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Instant Settlement",
                  desc: "Fast finality, minimal fees",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#2ef68d]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Cross-Border Payments",
                  desc: "Global transactions, no boundaries",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#2ef68d]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 8L12 3L7 8M12 3V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Smart Automation",
                  desc: "Programmable DeFi workflows",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#2ef68d]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M9 9H9.01M15 9H15.01M9 15H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <ClipCard
                    variant="glass"
                    className="p-8 h-full group hover:bg-[rgba(15,15,15,0.8)] transition-all"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="font-['Space_Mono',monospace] text-xl font-bold mb-3 text-white group-hover:text-[#2ef68d] transition-colors tracking-[-0.02em]">
                      <CrypticText text={item.title} duration={1000} />
                    </h3>
                    <p className="font-['Space_Mono',monospace] text-sm text-gray-300 tracking-[-0.01em]">
                      <CrypticText text={item.desc} duration={1200} />
                    </p>
                  </ClipCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA with Iridescence */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[0.18, 0.95, 0.55]}
            speed={1.5}
            amplitude={0.15}
            mouseReact={true}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-['Space_Mono',monospace] text-7xl md:text-9xl font-black mb-8 text-white tracking-[-0.05em]">
              <CrypticText text="READY TO" duration={1000} />
              <br />
              <span
                className="text-transparent"
                style={{
                  background:
                    "linear-gradient(135deg, #2ef68d 0%, #478ff5 50%, #2ef68d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <CrypticText text="TRANSFORM?" duration={1000} />
              </span>
            </h2>
            <Link href="/dashboard">
              <ClipButton
                variant="primary"
                size="xl"
                className="text-xl px-16 py-8"
              >
                Join the Ecosystem
              </ClipButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer with Beams */}
      <footer className="relative py-20 overflow-hidden border-t border-[#2f2f2f]">
        <div className="absolute inset-0 z-0 opacity-30">
          <Beams
            beamWidth={1.5}
            beamHeight={12}
            beamNumber={15}
            lightColor="#2ef68d"
            speed={1.5}
            noiseIntensity={1.5}
            scale={0.25}
            rotation={0}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-['Space_Mono',monospace] text-2xl font-black text-white mb-4 tracking-[-0.05em]">
                AXTON
              </h3>
              <p className="font-['Space_Mono',monospace] text-gray-400 tracking-[-0.01em]">
                DeFi meets real-world finance
              </p>
            </div>
            <div>
              <h4 className="font-['Space_Mono',monospace] text-lg font-bold text-white mb-4 tracking-[-0.02em]">
                Products
              </h4>
              <ul className="font-['Space_Mono',monospace] space-y-2 text-gray-400 tracking-[-0.01em]">
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  OTC Desk
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Axton Card
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Trading Platform
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Insurance
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Space_Mono',monospace] text-lg font-bold text-white mb-4 tracking-[-0.02em]">
                Resources
              </h4>
              <ul className="font-['Space_Mono',monospace] space-y-2 text-gray-400 tracking-[-0.01em]">
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Documentation
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Whitepaper
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  API
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Space_Mono',monospace] text-lg font-bold text-white mb-4 tracking-[-0.02em]">
                Community
              </h4>
              <ul className="font-['Space_Mono',monospace] space-y-2 text-gray-400 tracking-[-0.01em]">
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Twitter
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Discord
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  Telegram
                </li>
                <li className="hover:text-[#2ef68d] transition-colors cursor-pointer">
                  GitHub
                </li>
              </ul>
            </div>
          </div>
          <div className="font-['Space_Mono',monospace] text-center text-gray-500 pt-8 border-t border-[#2f2f2f] tracking-[-0.01em]">
            <p>
              &copy; 2025 Axton. Blockchain potential turned into real-world
              performance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
