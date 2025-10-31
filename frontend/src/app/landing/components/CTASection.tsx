"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollZoomSection } from "@/components/scroll-zoom-section";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <ScrollZoomSection className="relative bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-white mb-6"
        >
          Ready to Start?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-zinc-400 mb-8"
        >
          Join the next generation of traders and investors
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600"
          >
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700">
            Learn More
          </Button>
        </motion.div>
      </div>
    </ScrollZoomSection>
  );
};
