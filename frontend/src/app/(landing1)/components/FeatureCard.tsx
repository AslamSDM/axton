"use client";

import { motion } from "framer-motion";
import { ClipCard } from "./ClipCard";
import { CrypticText } from "./CrypticText";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1000px" }}
    >
      <ClipCard variant="gradient" className="p-8 h-full group">
        <motion.div
          className="text-[#2ef68d] mb-6"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {icon}
        </motion.div>
        <h3 className="font-['Space_Mono',monospace] text-2xl font-bold mb-4 text-white group-hover:text-[#2ef68d] transition-colors tracking-[-0.02em]">
          <CrypticText text={title} duration={1000} />
        </h3>
        <p className="font-['Space_Mono',monospace] text-white/70 leading-relaxed tracking-[-0.02em]">
          <CrypticText text={description} duration={1200} />
        </p>

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2ef68d]/20 to-transparent"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
        />
      </ClipCard>
    </motion.div>
  );
}
