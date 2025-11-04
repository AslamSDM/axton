"use client";

import React, { useState } from "react";
import AxtonHero from "./_components/AxtonHero";
import AboutSection from "./_components/AboutAxton";
import HowToEarnSection from "./_components/HowToEarnSection";
import InvestmentPackagesSection from "./_components/InvestmentPackagesSection";
import BinaryPlanSection from "./_components/BinaryPlanSection";
import AnalyticsSection from "./_components/AnalyticsSection";
import CTASection from "./_components/CTASection";
import AxtonSidebar from "./_components/AxtonSidebar";
import AxtonNavbar from "./_components/AxtonNavbar";

import Footer from "./_components/Footer";

export default function LandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className="relative min-h-[400vh] w-full bg-[#0b0b0d] [background-size:auto_600vh] bg-[url('/images/bg.svg')] bg-repeat-y bg-top"
    >

      {/* Fixed Navbar */}
      <AxtonNavbar onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Sidebar */}
      <AxtonSidebar
        isOpen={isSidebarOpen}
        onCloseAction={() => setIsSidebarOpen(false)}
      />

      <div className="relative z-10 min-h-[600vh]">
        <AxtonHero />
        <AboutSection />
        <HowToEarnSection />
        <InvestmentPackagesSection />
        <BinaryPlanSection />
        <AnalyticsSection />
        <CTASection />
        <Footer />
      </div>


    </div>
  );
}
