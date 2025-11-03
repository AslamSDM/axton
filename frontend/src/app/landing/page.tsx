"use client";

import React, { useState } from "react";
import AxtonHero from "./AxtonHero";
import AxtonLandingPage1 from "./AboutAxton";
import HowToEarnSection from "./HowToEarnSection";
import InvestmentPackagesSection from "./InvestmentPackagesSection";
import BinaryPlanSection from "./BinaryPlanSection";
import AnalyticsSection from "./AnalyticsSection";
import CTASection from "./CTASection";
import AxtonSidebar from "./AxtonSidebar";
import AxtonNavbar from "./AxtonNavbar";

import Footer from "./Footer";

export default function LandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // <div
    //   className="relative min-h-[400vh] w-full bg-[#0b0b0d] bg-[url('/bg.svg')] bg-cover bg-no-repeat bg-top"
    // >
    <div
      className="relative min-h-[400vh] w-full bg-[#0b0b0d] [background-size:auto_600vh] bg-[url('/bg.svg')] bg-repeat-y bg-top"
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
        <AxtonLandingPage1 />
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
