# Scroll Animation Documentation

## Overview

The scroll animation system provides smooth, performance-optimized animations triggered by scroll position. All animations use passive event listeners and are GPU-accelerated using CSS transforms.

## Components & Hooks

### 1. `useScrollAnimation` Hook

Triggers fade-in and slide-up animations when element enters viewport.

```tsx
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MyComponent = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="opacity-0">
      Content animates in on scroll
    </div>
  );
};
```

### 2. `useScrollTextAnimation` Hook

Creates staggered animations for text elements within a container.

```tsx
import { useScrollTextAnimation } from "@/hooks/useScrollAnimation";

const TextComponent = () => {
  const containerRef = useScrollTextAnimation();

  return (
    <div ref={containerRef}>
      <span data-scroll-word>Word</span>
      <span data-scroll-word>By</span>
      <span data-scroll-word>Word</span>
    </div>
  );
};
```

### 3. `useScrollParallaxText` Hook

Creates parallax scroll effects for depth perception.

```tsx
import { useScrollParallaxText } from "@/hooks/useScrollAnimation";

const ParallaxText = () => {
  const ref = useScrollParallaxText(0.5); // Speed multiplier

  return <div ref={ref}>Moves slower than scroll</div>;
};
```

### 4. `ScrollAnimatedSection` Component

Reusable section wrapper with built-in animations and SVG decorations.

```tsx
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";

<ScrollAnimatedSection
  title="Section Title"
  description="Section description"
  backgroundColor="bg-black"
  animationStyle="fade-up"
>
  {/* Your content here */}
</ScrollAnimatedSection>;
```

## Animation Patterns

### Pattern 1: Staggered Card Animation

```tsx
const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll("[data-feature-card]");
      const containerRect = container.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - containerRect.top) / window.innerHeight
        )
      );

      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const delay = index * 0.1;
        const progress = Math.max(0, scrollProgress - delay);

        element.style.opacity = String(Math.min(1, progress * 1.5));
        element.style.transform = `translateY(${Math.max(
          0,
          (1 - progress) * 40
        )}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef}>
      <div data-feature-card>Card 1</div>
      <div data-feature-card>Card 2</div>
      <div data-feature-card>Card 3</div>
    </div>
  );
};
```

### Pattern 2: Scale + Translate Animation

```tsx
// Used in stats section for emphasis
element.style.transform = `scale(${Math.max(
  0.8,
  progress
)}) translateY(${Math.max(0, (1 - progress) * 30)}px)`;
```

### Pattern 3: Directional Slide Animation

```tsx
// Elements slide in from left/right alternately
const isLeft = index % 2 === 0;
const xOffset = isLeft ? -50 : 50;
element.style.transform = `translateX(${Math.max(
  0,
  (1 - progress) * xOffset
)}px) translateY(${Math.max(0, (1 - progress) * 20)}px)`;
```

## Current Sections

### 1. FeaturesSection

- 4 feature cards with staggered fade-up animation
- Cards slide up from bottom on scroll
- 0.1s stagger delay between each card
- Hover effects with border color change

### 2. StatsSection

- 3 stat cards with scale + translate animation
- Cards scale from 0.8 to 1.0 while fading in
- 0.15s stagger delay for emphasis
- Gradient text (green → cyan)

### 3. SolutionsSection

- 4 solution items in 2×2 grid
- Alternate left/right slide animation
- Items slide from sides while fading in
- Arrow icon with green accent

### 4. CTASection

- Single title with fade-up animation
- Call-to-action buttons below
- Gradient background (black → zinc-900)
- Two button variants (primary + outline)

## CSS Classes Used

- `opacity-0`: Initial opacity state (animated via JS)
- `translate-*`: Initial position state (animated via JS)
- `hover:border-cyan-500/50`: Hover effect on cards
- `bg-gradient-to-r`: Gradient text and backgrounds
- `bg-clip-text`: For gradient text effect
- `text-transparent`: Required for gradient text

## Performance Optimizations

1. **Passive Event Listeners**: All scroll listeners use `{ passive: true }` for better performance
2. **GPU Acceleration**: Only CSS transforms are animated (opacity, translate, scale)
3. **RequestAnimationFrame**: Could be added for smoother 60fps animations
4. **Intersection Observer**: Used in base `useScrollEffect` hook for initial visibility

## Customization

To create a new section with scroll animation:

```tsx
const MySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.querySelectorAll("[data-item]");
      const containerRect = container.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - containerRect.top) / window.innerHeight
        )
      );

      items.forEach((item, index) => {
        const element = item as HTMLElement;
        const delay = index * 0.1;
        const progress = Math.max(0, scrollProgress - delay);

        // Customize your animation here
        element.style.opacity = String(Math.min(1, progress * 1.5));
        element.style.transform = `translateY(${Math.max(
          0,
          (1 - progress) * 40
        )}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollAnimatedSection title="My Section">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-item className="opacity-0">
          Item 1
        </div>
        <div data-item className="opacity-0">
          Item 2
        </div>
      </div>
    </ScrollAnimatedSection>
  );
};
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS transforms (GPU-accelerated)
- Uses Intersection Observer API
- Gracefully degrades if JavaScript is disabled

## Tips & Best Practices

1. **Always start with `opacity-0`** in the initial className
2. **Use `data-*` attributes** to target animated elements
3. **Stagger delays** to create cascading animations
4. **Test on mobile** - some devices may need throttled scroll handlers
5. **Use `passive: true`** on all scroll listeners for performance
6. **Cleanup event listeners** to prevent memory leaks
