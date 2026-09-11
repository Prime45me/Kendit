# Kendits V2 — Phase 1 Audit

## 1. Executive Summary

Kendits Creative Studios is an established creative media agency based in Ghana, specializing in high-end video production, commercial campaigns, live performance coverage, narrative short films, motion graphics, and brand identity design.

This Phase 1 technical audit evaluates the current state of the Kendits Next.js web application to establish a stable, verified, and risk-managed foundation for the upcoming **V2 cinematic redesign**. In accordance with the Phase 1 specification (`PHASE_1_AUDIT_AND_FOUNDATION.md`), this audit follows the guiding principle: **INSPECT FIRST. CHANGE SECOND.** No premature redesign, speculative styling, or unvetted dependency installations have been performed.

### Key Audit Findings

1. **Codebase Lineage & Nature**: The existing codebase is built on Next.js 16 (App Router) with React 18, TypeScript, and Tailwind CSS. Functionally, it is an adaptation of a popular developer portfolio template (JavaScript Mastery "portfolio"), heavily modified with Aceternity UI effects and customized for Kendits Studios. 
2. **Real vs. Legacy Content**: Authentic Kendits media productions (e.g., *Stay Original - Live Performance*, *Peniel French Week Celebration '25 Recap*, *Internal Conflict: A Cinematic Short Film*, and *Wave Speedway - Music Video*) and genuine legal terms (governed by Ghanaian law) are present. However, residual template artifacts persist throughout the codebase, including developer tech stack badges (`React`, `Next.js`, `Three.js`, `Tailwind`), sponsor logos (`Cloudinary`, `Appwrite`, `Hostinger`, `Stream`, `Docker`), CV-style work experience cards, and placeholder corporate client titles.
3. **Missing Hero Video Asset**: While the strategic target for the V2 hero is an immersive `KENDITS` mask with background video reveal, **no local video files exist anywhere in the repository**. The current homepage features a static Aceternity Spotlight and Text Generate effect with no video player, background video, or media stream.
4. **Asset Bloat**: The `/public` directory contains over **16.3 MB of orphaned SVGs** (`p1.svg` at 7.27 MB, `p3.svg` at 4.42 MB, `grid.svg` at 3.62 MB, `b1.svg` at 2.70 MB) containing embedded base64 raster bitmaps from the predecessor template.
5. **Tooling & Build Health**: 
   - `next build --webpack` compiles successfully and generates all static routes.
   - Turbopack (`next build`) encounters font-fetch network failures on Google Fonts (`Inter`).
   - `npm run lint` fails due to an ESLint 8 vs. `eslint-config-next` 16 circular schema conflict.
   - High client-side JavaScript overhead (>2.5 MB uncompressed) is driven by heavy Three.js globe dependencies, large GeoJSON/Lottie datasets (945 KB combined), and client-side animation loops.

### Phase 2 Readiness Status
**READY WITH CONDITIONS**. The codebase structure, routing, styling tokens, and reusable components are fully mapped and safe on the dedicated `feat/kendits-v2` branch. Phase 2 can proceed immediately once the owner clarifies source footage availability and brand asset preferences.

---

## 2. Current Stack

| Technology / Package | Specified Version | Installed Version | Role in Project | V2 Disposition |
|---|---|---|---|---|
| **Node.js** | N/A (Engine unpinned) | `v25.6.1` | Local Runtime Environment | Retain (standardize in `.nvmrc` or `package.json` engines) |
| **Package Manager** | npm | `11.9.0` | Dependency Management | Retain npm (lockfile: `package-lock.json`) |
| **Next.js** | `^16.1.7` | `16.1.7` | App Framework (App Router) | **KEEP** (Core framework) |
| **React** | `^18` | `18.3.1` | UI Library | **KEEP** (React 18 LTS) |
| **React DOM** | `^18` | `18.3.1` | DOM Renderer | **KEEP** |
| **TypeScript** | `^5` | `5.9.3` | Type System | **KEEP** (Strict mode enabled) |
| **Tailwind CSS** | `^3.4.19` | `3.4.19` | Utility CSS Engine | **KEEP** (Core styling layer) |
| **PostCSS** | `^8.5.8` | `8.5.8` | CSS Processor | **KEEP** |
| **Autoprefixer** | `^10.4.27` | `10.4.27` | Vendor Prefixing | **KEEP** |
| **Framer Motion** | `^12.38.0` | `12.38.0` | UI & Micro-interactions | **KEEP** (Restricted to UI transitions) |
| **Three.js** | `^0.183.2` | `0.183.2` | 3D Engine (Globe) | **REPLACE / RELOCATE** (Excessive weight for V2) |
| **@react-three/fiber** | `^9.5.0` | `9.5.0` | React Three.js Reconciler | **REPLACE / RELOCATE** |
| **@react-three/drei** | `^9.122.0` | `9.122.0` | R3F Helper Components | **REPLACE / RELOCATE** |
| **three-globe** | `^2.45.1` | `2.45.1` | 3D Globe Visualization | **REPLACE / REMOVE** |
| **react-lottie** | `^1.2.10` | `1.2.10` | Lottie Animation Player | **REPLACE** (Outdated wrapper, unmaintained) |
| **next-themes** | `^0.4.6` | `0.4.6` | Theme Provider (Dark mode) | **KEEP** (Enforces dark aesthetic) |
| **react-icons** | `^5.6.0` | `5.6.0` | Icon Library | **KEEP** (Selective icon usage) |
| **clsx** | `^2.1.1` | `2.1.1` | Class string utility | **KEEP** (Part of `cn()` utility) |
| **tailwind-merge** | `^3.5.0` | `3.5.0` | Conflict resolver for TW | **KEEP** (Part of `cn()` utility) |
| **tailwindcss-animate**| `^1.0.7` | `1.0.7` | Animation utilities | **KEEP** |
| **mini-svg-data-uri** | `^1.4.4` | `1.4.4` | Inlined SVG background grids | **KEEP** |
| **ESLint** | `^8` | `8.57.1` | Linter | **REFACTOR** (Upgrade to ESLint 9 for Next 16) |
| **eslint-config-next** | `^16.1.7` | `16.2.1` | Next.js ESLint Configuration| **REFACTOR** |

---

## 3. Repository Structure

The project conforms to the standard Next.js App Router layout without a `src/` directory.

```text
c:\Users\user\Desktop\Again\my-app/
├── .eslintrc.json              # Legacy ESLint 8 configuration (conflicts with Next 16)
├── .gitignore                  # Standard Next.js/Node git ignore rules
├── AGENTS.md                   # Vercel deployment best practices instructions
├── BingSiteAuth.xml            # Bing webmaster verification file
├── PHASE_1_AUDIT_AND_FOUNDATION.md  # Phase 1 specification source of truth
├── README.md                   # Generic create-next-app documentation
├── next-env.d.ts               # Next.js TypeScript declarations
├── next.config.mjs             # Empty Next.js configuration (`const nextConfig = {};`)
├── package-lock.json           # npm lockfile (local app)
├── package.json                # Project dependencies and script definitions
├── postcss.config.mjs          # PostCSS configuration with Tailwind and Autoprefixer
├── tailwind.config.ts          # Extended Tailwind theme, colors, keyframes, utilities
├── tsconfig.json               # TypeScript strict configuration with `@/*` path aliases
├── vercel.json                 # Vercel deployment config (`npm install --legacy-peer-deps`)
├── app/                        # Next.js App Router directory
│   ├── about/
│   │   └── page.tsx            # Stub about route (`<div>About page</div>`)
│   ├── favicon.ico             # Studio favicon (25.9 KB)
│   ├── globals.css             # Base styles, CSS custom properties, utility classes
│   ├── layout.tsx              # Root HTML layout, Inter font, SEO metadata, ThemeProvider
│   ├── page.tsx                # Main single-page application composition
│   ├── provider.tsx            # Client ThemeProvider wrapper (`next-themes`)
│   ├── robots.ts               # Dynamic robots.txt generation
│   └── sitemap.ts              # Dynamic sitemap.xml generation
├── components/                 # Application component directory
│   ├── Clients.tsx             # Testimonials section with infinite moving cards
│   ├── Experience.tsx          # Agency/CV experience section with moving border cards
│   ├── Footer.tsx              # Contact section, mailto CTA, socials, terms modal
│   ├── Hero.tsx                # Spotlight effect, headline, TextGenerateEffect, CTA
│   ├── MagicButton.tsx         # Conic-gradient animated border button
│   ├── RecentProjects.tsx      # 3D Pin project showcase cards (4 projects)
│   ├── Services.tsx            # 5 core agency services with framer-motion stagger
│   └── ui/                     # Aceternity and reusable UI components
│       ├── BentoGrid.tsx       # 6-item interactive bento grid
│       ├── FloatingNavbar.tsx  # Scroll-sensitive floating pill navigation
│       ├── Globe.tsx           # Three.js Canvas and ThreeGlobe integration
│       ├── GradientBg.tsx      # Heavy SVG-filter animated radial gradient background
│       ├── Grid.tsx            # Wrapper component rendering BentoGrid
│       ├── GridGlobe.tsx       # Dynamic client wrapper for Globe with sample arc data
│       ├── InfinteMovingCards.tsx # Custom RAF drag/marquee carousel (typo in filename)
│       ├── MovingBorders.tsx   # SVG path length calculation moving border button
│       ├── Pin.tsx             # 3D perspective tilt container with cyan radar rings
│       ├── Spotlight.tsx       # SVG blurred spotlight beam with entrance animation
│       ├── TermsModal.tsx      # Full Ghanaian-law terms and conditions modal
│       └── TextGenerateEffect.tsx # Word-by-word animated headline reveal
├── data/                       # Content and static datasets
│   ├── confetti.json           # Lottie confetti animation (614 KB)
│   ├── globe.json              # GeoJSON polygon data for world countries (331 KB)
│   └── index.ts                # Primary content data (navItems, gridItems, projects, etc.)
├── lib/
│   └── utils.ts                # `cn()` utility combining `clsx` and `tailwind-merge`
└── public/                     # Static media, icons, and template remnants (47 files)
```

### Git & Workspace Configuration
- **Active Branch**: `feat/kendits-v2` (Clean branching from verified baseline on `main` at commit `ec1466c`).
- **Parent Workspace Artifact**: A parent directory `c:\Users\user\Desktop\Again\` contains an extraneous `package-lock.json`, triggering a Next.js workspace root detection warning during builds.

---

## 4. Route Map

The application strictly utilizes the **App Router**. There is no Pages Router (`pages/`) directory.

| Route | Source File | Purpose | Render Type | Current Status | Major Dependencies | V2 Disposition | Rationale |
|---|---|---|---|---|---|---|---|
| `/` | `app/page.tsx` | Main Single-Page Homepage | Static (SSG) / Client Hybrid | Functional | Framer Motion, Aceternity UI, Three.js, Lucide/FA icons | **REFACTOR / REDESIGN** | Core target for V2 cinematic upgrade and hero masking |
| `/about` | `app/about/page.tsx` | Dedicated About Page | Static (SSG) | Incomplete Stub | None (`<div>About page</div>`) | **REPLACE / EXPAND** | Needs conversion into a high-end cinematic studio story page or removal in favor of homepage section |
| `/robots.txt` | `app/robots.ts` | Search engine indexing rules | Static Route Handler | Production Ready | `next/metadata` | **KEEP** | Well-configured robots instructions pointing to sitemap |
| `/sitemap.xml` | `app/sitemap.ts` | XML Search index | Static Route Handler | Functional | `next/metadata` | **REFACTOR** | Needs inclusion of future subpages (case studies, services) |
| `/_not-found` | Built-in Next.js fallback | 404 Error handling | Static (SSG) | Default Next fallback | Next.js internal | **NEW / IMPLEMENT** | Should be styled with Kendits dark cinematic aesthetic |

---

## 5. Component Inventory

Every non-trivial component in the codebase has been inspected and categorized:

```text
Component: RootLayout
File: app/layout.tsx
Classification: GLOBAL LAYOUT
Purpose: HTML structure, Google Inter font injection, dark ThemeProvider wrapping, SEO metadata.
Used by: Entire Application
Dependencies: next/font/google, app/provider.tsx, app/globals.css
Client or Server: Server Component
Reusable: Yes
Potential V2 decision: REFACTOR
Reason: Update font loading to official Kendits typography; enrich OpenGraph metadata with custom studio preview cards.
--------------------------------------------------
Component: Home
File: app/page.tsx
Classification: PAGE-SPECIFIC
Purpose: Assembles the single-page layout sections in sequence.
Used by: Route `/`
Dependencies: FloatingNav, Hero, Grid, Services, RecentProjects, Clients, Experience, Footer
Client or Server: Server Component
Reusable: Partial
Potential V2 decision: REFACTOR
Reason: Will orchestrate the new V2 section hierarchy and scroll timelines.
--------------------------------------------------
Component: Hero
File: components/Hero.tsx
Classification: HERO / ANIMATION
Purpose: Introductory hero banner with 3 SVG spotlights, background grid, animated headline, and CTA.
Used by: app/page.tsx
Dependencies: Spotlight, TextGenerateEffect, MagicButton, react-icons
Client or Server: Server Component (renders client subcomponents)
Reusable: No (Structure incompatible with V2 target)
Potential V2 decision: REPLACE
Reason: Must be replaced with the planned cinematic KENDITS mask, background video reveal, and GSAP timeline.
--------------------------------------------------
Component: Services
File: components/Services.tsx
Classification: PAGE-SPECIFIC / UI
Purpose: Displays 5 agency service offerings in a responsive CSS grid with hover glow effects.
Used by: app/page.tsx
Dependencies: framer-motion
Client or Server: Client Component ("use client")
Reusable: Yes (High editorial value)
Potential V2 decision: REFACTOR
Reason: Excellent agency copy. Needs restyling from generic purple borders into Kendits turquoise/blue/deep graphite aesthetic with optimized entrance reveals.
--------------------------------------------------
Component: RecentProjects
File: components/RecentProjects.tsx
Classification: PORTFOLIO
Purpose: Showcases 4 recent agency video projects with 3D pin tilt cards and external social links.
Used by: app/page.tsx
Dependencies: PinContainer, react-icons, data/index.ts
Client or Server: Client Component ("use client")
Reusable: Partial
Potential V2 decision: REFACTOR / REPLACE
Reason: Real Kendits video productions are featured, but the 3D pin effect conflicts with touch devices and the tech icon badges are developer template remnants.
--------------------------------------------------
Component: Clients
File: components/Clients.tsx
Classification: UI / ANIMATION
Purpose: Client testimonial slider using infinite horizontal scrolling cards.
Used by: app/page.tsx
Dependencies: InfiniteMovingCards, framer-motion, data/index.ts
Client or Server: Client Component ("use client")
Reusable: Yes
Potential V2 decision: REFACTOR
Reason: Clean quote carousel mechanism, but requires genuine client attribution data and refined typography.
--------------------------------------------------
Component: Experience
File: components/Experience.tsx
Classification: PAGE-SPECIFIC / UI
Purpose: 4 cards highlighting roles (Lead Video Editor, Senior Graphic Designer, etc.) with moving animated border outlines.
Used by: app/page.tsx
Dependencies: Button (MovingBorders), data/index.ts
Client or Server: Server Component (renders client subcomponents)
Reusable: Low
Potential V2 decision: REPLACE / REMOVE
Reason: Formatted like an individual developer's resume/CV rather than a high-end creative agency milestone/service overview. Also contains duplicate id='testimonials' bug.
--------------------------------------------------
Component: Footer
File: components/Footer.tsx
Classification: GLOBAL LAYOUT / NAVIGATION / FORM
Purpose: Contact banner with email CTA, direct phone/social links, copyright, and Terms & Conditions modal trigger.
Used by: app/page.tsx
Dependencies: MagicButton, TermsModal, framer-motion, react-icons
Client or Server: Client Component ("use client")
Reusable: Yes
Potential V2 decision: REFACTOR
Reason: Retains valuable verified contact details (+233 numbers, Gmail) and modal integration. Upgrade with premium agency contact form and refined aesthetic.
--------------------------------------------------
Component: MagicButton
File: components/MagicButton.tsx
Classification: UI / ACETERNITY
Purpose: Button with rotating conic-gradient border shimmer.
Used by: Hero.tsx, Footer.tsx, BentoGrid.tsx
Dependencies: Tailwind CSS
Client or Server: Server / Client compatible
Reusable: Yes
Potential V2 decision: KEEP BUT RESTYLE
Reason: Effective micro-interaction. Adapt gradient colors to Kendits turquoise/blue palette.
--------------------------------------------------
Component: TermsModal
File: components/ui/TermsModal.tsx
Classification: UI / FORM
Purpose: Full-screen accessible modal presenting comprehensive legal terms under the laws of Ghana.
Used by: Footer.tsx
Dependencies: framer-motion, react-icons/io5
Client or Server: Client Component ("use client")
Reusable: Yes (100% reusable content)
Potential V2 decision: KEEP BUT RESTYLE
Reason: Fully articulated, authentic legal contract covering deposits, revisions, IP ownership, and jurisdiction.
--------------------------------------------------
Component: BentoGrid & BentoGridItem
File: components/ui/BentoGrid.tsx
Classification: UI / ACETERNITY
Purpose: Asymmetric grid with interactive elements (Lottie email copy, 3D Globe, Gradient animation, badges).
Used by: Grid.tsx
Dependencies: Lottie, BackgroundGradientAnimation, GridGlobe, MagicButton, react-icons
Client or Server: Client Component ("use client")
Reusable: Partial
Potential V2 decision: REFACTOR
Reason: Heavyweight dependencies (Lottie + Three.js + SVG gradients) create significant performance drag on a single section.
--------------------------------------------------
Component: FloatingNavbar
File: components/ui/FloatingNavbar.tsx
Classification: NAVIGATION
Purpose: Fixed floating pill navigation that hides on scroll down and reveals on scroll up.
Used by: app/page.tsx
Dependencies: framer-motion, next/link
Client or Server: Client Component ("use client")
Reusable: Yes
Potential V2 decision: REFACTOR
Reason: Good UX pattern, but currently lacks the Kendits brand logo, mobile hamburger drawer, and desktop sound/showreel controls.
--------------------------------------------------
Component: Globe & GridGlobe
File: components/ui/Globe.tsx & GridGlobe.tsx
Classification: ANIMATION / MEDIA
Purpose: Interactive 3D WebGL globe with rotating arcs and country polygons.
Used by: BentoGrid.tsx
Dependencies: Three.js, @react-three/fiber, @react-three/drei, three-globe, data/globe.json
Client or Server: Client Component ("use client" + ssr: false)
Reusable: No
Potential V2 decision: REMOVE
Reason: 700 KB+ JS bundle cost and 331 KB GeoJSON payload to communicate "flexible time zones" is disproportionate for a video production agency website.
--------------------------------------------------
Component: BackgroundGradientAnimation
File: components/ui/GradientBg.tsx
Classification: ANIMATION / ACETERNITY
Purpose: Animated full-screen mesh gradient using SVG goo filters and multiple moving radial gradients.
Used by: BentoGrid.tsx (item id 6)
Dependencies: Tailwind CSS
Client or Server: Client Component ("use client")
Reusable: Low
Potential V2 decision: REMOVE
Reason: Directly mutates document.body.style and triggers intense GPU rasterization with SVG blur filters.
--------------------------------------------------
Component: InfiniteMovingCards
File: components/ui/InfinteMovingCards.tsx
Classification: UI / ACETERNITY
Purpose: Continuous horizontal marquee for testimonials with touch/mouse drag support.
Used by: Clients.tsx
Dependencies: Tailwind CSS
Client or Server: Client Component ("use client")
Reusable: Yes
Potential V2 decision: KEEP BUT RESTYLE
Reason: Well-implemented continuous animation with pointer capture dragging. Restyle card borders and backgrounds. Note: Filename typo (InfinteMovingCards.tsx) should be corrected.
--------------------------------------------------
Component: MovingBorders & MovingBorder
File: components/ui/MovingBorders.tsx
Classification: UI / ACETERNITY
Purpose: SVG path length calculation creating an animated glowing border around cards.
Used by: Experience.tsx
Dependencies: framer-motion (useAnimationFrame)
Client or Server: Client Component ("use client")
Reusable: Low
Potential V2 decision: REPLACE
Reason: Computes getTotalLength() and getPointAtLength() in a continuous requestAnimationFrame loop per card, causing recurring layout recalculations.
--------------------------------------------------
Component: PinContainer & PinPerspective
File: components/ui/Pin.tsx
Classification: UI / ACETERNITY
Purpose: 3D perspective tilt effect on project cards with radiating radar rings on hover.
Used by: RecentProjects.tsx
Dependencies: framer-motion
Client or Server: Client Component ("use client")
Reusable: Low
Potential V2 decision: REPLACE
Reason: Unused Node.js import (node:url); hover-dependent 3D transform creates poor UX on touch screens and clips content.
--------------------------------------------------
Component: Spotlight
File: components/ui/Spotlight.tsx
Classification: UI / ACETERNITY
Purpose: Ambient colored light cone SVG overlay.
Used by: Hero.tsx
Dependencies: Tailwind CSS
Client or Server: Server Component
Reusable: Yes
Potential V2 decision: KEEP BUT RELOCATE
Reason: Clean pure SVG effect. Fix duplicate filter ID bug (id="filter") when multiple instances are mounted.
--------------------------------------------------
Component: TextGenerateEffect
File: components/ui/TextGenerateEffect.tsx
Classification: ANIMATION / ACETERNITY
Purpose: Staggered word-by-word opacity reveal of headline text.
Used by: Hero.tsx
Dependencies: framer-motion (useAnimate, stagger)
Client or Server: Client Component ("use client")
Reusable: Yes
Potential V2 decision: REFACTOR
Reason: Remove leftover console.log(wordsArray) and decouple color formatting from hardcoded word indices (idx > 3).
```

---

## 6. Aceternity UI Inventory

Aceternity UI provides the visual motifs for the current site. Below is the strategic evaluation of each Aceternity component against the V2 direction (cinematic, darker, video-first, refined green/blue/turquoise palette):

| Aceternity Component | File Location | Visual Effect | Functional Value | Decorative Value | V2 Classification | Strategic Action |
|---|---|---|---|---|---|---|
| **Spotlight** | `components/ui/Spotlight.tsx` | Ambient elliptical beam with blur filter | Low | High | **KEEP BUT RESTYLE** | Parameterize SVG filter ID to prevent DOM collision; adapt fill to turquoise/emerald glow |
| **TextGenerateEffect**| `components/ui/TextGenerateEffect.tsx` | Staggered fade-in of text tokens | Medium | High | **KEEP BUT RESTYLE** | Remove `console.log`; replace hardcoded index coloring with markup tokens |
| **FloatingNav** | `components/ui/FloatingNavbar.tsx` | Scroll-direction responsive glassmorphic nav pill | High | High | **KEEP BUT RESTYLE** | Add Kendits logo mark, audio toggle, and mobile full-screen navigation overlay |
| **BentoGrid** | `components/ui/BentoGrid.tsx` | Asymmetric multi-span card layout | High | Medium | **REFACTOR** | Retain responsive grid layout; eliminate heavy child components (Globe, Lottie) |
| **BackgroundGradientAnimation** | `components/ui/GradientBg.tsx` | Moving liquid mesh gradient with SVG goo filter | Low | High | **REMOVE** | Excessive GPU cost; conflicts with clean, dark, high-contrast video presentation |
| **Globe (Three.js)**| `components/ui/Globe.tsx` | Interactive 3D WebGL globe with flight arcs | Low | High | **REMOVE** | Bloats bundle by ~1.2 MB. Replace with crisp vector graphic or video reel thumbnail |
| **InfiniteMovingCards** | `components/ui/InfinteMovingCards.tsx` | Seamless loop marquee with swipe/drag physics | High | High | **KEEP BUT RESTYLE** | Fix filename typo; update typography and card surfaces to dark glassmorphism |
| **MovingBorders** | `components/ui/MovingBorders.tsx` | SVG path-tracing glowing border | Low | Medium | **REPLACE** | Replace continuous SVG DOM querying with hardware-accelerated CSS border gradients |
| **3D Pin** | `components/ui/Pin.tsx` | 3D perspective tilt on cards with pulse rings | Low | Medium | **REPLACE** | Replace with sleek video thumbnail cards with hover video playback previews |
| **MagicButton** | `components/MagicButton.tsx` | Conic-gradient spinning border button | High | High | **KEEP BUT RESTYLE** | Shift border gradient from purple/blue to Kendits turquoise (`#00F2FE` / `#4FACFE`) |

---

## 7. Styling / Design System Audit

### 7.1 Current Color System

The existing application is styled with Tailwind CSS, referencing both CSS variables and hardcoded hex/rgba values:

```text
================================================================================
CATEGORY        COLOR VALUE / TOKEN          WHERE FOUND / USAGE
================================================================================
Background      #000319 (black-100)          Main page background, Hero, BentoGrid
                #000000 (black)              Fallback background, dark mode root
                rgb(4, 7, 29)                Bento cards, Services cards, Testimonials
                #10132E                      Pill badges inside Bento grid
                #13162D                      Project card inner background
--------------------------------------------------------------------------------
Primary / Darks rgba(17, 25, 40, 0.75)       Floating navbar glassmorphic fill
                rgba(255, 255, 255, 0.125)   Navbar border, card borders
--------------------------------------------------------------------------------
Accents         #CBACF9 (purple)             Dominant accent in headings, badges, hovers
                rgba(139, 92, 246, 0.5)      Purple hover box-shadows
                #E4ECFF (blue-100)           Hero top subtitle ("Dynamic Edits...")
                #38bdf8 (sky-400)            GridGlobe ambient lighting
                #06b6d4 (cyan-500)           Pin radar gradient
--------------------------------------------------------------------------------
Text / Surfaces #FFFFFF (white)              Headings, primary button text
                #BEC1DD (white-100)          Project descriptions, secondary text
                #C1C2D3 (white-200)          Service descriptions, footer copyright
================================================================================
```

#### The Green / Blue / Turquoise Discrepancy
While the Kendits brand direction specifies a signature **Green → Blue → Turquoise** visual identity, the current template implementation is heavily biased toward **Purple (`#CBACF9`)** inherited directly from the JavaScript Mastery portfolio template. 
- The turquoise/cyan tones are currently relegated to minor accents (e.g., `#06b6d4` in `Pin.tsx` and `#38bdf8` in `GridGlobe.tsx`).
- **Phase 2 Mandate**: Transition the dominant accent color from template purple (`#CBACF9`) to authentic Kendits cyan/turquoise (`#00F2FE` / `#10B981` / `#06B6D4`) against ultra-deep cinematic obsidian surfaces (`#05070D` / `#0A0E17`).

### 7.2 Typography
- **Primary Font**: `Inter` loaded via `next/font/google` with `subsets: ["latin"]`.
- **Heading Scale**: `.heading` class defined in `globals.css`: `font-bold text-4xl md:text-5xl text-center`. In `Hero.tsx`: `text-[40px] md:text-5xl lg:text-6xl`.
- **Body Scale**: `text-sm md:text-base` with `leading-relaxed`.
- **Shortcomings**:
  - Lack of a distinct, high-impact display font for cinematic headings (e.g., Syne, Clash Display, or Monument Extended).
  - Reliance on default system font fallbacks when Google Fonts download fails.

### 7.3 Layout & Grid
- **Container**: `max-w-7xl` centered with horizontal padding (`px-5 sm:px-10`).
- **Breakpoints**: Standard Tailwind breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1400px`).
- **Section Rhythm**: Uniform vertical padding of `py-20` on all major sections (`#services`, `#projects`, `#testimonials`, `#contact`).

---

## 8. Media / Asset Audit

The `/public` directory contains **47 static files**. Analysis reveals severe asset bloat and dead template files:

### 8.1 Asset Inventory Table

| Asset Path | Type | Dimensions | File Size | Current Usage | Status / V2 Disposition |
|---|---|---|---|---|---|
| `/p1.svg` | SVG (Embedded PNG) | 464 x 300 | **7.27 MB** | Unused template file | **DEAD ASSET / REMOVE** |
| `/p3.svg` | SVG (Embedded PNG) | 552 x 352 | **4.42 MB** | Unused template file | **DEAD ASSET / REMOVE** |
| `/grid.svg` | SVG | 1260 x 751 | **3.62 MB** | Used in `gridItems[3, 4]` | **OPTIMIZE** (Overly dense vector paths) |
| `/b1.svg` | SVG (Embedded PNG) | 739 x 555 | **2.70 MB** | Used in `gridItems[0]` | **OPTIMIZE / REPLACE** |
| `/p4.svg` | SVG (Embedded PNG) | 552 x 352 | **2.33 MB** | Unused template file | **DEAD ASSET / REMOVE** |
| `/p2.svg` | SVG (Embedded PNG) | 552 x 352 | **2.27 MB** | Unused template file | **DEAD ASSET / REMOVE** |
| `/profile.svg` | SVG (Embedded PNG) | 400 x 400 | **1.12 MB** | Unused template file | **DEAD ASSET / REMOVE** |
| `/b5.svg` | SVG | 500 x 300 | **438 KB** | Unused template file | **DEAD ASSET / REMOVE** |
| `/gsap.svg` | SVG | Vector | **155 KB** | Used in `projects[3].iconLists` | **REMOVE** (Unneeded tech badge) |
| `/exp3.svg` | SVG | Vector | **135 KB** | Used in `workExperience[2]` | **REPLACE** |
| `/project3.jpeg` | JPEG | 1280 x 720 | **103 KB** | Used in `projects[2]` (*Internal Conflict: A Cinematic Short Film*) | **KEEP** (Real Kendits production thumbnail) |
| `/project2.jpeg` | JPEG | 1280 x 720 | **86 KB** | Used in `projects[1]` (*Peniel French Week Celebration*) | **KEEP** (Real Kendits production thumbnail) |
| `/bg.png` | PNG | 552 x 352 | **85 KB** | Card background in `RecentProjects` | **REFACTOR** |
| `/project4.jpeg` | JPEG | 1280 x 720 | **81 KB** | Used in `projects[3]` (*Wave Speedway*) | **KEEP** (Real Kendits production thumbnail) |
| `/project1.jpeg` | JPEG | 1280 x 720 | **67 KB** | Used in `projects[0]` (*Stay Original*) | **KEEP** (Real Kendits production thumbnail) |
| `/jsm-logo.png` | PNG | Raster | **66 KB** | Unused JavaScript Mastery logo | **DEAD ASSET / REMOVE** |
| `/cinematic_lens.png` | PNG | 500 x 500 | **63 KB** | Used in `gridItems[4]` | **KEEP / OPTIMIZE** |
| `/footer-grid.svg` | SVG | Vector | **14 KB** | Used in `Footer.tsx` background | **KEEP** |
| `/confetti.gif` | GIF | Animated | **19 KB** | Unused (Lottie JSON is used instead) | **DEAD ASSET / REMOVE** |
| `/exp1..4.svg` | SVG | Vectors | 5 - 16 KB | Work experience icons | **REPLACE / REMOVE** |
| Client/Tech SVGs (`cloud.svg`, `app.svg`, `dock.svg`, etc.) | SVG | Vectors | 1 - 10 KB | Developer sponsor icons (`companies`) | **DEAD ASSETS / REMOVE** |
| Social SVGs (`git.svg`, `twit.svg`, `link.svg`, `wha.svg`, `insta.svg`) | SVG | Vectors | 1 - 4 KB | Social icons | **DEAD ASSETS / REMOVE** (Replaced by `react-icons`) |

### 8.2 Critical Video Asset Finding
> **ASSET UNAVAILABLE FOR VISUAL INSPECTION: Hero Video Footage**
> - Total local video files (`.mp4`, `.webm`, `.mov`, `.m4v`, `.mkv`): **0**
> - Remote video streaming or CDN integration: **None configured in repository**
> - Current video delivery: **External hyperlinks only** to TikTok (`vt.tiktok.com`) and Instagram Reels (`instagram.com/reel/...`).
> - **Implication for V2**: The target hero concept (`KENDITS` mask → video playing inside mask → scroll reveal → fullscreen video) cannot be built without acquiring or hosting the official Kendits studio showreel footage.

---

## 9. Current Hero Audit

### Initial Page Load State
1. **Visible Components**:
   - `Spotlight` (white): Positioned top-left (`-top-40 -left-10`).
   - `Spotlight` (purple): Positioned top-right (`h-[80vh] w-[50vw] top-10 left-full`).
   - `Spotlight` (blue): Positioned mid-left (`left-80 top-28`).
   - Background grid: SVG data URI grid overlay with CSS radial gradient mask.
   - Subtitle: "DYNAMIC EDITS WITH KENDITS STUDIOS" (`text-blue-100 uppercase tracking-widest`).
   - Headline: "Transforming Concepts into Seamless Reality" rendered through `TextGenerateEffect` inside an `<h1>`.
   - Description: "We are Kendits Studios, a Media Company based in Ghana."
   - CTA Button: `MagicButton` with "Explore Our Services" and arrow icon, linking via anchor to `#services`.
2. **Video & Audio Behavior**:
   - Video element: **None**.
   - Autoplay: **None**.
   - Sound / Audio: **None**.
3. **Scroll Interaction**:
   - Fixed `FloatingNavbar` initially visible, disappears upon scrolling down past 5% of the viewport, reappears when scrolling upward.
   - The hero content itself remains static and scrolls out of view naturally.
4. **Mobile Responsiveness**:
   - Spotlights scale down via CSS responsive classes.
   - Headline scales from `text-[40px]` on mobile to `lg:text-6xl` on desktop.
   - MagicButton expands to full width (`w-full md:w-60`).

---

## 10. Content / Data Audit

Content is currently managed across local TypeScript and JSON files:

```text
================================================================================
CONTENT AREA          SOURCE FILE            FORMAT         CONTENT HEALTH
================================================================================
Navigation Links      data/index.ts          TS Array       5 anchor links (#about, #services, #projects, #testimonials, #contact). Clean.
--------------------------------------------------------------------------------
Bento Grid Cards      data/index.ts          TS Array       6 items. Mix of real agency copy and template artifacts.
--------------------------------------------------------------------------------
Recent Projects       data/index.ts          TS Array       4 real video projects with TikTok/Instagram links. Tech badges are template remnants.
--------------------------------------------------------------------------------
Testimonials          data/index.ts          TS Array       5 testimonials. Quotes are strong, but names/titles are mismatched corporate placeholders.
--------------------------------------------------------------------------------
Client Companies      data/index.ts          TS Array       5 developer platforms (Cloudinary, Appwrite, etc.). Unused in UI; completely invalid for Kendits.
--------------------------------------------------------------------------------
Work Experience       data/index.ts          TS Array       4 individual career roles. Reads like a freelancer CV rather than studio credentials.
--------------------------------------------------------------------------------
Services List         components/Services.ts TS Array       5 well-crafted studio service offerings. High commercial relevance.
--------------------------------------------------------------------------------
Terms & Conditions    components/ui/Terms... In-component   11 thorough legal clauses under Ghanaian jurisdiction. Production grade.
--------------------------------------------------------------------------------
World GeoJSON         data/globe.json        JSON (331 KB)  Country polygon geometry for ThreeGlobe. Heavy template bloat.
--------------------------------------------------------------------------------
Confetti Animation    data/confetti.json     JSON (614 KB)  Lottie vector animation for email copy button. Heavy template bloat.
================================================================================
```

### V2 Content Architecture Recommendation
No external Headless CMS (Sanity, Contentful, Strapi) is needed for launch. A local structured data architecture will keep the site fast, version-controlled, and cost-free:
```text
content/
├── site.ts              # Global metadata, socials, contact info, brand constants
├── services.ts          # Core studio services and deliverables
├── projects.ts          # Featured video showcase items, video URLs, aspect ratios, credits
└── testimonials.ts      # Curated client reviews with verified client names and brands
```

---

## 11. Server / Client Architecture

In Next.js App Router, components default to Server Components unless explicitly marked with `"use client"`.

### `"use client"` File Audit
The codebase contains **12 files** with the `"use client"` directive:
1. `app/provider.tsx` — **Necessary** (Context provider for `next-themes`).
2. `components/Services.tsx` — **Unnecessary at section root** (Only the scroll animation requires client hooks; data and grid can be rendered on server).
3. `components/RecentProjects.tsx` — **Unnecessary at section root** (Only the card interactions require client-side handling).
4. `components/Clients.tsx` — **Unnecessary at section root** (Can be a Server Component wrapping client `InfiniteMovingCards`).
5. `components/Footer.tsx` — **Necessary** (Controls modal state `isTermsOpen`).
6. `components/ui/BentoGrid.tsx` — **Necessary currently** (Houses clipboard state and Lottie/Globe), but should be decomposed.
7. `components/ui/FloatingNavbar.tsx` — **Necessary** (Uses `useScroll` and `useMotionValueEvent`).
8. `components/ui/Globe.tsx` — **Necessary** (Three.js WebGL canvas and DOM event listeners).
9. `components/ui/GridGlobe.tsx` — **Necessary** (Client dynamic import container).
10. `components/ui/GradientBg.tsx` — **Necessary** (Mouse tracking and DOM style manipulation).
11. `components/ui/InfinteMovingCards.tsx` — **Necessary** (RAF continuous animation loop and pointer listeners).
12. `components/ui/MovingBorders.tsx` — **Necessary** (Framer Motion `useAnimationFrame`).
13. `components/ui/Pin.tsx` — **Necessary** (Stateful 3D mouse enter/leave transforms).
14. `components/ui/TermsModal.tsx` — **Necessary** (`AnimatePresence` and backdrop click handlers).
15. `components/ui/TextGenerateEffect.tsx` — **Necessary** (`useAnimate` hook).

### V2 Target Boundary Architecture
```text
[ Server Component ] app/layout.tsx (HTML, Head, Fonts, Metadata)
   └── [ Server Component ] app/page.tsx (Page Skeleton, Section Containers, Static Data)
         ├── [ Client Component ] components/navigation/Header.tsx (Interactive Nav)
         ├── [ Client Component ] components/hero/CinematicHero.tsx (GSAP Mask & Video Controller)
         ├── [ Server Component ] components/sections/Services.tsx (Static Grid Structure)
         │     └── [ Client Component ] components/ui/RevealWrapper.tsx (Minimal scroll trigger)
         ├── [ Server Component ] components/sections/Portfolio.tsx (Static Project Cards)
         │     └── [ Client Component ] components/portfolio/VideoCard.tsx (Hover Video Player)
         └── [ Client Component ] components/sections/Footer.tsx (Interactive Contact & Modal)
```

---

## 12. Dependency Audit

| Package Name | Category | Bundle Weight | Audit Finding | V2 Decision |
|---|---|---|---|---|
| `next` (`16.1.7`) | CORE | ~140 KB (Runtime) | App Router works as expected. Turbopack has font download issues. | **KEEP** |
| `react` & `react-dom` (`18.3.1`) | CORE | ~130 KB | Stable LTS. Required by current Three.js and Framer Motion packages. | **KEEP** |
| `typescript` (`5.9.3`) | CORE | Dev only | Strict type checking passes. | **KEEP** |
| `tailwindcss` (`3.4.19`) | CORE | ~15 KB (Purged CSS)| Fast, responsive utility styling. | **KEEP** |
| `clsx` & `tailwind-merge` | CORE | ~5 KB | Powers `cn()` utility. Indispensable. | **KEEP** |
| `next-themes` (`0.4.6`) | USEFUL | ~3 KB | Handles clean dark mode initialization. | **KEEP** |
| `react-icons` (`5.6.0`) | USEFUL | Tree-shaken | Used for social icons and UI indicators. | **KEEP** |
| `tailwindcss-animate` (`1.0.7`)| USEFUL | <1 KB | Keyframe helper classes. | **KEEP** |
| `mini-svg-data-uri` (`1.4.4`) | USEFUL | <1 KB | Used in Tailwind config for SVG background patterns. | **KEEP** |
| `framer-motion` (`12.38.0`) | USEFUL / CORE | ~110 KB | Smooth micro-interactions and modal transitions. | **KEEP** (Scope to UI) |
| `@react-three/fiber` (`9.5.0`)| RISKY / HEAVY | ~450 KB | Heavy WebGL runtime for a simple globe. | **REMOVE IN V2** |
| `@react-three/drei` (`9.122.0`)| RISKY / HEAVY | ~600 KB | Extra Three.js utilities. | **REMOVE IN V2** |
| `three` (`0.183.2`) | RISKY / HEAVY | ~650 KB | Full 3D math and rendering engine. | **REMOVE IN V2** |
| `three-globe` (`2.45.1`) | RISKY / HEAVY | ~180 KB | Globe mesh generator. | **REMOVE IN V2** |
| `react-lottie` (`1.2.10`) | OUTDATED | ~150 KB | Unmaintained library using deprecated React lifecycle methods. | **REPLACE / REMOVE** |
| `eslint` (`8.57.1`) | OUTDATED | Dev only | Incompatible with `eslint-config-next` 16 schema. | **REFACTOR TO ESLINT 9** |
| `eslint-config-next` (`16.2.1`)| OUTDATED | Dev only | Causes circular JSON error with ESLint 8. | **REFACTOR TO FLAT CONFIG** |

---

## 13. Animation Audit

### Current Animation Systems
1. **Framer Motion (`framer-motion`)**:
   - Used for `initial` / `whileInView` scroll reveals in `Services.tsx` and `Clients.tsx`.
   - Used for `useScroll` and `useMotionValueEvent` in `FloatingNavbar.tsx`.
   - Used for `useAnimate` in `TextGenerateEffect.tsx`.
   - Used for `useAnimationFrame` in `MovingBorders.tsx`.
2. **Native `requestAnimationFrame`**:
   - Custom pointer-drag marquee in `InfinteMovingCards.tsx`. Continuously updates inline `transform: translateX(...)`.
3. **Three.js WebGL Render Loop**:
   - Handled inside `@react-three/fiber` Canvas. Renders 60 FPS animation loop continuously on the Bento section.
4. **Tailwind CSS Keyframes**:
   - `animate-spotlight`: SVG transform/opacity entrance.
   - `animate-[spin_2s_linear_infinite]`: Conic-gradient spin in `MagicButton`.
   - `animate-first` through `animate-fifth`: CSS mesh movement in `GradientBg.tsx`.

### Animation Debt & Performance Hazards
- **CPU/GPU Contention**: Having an active Three.js Canvas, an ongoing `requestAnimationFrame` loop in `InfiniteMovingCards`, an SVG path-calculating `useAnimationFrame` in `MovingBorders`, and CSS SVG blur filters in `GradientBg` simultaneously causes significant thread contention on mobile devices.
- **Scroll Syncing**: `FloatingNavbar` listens to global `scrollYProgress` without throttling or debouncing.
- **V2 Integration Strategy**: In V2, high-end cinematic choreography (mask expanding, hero video scrubbing) will be driven by **GSAP + ScrollTrigger**, while UI state animations (nav toggle, modals, buttons) will remain on **Framer Motion**.

---

## 14. Performance Baseline

### 14.1 Production Build Metrics
- **Compiler**: Next.js 16.1.7 via webpack compiler (`next build --webpack`).
- **Build Time**: 2.2 minutes (extended due to font network retries).
- **Static Page Generation**: 7 static routes generated successfully in 987 ms.

### 14.2 Client JavaScript Payload Analysis
Inspection of generated chunks in `.next/static/chunks/`:
```text
--------------------------------------------------------------------------------
CHUNK FILE                       RAW SIZE      DOMINANT CONTENTS
--------------------------------------------------------------------------------
page-f2981c5bc3c152fe.js         659 KB        Three.js, ThreeGlobe, R3F runtime
b055d1fb.79b76bdf6d2da7d9.js     588 KB        Three.js core engine & shader chunks
bd904a5c.1e6ea00946438f66.js     373 KB        React Three Drei controls & loaders
b536a0f1.3456e321b4c8358e.js     352 KB        Framer Motion v12 animation engine
dc112a36-2c9ff1e9ac444b62.js     305 KB        Lottie animation runtime & SVG canvas
134.4a5b68fb67a3aa8a.js          226 KB        React 18 & React DOM runtime
287-6a31a10ffc549fb7.js          216 KB        Country polygon geometry (globe.json)
--------------------------------------------------------------------------------
TOTAL INITIAL JS PAYLOAD:        > 2.5 MB (Uncompressed)
```

### 14.3 Static Assets Overhead
- `/public` contains **16.3 MB** of unused SVG files (`p1.svg`, `p2.svg`, `p3.svg`, `p4.svg`).
- Lottie `confetti.json`: **614 KB**.
- Three.js `globe.json`: **331 KB**.
- **Assessment**: The current site transfers nearly 3.5 MB of data on initial load before any video assets are even requested. Removing the 3D globe and unused SVGs will instantly reduce bundle weight by >75%.

---

## 15. Accessibility Baseline

| Audit Area | Findings / Violations | Severity | Remediation for V2 |
|---|---|---|---|
| **Keyboard Navigation** | `outline-none` enforced globally in `globals.css` (`button { @apply active:outline-none; }`); focus rings are missing on interactive cards. | High | Implement high-contrast focus rings (`focus-visible:ring-2 ring-cyan-400`) |
| **Duplicate HTML IDs** | Both `Clients.tsx` and `Experience.tsx` declare `id="testimonials"`, causing anchor jump ambiguity. | High | Assign unique semantic IDs (`#services`, `#portfolio`, `#testimonials`, `#contact`) |
| **SVG Filter ID Collision** | `Spotlight.tsx` hardcodes `<filter id="filter">`. When 3 instances are rendered on the page, all 3 reference the same ID in the DOM. | Medium | Generate unique SVG filter IDs (e.g. `filter-${useId()}`) |
| **Image Alt Attributes** | `RecentProjects.tsx` uses decorative background images with empty or generic alt text. `b1.svg` in BentoGrid uses generic alt text. | Medium | Supply descriptive alt tags for project previews; mark purely decorative graphics with `aria-hidden="true"` |
| **Semantic Landmarks** | Sections use generic `<div>` wrappers instead of `<section aria-labelledby="...">`. `RecentProjects` lacks proper heading hierarchy. | Medium | Enforce `<main>`, `<section>`, `<article>`, and sequential `h1` → `h2` → `h3` hierarchy |
| **Reduced Motion** | No `prefers-reduced-motion` media queries exist. Infinite marquees and rotating buttons animate continuously even if the user requests reduced motion. | High | Wrap animations in Framer Motion / CSS `reduced-motion` fallbacks |
| **Touch Event Capture** | `InfinteMovingCards.tsx` sets `touch-none`, blocking vertical page scrolling when a touch gesture initiates over the cards. | High | Remove `touch-none` and allow natural vertical scroll chaining (`touch-action: pan-y`). |

---

## 16. Responsive Baseline

| Breakpoint Range | Device Type | Identified Responsive Issues |
|---|---|---|
| **< 480px** | Small Mobile | - FloatingNav pills can wrap or overflow viewport.<br>- Text inside `TextGenerateEffect` is large (`text-[40px]`), causing word hyphens on narrow screens.<br>- BentoGrid cards collapse into a long single-column stack with misaligned decorative graphics. |
| **480px – 768px** | Tablet (Portrait) | - `RecentProjects` 3D pin cards have rigid widths (`sm:w-96 w-[80vw]`) that lead to horizontal overflow.<br>- Experience cards stack awkwardly in 1 column before jumping to 4 columns. |
| **768px – 1024px** | Tablet (Landscape) | - BentoGrid 6-column / 5-column hybrid layout creates unbalanced white space.<br>- Three.js Globe positioning (`absolute -left-5 top-36`) cuts off the northern hemisphere. |
| **1024px – 1440px**| Standard Desktop | - Primary baseline where the current layout functions most reliably. |
| **> 1440px** | Ultrawide Monitors | - `max-w-7xl` container leaves excessive empty black margins on either side.<br>- Spotlight effects are positioned with hardcoded pixel values (`left-80 top-28`), disconnecting them from central content. |

---

## 17. Reuse / Refactor / Replace

### REUSE (Retain with Minimal Modifications)
- **Legal Terms & Conditions (`components/ui/TermsModal.tsx`)**: Fully formed, authentic Ghanaian jurisdiction legal agreement covering payments, revisions, and deliverables.
- **Service Copy (`components/Services.tsx`)**: The written descriptions for *Visual Production*, *Content Creation*, *Brand Identity*, *Social Media*, and *Web Development* accurately represent Kendits Studios.
- **Featured Project Metadata (`data/index.ts` - `projects`)**: Real video titles, descriptions, and URLs for *Stay Original*, *Peniel French Week Celebration '25*, *Internal Conflict: A Cinematic Short Film*, and *Wave Speedway*.
- **Dark Theme Provider (`app/provider.tsx`)**: Clean `next-themes` implementation.
- **Utility Functions (`lib/utils.ts`)**: Standard `cn()` class merger.
- **SEO Route Handlers (`app/robots.ts`, `app/sitemap.ts`)**: Clean, functional search engine endpoints.

### REFACTOR (Improve Structure & Restyle)
- **Navigation Bar (`components/ui/FloatingNavbar.tsx`)**: Add official logo mark, mobile menu drawer, and showreel audio controls; restyle with studio colors.
- **Testimonial Marquee (`components/ui/InfinteMovingCards.tsx`)**: Fix filename typo, resolve `touch-none` vertical scroll blocking, restyle cards with dark glassmorphism.
- **Text Reveal Effect (`components/ui/TextGenerateEffect.tsx`)**: Remove `console.log`, remove hardcoded index colors, support custom highlight tags.
- **Footer (`components/Footer.tsx`)**: Restyle with studio typography, integrate genuine contact form alongside existing mailto and phone links.
- **Spotlight Beam (`components/ui/Spotlight.tsx`)**: Fix filter ID collision, update colors to turquoise/cyan.

### REPLACE (Design & Implement Afresh in Later Phases)
- **Hero Section (`components/Hero.tsx`)**: Replace static spotlights with the signature **KENDITS text mask**, background showreel video, and GSAP scroll expansion.
- **Portfolio Section (`components/RecentProjects.tsx`)**: Replace 3D pin cards and developer tech badges with cinematic video preview cards featuring video poster hover-playback.
- **Bento Grid (`components/ui/BentoGrid.tsx`)**: Replace the template bento grid with an authentic studio showcase highlighting production gear, clients, and creative philosophy.
- **Work Experience (`components/Experience.tsx`)**: Replace CV resume cards with an agency "Why Kendits" or "Creative Milestones" grid.
- **About Route (`app/about/page.tsx`)**: Replace empty stub with a dedicated studio story and director profile page.

### REMOVE (Eliminate Unnecessary Template Code)
- **Three.js Stack**: `@react-three/fiber`, `@react-three/drei`, `three`, `three-globe`, `Globe.tsx`, `GridGlobe.tsx`, and `data/globe.json` (Saves >1.6 MB of bundle and dataset weight).
- **Lottie Stack**: `react-lottie` and `data/confetti.json` (Saves >750 KB).
- **BackgroundGradientAnimation (`components/ui/GradientBg.tsx`)**: High CPU/GPU cost.
- **Orphaned Assets in `/public`**: Delete `p1.svg`, `p2.svg`, `p3.svg`, `p4.svg`, `profile.svg`, `b5.svg`, `jsm-logo.png`, and developer platform logos (`cloud.svg`, `app.svg`, `dock.svg`, etc.) (Saves >16.5 MB of repository weight).

---

## 18. Technical Risk Register

| Risk ID | Risk Description | Severity | Impact | Evidence | Recommended Response |
|---|---|---|---|---|---|
| **TR-01** | **Hero Video Missing** | **CRITICAL** | Cannot implement the signature V2 hero sequence without source video footage. | 0 video files located in `/public` or codebase; external links only. | Request source showreel footage (.mp4/.webm) or high-res video URL from project owner. |
| **TR-02** | **Client Bundle Bloat** | **HIGH** | Slow mobile load times, high bounce rates, degraded Lighthouse scores. | >2.5 MB uncompressed client JS; 16.3 MB unoptimized SVGs. | Strip Three.js, Lottie, and orphaned SVGs in Phase 2/3 cleanup. |
| **TR-03** | **Turbopack Google Font Failure** | **HIGH** | Production build crashes under default `next build` (Turbopack). | `next build` failed with 3 font module errors resolving fonts.gstatic.com. | Configure font fallback or local font hosting (`next/font/local`) in Next config. |
| **TR-04** | **ESLint 8 vs 16 Circular Error** | **MEDIUM** | `npm run lint` completely broken; linting cannot run in CI/CD pipeline. | `TypeError: Converting circular structure to JSON` in `.eslintrc.json`. | Migrate `.eslintrc.json` to ESLint 9 Flat Config (`eslint.config.mjs`). |
| **TR-05** | **Multi-Lockfile Workspace Warning** | **LOW** | Next.js build produces ambiguous workspace root warning. | Warning detects `..\package-lock.json` in parent folder. | Set `outputFileTracingRoot: path.join(__dirname)` in `next.config.mjs`. |
| **TR-06** | **Animation Frame Rate Thrashing** | **HIGH** | Jittery scrolling and battery drain on mobile devices. | Multiple concurrent RAF loops (`InfinteMovingCards`, `MovingBorders`, Three.js). | Consolidate scroll animation under GSAP ScrollTrigger; use pure CSS for borders. |
| **TR-07** | **Touch Event Hijacking** | **HIGH** | Mobile users unable to scroll past the testimonial section. | `touch-none` applied to `<ul>` in `InfinteMovingCards.tsx`. | Remove `touch-none` and allow natural vertical scroll chaining (`touch-action: pan-y`). |

---

## 19. V2 Architecture Recommendation

Based on the audit findings, the recommended architecture for Kendits V2 is:

```text
================================================================================
LAYER               RECOMMENDED TECHNOLOGY           RATIONALE
================================================================================
Framework           Next.js 16 (App Router)          Modern, fast SSG/ISR, optimal for Vercel
UI Library          React 18 LTS                     Stability, full compatibility with animation ecosystem
Styling Engine      Tailwind CSS                     Utility-first, responsive, zero runtime CSS overhead
Component Library   Aceternity UI (Selective)        Retain Spotlight, FloatingNav, and TextGenerateEffect
Cinematic Motion    GSAP + ScrollTrigger             Industry standard for scrubbed video masking & timeline reveals
UI Motion           Framer Motion                    For modals, navigation drawers, and tab micro-interactions
Smooth Scroll       Lenis (Optional / Evaluated)     Only introduce after testing hero scrub performance
Content Store       Local Structured Data (TS)       Zero latency, Git version-controlled, zero CMS operational cost
Rich Case Studies   MDX (Optional)                   For rich multi-media project breakdowns if needed
Media Pipeline      Local Optimized WebM/MP4 + CDN   Fast initial chunk loading with responsive poster frames
Deployment          Vercel                           Edge caching, automated preview deployments
================================================================================
```

### Clarification on Headless CMS
> **Sanity / Contentful is NOT required for V2 launch.** 
> The project owner can update projects and testimonials with zero overhead via clean, typed TypeScript files in `content/`. A CMS can be connected seamlessly at a later date if content volume demands it.

---

## 20. Phase 2 Readiness Assessment

### Overall Status: **READY WITH CONDITIONS**

The repository has been stabilized, fully documented, and branched to `feat/kendits-v2`. The current application builds cleanly with the webpack compiler and all core assets and routes are understood.

### Conditions to Resolve Before Phase 2 Implementation:

1. **Condition 1: Official Showreel Footage Delivery**
   - *Requirement*: The project owner must provide the source video file (or a high-bandwidth direct URL) for the official Kendits studio showreel to be used inside the `KENDITS` mask.
   - *Format*: 1080p or 4K MP4/WebM, optimized for web playback (<30 MB target).
2. **Condition 2: Official Vector Logo**
   - *Requirement*: Confirmation of the official Kendits Studios logo file (SVG preferred). Currently, only text headers exist in the codebase.
3. **Condition 3: Client Testimonial & Sponsor Review**
   - *Requirement*: Confirmation that the developer template platform logos (`Cloudinary`, `Appwrite`, `Hostinger`, `Stream`, `Docker`) and template CV cards should be replaced with genuine studio milestones and client names.

Once these conditions are acknowledged or answered, Phase 2 (**Design System + Global V2 Foundation**) can proceed immediately.
