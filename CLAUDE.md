@AGENTS.md

# Lambda.ai Reconstruction — Claude Code Brief
# TasteMakers Frontend Engineering Assessment

## Project overview

Pixel-perfect React + Tailwind reconstruction of three sections from lambda.ai.
This is a design fidelity assessment — the output must be indistinguishable from the original
when placed side by side. Every value must come from the provided source files.

## Source files (all in `artifacts/`)

| File | Purpose |
|------|---------|
| `styles_css.css` | **Source of truth** — all design values. Never guess or invent values. |
| `source_html.html` | Original DOM structure and class names for reference |
| `guidelines.json` | Design system overview and section-by-section notes |
| `hero-screenshot.png` | Visual reference — Section 1 |
| `features-screenshot.png` | Visual reference — Section 2 |
| `hardware-screenshot.png` | Visual reference — Section 3 |

## Stack requirements

- **React** (Next.js with App Router)
- **Tailwind CSS** (required)
- No component libraries (shadcn, MUI, etc.)
- No other AI tools — Claude Code only

---

## Design system (extracted from CSS)

### Fonts — @font-face already declared in CSS, all hosted on HubSpot CDN
```
--font-sans:  "Suisse Intl", Helvetica, Arial, sans-serif
--font-mono:  "Suisse Intl Mono", "Courier New", monospace
--font-pixel: "apkarchivr21", monospace  ← used only in hero font-swap animation
```

Copy the @font-face blocks from `styles_css.css` into the global CSS file verbatim.
Do not use Google Fonts or any other font source.

### Colors
```
--color-terminal:       #0B0B0B   ← hero + features background
--color-terminal-deep:  #000000   ← hardware section background (pure black, darker)
--color-shell:          #E7E6D9   ← primary text
--color-neutral-300:    #B0AFA6   ← secondary text
--color-neutral-800:    #262625   ← dividers, card borders
--color-ultraviolet:    #6236F4   ← accent, secondary button, active states
--color-purple:         #6236F4   ← hardware indicator bar active
```

### Spacing
```
--space-4xs:  5px
--space-3xs:  10px
--space-2xs:  20px
--space-xs:   40px
--space-sm:   60px
--space-md:   80px
--space-lg:   100px
--space-xl:   160px
```

### Typography scale
```
--text-sm:   0.875rem
--text-base: 1rem
--text-lg:   1.125rem
--text-xl:   1.5rem
--text-2xl:  2.15rem
--text-3xl:  3rem
--text-5xl:  4.5rem
--text-6xl:  6rem
--text-7xl:  7.315rem
```

### Transitions
```
--transition-snappy: 0.1s cubic-bezier(0.6, 0, 0.4, 1)
--transition-smooth: 0.4s cubic-bezier(0.6, 0, 0.4, 1)
```

### RGB chromatic aberration shadow (used on primary button and pixel font spans)
```
Standard:
--box-shadow-rgb: 0 .99px 0 0 #ff0, .99px 0 0 0 #0ff, 1.98px .99px 0 0 #0f0,
                  0 -.99px 0 0 #00f, -.99px 0 0 0 #f0f, -1.98px 0 0 0 #f00;
--text-shadow-rgb: same values without the 4th "0" spread param

Retina override (use @media (-webkit-min-device-pixel-ratio: 2)):
--box-shadow-rgb: 0 .5px 0 0 #ff0, .5px 0 0 0 #0ff, 1px .5px 0 0 #0f0,
                  0 -.5px 0 0 #00f, -.5px 0 0 0 #f0f, -1px 0 0 0 #f00;
```

---

## Section 1 — Hero

### Layout
```
min-height: calc(100dvh - 100px)
display: flex, flex-direction: column
justify-content: center, align-items: center, text-align: center
background: #0B0B0B
position: relative
padding: clamp(100px, 12vw, 160px) 0
```

### Background animation
The original uses a canvas-based particle/streak animation (UnicornStudio or similar library).
Reconstruct with a canvas element using requestAnimationFrame to draw animated diagonal light
streaks against the dark background. Apply a horizontal fade mask:
```css
mask: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
```
The canvas wrapper is absolutely positioned, covers the full section, z-index: 0, pointer-events: none.

### Eyebrow text
```
font-family: Suisse Intl, semibold (600)
font-size: 1rem (mobile) → clamp(1.25rem, 2.5vw, 1.5rem) (768px+)
color: #E7E6D9
text-align: center
margin-bottom: 20px
max-width: 98% (mobile) → 80% (768px+)
```
Text: "Supercomputers for training and inference"

### Heading — h1
```
font-family: Suisse Intl, semibold (600)
line-height: 100%
letter-spacing: -0.02em
color: #E7E6D9

Font size breakpoints:
  default:  2.6rem
  480px+:   3rem
  768px+:   4.5rem
  1024px+:  6rem
  1280px+:  7.315rem
```
Text: "The Superintelligence Cloud" (line break between "Superintelligence" and "Cloud")

