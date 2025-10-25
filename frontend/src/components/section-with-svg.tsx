import React from "react";

interface SectionWithSVGProps {
  children: React.ReactNode;
  className?: string;
  showSVG?: boolean;
}

export const SectionWithSVG: React.FC<SectionWithSVGProps> = ({
  children,
  className = "",
  showSVG = true,
}) => {
  return (
    <section className={`relative w-full ${className}`}>
      {showSVG && (
        <svg
          className="absolute top-[-68px] left-[70px] w-[1532px] h-[5586px] pointer-events-none opacity-50"
          viewBox="0 0 1532 5586"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          {/* SVG background decoration - will be loaded from external source */}
          <rect
            width="1532"
            height="5586"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          {/* Vertical decorative lines */}
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="5586"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="2"
          />
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="5586"
            stroke="rgba(34, 197, 94, 0.1)"
            strokeWidth="1"
          />
          <line
            x1="400"
            y1="0"
            x2="400"
            y2="5586"
            stroke="rgba(6, 182, 212, 0.15)"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* Horizontal accent lines */}
          <line
            x1="0"
            y1="600"
            x2="1532"
            y2="600"
            stroke="rgba(34, 197, 94, 0.1)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="1400"
            x2="1532"
            y2="1400"
            stroke="rgba(6, 182, 212, 0.1)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="2200"
            x2="1532"
            y2="2200"
            stroke="rgba(34, 197, 94, 0.1)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="3000"
            x2="1532"
            y2="3000"
            stroke="rgba(6, 182, 212, 0.1)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="3800"
            x2="1532"
            y2="3800"
            stroke="rgba(34, 197, 94, 0.1)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="4600"
            x2="1532"
            y2="4600"
            stroke="rgba(6, 182, 212, 0.1)"
            strokeWidth="1"
          />
        </svg>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};
