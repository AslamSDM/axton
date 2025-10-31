import React, { useRef, useEffect, useState } from "react";
import { Zap } from "lucide-react";

// Data for the statistics section
const stats = [
  { label: "TOTAL INVESTORS", value: "12,254", color: "text-green-400" },
  { label: "24H ROI PAID", value: "$1,20,254", color: "text-green-400" },
  { label: "ACTIVE REFERRALS", value: "25,689", color: "text-blue-400" },
  { label: "BINARY VOLUME", value: "$5.1M", color: "text-blue-400" },
];

// Helper component for the stat cards
const StatCard = ({ label, value, color }: any) => (
  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 transition duration-300 hover:bg-white/10 h-full">
    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
      {label}
    </p>
    <h3
      className={`text-3xl sm:text-4xl font-extrabold ${color} leading-tight`}
    >
      {value}
    </h3>
  </div>
);

export const AxtonHero = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollBlocked, setScrollBlocked] = useState(true);

  // Hijack scroll - prevent scrolling until components are loaded
  useEffect(() => {
    const preventScroll = (e: Event) => {
      if (scrollBlocked) {
        e.preventDefault();
      }
    };

    const preventWheelScroll = (e: WheelEvent) => {
      if (scrollBlocked) {
        e.preventDefault();
      }
    };

    const preventTouchScroll = (e: TouchEvent) => {
      if (scrollBlocked) {
        e.preventDefault();
      }
    };

    // Add scroll prevention listeners
    window.addEventListener("scroll", preventScroll, { passive: false });
    window.addEventListener("wheel", preventWheelScroll, { passive: false });
    window.addEventListener("touchmove", preventTouchScroll, {
      passive: false,
    });
    document.addEventListener("keydown", (e) => {
      if (
        scrollBlocked &&
        (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown")
      ) {
        e.preventDefault();
      }
    });

    return () => {
      window.removeEventListener("scroll", preventScroll);
      window.removeEventListener("wheel", preventWheelScroll);
      window.removeEventListener("touchmove", preventTouchScroll);
    };
  }, [scrollBlocked]);

  // Simulate component loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
      setScrollBlocked(false);
      // Re-enable scroll behavior on document
      document.body.style.overflow = "auto";
    }, 2000); // 2 second loading time (adjust as needed)

    return () => clearTimeout(loadingTimer);
  }, []);

  // Lock scroll on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroSectionRef.current) return;

      const heroRect = heroSectionRef.current.getBoundingClientRect();
      const heroTop = heroRect.top;
      const heroHeight = heroRect.height;

      // Calculate scroll progress (0 to 1)
      // 0 when hero is at top of viewport
      // 1 when hero has scrolled out of view
      const progress = Math.max(0, Math.min(1, -heroTop / (heroHeight * 0.5)));

      setScrollProgress(progress);

      // Apply title animation - reduce font size
      if (titleRef.current) {
        const initialSize = 112; // 7xl size in px (approx)
        const finalSize = 32; // sm size in px
        const newSize = initialSize - (initialSize - finalSize) * progress;
        titleRef.current.style.fontSize = `${newSize}px`;
        titleRef.current.style.opacity = String(
          Math.max(0.3, 1 - progress * 0.5)
        );
        titleRef.current.style.transform = `translateY(${progress * -40}px)`;
      }

      // Apply description animation - fade out
      if (descRef.current) {
        descRef.current.style.opacity = String(Math.max(0, 1 - progress * 1.5));
        descRef.current.style.transform = `translateY(${progress * 20}px)`;
      }

      // Apply CTA buttons animation - fade and slide in
      if (ctaButtonsRef.current) {
        ctaButtonsRef.current.style.opacity = String(
          Math.max(0, Math.min(1, progress - 0.3))
        );
        ctaButtonsRef.current.style.transform = `translateY(${Math.max(
          0,
          (1 - Math.min(1, progress - 0.3)) * 40
        )}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroSectionRef}
      className="min-h-screen bg-gray-950 text-white font-sans p-4 sm:p-8 lg:p-16 relative"
    >
      <div className="w-[1512px] h-[914px] relative bg-neutral-950 overflow-hidden">
        <img
          className="w-10 h-10 left-[100px] top-[26px] absolute bg-blend-exclusion"
          src="https://placehold.co/39x39"
        />
        <div className="w-40 h-10 left-[1310px] top-[28px] absolute border border-emerald-400" />
        <div className="w-[1531.70px] h-[5586.47px] left-[69.80px] top-[-68px] absolute mix-blend-hard-light outline outline-[50px] outline-offset-[-25px] outline-emerald-400" />
        <div className="w-6 h-4 left-[56px] top-[38px] absolute bg-white" />
        <div className="w-[1296px] left-[94px] top-[227px] absolute justify-start text-zinc-300 text-5xl font-bold font-['Space_Mono'] leading-[67px]">
          Reinventing Passive Income Through Blockchain Intelligence
        </div>
        <div className="w-[624px] left-[100px] top-[393px] absolute justify-start text-white text-sm font-normal font-['Space_Mono']">
          Axton Protocol merges DeFi transparency with network-powered earning —
          built on Binance Smart Chain (BEP-20 USDT).
        </div>
        <div className="w-52 h-10 left-[100px] top-[476px] absolute bg-gradient-to-r from-emerald-400 to-blue-500 border border-emerald-400" />
        <div className="w-52 h-10 left-[318px] top-[476px] absolute border border-emerald-400" />
        <div className="left-[167px] top-[486px] absolute justify-start text-white text-sm font-bold font-['Space_Mono']">
          Start Earning
        </div>
        <div className="left-[349px] top-[486px] absolute justify-start text-white text-sm font-bold font-['Space_Mono']">
          View Smart Contract
        </div>
        <div className="w-4 h-5 left-[134px] top-[486px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
        <div className="w-52 h-28 left-[94px] top-[569px] absolute bg-stone-950/50 border border-zinc-800 backdrop-blur-lg" />
        <div className="w-52 h-28 left-[312px] top-[569px] absolute bg-stone-950/80 border border-zinc-800 backdrop-blur-lg" />
        <div className="w-52 h-28 left-[530px] top-[569px] absolute bg-stone-950/50 border border-zinc-800 backdrop-blur-lg" />
        <div className="w-52 h-28 left-[748px] top-[569px] absolute bg-stone-950/50 border border-zinc-800 backdrop-blur-lg" />
        <div className="left-[116px] top-[594px] absolute justify-start text-white/70 text-xs font-normal font-['Space_Mono'] uppercase">
          Total Investors
        </div>
        <div className="left-[334px] top-[594px] absolute justify-start text-white/70 text-xs font-normal font-['Space_Mono'] uppercase">
          24h ROI Paid
        </div>
        <div className="left-[552px] top-[594px] absolute justify-start text-white/70 text-xs font-normal font-['Space_Mono'] uppercase">
          Active Referrals{" "}
        </div>
        <div className="left-[770px] top-[594px] absolute justify-start text-white/70 text-xs font-normal font-['Space_Mono'] uppercase">
          Binary Volume
        </div>
        <div className="left-[116px] top-[620px] absolute justify-start text-white text-2xl font-bold font-['Space_Mono']">
          12,254
        </div>
        <div className="left-[334px] top-[620px] absolute justify-start text-white text-2xl font-bold font-['Space_Mono']">
          $1,20,254
        </div>
        <div className="left-[552px] top-[620px] absolute justify-start text-white text-2xl font-bold font-['Space_Mono']">
          25,689
        </div>
        <div className="left-[770px] top-[620px] absolute justify-start text-white text-2xl font-bold font-['Space_Mono']">
          $5.1M
        </div>
      </div>
    </div>
  );
};
