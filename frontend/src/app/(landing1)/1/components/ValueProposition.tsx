"use client";

import { motion } from "framer-motion";
import Beams from "@/components/Beams";
import { ClipCard } from "./ClipCard";

const values = [
  {
    title: "Transparency",
    description: "Every transaction is visible on the blockchain",
    icon: (
      <svg className="w-16 h-16 text-[#2ef68d]" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M21 21L16.65 16.65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    color: "from-[#2ef68d] to-[#478ff5]",
  },
  {
    title: "Security",
    description: "Your assets are protected by blockchain technology",
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
    color: "from-[#478ff5] to-[#2ef68d]",
  },
  {
    title: "Growth",
    description: "Sustainable ecosystem expansion benefits all holders",
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
          <h2 className="font-['Space_Mono',monospace] text-7xl md:text-9xl font-black mb-8 text-white tracking-[-0.05em]">
            OUR VALUES
          </h2>
          <p className="font-['Space_Mono',monospace] text-2xl text-gray-400 max-w-3xl mx-auto tracking-[-0.02em]">
            Building a blockchain ecosystem based on trust, performance, and
            community
          </p>
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
                  className={`font-['Space_Mono',monospace] text-3xl font-black mb-4 tracking-[-0.05em] bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                >
                  {value.title}
                </h3>

                <p className="font-['Space_Mono',monospace] text-lg text-gray-300 leading-relaxed tracking-[-0.02em]">
                  {value.description}
                </p>

                {/* Progress bar animation on view */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.2 + 0.5,
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </ClipCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <ClipCard variant="dark" className="p-12 text-center">
            <h3 className="font-['Space_Mono',monospace] text-4xl font-black mb-6 text-white tracking-[-0.05em]">
              The Axton Difference
            </h3>
            <p className="font-['Space_Mono',monospace] text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto tracking-[-0.02em]">
              We're not just building another token. Axton is a comprehensive
              ecosystem where every utility strengthens the AXTO token and
              delivers long-term growth. From trading to banking, gaming to
              insurance—everything is interconnected.
            </p>

            {/* Animated stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { value: "7+", label: "Utilities" },
                { value: "100%", label: "On-Chain" },
                { value: "0%", label: "Slippage" },
                { value: "∞", label: "Potential" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="font-['Space_Mono',monospace] text-5xl font-black bg-gradient-to-r from-[#2ef68d] to-[#478ff5] bg-clip-text text-transparent mb-2 tracking-[-0.05em]">
                    {stat.value}
                  </div>
                  <div className="font-['Space_Mono',monospace] text-sm text-gray-400 tracking-[-0.01em]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ClipCard>
        </motion.div>
      </div>
    </section>
  );
}
