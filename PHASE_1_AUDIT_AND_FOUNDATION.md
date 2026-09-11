# KENDITS CREATIVE STUDIOS — PHASE 1 EXECUTION SPEC

## Phase 1: Audit, Stabilize, and Prepare the Existing Next.js Codebase

**Status:** REQUIRED BEFORE V2 IMPLEMENTATION  
**Phase:** 1 of the Kendits V2 redesign  
**Primary objective:** Understand and stabilize the current website before changing its structure, design, animation system, or content architecture.

---

# 1. PURPOSE

This phase is intentionally **not a redesign phase**.

The agent must first understand the existing Kendits website and codebase so that V2 is built from a known, controlled baseline rather than from assumptions.

The goal is to answer:

- What currently exists?
- What is reusable?
- What is obsolete?
- What dependencies already exist?
- What Aceternity UI components/effects are being used?
- Where is the current single-page structure implemented?
- How are images and videos currently handled?
- What is client-side versus server-side?
- What technical debt could interfere with GSAP/Motion?
- What must be preserved?
- What should be replaced?
- What risks exist before V2 begins?

At the end of Phase 1, the agent should have a **technical map of the existing application** and a safe V2 starting point.

---

# 2. NON-NEGOTIABLE RULES

The agent MUST follow these rules.

## 2.1 Do not redesign yet

Do not begin implementing:

- New homepage visuals
- New hero animation
- KENDITS text mask
- GSAP timelines
- New navigation
- New page architecture
- New CMS
- New portfolio system

Those belong to later phases.

---

## 2.2 Do not remove working functionality prematurely

Do not delete current components, assets, routes, dependencies, or styling simply because they may not appear in V2.

First classify them.

Use:

```text
KEEP
REUSE
REFACTOR
REPLACE
REMOVE
UNKNOWN
```

Only remove something after its role is understood and it is confirmed unnecessary.

---

## 2.3 Do not introduce new libraries without a reason

Phase 1 is not the time to install every planned dependency.

Do NOT automatically install:

- GSAP
- Motion
- Lenis
- Three.js
- Sanity
- Cloudinary SDKs
- Additional UI libraries

Dependency decisions happen after the audit establishes a need.

Existing dependencies must be inspected before changing them.

---

## 2.4 Preserve the current site

The current website must remain recoverable.

Before meaningful code changes:

1. Verify Git status.
2. Create or confirm a clean baseline commit.
3. Create a dedicated V2 development branch if one does not already exist.
4. Do not overwrite the only working version.

Recommended branch:

```text
feat/kendits-v2
```

or equivalent project convention.

---

# 3. PHASE 1 DELIVERABLES

The agent must produce all of the following.

```text
01. CURRENT CODEBASE AUDIT
02. ROUTE MAP
03. COMPONENT INVENTORY
04. DEPENDENCY INVENTORY
05. ASSET / MEDIA INVENTORY
06. STYLING / DESIGN SYSTEM AUDIT
07. ANIMATION / ACETERNITY AUDIT
08. DATA / CONTENT AUDIT
09. PERFORMANCE BASELINE
10. ACCESSIBILITY BASELINE
11. REUSABILITY MAP
12. TECHNICAL RISK REGISTER
13. V2 ARCHITECTURE RECOMMENDATIONS
14. CLEAN V2 DEVELOPMENT BASELINE
```

The findings should be written into:

```text
docs/kendits-v2/phase-1-audit.md
```

If the repository uses another documentation convention, follow it consistently.

---

# 4. STEP 1 — REPOSITORY AND GIT AUDIT

Inspect the repository root.

Record:

- Framework version
- Node version requirement
- Package manager
- TypeScript version
- Build tooling
- Existing scripts
- Environment files
- Deployment configuration
- Git branches
- Git status

Inspect:

```text
package.json
package-lock.json / pnpm-lock.yaml / yarn.lock / bun.lock
tsconfig.json
next.config.*
postcss.config.*
tailwind.config.*
eslint.config.* / .eslintrc.*
prettier config
.env.example / environment documentation
```

Do not expose or copy secret values.

If `.env` files exist, only document the names of relevant variables, never their values.

---

# 5. STEP 2 — APPLICATION STRUCTURE AUDIT

Determine whether the project uses:

- App Router
- Pages Router
- Mixed routing

Map the entire application structure.

Example:

```text
app/
pages/
components/
lib/
public/
styles/
hooks/
utils/
types/
```

Identify:

- Root layout
- Global styles
- Main homepage
- Existing routes
- Dynamic routes
- Error pages
- Loading pages
- Not-found pages
- Providers
- Client components
- Server components

Document the result.

---

# 6. STEP 3 — CURRENT ROUTE MAP

Create an exact route inventory.

