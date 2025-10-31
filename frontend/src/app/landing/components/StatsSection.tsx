"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollZoomSection } from "@/components/scroll-zoom-section";

export const StatsSection = () => {
  const stats = [
    { value: "$5.2B", label: "Total Volume" },
    { value: "150K+", label: "Active Traders" },
    { value: "25+", label: "Global Centers" },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            By The Numbers
          </h2>
          <p className="text-lg text-gray-400">
            Join thousands of traders worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg text-center"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollZoomSection>
  );
};
