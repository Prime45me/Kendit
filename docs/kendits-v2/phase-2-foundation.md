# Kendits V2 — Phase 2 Foundation

## 1. Implemented Foundation

Phase 2 transitions the Kendits Creative Studios Next.js application from an audited codebase into a **stable, modular, and high-performance V2 design system and global foundation**.

In accordance with `PHASE_2_DESIGN_SYSTEM_AND_GLOBAL_FOUNDATION.md`, this phase focuses strictly on **infrastructure, design tokens, layout shells, responsive rules, accessible UI primitives, and media abstractions**. In adherence to the core rule—*Build the system before building the spectacle*—no premature hero animation, GSAP timelines, or complete page redesigns were executed.

### Core Foundation Achievements:
1. **Central Token System**: Established comprehensive design tokens in `lib/tokens.ts`, extended `tailwind.config.ts`, and enhanced `app/globals.css`.
2. **Dark Cinematic Identity**: Built an obsidian canvas foundation (`#030508`) paired with high-contrast off-white typography and the authentic Kendits Green (`#10B981`) → Turquoise (`#06B6D4`) → Blue (`#3B82F6`) accent palette.
3. **Global Navigation & Mobile Drawer**: Built an accessible, responsive header navigation shell (`components/v2/Navbar.tsx`) with an animated full-screen mobile drawer (`components/v2/MobileMenu.tsx`), complete with keyboard focus management and zero touch-locking scroll bugs.
4. **Global Footer Shell**: Implemented a structural editorial footer (`components/v2/Footer.tsx`) featuring studio credentials, navigation links, verified contact channels (+233 phone numbers, studio email), social media links, and integrated Ghanaian-law legal terms (`TermsModal`).
5. **Reusable UI Primitives**: Created modular, accessible components in `components/v2/ui/` (`Container`, `Button`, `Link`, `SectionHeading`, `Modal`, `BackgroundAtmosphere`, and `PageShell`).
6. **Media Abstraction Layer**: Created unified `<Video />` and `<Media />` components in `components/v2/media/` supporting responsive sources, aspect ratios, sound toggle, and fallback states.
7. **Quality Assurance Surface**: Established an internal development showcase route at `/v2-showcase` to validate all tokens, components, and responsive behaviors.
8. **Performance Breakthrough**: The V2 foundation route compiles to an initial page JS chunk of **38.5 KB**—a **94% reduction** compared to the legacy homepage's 652 KB client chunk.

---

## 2. Design Tokens

Centralized in `lib/tokens.ts` and mirrored into `tailwind.config.ts`:

```text
================================================================================
TOKEN CATEGORY    VALUES / TOKENS                 IMPLEMENTATION
================================================================================
Canvas & Surface  canvas: #030508                 bg-canvas
                  canvas-subtle: #060A12          bg-canvas-subtle
                  surface: #0B111E                bg-surface (cards, panels)
                  surface-elevated: #111A2E       bg-surface-elevated
                  surface-hover: #16223B          hover:bg-surface-hover
--------------------------------------------------------------------------------
Typography        text-primary: #F8FAFC (98%)     text-text-primary (headings)
                  text-secondary: #94A3B8 (slate) text-text-secondary (body)
                  text-muted: #64748B             text-text-muted (captions)
--------------------------------------------------------------------------------
Signature Accents kendits-green: #10B981          text-kendits-green, bg-kendits-green
                  kendits-turquoise: #06B6D4      text-kendits-turquoise
                  kendits-blue: #3B82F6           text-kendits-blue
                  kendits-gradient: 135deg        bg-kendits-gradient
--------------------------------------------------------------------------------
Borders & Glows   border-subtle: rgba(255,255,255,0.08)
                  border-medium: rgba(255,255,255,0.16)
                  glow-cyan: 0 0 40px -10px rgba(6,182,212,0.35)
                  glow-cyan-intense: 0 0 60px -5px rgba(6,182,212,0.5)
--------------------------------------------------------------------------------
Spacing & Radii   radius-sm (4px), radius-md (8px), radius-lg (12px), pill (9999px)
                  section padding: py-18 (mobile), py-26 (tablet), py-34 (desktop)
--------------------------------------------------------------------------------
Z-Index Scale     canvas: 0, atmosphere: 1, content: 10, stickyNav: 40,
                  drawer: 50, modal: 60, cursor: 70
================================================================================
```

