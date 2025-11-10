"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SVGMasks } from "./CustomSVGMasks";

const imgLogo = "/images/navbar_1.jpeg";
const imgIcons = "/images/sidebar_3.svg";
const imgIcons1 = "/images/sidebar_4.svg";
const imgVector = "/images/sidebar_5.svg";

interface CustomSidebarProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export function CustomSidebar({ isOpen, onCloseAction }: CustomSidebarProps) {
  const menuItems = [
    { title: "About", number: "01", id: "about" },
    { title: "Features", number: "02", id: "features" },
    { title: "Community", number: "03", id: "community" },
    { title: "Global", number: "04", id: "global" },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onCloseAction();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-40"
            onClick={onCloseAction}
          />

          {/* Sidebar Panel with Custom Shape */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full sm:w-[380px] md:w-[462px] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* SVG Mask for sidebar shape */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="sidebar-mask" clipPathUnits="objectBoundingBox">
                  <path d="M0 0.055 C0 0.04 0.006 0.028 0.015 0.028 H0.25 C0.265 0.028 0.278 0.022 0.288 0.012 C0.293 0.007 0.299 0.004 0.306 0.004 H0.42 C0.428 0.004 0.435 0.008 0.442 0.016 C0.453 0.028 0.467 0.032 0.483 0.032 H0.985 C0.994 0.032 1 0.042 1 0.055 V0.945 C1 0.958 0.994 0.968 0.985 0.968 H0.015 C0.006 0.968 0 0.958 0 0.945 V0.055 Z" />
                </clipPath>
              </defs>
            </svg>

            <div
              className="w-full h-full bg-[#0f0f0f] border-l-2 border-[#2ef68d]/30"
              style={{ clipPath: "url(#sidebar-mask)" }}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={onCloseAction}
                className="absolute right-[24px] sm:right-[36px] md:right-[48px] top-[24px] md:top-[32px] flex items-center gap-2 hover:opacity-80 transition-opacity group"
              >
                <span className="font-['Space_Mono',monospace] text-[14px] sm:text-[16px] md:text-[18px] text-white tracking-[-0.05em]">
                  Close
                </span>
                <div className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] text-[#2ef68d]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.button>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute left-[32px] sm:left-[52px] md:left-[72px] top-[24px] md:top-[32px] flex items-center gap-2"
              >
                <img
                  src={imgLogo}
                  alt="Axton Logo"
                  className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] object-cover rounded"
                />
                <span className="font-['Space_Mono',monospace] font-bold text-[14px] md:text-[16px] text-white tracking-[-0.05em]">
                  Axton
                </span>
              </motion.div>

              {/* Navigation Menu */}
              <nav className="pt-[120px] sm:pt-[150px] md:pt-[172px] px-[32px] sm:px-[52px] md:px-[72px]">
                {/* Menu Items */}
                <ul className="space-y-[32px] sm:space-y-[40px] md:space-y-[48px]">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className="flex items-center gap-3 md:gap-4 group cursor-pointer w-full text-left"
                      >
                        <span className="font-['Space_Mono',monospace] font-bold text-[28px] sm:text-[36px] md:text-[44px] text-white tracking-[-0.05em] group-hover:text-[#2ef68d] transition-colors duration-300">
                          {item.title}
                        </span>
                        <span className="font-['Space_Mono',monospace] text-[16px] sm:text-[20px] md:text-[24px] text-[#2ef68d] tracking-[-0.05em]">
                          {item.number}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Socials Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-[180px] sm:mt-[220px] md:mt-[268px]"
                >
                  <p className="font-['Space_Mono',monospace] text-[18px] sm:text-[20px] md:text-[24px] text-white tracking-[-0.05em] mb-3 md:mb-4">
                    Socials
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    {/* GitHub */}
                    <a
                      href="#"
                      className="w-[17px] h-[17px] hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="GitHub"
                        className="block max-w-none size-full"
                        src={imgIcons}
                      />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-[17px] h-[17px] hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="LinkedIn"
                        className="block max-w-none size-full"
                        src={imgIcons1}
                      />
                    </a>

                    {/* X/Twitter */}
                    <a
                      href="#"
                      className="w-[17px] h-[17px] hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="X"
                        className="block max-w-none size-full"
                        src={imgVector}
                      />
                    </a>
                  </div>
                </motion.div>
              </nav>

              {/* Decorative accent line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute left-0 top-[100px] w-[2px] h-[200px] bg-gradient-to-b from-[#2ef68d] via-[#478ff5] to-transparent origin-top"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
