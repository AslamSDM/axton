"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Globe, TrendingUp } from "lucide-react";
import { AxtonHero } from "./AxtonHero";
import { useScrollEffect } from "@/hooks/useScrollEffects";
import { SectionWithSVG } from "@/components/section-with-svg";

export default function LandingPage() {
  const featuresRef = useScrollEffect();
  const statsRef = useScrollEffect();
  const globeRef = useScrollEffect();
  const ctaRef = useScrollEffect();

  return (
    <>
      {/* Axton Hero Section */}
      <AxtonHero />
    </>
  );
}
