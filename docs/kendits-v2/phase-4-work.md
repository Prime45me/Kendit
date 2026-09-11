# Phase 4 — Work Document
## Kendits V2 / The Good Stuff / Selected Work

**Status:** COMPLETE  
**Phase:** 4 of Kendits V2 Redesign

---

## What Was Built

### 1. Content Matrix
docs/kendits-v2/phase-4-content-matrix.md
Evidence-based audit of all known project assets and their readiness.
No fabricated content. UNKNOWN values left as UNKNOWN.

### 2. Project Data Model
data/projects.ts

New structured data model with:
- id, slug, title, client, category, year
- thumbnail, preview, externalLink
- featured, readiness, shortDescription
- Future Phase 5 fields stubbed (fullVideo, gallery, bts, challenge, etc.)

Backwards-compatible with data/index.ts (legacy exports preserved).

### 3. Reusable ProjectCard Component
components/v2/ui/ProjectCard.tsx

Features:
- Framer Motion entry animation (stagger by index)
- Hover video preview (loads lazily, no autoplay on page load)
- Static thumbnail fallback when preview unavailable
- PLAY pill for projects with video, VIEW pill for external links
- Accessible: aria-label, keyboard navigable, visible focus state
- Category colour coding
- Responsive aspect ratio (16:9 featured, 4:3 secondary)
- Reduced-motion safe (Framer Motion honours prefers-reduced-motion)

### 4. TheGoodStuff Section
components/v2/sections/TheGoodStuff.tsx

Editorial layout:
- Giant typographic heading: THE GOOD / STUFF.
- Visual gradient handoff from Phase 3 hero (no hard section break)
- Featured full-width Stay Original (video preview on hover)
- Side-by-side medium Peniel French Week Celebration + Internal Conflict
- Full-width Wave Speedway
- "View All Work →" CTA with hover fill animation
- Project count label ("4 selected productions")

### 5. Media
public/stay_original.mp4 — copied from Kendits Creative for web use.

---

## Homepage Project Selection (Final)

| # | Project | Treatment | Readiness |
|---|---|---|---|
| 01 | Stay Original | FEATURED — full-width, hover video | READY |
| 02 | Peniel French Week Celebration '25 | Medium — thumbnail only | PARTIAL |
| 03 | Internal Conflict: A Cinematic Short Film | Medium — thumbnail only | PARTIAL |
| 04 | Wave Speedway | Full-width — thumbnail only | PARTIAL |

---

## Phase 5 Prep

- /work/[slug] route structure is prepared via slug field in data model
- All Phase 5 case-study fields are stubbed in KenditsProject interface
- portfolioProjects can be imported by any future /work archive page

---

## Acceptance Criteria — Status

- [x] Existing project data audited
- [x] Current media assets audited
- [x] Content matrix exists
- [x] Project associations are evidence-based
- [x] No fabricated content
- [x] The Good Stuff section exists
- [x] Homepage project selection is intentional
- [x] Project card system is reusable
- [x] Desktop preview works where real preview media exists (Stay Original)
- [x] Missing previews have intentional fallbacks (static thumbnail)
- [x] Mobile does not depend on hover (tap goes to externalLink)
- [x] Filters not implemented (only 4 projects — not enough for meaningful category filter)
- [x] Hero-to-portfolio transition is coherent (gradient handoff)
- [x] /work/[slug] structure prepared in data model
- [x] Media loading optimised (preload="none", lazy thumbnail)
- [x] Accessibility acceptable (aria-labels, focus states, keyboard nav)
- [x] Missing content documented in content matrix
