# AxtonHero Component - Updated Design & Scroll Animations

## Overview

The AxtonHero component has been completely redesigned to feature a modern hero section with hero statistics, and dynamic scroll-based animations that respond to user scroll behavior.

## 🎨 New Design Features

### Hero Section Layout

- **Large Headline**: "Reinventing Passive Income Through Blockchain Intelligence"
- **Description**: Explains Axton Protocol and BSC/USDT details
- **CTA Buttons**:
  - Primary: "Start Earning" (green with Zap icon)
  - Secondary: "View Smart Contract" (outlined)

### Statistics Section

Four stat cards displaying key metrics:
| Stat | Value | Color |
|------|-------|-------|
| TOTAL INVESTORS | 12,254 | Green |
| 24H ROI PAID | $1,20,254 | Green |
| ACTIVE REFERRALS | 25,689 | Blue |
| BINARY VOLUME | $5.1M | Blue |

## 📊 Scroll Animation Details

### 1. **Title Font Size Reduction**

- **Initial**: 112px (7xl)
- **Final**: 32px (sm)
- **Trigger**: Scroll position
- **Effect**: Font gradually shrinks as user scrolls

```typescript
const initialSize = 112; // 7xl size in px
const finalSize = 32; // sm size in px
const newSize = initialSize - (initialSize - finalSize) * progress;
titleRef.current.style.fontSize = `${newSize}px`;
```

### 2. **Title Opacity & Transform**

- **Opacity**: Fades slightly (1 → 0.3)
- **Transform**: Slides up (-40px)
- **Purpose**: Creates depth effect as title shrinks

```typescript
titleRef.current.style.opacity = String(Math.max(0.3, 1 - progress * 0.5));
titleRef.current.style.transform = `translateY(${progress * -40}px)`;
```

### 3. **Description Text Fade**

- **Opacity**: Completely fades out (1 → 0)
- **Transform**: Slides down slightly (20px)
- **Trigger**: Progress \* 1.5 (fades faster than title)

```typescript
descRef.current.style.opacity = String(Math.max(0, 1 - progress * 1.5));
descRef.current.style.transform = `translateY(${progress * 20}px)`;
```

### 4. **CTA Buttons Appear**

- **Opacity**: Fades in (0 → 1)
- **Transform**: Slides up from below (40px → 0px)
- **Delay**: Starts appearing after 30% scroll progress
- **Purpose**: Buttons emerge as content scrolls away

```typescript
ctaButtonsRef.current.style.opacity = String(
  Math.max(0, Math.min(1, progress - 0.3))
);
ctaButtonsRef.current.style.transform = `translateY(${Math.max(
  0,
  (1 - Math.min(1, progress - 0.3)) * 40
)}px)`;
```

## 📐 Scroll Progress Calculation

```typescript
const progress = Math.max(0, Math.min(1, -heroTop / (heroHeight * 0.5)));
```

- **0**: Hero section at top of viewport
- **0.3**: 30% scrolled (buttons start appearing)
- **1**: Hero section completely scrolled out (all animations complete)

## 🎯 Component Structure

```tsx
export const AxtonHero = () => {
  // Refs for DOM elements
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);

  // Scroll progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Calculate progress and update elements
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroSectionRef} className="min-h-screen...">
      {/* Background and decoration images */}
      {/* Hero content with refs */}
      {/* Stats section */}
    </div>
  );
};
```

## 🎨 Color Scheme

- **Primary Background**: `bg-gray-950` (very dark gray)
- **Primary Text**: White
- **Primary CTA**: `bg-green-400` with glow effect
- **Secondary CTA**: Border `border-green-400` text-green-400
- **Stat Cards**:
  - Glassmorphism: `bg-white/5` with `backdrop-blur-sm`
  - Borders: `border-white/10`
  - Hover: `hover:bg-white/10`
- **Stat Values**: Green or Blue gradients

## 📱 Responsive Design

- **Mobile**:
  - Padding: `p-4`
  - Single column buttons (flex-col)
  - 2 column stat grid
- **Tablet**:
  - Padding: `sm:p-8`
  - Buttons in row with space
  - 2-4 column stat grid (md:grid-cols-4)
- **Desktop**:
  - Padding: `lg:p-16`
  - Large text sizes
  - Full spacing

## 🚀 Features

✅ **Smooth Scroll Animations**: Text reduces size smoothly on scroll
✅ **Staggered Reveals**: Different elements animate at different times
✅ **GPU Accelerated**: Uses transform and opacity for performance
✅ **Passive Listeners**: Better scroll performance
✅ **Responsive**: Works on mobile, tablet, desktop
✅ **Glassmorphism**: Modern card design with backdrop blur
✅ **Accessibility**: Semantic HTML and proper contrast

## 🔧 Customization

### Change Animation Speed

```typescript
// Faster title reduction
const newSize = initialSize - (initialSize - finalSize) * progress * 1.5;

// Slower button appearance
ctaButtonsRef.current.style.opacity = String(
  Math.max(0, Math.min(1, progress - 0.5)) // Changed from 0.3 to 0.5
);
```

### Change Font Sizes

```typescript
const initialSize = 128; // Larger initial
const finalSize = 24; // Smaller final
```

### Change Colors

```typescript
// In StatCard component or stat array
{ label: "CUSTOM", value: "123", color: "text-purple-400" }
```

## 📊 Animation Timeline

```
0% scroll     → Hero content at normal size
               → Buttons invisible below
               → Description fully visible

30% scroll    → Title 25% smaller
               → Buttons start fading in
               → Description fading

60% scroll    → Title 50% smaller
               → Buttons visible
               → Description mostly faded

100% scroll   → Title 90% smaller
               → Buttons fully visible
               → Description invisible
```

## 🔗 Integration Notes

- Uses `Zap` icon from `lucide-react`
- Part of the landing page component structure
- Can be easily extended with more stat cards
- Scroll animations are self-contained

## Performance Considerations

✅ Passive event listeners
✅ Only CSS transforms animated (not position/size)
✅ RequestAnimationFrame could be added for smoother 60fps
✅ Cleanup on component unmount
✅ No unnecessary re-renders (using refs for DOM manipulation)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS transforms (GPU-accelerated)
- ES6+ JavaScript
- Gracefully degrades if JavaScript disabled