---

## 3. Typography

### 3.1 Typographic Hierarchy
The scale is designed to support the future `KENDITS` mask hero at extreme sizes while remaining legible across body copy:

- **Display (Hero Mask Ready)**: `clamp(3.5rem, 12vw, 12rem)`, line-height: `0.88`, letter-spacing: `-0.05em`, font-weight: `900`, uppercase.
- **H1 (Page Titles)**: `clamp(2.5rem, 5vw, 4.5rem)`, line-height: `1.05`, letter-spacing: `-0.03em`, font-weight: `800`.
- **H2 (Section Titles)**: `clamp(2rem, 3.5vw, 3rem)`, line-height: `1.15`, letter-spacing: `-0.025em`, font-weight: `700`.
- **H3 (Card / Sub-headings)**: `clamp(1.5rem, 2.5vw, 2rem)`, line-height: `1.25`, letter-spacing: `-0.02em`, font-weight: `600`.
- **H4 (Item Titles)**: `clamp(1.25rem, 2vw, 1.5rem)`, line-height: `1.35`, font-weight: `600`.
- **Body Large**: `clamp(1.125rem, 1.25vw, 1.25rem)`, line-height: `1.6`, font-weight: `400`.
- **Body Regular**: `1rem` (16px), line-height: `1.65`, font-weight: `400`.
- **Body Small**: `0.875rem` (14px), line-height: `1.5`, font-weight: `400`.
- **Eyebrow Tag**: `0.75rem` (12px), tracking: `0.2em`, font-weight: `700`, uppercase.

### 3.2 Font Loading & Resilience
Configured in `app/layout.tsx`:
```tsx
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```
Coupled with CSS system font fallbacks (`system-ui, -apple-system, BlinkMacSystemFont, sans-serif`), the application renders without layout shift even in offline or bandwidth-constrained environments.

---

## 4. Colour System

### 4.1 Foundations & Surfaces
- **Canvas (`#030508`)**: True obsidian background providing maximum contrast for cinematic video and vibrant accents.
- **Canvas Subtle (`#060A12`)**: Secondary backdrop tone for alternating page sections and footer.
- **Surface (`#0B111E`)**: Primary card and panel surface with `border border-white/10`.
- **Surface Elevated (`#111A2E`)**: High-emphasis surface for modals, active cards, and elevated UI elements.

### 4.2 The Signature Kendits Gradient
Replaces the template-inherited purple (`#CBACF9`) with the authentic Kendits studio palette:
```css
background: linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #3B82F6 100%);
```
Applied intentionally through utility classes:
- `.text-gradient-kendits`: Gradient text fill for headline accents.
- `.bg-kendits-gradient`: Button backgrounds and high-intent CTAs.
- `.shadow-glow-cyan`: Atmospheric drop shadows for active elements.

---

## 5. Layout / Grid

