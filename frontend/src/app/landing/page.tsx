"use client";

import React, { useState } from "react";
import AxtonHero from "./AxtonHero";
import AxtonHeroFull from "./AxtonHeroFull";
import AxtonLandingPage from "./AxtonLandingPage";
import AxtonLandingPage1 from "./AboutAxton";
import HowToEarnSection from "./HowToEarnSection";
import InvestmentPackagesSection from "./InvestmentPackagesSection";
import BinaryPlanSection from "./BinaryPlanSection";
import AxtonLandingPage9 from "./AxtonLandingPage9";
import AnalyticsSection from "./AnalyticsSection";
import CTASection from "./CTASection";
import AxtonSidebar from "./AxtonSidebar";
import AxtonNavbar from "./AxtonNavbar";
import AnimatedSection from "./AnimatedSection";
import Footer from "./Footer";
import { FeaturesSection, StatsSection, SolutionsSection } from "./components";

// Shared background vector image
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/d49c8135-7c4d-4a9e-af1a-1dc89703bb77";

export default function LandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative bg-[#0b0b0d]">
      {/* Global Background Vector Pattern - Fixed */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-68px] w-[1531.705px] opacity-30">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Fixed Navbar */}
      <AxtonNavbar onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Sidebar */}
      <AxtonSidebar
        isOpen={isSidebarOpen}
        onCloseAction={() => setIsSidebarOpen(false)}
      />

      {/* Page Content */}
      <div className="relative z-10">
        <AxtonHero />
        <AxtonLandingPage1 />
        <HowToEarnSection />
        <InvestmentPackagesSection />
        <BinaryPlanSection />
        {/* <AnimatedSection><AxtonLandingPage9 /></AnimatedSection> */}
        <AnalyticsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
