import React, { useRef, ReactNode } from "react";
import {
  useScrollAnimation,
  useScrollTextAnimation,
} from "@/hooks/useScrollAnimation";

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  animationStyle?: "fade-up" | "parallax" | "stagger";
  backgroundImage?: string;
  backgroundColor?: string;
}

export const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className = "",
  title,
  description,
  animationStyle = "fade-up",
  backgroundImage,
  backgroundColor = "bg-black",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 overflow-hidden ${backgroundColor} ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Optional overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}

      {/* Vector Decoration */}
      <svg
        className="absolute top-[-68px] left-[70px] w-[1532px] h-[5586px] pointer-events-none opacity-30"
        viewBox="0 0 1532 5586"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
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

      {/* Section Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Title and Description */}
        {(title || description) && (
          <div className="mb-16 text-center">
            {title && (
              <h2
                ref={scrollRef as any}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0"
                style={{
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto opacity-0 animate-in">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Children Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </section>
  );
};
