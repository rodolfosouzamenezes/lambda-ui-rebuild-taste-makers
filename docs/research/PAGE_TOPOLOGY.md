# lambda.ai Page Topology

## Tech stack (target)
- HubSpot CMS — hubfs raw assets
- Custom JS for hero canvas (WebGL/2D streaks), title glitch effect, accordions
- No detected smooth-scroll library (no Lenis / Locomotive)
- Page height: ~6846px desktop / longer on mobile

## Global
- **Body bg:** `rgb(11, 11, 11)` (#0b0b0b — near-black)
- **Body fg:** `rgb(231, 230, 217)` (#e7e6d9 — warm cream)
- **Muted text:** `rgb(176, 175, 166)` (#b0afa6)
- **Accent purple:** primary CTA bg (purple, looks like `#6f4af2` / `#5b3aef`)
- **Header:** fixed top, h 101px, bg #0b0b0b — no scroll-state change
- **Side widget:** fixed right edge "// Lambda Agent Terminal //" expandable panel (desktop only; hidden on mobile)
- **Cookie banner:** Osano in Portuguese — reject for clone

## Fonts
- **Suisse Intl** (custom, served via HubSpot) — body + headings, weight 600 for headings, lighter weights for body. Closest free swap: **Inter** (or Suisse Intl from Adobe Fonts if available)
- **Suisse Intl Mono** — eyebrow text, body paragraphs, accordion numerals, footer labels. Free swap: **JetBrains Mono** or **IBM Plex Mono**

## Sections, top-to-bottom (desktop 1440px)

| # | id / name | top | h | bg | Interaction |
|---|---|---|---|---|---|
| 0 | `header.siteHeader` (fixed) | 0 | 101 | #0b0b0b | static; hover dropdowns on Products + Company |
| 1 | `#section-home-hero` (Hero) | 100 | 708 | #0b0b0b | canvas streaks animation; glitch title; static CTAs |
| 2 | "Built for AI. Ready for superintelligence." (Accordion) | 808 | 1173 | #0b0b0b | click accordion (4 items); right-side isometric stack reacts to active item |
| 3 | "Supercomputers that scale with ambition" (3 cards) | 1981 | 1289 | #0b0b0b | static cards w/ ambient animated pixel dots |
| 4 | "Secure by design. Mission‑critical by default." | 3270 | 870 | #0b0b0b | static; right-side orbital wireframe animation |
| 5 | "The engines of superintelligence" (horizontal accordion) | 4140 | 1168 | #0b0b0b | 4 GPU cards, click-to-expand horizontally (one active, others collapsed to vertical labels) |
| 6 | "Join the race to superintelligence" (CTA) | 5308 | 487 | **#e7e6d9** (light cream) | static; glitch title; 2 CTAs |
| 7 | `<footer>` | 5795 | 1051 | #0b0b0b | static; 3 column links + bottom row |

## Header nav
- Logo (Lambda lambda-symbol + wordmark) → `/`
- **AI factories** → direct link `/ai-infrastructure`
- **Products** → mega-menu hover dropdown (4 columns):
  - //SUPERCOMPUTERS: Superclusters, 1-Click Clusters™, Instances, **separator** Compare
  - //FOR EVERY MISSION: Superintelligence, Enterprise, Government, Startups and researchers
  - //FOUNDATIONS: AI Factories, Orchestration, Lambda Stack, Trust and security
  - //DOCS: Customer stories, Documentation, Blog, Research
- **Pricing** → direct link
- **Company** → dropdown (2 columns):
  - //INSIDE LAMBDA: About, Careers, Leadership, Investors
  - //RESOURCES: Research, LLM Index, GPU Benchmarks, Customer Stories, Support, Blog, Partners
- **Log in** → link
- **Get started** → CTA button (cream bg, dark text)

## Footer
- Top label: `{ FOOTER }` (mono text decoration)
- Three columns:
  - **AI FACTORIES** — //For every mission (Superintelligence, Enterprise, Government, Startups and researchers) + //Foundations (AI Infrastructure, Trust and security, Customer stories)
  - **PRODUCTS** — //Products (Superclusters, 1-Click Clusters, Instances) + //Docs (Documentation, Blog, Research) + //Features (AI infrastructure, Orchestration, Lambda Stack, Trust and security)
  - **COMPANY** — //Inside Lambda (About, Careers, Leadership, Investors) + //Resources (Research, Customer stories, Blog, Partners, Brand guidelines) + Privacy Policy, Terms of Service, Cookie preferences
- Bottom: large Lambda wordmark + "© 2026 LAMBDA. ALL RIGHTS RESERVED." + social icons (LinkedIn, X, YouTube)

## Page-level layers
1. Page content (z 0)
2. Header (fixed, z ≥ 10)
3. Lambda Agent Terminal floating panel (fixed right, z ≥ 20)
4. Cookie banner (Osano, dismissed)

## Responsive breakpoints (observed)
- ~1024px and above: desktop layout (full nav, side-by-side sections)
- ~768px and below: mobile layout (hamburger, stacked sections, illustrations move below text, engines section becomes vertical stack)
- The hamburger menu replaces inline nav
