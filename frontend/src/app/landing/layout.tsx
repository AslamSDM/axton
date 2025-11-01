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

      {/* Background with slanted lines */}
      <div className="relative">{children}</div>
    </div>
  );
}