Example:

```text
/
```

If other routes exist:

```text
/about
/services
/contact
/portfolio
```

Document:

| Route | File | Purpose | Keep in V2? | Notes |
|---|---|---|---|---|
| `/` | `app/page.tsx` | Current single-page homepage | Yes, redesign | Main migration target |
| `/contact` | ... | Contact | Likely yes | Evaluate |
| ... | ... | ... | ... | ... |

Do not assume the final V2 architecture yet.

---

# 7. STEP 4 — COMPONENT INVENTORY

Find all important React components.

Classify each:

```text
GLOBAL LAYOUT
PAGE-SPECIFIC
UI
ANIMATION
MEDIA
FORM
NAVIGATION
ACETERNITY
UTILITY
LEGACY / UNUSED
```

For each important component document:

```text
Component:
Location:
Purpose:
Used By:
Dependencies:
Client or Server:
Reusable:
V2 Decision:
Reason:
```

Example:

```text
Component: BackgroundBeams
Location: components/ui/background-beams.tsx
Purpose: Decorative animated background
Used By: Homepage
Client or Server: Client
Reusable: Yes
V2 Decision: REASSESS
Reason: Existing visual language may be retained selectively.
```

---

# 8. STEP 5 — ACETERNITY UI AUDIT

The existing site uses Aceternity UI, including a colourful visual treatment around the green / blue / turquoise palette.

The agent must identify every Aceternity component currently used.

Record:

- Component name
- File
- Where it appears
- What effect it creates
- Whether it is essential
- Whether it is decorative
- Whether it should survive V2

Use this classification:

```text
KEEP
KEEP BUT RESTYLE
KEEP BUT RELOCATE
REPLACE
REMOVE
```

Important design principle:

> Aceternity UI is an enhancement layer, not the identity of the entire website.

The new site should preserve the recognizable Kendits green-blue-turquoise energy while moving toward a darker, cinematic, portfolio-first environment.

---

# 9. STEP 6 — DESIGN / STYLING AUDIT

Inspect the current styling system.

Document:

## Colours

Identify all major colours currently used.

Group them into:

```text
Primary
Secondary
Accent
Background
Surface
Text
Muted
Gradient
```

Specifically identify the current:

- Green
- Blue
- Turquoise
- Dark / light values

Do not invent new brand colours during Phase 1.

The final V2 design system will evolve the current identity later.

## Typography

Record:

- Fonts
- Font loading method
- Heading sizes
- Body sizes
- Font weights
- Letter spacing
- Text-transform patterns

Identify any inconsistent typography.

## Layout

Record:

- Max content width
- Grid system
- Section spacing
- Breakpoints
- Container padding
- Existing responsive rules

---

# 10. STEP 7 — MEDIA AND ASSET AUDIT

This is a high-priority area because V2 will be heavily video-driven.

Inspect:

```text
/public
/assets
/images
/videos
```

and any external media sources.

Create an inventory of:

- Images
- Videos
- Logos
- Fonts
- SVGs
- Backgrounds
- Project media
- Poster frames

For each major media asset, document:

```text
File:
Type:
Dimensions:
Approximate size:
Usage:
Current delivery method:
Potential V2 use:
Optimization concern:
```

Pay special attention to:

- Large MP4 files
- 4K files
- Unoptimized PNGs
- Large JPEGs
- Duplicate media
- Background videos
- Autoplay videos

---

# 11. STEP 8 — CURRENT HERO AUDIT

Document exactly how the current homepage opening works.

Record:

- What appears on page load
- Whether there is a video
- Whether video autoplays
- Whether sound exists
- Whether Aceternity effects are present
- What happens on scroll
- What happens on mobile
- Which components control it
- What assets it requires

This is important because the V2 hero is now strategically defined as:

```text
KENDITS MASK
      ↓
VIDEO PLAYING BEHIND / INSIDE MASK
      ↓
SCROLL-DRIVEN MASK EXPANSION
      ↓
FULLSCREEN VIDEO
      ↓
THE GOOD STUFF
```

Do not implement this yet.

Only determine what the existing code can potentially reuse.

---

# 12. STEP 9 — CURRENT CONTENT AUDIT

Identify where current content lives.

Look for:

- Hardcoded project data
- Arrays
- JSON files
- Markdown / MDX
- Static page content
- Props
- API calls
- External services

Create a map.

Example:

```text
Projects:
components/data/projects.ts

Services:
app/page.tsx

Testimonials:
constants/testimonials.ts

Client logos:
public/clients/
```

The V2 launch does NOT require Sanity or another CMS.

Preferred initial direction:

```text
Structured local TypeScript / JSON
+
MDX where rich case-study content is useful
```

The content structure should be separated from presentation so a CMS can be introduced later if a real need appears.

