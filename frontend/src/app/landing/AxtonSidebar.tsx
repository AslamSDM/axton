"use client";

import { useState } from "react";

const imgImage28 =
  "https://www.figma.com/api/mcp/asset/c3bd30f6-00cb-4e17-a1bb-05b8479a081f";
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/6ce8af58-a2dd-4988-a63d-6be9f1c0ce65";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/720345d0-e5bb-4433-b55f-212981719a88";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/f7690486-fe6b-4f74-8d00-b9183b323509";
const imgIcons =
  "https://www.figma.com/api/mcp/asset/1efa6736-1e50-4849-9f92-b75d10496b67";
const imgIcons1 =
  "https://www.figma.com/api/mcp/asset/d875c421-84e3-4d71-8ab9-401b4696e4da";
const imgVector =
  "https://www.figma.com/api/mcp/asset/64f9a424-f487-485c-beb7-fbf0e0bda495";
const imgGroup64 =
  "https://www.figma.com/api/mcp/asset/3c7e0073-223a-4e4a-956f-341fef34012d";

interface AxtonSidebarProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function AxtonSidebar({
  isOpen,
  onCloseAction,
}: AxtonSidebarProps) {
  const menuItems = [
    { title: "About", number: "01", id: "about" },
    { title: "Packages", number: "02", id: "packages" },
    { title: "Structure", number: "03", id: "structure" },
    { title: "Analytics", number: "04", id: "analytics" },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onCloseAction();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px] z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onCloseAction}
      >
        {/* Background Pattern - Full Page */}
        <div className="absolute h-[688px] left-0 top-0 w-full">
          <div className="absolute inset-0 mix-blend-color-dodge overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[158.58%] left-[13.76%] max-w-none top-[-58.58%] w-[72.16%]"
              src={imgImage28}
            />
          </div>
        </div>

        {/* Pattern Texture */}
        <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-68px] w-[1531.705px] pointer-events-none">
          <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector15}
            />
          </div>
        </div>

        {/* Background Hero Text (Blurred) */}
        <div className="absolute left-[94px] top-[187px] pointer-events-none">
          <p className="font-['Space_Mono',monospace] font-bold text-[125px] text-[#d9d9d9] tracking-[-6.25px] leading-[127px] max-w-[1296px]">
            Reinventing Passive Income Through Blockchain Intelligence
          </p>
        </div>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`fixed left-0 top-0 h-screen w-[462px] bg-[#1f1f1f] z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onCloseAction}
          className="absolute right-[48px] top-[32px] flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="font-['Space_Mono',monospace] text-[18px] text-white tracking-[-0.9px]">
            Close
          </span>
          <div className="w-[17px] h-[17px]">
            <img
              alt="Close"
              className="block max-w-none size-full"
              src={imgGroup64}
            />
          </div>
        </button>

        {/* Navigation Menu */}
        <nav className="pt-[172px] px-[72px]">
          {/* Menu Items */}
          <ul className="space-y-[48px]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-4 group cursor-pointer w-full text-left"
                >
                  <span className="font-['Space_Mono',monospace] font-bold text-[44px] text-white tracking-[-2.2px] group-hover:text-[#2ef68d] transition-colors">
                    {item.title}
                  </span>
                  <span className="font-['Space_Mono',monospace] text-[24px] text-[#2ef68d] tracking-[-1.2px]">
                    {item.number}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Socials Section */}
          <div className="mt-[268px]">
            <p className="font-['Space_Mono',monospace] text-[24px] text-white tracking-[-1.2px] mb-4">
              Socials
            </p>
            <div className="flex items-center gap-4">
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
          </div>
        </nav>
      </div>
    </>
  );
}