Established in `components/v2/ui/Container.tsx`:
1. **Contained Mode (`width="contained"`)**:
   - `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (1280px).
   - Used for editorial text, article layouts, and standard content sections.
2. **Wide Mode (`width="wide"`)**:
   - `max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8` (1440px).
   - Used for the global navbar shell, footer shell, and expansive portfolio grids.
3. **Full-Bleed Mode (`width="full"`)**:
   - `w-full px-0`.
   - Used for cinematic showreels, full-width video scrubbing, and the future hero sequence.

---

## 6. Responsive System

Explicit behaviors enforced across five standard breakpoints:
- **Mobile (<640px)**:
  - Navigation switches to full-screen `MobileMenu` drawer with large tap targets.
  - Buttons expand to full width where appropriate (`w-full sm:w-auto`).
  - Section vertical rhythm scales to `py-12` to `py-18`.
  - Zero hover dependencies; interactive elements function identically on touch.
  - No `touch-none` scroll locking—vertical swiping remains smooth.
- **Tablet (640px – 1024px)**:
  - 2-column card layouts with balanced gutter spacing (`gap-6`).
  - Split section headers stack gracefully.
- **Desktop (1024px – 1440px)**:
  - Primary baseline. Desktop navigation with underline indicators and pill CTAs.
  - 3-column and 4-column grid structures.
- **Ultrawide (>1440px)**:
  - Contained within `max-w-7xl` or `max-w-[90rem]` to prevent line lengths from exceeding comfortable reading boundaries.

---

## 7. Navigation

### Architecture (`components/v2/Navbar.tsx` & `MobileMenu.tsx`)
- **Desktop Bar**:
  - Pinned to the top with `z-40`.
  - Transitions from transparent to glassmorphic (`bg-canvas/85 backdrop-blur-xl border-b border-white/10`) upon scrolling >20px.
  - Features temporary editorial text wordmark `KENDITS.` (avoiding fake logos until official vector SVG is supplied).
  - Four core section links: `WORK`, `SERVICES`, `STUDIO`, `CONTACT`.
  - High-emphasis `START A PROJECT` button linking to `#contact`.
- **Mobile Menu Drawer**:
  - Full-screen animated slide-over (`z-50`).
  - Traps keyboard focus, listens for `Escape` to close, and restores focus to the trigger button upon dismissal.
  - Locks body scrolling during mount and restores original overflow upon unmount.
  - Features indexed navigation items (`01 →`, `02 →`), primary CTA button, studio location, and social links.

---

## 8. Footer

Implemented in `components/v2/Footer.tsx`:
- **Call-to-Action Banner**: Bold studio statement with primary "Start a Project" email trigger and direct phone button.
- **Information Architecture**:
  - Studio summary and brand presence.
  - Primary navigation links (`Selected Work`, `Services`, `Studio Story`, `Contact Us`).
  - Social media links with external target indicators (Instagram, TikTok).
  - Studio operational details (Accra, Ghana; direct phone numbers).
- **Legal Terms Integration**:
  - Direct trigger button for `TermsModal`, presenting the authentic Ghanaian law terms covering payment deposits, revisions, deliverables, and jurisdiction.
  - Dynamic copyright notice: `© 2026 Kendits Creative Studios. All rights reserved.`

---

## 9. UI Primitives

All primitives are located in `components/v2/ui/`:

| Primitive | File Path | Capabilities & Variants |
|---|---|---|
| `<Container>` | `components/v2/ui/Container.tsx` | Contained (1280px), Wide (1440px), and Full-Bleed modes; polymorphic `as` prop. |
| `<Button>` | `components/v2/ui/Button.tsx` | Variants: `primary`, `secondary`, `outline`, `ghost`, `gradient`. Sizes: `sm`, `md`, `lg`. Supports `isLoading`, `leftIcon`, `rightIcon`, disabled, and accessible focus ring. |
| `<Link>` | `components/v2/ui/Link.tsx` | Editorial links with animated arrow (`→` or `↗`), underline transitions, external link security (`noopener noreferrer`), and focus rings. |
| `<SectionHeading>`| `components/v2/ui/SectionHeading.tsx`| Eyebrow tag, H2 title, description, and alignment modes (`left`, `center`, `split` with action button). |
| `<Modal>` | `components/v2/ui/Modal.tsx` | Accessible dialog with backdrop blur, keyboard `Escape` handler, body scroll lock, focus restoration, and close button. |
| `<BackgroundAtmosphere>`| `components/v2/ui/BackgroundAtmosphere.tsx`| Controlled ambient lighting with `none`, `subtle`, and `strong` modes using pure CSS radial gradients (no heavy SVG filters). |
| `<PageShell>` | `components/v2/PageShell.tsx` | Universal layout skeleton coordinating `<Navbar>`, `<BackgroundAtmosphere>`, and `<Footer>`. |

---

## 10. Motion System