---

# 13. STEP 10 — SERVER / CLIENT AUDIT

This is critical for a Next.js application with animation.

Identify all files using:

```tsx
"use client";
```

For every Client Component ask:

> Does this component actually need to run in the browser?

Record unnecessary client boundaries.

The target V2 architecture should use:

```text
Server Components
    ↓
Content / page structure
    ↓
Client Components only where interaction is required
    ↓
GSAP / Motion / browser APIs
```

Do not convert the whole application to Client Components just to make animation easier.

---

# 14. STEP 11 — DEPENDENCY AUDIT

Create a table:

| Package | Version | Purpose | Used? | V2 Decision |
|---|---|---|---|---|
| Next.js | ... | Framework | Yes | Keep |
| React | ... | UI | Yes | Keep |
| Tailwind | ... | Styling | Yes | Keep |
| Aceternity dependency(s) | ... | Effects | Yes | Review |
| ... | ... | ... | ... | ... |

Classify dependencies:

```text
CORE
USEFUL
DUPLICATE
OUTDATED
UNUSED
RISKY
REPLACE LATER
```

Do not upgrade every package automatically.

Only recommend upgrades where there is a clear compatibility, security, or V2 implementation reason.

---

# 15. STEP 12 — ANIMATION AUDIT

Find all animation-related code.

Look for:

```text
framer-motion / motion
gsap
css animations
transitions
requestAnimationFrame
IntersectionObserver
scroll listeners
Aceternity animation components
```

Document:

- Animation library already in use
- Duplicate animation systems
- Scroll listeners
- Global animation logic
- Potential performance issues

Do not decide that all current animation must be removed.

Determine what is reusable.

---

# 16. STEP 13 — PERFORMANCE BASELINE

Before V2 work begins, establish a baseline.

Test at minimum:

```text
Desktop
Mobile
Slow / throttled network
```

Measure or inspect:

- Initial page load
- Largest media files
- JavaScript size
- Image sizes
- Video loading
- Layout shift
- Long-running animations
- Main-thread workload
- Console errors

Record any known issues.

Do not chase perfect Lighthouse scores during Phase 1.

The purpose is to establish:

> What is wrong today, so V2 can be demonstrably better.

---

# 17. STEP 14 — ACCESSIBILITY BASELINE

Audit:

- Keyboard navigation
- Heading hierarchy
- Image alt text
- Focus states
- Link labels
- Form labels
- Colour contrast
- Reduced motion behavior
- Video controls / meaning

Record existing violations.

Do not perform a complete accessibility redesign yet.

---

# 18. STEP 15 — RESPONSIVE BASELINE

Inspect the current website at:

```text
Mobile
Tablet
Laptop
Desktop
Ultrawide
```

Document:

- Breakpoint behavior
- Navigation behavior
- Overflow problems
- Video behavior
- Typography scaling
- Grid behavior
- Horizontal scroll
- Animation behavior

Especially check whether any current effects already break on touch devices.

---

# 19. STEP 16 — REUSABILITY MAP

At the end of the audit, create three buckets.

## Reuse

Components that can directly survive V2 with little change.

Examples:

```text
Button
Footer
Basic typography
Utility functions
Project data helpers
```

## Refactor

Components whose underlying idea is useful but implementation should change.

Examples:

```text
Navbar
Project cards
Background effects
Hero media component
```

## Replace

Components whose current structure conflicts with V2.

Examples may include:

```text
Single-page navigation
Old hero
Old service layout
Legacy portfolio layout
```

Only mark something REPLACE after inspecting it.

---

# 20. STEP 17 — TECHNICAL RISK REGISTER

Create a risk table.

Example:

| Risk | Severity | Impact | Proposed Response |
|---|---|---|---|
| Large hero video | High | Slow startup | Optimize media pipeline |
| Too many Client Components | High | Larger JS / weaker architecture | Audit boundaries |
| Multiple animation libraries | Medium | Conflicting systems | Define Motion vs GSAP roles |
| Existing CSS conflicts | Medium | Hard-to-predict styling | Establish V2 design layer |
| Mobile hero complexity | High | Poor UX on mobile | Create dedicated responsive strategy |
| Large Aceternity effects | Medium | Performance / visual overload | Keep selectively |

---

# 21. STEP 18 — V2 ARCHITECTURE RECOMMENDATION

Based on the audit, propose the starting architecture.

The intended direction is:

```text
Next.js
TypeScript
Tailwind CSS
Aceternity UI — selective use
Motion — UI interactions
GSAP + ScrollTrigger — cinematic sequences
Optional Lenis — only after testing
Local structured content
MDX — optional for rich case studies
Optimized media delivery
Vercel
```

Important:

