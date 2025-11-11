"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipCard } from "./ClipCard";

const features = [
  {
    title: "Zero Slippage",
    description:
      "Execute OTC deals with absolute precision. No slippage, no surprises.",
    gradient: "from-[#2ef68d] to-[#478ff5]",
    number: "01",
  },
  {
    title: "Real Yield",
    description:
      "Revenue from live platforms powers consistent returns for holders.",
    gradient: "from-[#478ff5] to-[#2ef68d]",
    number: "02",
  },
  {
    title: "Blockchain Native",
    description:
      "Full transparency and security with every transaction on-chain.",
    gradient: "from-[#2ef68d] to-[#478ff5]",
    number: "03",
  },
  {
    title: "Global Access",
    description: "Axton Card bridges crypto to real-world payments seamlessly.",
    gradient: "from-[#478ff5] to-[#2ef68d]",
    number: "04",
  },
  {
    title: "Community First",
    description:
      "Built for participation, loyalty rewards, and sustainable growth.",
    gradient: "from-[#2ef68d] to-[#478ff5]",
    number: "05",
  },
];

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-[#0b0b0d]"
    >
      <div className="container mx-auto px-6 mb-12">
        {/* <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Space_Mono',monospace] text-6xl md:text-8xl font-black text-white tracking-[-0.05em]"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)",
            background: "linear-gradient(90deg, #2ef68d 0%, #478ff5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Key Features
        </motion.h2> */}
      </div>

      <div className="relative">
        <motion.div style={{ x }} className="flex gap-8 px-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="min-w-[400px] md:min-w-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <ClipCard variant="dark" className="p-8 h-full">
                <div className="relative">
                  {/* Feature Number */}
                  <div
                    className={`absolute -top-4 -right-4 text-[120px] font-black opacity-10 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}
                  >
                    {feature.number}
                  </div>

                  <div className="relative z-10">
                    <h3
                      className={`font-['Space_Mono',monospace] text-4xl font-black mb-4 tracking-[-0.05em] bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    >
                      {feature.title}
                    </h3>
                    <p className="font-['Space_Mono',monospace] text-xl text-gray-300 leading-relaxed tracking-[-0.02em]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated border effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#2ef68d] to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                  />
                </div>
              </ClipCard>
            </motion.div>
          ))}

          {/* End CTA Card */}
          <motion.div
            className="min-w-[400px] md:min-w-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: features.length * 0.1, duration: 0.6 }}
          >
            <ClipCard
              variant="gradient"
              className="p-8 h-full flex flex-col items-center justify-center text-center"
            >
              <h3 className="font-['Space_Mono',monospace] text-5xl font-black mb-6 text-white tracking-[-0.05em]">
                Ready to dive in?
              </h3>
              <p className="font-['Space_Mono',monospace] text-xl text-gray-300 mb-8 tracking-[-0.02em]">
                Experience the future of decentralized finance
              </p>
              <motion.button
                className="font-['Space_Mono',monospace] px-8 py-4 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] text-white font-bold rounded-lg tracking-[-0.02em]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(46, 246, 141, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started →
              </motion.button>
            </ClipCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-gray-500 flex items-center justify-center gap-2"
      >
        <span>Scroll horizontally</span>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.div>
      </motion.div>
    </section>
  );
}
