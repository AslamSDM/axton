import { useEffect, useRef } from "react";

export interface ScrollAnimationOptions {
  threshold?: number;
  startOffset?: number; // How far from top to start animation
  endOffset?: number; // How far from top to end animation
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    startOffset = 0,
    endOffset = window.innerHeight,
  } = options;

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
      );

      // Apply animations based on scroll progress
      element.style.opacity = String(Math.min(1, scrollProgress * 1.5));
      element.style.transform = `translateY(${Math.max(
        0,
        (1 - scrollProgress) * 50
      )}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return ref;
};

// Hook for staggered text animation on scroll
export const useScrollTextAnimation = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll("[data-scroll-word]");

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
      );

      words.forEach((word, index) => {
        const delay = index * 0.05;
        const progress = Math.max(0, scrollProgress - delay);
        const element = word as HTMLElement;

        element.style.opacity = String(Math.min(1, progress * 2));
        element.style.transform = `translateY(${Math.max(
          0,
          (1 - progress) * 20
        )}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return containerRef;
};

// Hook for parallax text effect
export const useScrollParallaxText = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = scrollY + rect.top;

      const parallaxOffset =
        (scrollY - (elementTop - window.innerHeight)) * speed;

      element.style.transform = `translateY(${parallaxOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
};