### Font-swap animation
Specific letters in the heading periodically swap to `apkarchivr21` (pixel font) on a timed loop.
Swapped letters get:
```css
font-family: var(--font-pixel);
font-weight: 300;
display: inline-block;
text-shadow: var(--text-shadow-rgb);
vertical-align: -18px;
margin-left: -7px;
```
Implement as a useEffect with setInterval — randomly select 2–3 letters per cycle, swap font for
~400ms, then restore. Cycle every ~2–3 seconds. Wrap each letter in a `<span>` with a ref.

Accessibility: include `<h1 class="sr-only">The Superintelligence Cloud</h1>` as a fallback.
Honor `prefers-reduced-motion`: show static heading, hide animated version.

### CTA buttons
```
Container: position relative, z-index: 1
Button group: display flex, flex-direction row, gap: 18px → 20px, justify-content: center
margin-top: 50px

Primary button ("Launch GPU instance"):
  background: #E7E6D9
  color: #0B0B0B
  padding: 17px 36px
  border-radius: 0 (important)
  font-family: Suisse Intl Mono, uppercase, 0.875rem
  letter-spacing: 0.05em
  box-shadow: var(--box-shadow-rgb)
  hover: box-shadow: none (transition: 0.1s)

Secondary button ("Talk to our team"):
  background: #6236F4
  color: #E7E6D9
  padding: 17px 36px
  border-radius: 0
  box-shadow: none
  hover: background: #815ef6
```

---

## Section 2 — Features / Accordion

### Layout
```
background: #0B0B0B
padding: clamp(100px, 12vw, 160px) 0
container: max-width 1398px, margin auto, padding-inline 15px
```

### Section heading
```
font-family: Suisse Intl, semibold (600)
font-size: clamp(2.3rem, 6vw, 4.5rem)
line-height: 110%
letter-spacing: -0.02em
color: #E7E6D9
spans 7/12 columns (58.33%) at 1024px+, full width on mobile
```
Text: "Built for AI. Ready for superintelligence."

### Grid (below heading)
```
Two columns at 1024px+:
  Left  (accordion): 7/12 = 58.33%
  Right (illustration): 5/12 = 41.67%
Gap between columns: 1.875rem (30px) on each side
Full width stacked on mobile
```

### Accordion items
Each item:
```
display: flex, flex-direction: row
border-bottom: 1px solid #262625
padding: 35px 0
column-gap: clamp(20px, 5vw, 45px)
```
First item: `border-top: 1px solid #262625`

Number column:
```
font-family: Suisse Intl Mono, regular (400)
font-size: clamp(1.5rem, 3vw, 2.15rem)
color: #E7E6D9
::after content: "/" — color: #6236F4
flex-shrink: 0
```

Title:
```
font-family: Suisse Intl, semibold (600)
font-size: clamp(1.5rem, 3vw, 2.15rem)
line-height: 120%
letter-spacing: -0.01em
color: #E7E6D9
```

Toggle symbol:
```
font-size: 1.5rem
font-weight: 300
color: #E7E6D9
"−" when open, "+" when closed
margin-left: 1rem
flex-shrink: 0
```

Content open/close — use `max-height` + `visibility` transition (NOT display:none):
```css
/* closed */
.accordionItemContent {
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: max-height 0.4s cubic-bezier(0.6, 0, 0.4, 1),
              visibility 0.4s;
}
/* open */
.accordionItemContentOpen {
  max-height: 200px;  /* enough to fit content */
  padding-top: 20px;
  visibility: visible;
}
```
Use the `inert` attribute on closed accordion content for accessibility.

Item 01 behavior:
- Open by default, `aria-expanded="true"`
- `data-locked="true"` — clicking it does nothing (no close)
- Cannot be closed

Items 02–04: clicking opens item and closes currently open item (only one open at a time).

### Illustration (right column)
```
Aspect ratio: 691/883 (mobile) → 883/1128 (1024px+)
padding-left: 40px (1024px+)
margin-top: -40px (1024px+)
```
Use a static SVG representing the isometric datacenter stack. Draw:
- Dark isometric box with 4 horizontal layers
- Layer labels (left): "Purpose-built datacenters", "AI infrastructure",
  "Managed services", "Co-engineering"
