// import Image from "next/image";

// const icons = [
//   { src: "/spark.png", alt: "Spark" },
//   { src: "/window.svg", alt: "Window" },
//   { src: "/globe.svg", alt: "Globe" },
//   { src: "/dollar.png", alt: "Dollar" },
//   { src: "/dollarslim.png", alt: "Dollar Slim" },
// ];

import React from 'react';

const IconChevronDown = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconSignal = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20h.01"></path>
    <path d="M7 20v-4"></path>
    <path d="M12 20v-8"></path>
    <path d="M17 20V8"></path>
    <path d="M22 20V4"></path>
  </svg>
);

const IconSnowflake = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <line x1="17.6" y1="6.4" x2="6.4" y2="17.6"></line>
    <line x1="21.2" y1="12" x2="2.8" y2="12"></line>
    <line x1="17.6" y1="17.6" x2="6.4" y2="6.4"></line>
    <line x1="14.8" y1="4.6" x2="12" y2="2"></line>
    <line x1="9.2" y1="4.6" x2="12" y2="2"></line>
    <line x1="14.8" y1="19.4" x2="12" y2="22"></line>
    <line x1="9.2" y1="19.4" x2="12" y2="22"></line>
    <line x1="19.4" y1="9.2" x2="22" y2="12"></line>
    <line x1="19.4" y1="14.8" x2="22" y2="12"></line>
    <line x1="4.6" y1="9.2" x2="2" y2="12"></line>
    <line x1="4.6" y1="14.8" x2="2" y2="12"></line>
  </svg>
);

const IconHexagon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2l9 4.9V17l-9 5-9-5V6.9L12 2z"></path>
  </svg>
);

const IconTriangle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L2 22h20L12 2z"></path>
  </svg>
);

const IconGrid = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);


// --- Community Bar Component ---
export function CommunityBar(): React.ReactElement {

  const icons = [
    IconChevronDown,
    IconSignal,
    IconSnowflake,
    IconHexagon,
    IconTriangle,
    IconGrid
  ];

  return (
    <div className=" bg-[#00000081] border border-zinc-800 text-white font-mono p-4 mb-6 mx-8">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side: Title */}
        <div>
          <span className="text-lg font-medium text-zinc-300">
            Secure and Integrated Community
          </span>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-6">
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              className="w-6 h-6 text-zinc-500 hover:text-white transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}