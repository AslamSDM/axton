"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, TrendingUp } from "lucide-react";
import { ScrollZoomSection } from "@/components/scroll-zoom-section";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Built on BSC",
      description:
        "Fast, secure, BEP-20 USDT based transactions with minimal fees and maximum efficiency.",
    },
    {
      icon: Shield,
      title: "Ultra Secure",
      description:
        "Multi-signature wallet protection and smart contract auditing ensure your investments are safe.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Access decentralized finance from anywhere in the world with our global infrastructure.",
    },
    {
      icon: TrendingUp,
      title: "Daily Returns",
      description:
        "Earn consistent daily ROI through our proven investment strategy and referral rewards.",
    },
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
            About Axton Protocol
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A next-generation decentralized wealth system that allows users to
            invest, refer, and earn through a sustainable ROI model backed by
            blockchain verification on BSC.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 rounded-xl"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScrollZoomSection>
  );
};
