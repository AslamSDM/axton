# Landing Page Component Structure

## Directory Layout

```
src/app/landing/
├── page.tsx                          # Main landing page (only imports components)
├── layout.tsx                        # Layout with navbar and background
├── AxtonHero.tsx                     # Hero section component
│
└── components/
    ├── index.ts                      # Barrel export for all sections
    ├── FeaturesSection.tsx           # Features showcase with scroll animation
    ├── StatsSection.tsx              # Statistics cards with scale animation
    ├── SolutionsSection.tsx          # Solutions grid with directional slides
    └── CTASection.tsx                # Call-to-action section
```

## Component Breakdown

### 1. **FeaturesSection.tsx**

- **Location**: `/src/app/landing/components/FeaturesSection.tsx`
- **Purpose**: Displays 4 feature cards with scroll-triggered animations
- **Animation**: Staggered fade-up (0.1s delay between cards)
- **Props**: None (self-contained)
- **Features**:
  - Zap, Shield, Globe, TrendingUp icons
  - Hover effects with cyan border
  - Responsive grid (1 col mobile, 2 col tablet, 4 col desktop)

### 2. **StatsSection.tsx**

- **Location**: `/src/app/landing/components/StatsSection.tsx`
- **Purpose**: Shows key metrics with emphasis animation
- **Animation**: Scale (0.8→1.0) + translate with 0.15s stagger
- **Props**: None (self-contained)
- **Features**:
  - 3 stat cards with gradient backgrounds
  - Green → Cyan gradient text
  - Scale emphasis effect on scroll

### 3. **SolutionsSection.tsx**

- **Location**: `/src/app/landing/components/SolutionsSection.tsx`
- **Purpose**: Showcases 4 solution features in a 2×2 grid
- **Animation**: Directional slide (alternate left/right) with fade-in
- **Props**: None (self-contained)
- **Features**:
  - Alternating left/right slide animations
  - Green arrow icons
  - 2×2 responsive grid
  - Hover effects with border color change

### 4. **CTASection.tsx**

- **Location**: `/src/app/landing/components/CTASection.tsx`
- **Purpose**: Call-to-action with primary and secondary buttons
- **Animation**: Title fade-up animation
- **Props**: None (self-contained)
- **Features**:
  - Large centered heading
  - Description text
  - Two button options (Get Started, Learn More)
  - Gradient background button

### 5. **AxtonHero.tsx**

- **Location**: `/src/app/landing/AxtonHero.tsx`
- **Purpose**: Hero section with background and headline
- **Animation**: Static background image + SVG decoration
- **Props**: None (self-contained)
- **Features**:
  - Background image from external URL
  - SVG decorative elements
  - Large responsive headline
  - Fixed navbar integration

### 6. **layout.tsx**

- **Location**: `/src/app/landing/layout.tsx`
- **Purpose**: Shared layout for all landing pages
- **Features**:
  - Fixed sticky navbar with logo and Connect Wallet button
  - Slanted white line background pattern
  - Smooth scroll behavior
  - 15-degree gradient lines throughout

## Import Pattern

**Before (Monolithic)**:

```tsx
// src/app/landing/page.tsx
const FeaturesSection = () => {
  /* 60+ lines */
};
const StatsSection = () => {
  /* 50+ lines */
};
const SolutionsSection = () => {
  /* 60+ lines */
};
const CTASection = () => {
  /* 40+ lines */
};

export default function LandingPage() {
  /* ... */
}
```

**After (Modular)**:

```tsx
// src/app/landing/page.tsx
import {
  FeaturesSection,
  StatsSection,
  SolutionsSection,
  CTASection,
} from "./components";
import { AxtonHero } from "./AxtonHero";

export default function LandingPage() {
  return (
    <>
      <AxtonHero />
      <FeaturesSection />
      <StatsSection />
      <SolutionsSection />
      <CTASection />
    </>
  );
}
```

## File Sizes (Approximate)

| File                   | Lines    | Purpose             |
| ---------------------- | -------- | ------------------- |
| `page.tsx`             | 12       | Router + layout     |
| `AxtonHero.tsx`        | 40       | Hero section        |
| `FeaturesSection.tsx`  | 70       | Feature cards       |
| `StatsSection.tsx`     | 60       | Statistics          |
| `SolutionsSection.tsx` | 75       | Solutions showcase  |
| `CTASection.tsx`       | 55       | Call-to-action      |
| `layout.tsx`           | 80       | Navbar + background |
| **Total**              | **~390** | Complete landing    |

## Adding New Sections

To add a new section:

1. Create file: `src/app/landing/components/NewSection.tsx`
2. Export component: `export const NewSection = () => { ... };`
3. Add to barrel export: `src/app/landing/components/index.ts`
4. Import in page: `src/app/landing/page.tsx`
5. Add to render order

Example:

```tsx
// src/app/landing/components/NewSection.tsx
"use client";

import React from "react";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";

export const NewSection = () => {
  return (
    <ScrollAnimatedSection
      title="New Section"
      description="Description here"
      backgroundColor=""
    >
      {/* Your content */}
    </ScrollAnimatedSection>
  );
};
```

## Benefits of This Structure

✅ **Separation of Concerns**: Each component has a single responsibility
✅ **Easier Maintenance**: Update section independently
✅ **Better Testing**: Can test each section in isolation
✅ **Code Reusability**: Components can be imported elsewhere
✅ **Cleaner Main Page**: `page.tsx` is now just 12 lines
✅ **Scalability**: Easy to add more sections without cluttering
✅ **Team Collaboration**: Multiple developers can work on different sections

## Related Files

- **Hooks**: `/src/hooks/useScrollAnimation.ts`
- **Components**: `/src/components/scroll-animated-section.tsx`
- **Styles**: `/src/app/globals.css` (animations)
- **UI Components**: `/src/components/ui/button.tsx`
- **Icons**: `lucide-react`

## Documentation

- `SCROLL_ANIMATIONS.md` - Complete animation guide
- `README.md` - Project overview
