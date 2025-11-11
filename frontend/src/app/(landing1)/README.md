# Axton Landing Page - Design Documentation

## Overview

This is a modern, unique landing page for Axton that breaks away from traditional shadcn designs. It features animated backgrounds, custom clip-path elements, and both horizontal and vertical scroll flows.

## Key Features

### 🎨 **Animated Backgrounds**

The landing page uses multiple WebGL/Canvas-based animated backgrounds throughout different sections:

1. **Orb** - Hero section with iridescent orb effect
2. **GridScan** - Sci-fi grid overlay on hero
3. **Beams** - Value proposition section with animated light beams
4. **Silk** - Real yield section with flowing silk patterns
5. **Dither** - Community OTC section with pixelated wave effects
6. **GradientBlinds** - Global usability section with gradient blinds
7. **Iridescence** - Final CTA with iridescent colors

### ✂️ **Custom Clip Masks**

All UI elements use unique `clip-path` CSS properties to create non-traditional shapes:

- **ClipCard** - Cards with polygonal clip masks
- **ClipButton** - Buttons with angled/zigzag clip paths
- Text elements with custom clip masks

### 📜 **Scroll Flows**

#### Vertical Scroll

- Hero section with stats
- Value proposition with animated cards
- Real yield feature grid
- Community OTC desk
- Global usability section
- Final CTA
- Footer with beams

#### Horizontal Scroll

- "Why Axton?" section with horizontally scrolling feature cards
- Parallax effect based on scroll position
- 5 key features + CTA card

### 🎭 **Framer Motion Animations**

#### Entrance Animations

- `initial/animate` - Hero elements fade and slide in
- `whileInView` - Sections animate when scrolled into view
- Staggered delays for sequential reveals

#### Hover Animations

- `whileHover` - Scale, glow, and shine effects
- Icon rotations on hover
- Button background animations

#### Scroll-Based Animations

- `useScroll` + `useTransform` - Horizontal scroll parallax
- Progressive opacity changes
- Transform-based movements

## File Structure

```
frontend/src/app/(landing1)/1/
├── page.tsx                    # Main landing page
└── components/
    ├── ClipCard.tsx           # Custom card component with clip masks
    ├── ClipButton.tsx         # Custom button with clip masks
    ├── FeatureCard.tsx        # Feature display card
    ├── HorizontalScroll.tsx   # Horizontal scrolling section
    └── ValueProposition.tsx   # Value proposition section
```

## Component Details

### ClipCard

Variants: `glass`, `dark`, `gradient`, `outline`

- Glass morphism effect
- Random clip-path selection
- Shine effect on hover
- Responsive design

### ClipButton

Variants: `primary`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`, `xl`

- Animated background on hover
- Shine effect
- Scale transitions
- Custom clip-paths per variant

### FeatureCard

- 3D perspective effect
- Icon rotation on hover
- Gradient text
- Corner accent animation

### HorizontalScroll

- Scroll-triggered horizontal movement
- 5 feature cards + CTA
- Scroll indicator
- Viewport-based animations

### ValueProposition

- 3 value cards with icons
- Progress bar animations
- Stats counter section
- Beams background

## Design Philosophy

### Breaking from ShadCN

1. **No rounded corners** - Using clip-path instead
2. **Custom shapes** - Polygonal, angled designs
3. **Bold typography** - Large, black fonts
4. **Animated backgrounds** - WebGL effects throughout
5. **Unconventional layouts** - Mixed scroll directions
6. **Gradient text** - Extensive use of gradient text
7. **Glass morphism** - Custom glass cards

### Color Palette

- Primary: Purple (#667eea, #764ba2, #a78bfa)
- Secondary: Pink (#ec4899, #f093fb)
- Accent: Cyan (#4facfe)
- Background: Black (#000000)
- Text: White/Gray shades

### Typography

- Font Weight: 900 (Black) for headings
- Font Weight: 300 (Light) for body
- Large scale contrast (12vw to 1rem)

## Performance Considerations

1. **WebGL Backgrounds** - Each section has its own animated background, keep an eye on performance
2. **Framer Motion** - Heavy use of animations, ensure smooth 60fps
3. **Horizontal Scroll** - Uses transform for better performance
4. **Viewport Triggers** - Animations only trigger when in view

## Usage

Navigate to `/1` route to view the landing page:

```bash
npm run dev
```

Then visit: `http://localhost:3000/1`

## Customization

### Changing Colors

Update gradient colors in:

- Component props (Beams, Orb, etc.)
- Tailwind classes
- CSS gradients in style props

### Modifying Animations

Adjust Framer Motion props:

- `duration` - Animation speed
- `delay` - Stagger timing
- `ease` - Easing function
- `transition` - Custom transitions

### Editing Clip Paths

Modify `clipPath` in:

- ClipCard component
- ClipButton component
- Inline styles on text elements

Use [Clippy](https://bennettfeely.com/clippy/) to generate custom clip-paths.

## Content Mapping to Axton.md

The landing page content is derived from the Axton.md file:

1. **Hero** - "Not just a token, complete ecosystem"
2. **Zero Slippage** - OTC desk feature
3. **Real Yield** - Revenue generation
4. **Unified Ecosystem** - All utilities connected
5. **Transparency** - Blockchain visibility
6. **Scalable Growth** - Natural demand increase
7. **User Empowerment** - Decentralized control
8. **Global Usability** - Axton Card, real-world bridge
9. **Community Centered** - Participation and loyalty rewards

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (may need prefixes for some CSS)
- Mobile: Responsive design, reduced animations on mobile

## Next Steps

Potential enhancements:

1. Add loading states for WebGL canvases
2. Implement dark/light mode toggle
3. Add more micro-interactions
4. Create mobile-specific layouts
5. Add accessibility features (reduced motion)
6. Integrate with Web3 wallet connection
7. Add real data from blockchain
8. Implement analytics tracking

---

Built with Next.js 15, React 19, Framer Motion, Three.js, and custom WebGL shaders.
