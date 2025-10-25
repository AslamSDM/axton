"use client";

import React, { useEffect } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Smooth scroll implementation
const useSmoothScroll = () => {
  useEffect(() => {
    const html = document.documentElement;

    // Smooth scroll CSS
    html.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollBehavior = "auto";
    };
  }, []);
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="flex items-center justify-between px-8 sm:px-14 py-4">
          <div className="flex items-center gap-3">
            <MenuIcon className="w-6 h-6 text-white cursor-pointer hover:text-cyan-500 transition-colors" />
            <div className="relative w-[39px] h-[39px]">
              <Image
                src="/Axton.png"
                alt="Axton"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="font-bold text-white text-xl tracking-[-1.00px]">
              Axton Protocol
            </div>
          </div>

          <div className="relative">
            <Button
              variant="outline"
              className="h-[42px] px-6 bg-transparent border border-solid border-transparent hover:bg-transparent font-bold text-white text-sm tracking-[-0.70px]"
              style={{
                borderImage:
                  "linear-gradient(90deg, rgba(46,246,141,1) 0%, rgba(71,143,245,1) 100%) 1",
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </nav>

      {/* Background with slanted lines */}
      <div
        className="relative"
        style={{
          background: `#000000`,
          backgroundImage: `repeating-linear-gradient(
            15deg,
            transparent,
            transparent 30px,
            rgba(255, 255, 255, 0.1) 30px,
            rgba(255, 255, 255, 0.1) 32px
          )`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
