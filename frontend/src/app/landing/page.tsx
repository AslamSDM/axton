"use client";

import React, { useState } from "react";
import AxtonHero from "./AxtonHero";
import AxtonHeroFull from "./AxtonHeroFull";
import AxtonLandingPage from "./AxtonLandingPage";
import AxtonLandingPage1 from "./AxtonLandingPage1";
import AxtonLandingPage2 from "./AxtonLandingPage2";
import AxtonLandingPage3 from "./AxtonLandingPage3";
import AxtonLandingPage4 from "./AxtonLandingPage4";
import AxtonLandingPage5 from "./AxtonLandingPage5";
import AxtonLandingPage6 from "./AxtonLandingPage6";
import AxtonLandingPage7 from "./AxtonLandingPage7";
import AxtonLandingPage8 from "./AxtonLandingPage8";
import AxtonLandingPage9 from "./AxtonLandingPage9";
import AxtonLandingPage10 from "./AxtonLandingPage10";
import AxtonLandingPage11 from "./AxtonLandingPage11";
import AxtonSidebar from "./AxtonSidebar";
import AxtonNavbar from "./AxtonNavbar";
import {
  FeaturesSection,
  StatsSection,
  SolutionsSection,
  CTASection,
} from "./components";

export default function LandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <AxtonNavbar onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Sidebar */}
      <AxtonSidebar
        isOpen={isSidebarOpen}
        onCloseAction={() => setIsSidebarOpen(false)}
      />

      {/* Page Content */}
      <AxtonHero />
      <AxtonHeroFull />
      <AxtonLandingPage />
      <AxtonLandingPage1 />
      <AxtonLandingPage2 />
      <AxtonLandingPage3 />
      <AxtonLandingPage4 />
      <AxtonLandingPage5 />
      <AxtonLandingPage6 />
      <AxtonLandingPage7 />
      <AxtonLandingPage8 />
      <AxtonLandingPage9 />
      <AxtonLandingPage10 />
      <AxtonLandingPage11 />
      {/* <FeaturesSection />
      <StatsSection />
      <SolutionsSection />
      <CTASection /> */}
    </>
  );
}