## Sanity / CMS is NOT required.

Do not create CMS infrastructure unless the existing project already has it and there is a demonstrated reason to keep it.

---

# 22. CONTENT ARCHITECTURE DIRECTION

For V2 launch, recommend:

```text
content/
├── projects/
├── services/
├── testimonials/
├── clients/
└── site.ts
```

Possible project formats:

```text
projects.ts
```

or:

```text
content/projects/project-name.mdx
```

The final choice should depend on the richness of the current project content.

The important principle is:

> Content should be separate from presentation.

---

# 23. MEDIA ARCHITECTURE DIRECTION

V2 will depend heavily on visual media.

Therefore, establish the direction:

```text
SOURCE MEDIA
    ↓
WEB OPTIMIZATION
    ↓
RESPONSIVE / DEVICE APPROPRIATE ASSET
    ↓
CDN / FAST DELIVERY
    ↓
NEXT.JS PRESENTATION
```

The exact provider can be selected after evaluating current infrastructure.

Do not force a provider into the project during Phase 1 unless the current infrastructure already uses one.

---

# 24. DEFINITION OF DONE

Phase 1 is complete only when all of the following are true:

### Codebase

- [ ] Repository has been inspected.
- [ ] Git status is known.
- [ ] V2 development branch exists.
- [ ] Baseline commit exists.
- [ ] Application structure is documented.
- [ ] Routing is documented.
- [ ] Important components are inventoried.
- [ ] Dependencies are inventoried.

### Visual / Content

- [ ] Current colour system documented.
- [ ] Typography documented.
- [ ] Aceternity usage documented.
- [ ] Current hero documented.
- [ ] Media inventory completed.
- [ ] Content sources identified.

### Architecture

- [ ] Server/client boundaries reviewed.
- [ ] Animation systems identified.
- [ ] Reuse/refactor/replace map created.
- [ ] Technical risks documented.
- [ ] Initial V2 architecture recommendation written.
- [ ] CMS is explicitly marked optional, not required.

### Quality

- [ ] Performance baseline recorded.
- [ ] Accessibility baseline recorded.
- [ ] Responsive baseline recorded.
- [ ] No new major regressions introduced.

---

# 25. REQUIRED OUTPUT DOCUMENT

Create:

```text
docs/kendits-v2/phase-1-audit.md
```

with exactly these major sections:

```text
# Kendits V2 — Phase 1 Audit

## 1. Executive Summary

## 2. Current Stack

## 3. Repository Structure

## 4. Route Map

## 5. Component Inventory

## 6. Aceternity UI Inventory

## 7. Styling / Design System Audit

## 8. Media / Asset Audit

## 9. Current Hero Audit

## 10. Content / Data Audit

## 11. Server / Client Architecture

## 12. Dependency Audit

## 13. Animation Audit

## 14. Performance Baseline

## 15. Accessibility Baseline

## 16. Responsive Baseline

## 17. Reuse / Refactor / Replace

## 18. Technical Risk Register

## 19. V2 Architecture Recommendation

## 20. Phase 2 Readiness Assessment
```

---

# 26. PHASE 2 READINESS ASSESSMENT

At the end of the document, answer:

### Is the codebase ready for V2?

Use exactly one:

```text
READY
READY WITH CONDITIONS
NOT READY
```

If not READY, list the blockers.

Examples:

```text
- Build currently fails
- Existing dependency conflict
- Hero media unavailable
- Critical route broken
- Major styling conflict
```

Do not begin Phase 2 until blockers are either resolved or explicitly accepted.

---

# 27. PHASE 1 AGENT BEHAVIOR

The agent must behave as an engineer performing a technical audit, not as a designer improvising a redesign.

The correct sequence is:

```text
INSPECT
   ↓
DOCUMENT
   ↓
CLASSIFY
   ↓
IDENTIFY RISKS
   ↓
ESTABLISH BASELINE
   ↓
RECOMMEND
   ↓
STOP
```

Do not skip directly from:

```text
INSPECT
```

to:

```text
CODE THE NEW WEBSITE
```

---

# 28. SUCCESS CRITERION

When Phase 1 is complete, another competent engineer should be able to open the audit and understand:

- How the current Kendits website works.
- Where its important code lives.
- What can be reused.
- What needs refactoring.
- What needs replacement.
- What media exists.
- How Aceternity is currently used.
- What technical risks exist.
- What the V2 stack should look like.
- What still needs to be decided.

The purpose of Phase 1 is to remove uncertainty.

# NO GUESSING.
# NO PREMATURE REDESIGN.
# NO UNNECESSARY DEPENDENCIES.
# NO DESTRUCTIVE CHANGES.

Only after this phase is signed off should implementation proceed to the V2 design foundation and homepage architecture.
