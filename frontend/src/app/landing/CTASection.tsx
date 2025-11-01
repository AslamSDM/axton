"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#0b0b0d]">
      {/* Top Gradient Glow */}
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-gradient-to-r blur-[26.5px] filter from-[rgba(52,113,192,0.7)] h-[605px] left-0 mix-blend-color-dodge to-[rgba(46,246,141,0.7)] top-[-680px] w-full" />

      {/* Main CTA Content - Fixed in Center */}
      <main className="relative z-10 text-center px-8">
        <h1
          className="font-['Space_Mono',monospace] font-bold text-[35px] tracking-[-1.75px] bg-gradient-to-r from-[#2ef68d] to-[#478ff5] bg-clip-text mb-6"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Join the Next Generation of Wealth Builders
        </h1>

        <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] max-w-[1084px] mx-auto mb-12">
          Built on smart contracts. Powered by blockchain. Managed by
          intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-8">
          {/* Start Now Button - Filled with Gradient */}
          <button className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[42px] w-[205px] flex items-center justify-center hover:opacity-90 transition-opacity">
            <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
              Start Now
            </span>
          </button>

          {/* Learn How it works Button - Outlined */}
          <button className="border border-[#2ef68d] h-[42px] w-[205px] flex items-center justify-center hover:bg-[#2ef68d]/10 transition-colors">
            <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
              Learn How it works
            </span>
          </button>
        </div>
      </main>
    </section>
  );
}
