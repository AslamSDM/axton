# Axton Theme Updates Applied

## Color Theme Applied

The new landing page now uses the authentic Axton Protocol color scheme:

### Primary Colors

- **Brand Green**: `#2ef68d` (replaces purple/pink gradients)
- **Brand Blue**: `#478ff5` (used for gradients with green)
- **Background**: `#0b0b0d` (very dark, almost black)
- **Borders**: `#2f2f2f` (dark gray)
- **Text**: White with opacity variations (`white/80`, `white/60`)

### Typography

- **Font Family**: `Space Mono` (monospace)
- **Tracking**: Tight letter spacing (`tracking-[-0.02em]`, `tracking-[-0.05em]`)
- **Font Weights**: Bold (700) and Black (900) for headings

## Components Updated

### 1. Navbar

- ✅ Axton logo from `/images/navbar_1.jpeg`
- ✅ "Axton Protocol" text with Space Mono font
- ✅ ConnectWallet component integration
- ✅ Border with `border-[#2f2f2f]/20`

### 2. Hero Section

- ✅ Orb with `hue={160}` (green tint instead of purple)
- ✅ GridScan with `linesColor="#2ef68d"` and `scanColor="#2ef68d"`
- ✅ Text color changed to `text-[#2ef68d]` for highlights
- ✅ All text uses Space Mono font
- ✅ Scroll indicator uses `border-[#2ef68d]` and `bg-[#2ef68d]`

### 3. Stats Cards

- ✅ Values displayed in `text-[#2ef68d]` (brand green)
- ✅ Labels in `text-white/60`
- ✅ Space Mono font throughout

### 4. Buttons (ClipButton component needs update)

**Primary variant:**

```tsx
bg-gradient-to-r from-[#2ef68d] to-[#478ff5]
border border-[#2ef68d]
```

**Outline variant:**

```tsx
border-2 border-[#2ef68d]
text-[#2ef68d]
hover:bg-[#2ef68d]/10
```

### 5. Cards (ClipCard component needs update)

**Glass variant:**

```tsx
bg-[rgba(15,15,15,0.5)]
backdrop-blur-[17.5px]
border border-[#2f2f2f]
```

**Dark variant:**

```tsx
bg-[rgba(15,15,15,0.8)]
backdrop-blur-md
border border-[#2f2f2f]
```

### 6. Animated Backgrounds

- **Orb**: `hue={160}` (green tint)
- **GridScan**: Lines and scan color `#2ef68d`
- **Iridescence**: `color={[0.18, 0.95, 0.55]}` (green RGB values)
- **Dither**: `waveColor={[0.18, 0.95, 0.55]}`
- **GradientBlinds**: `gradientColors={["#2ef68d", "#478ff5", "#2ef68d", "#478ff5"]}`
- **Beams**: `lightColor="#2ef68d"`

### 7. Section Titles

All main headings now use:

```tsx
className =
  "font-['Space_Mono',monospace] font-black text-white tracking-[-0.05em]";
```

Highlighted text:

```tsx
<span className="text-[#2ef68d]">OTC DESK</span>
```

### 8. Footer

- ✅ Border top: `border-t border-[#2f2f2f]`
- ✅ All links: `text-white/60 hover:text-[#2ef68d]`
- ✅ Space Mono font throughout
- ✅ Beams background with `lightColor="#2ef68d"`

## Typography Scale

```tsx
// Headings
h1: "text-[12vw] md:text-[8vw] font-black";
h2: "text-6xl md:text-8xl font-black";
h3: "text-5xl md:text-7xl font-black";

// Body
p: "text-xl md:text-2xl font-light tracking-[-0.02em]";
small: "text-sm text-white/60 tracking-[-0.02em]";
```

## Color Usage Guide

### When to use each color:

**#2ef68d (Brand Green)**

- Primary buttons
- Links and hover states
- Stats/metrics
- Highlighted text
- Scan lines and glows
- Icons and accents

**#478ff5 (Brand Blue)**

- Gradient endings (paired with green)
- Secondary accents

**#0b0b0d (Background)**

- Main background
- Card backgrounds (with opacity)

**#2f2f2f (Borders)**

- Card borders
- Section dividers
- Nav border

**White (with opacity)**

- `white` - Main headings
- `white/80` - Body text
- `white/60` - Secondary text, labels
- `white/40` - Disabled states

## Next Steps

To complete the theme integration, update these component files:

1. **ClipButton.tsx**

   - Change primary gradient to `from-[#2ef68d] to-[#478ff5]`
   - Add Space Mono font
   - Update hover effects to use brand green

2. **ClipCard.tsx**

   - Update glass variant with dark background
   - Use `border-[#2f2f2f]` for borders
   - Add Space Mono to text

3. **FeatureCard.tsx**

   - Change gradient to brand colors
   - Add Space Mono font
   - Update accent colors

4. **HorizontalScroll.tsx**

   - Update gradients to use brand colors
   - Add Space Mono font
   - Border color to `#2f2f2f`

5. **ValueProposition.tsx**
   - Update colors to brand palette
   - Add Space Mono font
   - Beams with green light color

## Design Philosophy

The Axton brand is:

- **Technical**: Monospace font, terminal-inspired
- **Bold**: High contrast, strong colors
- **Modern**: Dark theme, glass morphism
- **Trustworthy**: Green suggests "go", "safe", "verified"
- **Professional**: Clean lines, organized layout

The new landing page maintains all the unique design elements (clip paths, animations, dual-scroll) while adhering to the established Axton brand identity.