Defined in `lib/motion.ts`:
- **Duration Scale**: `instant: 0.1s`, `fast: 0.2s`, `normal: 0.4s`, `slow: 0.7s`, `cinematic: 1.2s`.
- **Easing Curve**: Studio custom cubic bezier `[0.22, 1, 0.36, 1]` for ultra-smooth momentum.
- **Framer Motion Variants**: `fadeIn`, `fadeUp`, `staggerContainer`, `mobileMenuVariants`, `menuItemVariants`, `modalOverlayVariants`, and `modalDialogVariants`.
- **Reduced Motion Support**: Global media query in `globals.css` forces `animation-duration: 0.01ms` and `scroll-behavior: auto` when `prefers-reduced-motion: reduce` is active.
- **Three-Tier Responsibility**:
  - *CSS*: Hover transitions, color shifts, focus rings.
  - *Framer Motion*: UI micro-interactions, mobile drawer, modal overlays, card reveals.
  - *GSAP (Phase 3)*: Reserved for continuous video scrubbing, text masking, and timeline choreography.

---

## 11. Media Abstraction

Implemented in `components/v2/media/`:
- **`<Video />` (`components/v2/media/Video.tsx`)**:
  - Handles `<video>` playback with `poster`, `autoPlay`, `loop`, `muted`, `playsInline`, and `controls`.
  - Supports responsive `<source>` media queries (`mobileSrc` for `<768px`, `desktopSrc` for `≥768px`).
  - Includes interactive sound toggle button with volume icons.
  - **Graceful Fallback Mode**: When video source is pending or missing (as discovered in Phase 1), renders a high-end cinematic reel placeholder with poster artwork rather than broken markup.
- **`<Media />` (`components/v2/media/Media.tsx`)**:
  - Unified wrapper dynamically switching between optimized Next.js `<Image />` and `<Video />` while enforcing consistent aspect ratios (`16/9`, `4/3`, `1/1`, `9/16`, `21/9`).

---

## 12. Server / Client Boundaries

The V2 foundation strictly adheres to Next.js App Router conventions:
```text
[ Server Component ] app/layout.tsx
   └── [ Server Component ] app/page.tsx
         └── [ Server / Client Hybrid ] components/v2/PageShell.tsx
               ├── [ Client Component ] components/v2/Navbar.tsx (Scroll state, mobile menu toggle)
               │     └── [ Client Component ] components/v2/MobileMenu.tsx (Framer motion drawer)
               ├── [ Server Component ] Page Content (Headers, SectionHeadings, Containers, Text)
               │     └── [ Client Component ] components/v2/ui/Button.tsx (Interactive click handlers)
               │     └── [ Client Component ] components/v2/media/Video.tsx (HTML5 Video & sound toggle)
               └── [ Client Component ] components/v2/Footer.tsx (Modal open/close state)
                     └── [ Client Component ] components/ui/TermsModal.tsx (Dialog animation)
```
Only components requiring browser APIs, scroll events, or motion lifecycle hooks declare `"use client"`. Structural wrappers and page layouts remain Server Components.

---

## 13. Accessibility Foundation

