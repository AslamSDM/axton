"use client";

import { motion } from "framer-motion";
import Beams from "@/components/Beams";
import { ClipCard } from "./ClipCard";
import { CrypticText } from "./CrypticText";

const values = [
  {
    title: "Privacy First",
    description: "Anonymous OTC trading with zero-knowledge verification",
    icon: (
      <svg className="w-16 h-16 text-[#2ef68d]" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
    color: "from-[#2ef68d] to-[#478ff5]",
  },
  {
    title: "Real Yield",
    description: "Revenue-driven returns from live ecosystem utilities",
    icon: (
      <svg className="w-16 h-16 text-[#2ef68d]" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 7L13.5 15.5L8.5 10.5L2 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7H22V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "from-[#478ff5] to-[#2ef68d]",
  },
  {
    title: "Zero Slippage",
    description: "Execute whale-sized deals with complete precision",
    icon: (
      <svg className="w-16 h-16 text-[#2ef68d]" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12L11 15L16 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "from-[#2ef68d] to-[#478ff5]",
  },
];

export function ValueProposition() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={10}
          lightColor="#2ef68d"
          speed={1.8}
          noiseIntensity={1.8}
          scale={0.22}
          rotation={45}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-['Space_Mono',monospace] text-7xl md:text-9xl font-black mb-6 text-white tracking-[-0.05em]">
            <CrypticText text="WHY AXTON" duration={1500} />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ClipCard variant="glass" className="p-10 h-full group">
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {value.icon}
                </motion.div>

                <h3
                  className={`font-['Space_Mono',monospace] text-2xl font-black mb-3 tracking-[-0.05em] bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                >
                  <CrypticText text={value.title} duration={1000} />
                </h3>

                <p className="font-['Space_Mono',monospace] text-base text-gray-400 tracking-[-0.02em]">
                  <CrypticText text={value.description} duration={1200} />
                </p>
              </ClipCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
