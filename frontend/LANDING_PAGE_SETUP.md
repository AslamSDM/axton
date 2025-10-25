# Landing Page Setup

## Overview

The landing page is a beautifully designed showcase for Axton with multiple sections and smooth scrolling.

## Smooth Scrolling

The landing page uses native CSS smooth scrolling by default. For more advanced smooth scrolling with Lenis:

### Optional: Install Lenis for Premium Smooth Scrolling

```bash
npm install lenis
```

Then update the import and useEffect in `/src/app/landing/page.tsx`:

```typescript
import Lenis from "lenis";

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);
```

## Sections

1. **Hero Section**

   - Axton logo
   - Main headline with gradient text
   - Subheading
   - CTA buttons
   - Scroll indicator

2. **Features Section**

   - 4 key features in grid layout
   - Icons with hover effects
   - Feature descriptions

3. **Stats Section**

   - 3 impressive statistics
   - Gradient text for values
   - Hover effects on cards

4. **Global Coverage Section**

   - Text content about worldwide trading
   - Bullet points with features
   - Earth globe image
   - 2-column layout

5. **CTA Section**
   - Strong call-to-action
   - Primary and secondary buttons
   - Footer with links and social media

## Navigation

- Access at `/landing` route
- Links to dashboard from hero section
- Footer navigation for company info

## Styling

- Black background with slanted white lines
- Gradient text using green-cyan-emerald colors
- Hover effects on cards and buttons
- Responsive grid layouts
- Space Mono bold font

## Customization

Edit these files to customize:

- `/src/app/landing/page.tsx` - Main landing page content
- Colors and gradients
- Text content and copy
- Button actions and links
- Feature cards and descriptions
- Statistics and metrics

## Performance

- Optimized images with Next.js Image component
- Lazy loaded sections
- CSS-based animations
- No heavy dependencies required