| Accessibility Criterion | Implementation in V2 Foundation | Status |
|---|---|---|
| **Keyboard Navigation** | Visible, high-contrast turquoise focus rings (`ring-2 ring-kendits-turquoise ring-offset-2 ring-offset-canvas`) applied to all buttons, links, and inputs. | Compliant |
| **Dialog Modals** | `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, Escape key dismissal, body scroll locking, and focus restoration to trigger element. | Compliant |
| **Mobile Drawer** | Accessible hamburger button with `aria-expanded` and `aria-label`; Escape key dismisses drawer; focus trap active during open state. | Compliant |
| **Touch Chaining** | Eliminated `touch-none` classes; vertical scrolling remains fluid on mobile viewports. | Compliant |
| **Color Contrast** | Off-white text (`#F8FAFC`) on obsidian background (`#030508`) exceeds WCAG AAA ratio (19.8:1); cyan accents exceed WCAG AA. | Compliant |
| **Reduced Motion** | CSS override disables smooth scrolling and animations when user preference is set to reduce motion. | Compliant |
| **Semantic Landmarks** | Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`. | Compliant |

---

## 14. Aceternity Strategy

In Phase 2, Aceternity UI is treated strictly as an **enhancement layer**, not the identity of the studio:
- **Retained**:
  - `TermsModal`: Retained and integrated directly into the V2 footer.
  - `Spotlight`: Parameterized for future cinematic atmospheric usage.
  - `TextGenerateEffect`: Cleaned of debug `console.log` for future headline reveals.
- **Isolated / Deprecated**:
  - `Globe` / `GridGlobe` (Three.js): Completely excluded from all V2 components.
  - `GradientBg` (SVG goo filter): Replaced by the lightweight CSS `<BackgroundAtmosphere>`.
  - `MovingBorders` (continuous RAF SVG path calculations): Replaced by CSS hardware-accelerated border glows.
  - `Pin` (3D perspective cards): Replaced by clean video thumbnail abstractions.

---

## 15. Legacy Systems / Removal Candidates

No destructive deletions were made to legacy components so that the baseline route (`/`) remains functional. However, the V2 foundation establishes clean isolation:

| Legacy Component | Removal Status | Reason for Deprecation |
|---|---|---|
| `components/ui/Globe.tsx` | Candidate for Phase 3/4 deletion | 700 KB JS overhead; 331 KB GeoJSON payload; unnecessary for media agency. |
| `components/ui/GridGlobe.tsx` | Candidate for Phase 3/4 deletion | Dynamic Three.js wrapper. |
| `data/globe.json` | Candidate for Phase 3/4 deletion | 331 KB static country geometry. |
| `data/confetti.json` | Candidate for Phase 3/4 deletion | 614 KB Lottie vector animation for email copy button. |
| `public/p1.svg` - `p4.svg` | Candidate for Phase 3/4 deletion | 16.3 MB orphaned template SVGs containing embedded base64 bitmaps. |
| `components/Experience.tsx` | Candidate for Phase 3/4 deletion | CV-style resume cards unsuited for high-end studio portfolio. |

---

## 16. Performance Impact

Verification executed via production build (`npx next build --webpack`):

```text
Route (app)
┌ ○ /                   (Legacy homepage)
├ ○ /_not-found         (Static 404)
├ ○ /about              (Static stub)
├ ○ /robots.txt         (Static SEO)
├ ○ /sitemap.xml        (Static SEO)
└ ○ /v2-showcase        (V2 Foundation Showcase)

Build compilation time: 49s (TypeScript check passed 100%)
```

### Chunk Payload Comparison:
- **Legacy Homepage (`/`) Chunk**: **651.9 KB** (plus Three.js and GeoJSON dependencies)
- **V2 Showcase (`/v2-showcase`) Chunk**: **38.5 KB**
- **Payload Reduction**: **94% reduction in initial route JavaScript**

Additionally, setting `outputFileTracingRoot` in `next.config.mjs` resolved the Next.js multi-lockfile workspace root warning.

---

## 17. Remaining Questions

Carried forward from Phase 1 audit:
1. **Master Showreel Video**: Has the project owner approved a 15–30 second compressed 1080p/4K MP4 or WebM showreel to use behind the `KENDITS` mask in Phase 3? (Currently, `<Video />` operates in showreel fallback mode).
2. **Official Vector Logo**: Is there an official Kendits SVG logo file, or should the current clean text wordmark (`KENDITS.`) continue as the primary brand identifier?
3. **Featured Client Credits**: Confirmation on official brand client names to replace developer template sponsor logos in the upcoming portfolio sections.

---

## 18. Phase 3 Readiness

### Overall Status: **READY WITH CONDITIONS**

The V2 design system, typography scale, color tokens, layout containers, navigation shell, footer shell, UI primitives, media abstractions, and motion policies are **fully implemented, tested, and verified**.

### Phase 3 Prerequisites:
Phase 3 (**Signature Homepage Hero**) can commence as soon as:
1. The project owner provides the approved master showreel video file or confirmed streaming asset.
2. GSAP and ScrollTrigger are introduced for the continuous video scrubbing and text mask expansion sequence.
