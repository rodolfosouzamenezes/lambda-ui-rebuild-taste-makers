# lambda.ai Behaviors

## Scroll behaviors

### Header
- Fixed top, **no** scroll-triggered state change. Background stays `rgb(11,11,11)`, height stays 101px, no shadow appears on scroll. The header simply remains anchored.

### Page scroll
- Native browser scroll. No Lenis / Locomotive / smooth-scroll library detected.
- No scroll-snap on body.

### Sections
- All sections are flow content. No `position: sticky` elements detected in any section.
- Some sections have ambient SVG animations (pixel dots in Supercomputers section, orbital wireframe in Secure section, canvas streaks in Hero) that play continuously, not scroll-driven.

## Click behaviors

### Hero
- Two CTA buttons navigate (`Launch GPU instance` → `/sign-up`, `Talk to our team` → `/talk-to-our-team`).

### Built for AI accordion (`section` #2)
- 4 accordion items (01–04). Click toggles open/close. Only one open at a time (standard accordion).
- **Right-side isometric stack reacts to active item**:
  - Item 01 open: ALL 4 layers visible (Purpose-built datacenters with active dots on top face, AI infrastructure, Managed services, Co-engineering) + labels AI DEVELOPERS, ENTERPRISE, SUPERINTELLIGENCE
  - Item 02 open: only the top layer (Purpose-built datacenters) visible
  - Item 03 open: top 2 layers (Purpose-built datacenters, AI infrastructure)
  - Item 04 open: top 3 layers (Purpose-built datacenters, AI infrastructure, Managed services)
- Header button class: `accordionItemHeaderButton`, uses `aria-expanded`.
- Plus/minus icon (`+` collapsed, `−` expanded).
- The illustration is SVG-based (no `<img>` tag found in the section).

### Engines (`section` #5)
- Horizontal accordion: 4 GPU cards. One card active (expanded wide showing image + description), others collapsed to narrow vertical strips showing the GPU label rotated.
- **Click-driven** (NOT auto-cycling — confirmed 6-second wait, no change).
- Active card has a horizontal accent bar (purple) below it.
- Active card transition: width/opacity transition is smooth (~0.3s).
- Card class: `_accordionItem_17ini_5`, active state: `_active_17ini_52`.

### Lambda Agent Terminal (right side floating)
- Click "// Lambda Agent Terminal //" tab toggle → expanded terminal panel
- Terminal shows mono-style log lines (Session ID, agent handshake, etc.) — schema.org JSON-LD inspector for AI agents
- Has a close X button to collapse

### Header dropdowns
- Hover on Products / Company opens mega-menu dropdown
- AI factories and Pricing are direct links (no dropdown)

## Hover behaviors
- Buttons: subtle (need to verify; appears static or very subtle color/border shift)
- Links: standard cursor pointer; need to verify color/underline change
- GPU cards: cursor pointer

## Animation behaviors

### Hero `canvas`
- Element: `<canvas>` inside `_animationContainer_15jea_14 _fadeIn_15jea_37 > div > canvas`
- Renders animated colorful light streaks flowing horizontally (rainbow/spectrum colors with motion blur).
- Canvas dimensions: 2160 × 1135 internal, displayed at section size.
- Continuously animated (not scroll-driven). Looks like horizontal particle/streak system.

### Hero title glitch (`_heroTitle_m4xpb_78`)
- The visible H1 contains a single span with randomized duplicated letters: "The SuuperintelligeenceClooud" — letters duplicate at random positions periodically.
- A sibling `_reducedMotionTitle_m4xpb_75` H1 contains the clean text for reduced-motion users.
- Visible glitches: small colored RGB-shifted blocks (yellow/cyan/magenta squares) overlay individual characters on render — likely powered by `rgbShiftPulse` keyframe (776-byte CSS rule found).
- Effect cycles roughly every few seconds: letters duplicate, RGB shift appears, then reverts.

### CTA "Join the race to superintelligence"
- Same glitch effect on the title — colored shadows behind glyphs.

### Supercomputers section (cards)
- Ambient animated pixel dots scattered around card edges (very small colored squares that twinkle).
- Cards themselves are static (no hover/scroll animation observed).

### Secure section
- Right-side orbital wireframe: animated 3D ellipses with a small orb at the bottom. Lines have a slight color shift/glow. Continuously rotating slowly.

### Page entry
- `_fadeIn_15jea_37` class on hero container suggests a fade-in on initial load.

## Keyframes (from CSS)
- `rgbShiftPulse` (776 bytes) — drives the title glitch
- `slideUpLine` — likely accordion separator
- `_terminalPrint_4dq4j_1` — Lambda Agent Terminal type-on effect
- `_backgroundAnimationUp_16yuw_1`, `_backgroundAnimationDown_16yuw_1` — possibly the streaks direction

## Responsive transitions
- ~1024px → 768px: desktop nav links collapse to hamburger (single icon top-right)
- Section layouts change column-to-stack at ~1024px
- Engines section: horizontal accordion (desktop) → vertical card stack (mobile)
- Hero title font-size scales down dramatically
- Built for AI: 2-column desktop (accordion left, stack right) → single column mobile (heading top, accordion middle, stack bottom)
- Side widget hidden on mobile

## Color values (extracted)
- bg #0b0b0b
- fg #e7e6d9
- muted #b0afa6
- light bg (CTA section) #e7e6d9
- purple CTA: approximately `#6f4af2` (need to extract exactly during build)