- Right side vertical labels: "AI DEVELOPERS", "ENTERPRISE", "SUPERINTELLIGENCE"
- Dotted grid on each face
- Corner highlights: cyan (#00E6D9), purple (#6236F4), white (#E7E6D9)

---

## Section 3 — Hardware / Horizontal Accordion

### Layout
```
background: #000000  ← pure black, darker than hero
padding: clamp(100px, 12vw, 160px) 15px
max-width: 1398px, margin auto
```

### Title block
```
flex-direction: column (mobile) → row at 768px+
align-items: center (768px+)
Left column: 58.333% (768px+)
Right column: 41.667% (768px+)
```

Heading:
```
font-family: Suisse Intl, semibold (600)
font-size: clamp(2.5rem, 5vw, 4.5rem)
line-height: 1.1
letter-spacing: -0.01em
color: #E7E6D9
```
Text: "The engines of\nsuperintelligence"

Subtitle:
```
font-family: Suisse Intl Mono, regular (400)
font-size: 1rem
line-height: 150%
color: #E7E6D9
padding-top: 40px (768px+)
```
Text: "Give your team the computational precision to train foundation models
and serve inference at global scale."

### Horizontal accordion
```
display: flex, flex-direction: row
gap: 8px
margin-top: 80px
height: 610px
```

Each card:
```
position: relative
height: 610px
background: #000000
border: 1px solid #262625
cursor: pointer
flex: 1 1 240px
transition: flex-basis 0.4s cubic-bezier(0.6, 0, 0.4, 1)
overflow: visible
```

Active card:
```
flex-basis: 46%
```

Product image wrapper:
```
position: absolute, inset: 0
display: flex, align-items: flex-start, justify-content: center
mix-blend-mode: luminosity  ← inactive
mix-blend-mode: normal      ← active
overflow: hidden
```

Product image:
```
width: 410px, height: 410px
max-width: 610px
object-fit: cover
flex-shrink: 0
```

Text content wrapper (pushes text to bottom):
```
display: flex, position: static
width: 100%, height: 100%
flex-direction: column
align-items: flex-start, justify-content: flex-end
overflow: hidden
```

Text content block:
```
position: relative
width: 100%, padding: 40px
background: #000000
opacity: 0.9
box-sizing: border-box
height: 132px           ← inactive
height: 300px           ← active
transition: height 0.4s cubic-bezier(0.6, 0, 0.4, 1) 0.3s
```

Card title:
```
font-family: Suisse Intl, semibold (600)
font-size: 24px
line-height: 31.2px
letter-spacing: -0.24px
color: #E7E6D9
margin: 0 0 -10px 0
```

Card description:
```
font-family: Suisse Intl Mono, regular (400)
font-size: 16px, line-height: 24px
color: #95948C  (--color-neutral-400)
margin-top: 20px

Inactive: opacity: 0, visibility: hidden, transform: translateY(-20px)
Active:   opacity: 1, visibility: visible, transform: translateY(0)
Transition: opacity 0.4s cubic-bezier(0.6,0,0.4,1) 0.5s,
            transform 0.4s cubic-bezier(0.6,0,0.4,1) 0.5s
position: absolute, top: 85px, left: 0, padding: 0 40px, height: 170px
```

Bottom indicator bar:
```
display: block
width: calc(100% + 2px), height: 10px
margin-left: -1px, margin-top: 8px
background: #E7E6D9        ← default
background: #6236F4        ← active or hover
transition: background-color 0.4s cubic-bezier(0.6, 0, 0.4, 1)
```

Products (first card active by default):
```
1. NVIDIA VR200 NVL72  — "Rack-scale systems optimized for agentic AI."
2. NVIDIA GB300 NVL72  — "Rack-scale systems optimized for AI reasoning"
3. NVIDIA HGX B300     — "Peak performance per watt for the largest training runs"
4. NVIDIA HGX B200     — "Versatile fine-tuning and inference"
```

Note: product images are not included in the assets. Use placeholder images from
https://placehold.co/410x410/0b0b0b/262625 or leave blank with a dark background.

### Mobile behavior (max-width: 767px)
```
flex-direction: column, height: auto
Each card: height auto, min-height: 300px, flex: none
Image wrapper: position relative, height: 300px
Text content block: height auto
Description: always visible (opacity 1, no transition, position static)
Indicator bar: display none
```

---

## Build workflow

Follow this sequence — validate visually after each step before moving on:

1. **Setup** — create Vite + React project, install Tailwind, copy @font-face declarations
   and :root CSS variables from `styles_css.css` into `src/index.css`
2. **Hero section** — background animation → eyebrow → heading with font-swap → CTA buttons
3. **Features section** — heading → accordion logic → isometric SVG illustration
4. **Hardware section** — title block → horizontal accordion with expand/collapse logic

## Important rules

- Extract every value from `styles_css.css`. If you cannot find a value, ask before guessing.
- Do not use arbitrary Tailwind values (e.g. `w-[58.33%]`) unless they exactly match the CSS.
  Prefer `style={{}}` props or a separate CSS file for values not in Tailwind's default scale.
- Prefer CSS custom properties over hardcoded hex values so the design system stays consistent.
- All three sections must be responsive — test at 375px, 768px, 1280px, and 1440px.
- Honor `prefers-reduced-motion` — disable animations when set.
- Use semantic HTML and proper `aria-*` attributes as shown in `source_html.html`.
- The `inert` attribute must be applied to closed accordion content panels.