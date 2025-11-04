"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollZoomSection } from "@/components/scroll-zoom-section";
import { ArrowRight } from "lucide-react";

export const SolutionsSection = () => {
  const solutions = [
    { title: "Smart Trading", description: "AI-powered trading strategies" },
    { title: "Risk Management", description: "Advanced portfolio protection" },
    { title: "Yield Farming", description: "Optimize your passive income" },
    { title: "Real-time Analytics", description: "Live market insights" },
  ];

  return (
    <ScrollZoomSection className="relative bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h2>
          <p className="text-lg text-gray-400">
            Comprehensive tools for modern traders
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <ArrowRight className="w-6 h-6 text-green-500" />
                  {solution.title}
                </h3>
                <p className="text-zinc-400">{solution.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScrollZoomSection>
  );
};
