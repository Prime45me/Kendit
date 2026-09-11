# KENDITS CREATIVE STUDIOS — PHASE 4
## The Good Stuff / Selected Work

**Status:** Execute only after Phase 3 = READY  
**Phase:** 4 of the Kendits V2 redesign  
**Primary objective:** Build the portfolio experience that follows the signature `KENDITS → masked trialvideo → fullscreen reveal`.

---

# 1. PHASE OBJECTIVE

Phase 4 transforms the hero's visual payoff into the main portfolio experience.

The transition is:

```text
PHASE 3 HERO
    ↓
FULLSCREEN trialvideo
    ↓
VISUAL HANDOFF
    ↓
THE GOOD STUFF
    ↓
SELECTED PROJECTS
```

The goal is to immediately answer:

> **What has Kendits actually made?**

The portfolio must feel editorial, cinematic, selective, and premium.

Do not build a conventional card grid unless the content absolutely requires it.

---

# 2. CREATIVE PRINCIPLE

The homepage should move from:

> **Brand introduction**

to:

> **Creative proof**

The work is the evidence.

The section should feel like:

```text
LARGE MEDIA
+
STRONG TYPOGRAPHY
+
MINIMAL METADATA
+
CONTROLLED MOTION
```

not:

```text
small cards
+
lots of labels
+
generic portfolio UI
```

---

# 3. SECTION INTRODUCTION

The section begins with a strong title.

Possible final copy can be chosen later, but the concept is:

```text
THE GOOD STUFF.
```

Alternative:

```text
SELECTED WORK.
```

or:

```text
MADE BY KENDITS.
```

Do not use multiple competing headings.

The final approved brand voice should determine the exact wording.

---

# 4. HERO → PORTFOLIO TRANSITION

The first project should feel connected to the Phase 3 hero.

Preferred transition:

```text
FULLSCREEN TRIALVIDEO
        ↓
VIDEO SCALE / CROP CHANGES
        ↓
PROJECT CONTEXT APPEARS
        ↓
THE GOOD STUFF TITLE
        ↓
FIRST PROJECT
```

Avoid a hard section break that destroys the cinematic continuity.

---

# 5. PROJECT SELECTION

The homepage MUST NOT display every project.

Select approximately:

```text
4–8 strongest projects
```

depending on the actual quality and available content.

Prioritize:

- Best visual impact.
- Variety of disciplines.
- Strongest client/project stories.
- Recent work.
- Work that represents Kendits accurately.

Do not add weak projects simply to fill space.

---

# 6. PROJECT CATEGORIES

Initial categories:

```text
ALL
PRODUCTION
BRANDING
DESIGN
CONTENT
```

Only display categories that contain real work.

Do not create empty categories.

---

# 7. PROJECT DATA

Each project should have at minimum:

```text
title
slug
category
year
client
thumbnail
preview media
description
```

The eventual case-study system can extend this with:

```text
challenge
solution
role
process
gallery
bts
results
testimonial
```

Do not force all case-study fields into homepage cards.

---

# 8. HOMEPAGE PROJECT CARD

A project card should prioritize the media.

Concept:

```text
┌──────────────────────────────────────┐
│                                      │
│            PROJECT MEDIA             │
│                                      │
│                                      │
└──────────────────────────────────────┘

PROJECT NAME
Client / Category
```

Metadata must remain lightweight.

---

# 9. HOVER-TO-PLAY

Desktop project cards should support muted preview playback.

Default:

```text
poster image
```

Hover:

```text
preview video starts
```

Mouse leaves:

```text
preview stops / resets appropriately
```

Requirements:

- Muted.
- PlaysInline.
- No audio.
- Do not preload every project video.
- Do not start all previews simultaneously.

Use lazy loading and viewport/interaction-aware loading.

---

# 10. MOBILE PROJECT EXPERIENCE

Mobile has no reliable hover interaction.

Therefore:

```text
poster / optimized preview
        ↓
tap
        ↓
project page
```

A short muted preview may autoplay when a card becomes visible if performance permits.

Do not make mobile dependent on hover.

---

# 11. PROJECT CARD INTERACTION

On desktop, a card may use:

```text
image/video
↓
slight scale
↓
metadata reveal
↓
VIEW PROJECT
```

Optional cursor state:

```text
VIEW →
```

Keep the interaction subtle.

---

# 12. PORTFOLIO LAYOUT

Use an editorial layout instead of a repetitive uniform card grid.

Possible pattern:

```text
PROJECT 01
FULL / LARGE

PROJECT 02          PROJECT 03
MEDIUM               MEDIUM

PROJECT 04
FULL / LARGE
```

The exact layout should be determined by actual project media dimensions and content.

The portfolio should feel curated.

---

# 13. FEATURED PROJECTS

One or two projects may receive larger treatment.

Example:

```text
FEATURED
[ LARGE VIDEO ]

Project Name
Creative Direction / Production

VIEW PROJECT →
```

Other projects can use a smaller editorial treatment.

The homepage should have visual rhythm.

---

# 14. FILTERING

If category filters are used, they should feel like a subtle editorial control.

Example:

```text
ALL    VIDEO    BRANDING    DESIGN    CONTENT
```

Changing filters should:

- Avoid full page reload.
- Animate gracefully.
- Preserve layout stability.
- Be keyboard accessible.
- Work without JavaScript failure.

Motion can be used for layout changes.

Do not make the filter animation more visually important than the projects.

---

# 15. NUMBER OF PROJECTS

The homepage should generally show:

```text
4–8 selected projects
```

Then:

```text
VIEW ALL WORK →
```

links to:

`/work`

Do not create an infinite homepage.

---

# 16. PROJECT METADATA

Keep project metadata concise.

Recommended:

```text
PROJECT NAME
CLIENT
CATEGORY
YEAR
```

Do not add unnecessary paragraphs beneath every project.

The detailed story belongs on the case-study page.

---

# 17. CASE STUDY ENTRY

Every displayed project should lead to:

```text
/work/[slug]
```

The project page is where the full story will eventually be told.

The homepage card should create curiosity.

It does not need to explain everything.

---

# 18. VISUAL SPACING

Allow projects to breathe.

Use:

- Large vertical spacing.
- Strong media scale.
- Minimal surrounding UI.
- Full-bleed media when appropriate.

The goal is:

> **Let the work occupy the screen.**

---

# 19. MOTION STRATEGY

Use Motion for:

- Filter transitions.
- Card hover.
- Metadata reveal.
- Small layout movement.

Use GSAP only where the portfolio sequence requires larger cinematic choreography.

Do not automatically animate every card on entry.

---

# 20. SCROLL REVEALS

Simple reveal behavior can be:

```text
project enters viewport
↓
subtle opacity + translation
```

Do not combine:

- scale
- rotate
- blur
- slide
- parallax

all at once.

The photography/video itself should provide most of the visual impact.

---

# 21. CURSOR

If the custom cursor exists from a later/global phase:

Project hover may display:

```text
VIEW
```

or:

```text
PLAY
```

Do not make the cursor essential.

Normal pointer behavior must remain functional.

---

# 22. BEFORE/AFTER

Before/after interaction belongs primarily to the case-study level.

Do not force before/after sliders into the homepage unless a project genuinely benefits from it.

The homepage should stay clean.

---

# 23. PROJECT INTRO TEXT

A short statement may precede the portfolio.

Example direction:

```text
A selection of the things
we've made, shaped, shot,
designed, and brought to life.
```

Final copy should reflect actual Kendits positioning.

Do not invent claims.

---

# 24. PORTFOLIO CTA

At the end of the section:

```text
MORE OF THE GOOD STUFF →

```

or:

```text
VIEW ALL WORK →
```

This should lead to:

`/work`

The CTA should be visually obvious without being aggressive.

---

# 25. FULL WORK PAGE RELATIONSHIP

Homepage:

```text
SELECTED WORK
```

Work page:

```text
FULL PORTFOLIO
```

Do not duplicate exactly the same content in the same order.

The homepage should be curated.

The Work page should be comprehensive.

---

# 26. WORK PAGE PREPARATION

Phase 4 may create or prepare the shared components required for `/work`.

Possible shared components:

```text
ProjectCard
ProjectMedia
ProjectFilter
ProjectGrid
ProjectMeta
```

Do not build the full advanced Work page if it belongs to a later phase.

---

# 27. RESPONSIVE REQUIREMENTS

Test:

```text
Mobile
Tablet
Laptop
Desktop
Ultrawide
```

Check:

- Media aspect ratios.
- Text wrapping.
- Card layout.
- Filters.
- Video previews.
- Touch interactions.
- CTA placement.

---

# 28. MEDIA PERFORMANCE

Project cards can become expensive quickly.

Do not:

- Load every video on first render.
- Autoplay all previews.
- Download full-resolution footage unnecessarily.

Preferred:

```text
poster first
↓
preview loaded when useful
↓
full media only on project page
```

The homepage should remain fast even with multiple visual projects.

---

# 29. ACCESSIBILITY

Ensure:

- Project links are keyboard accessible.
- Filters are keyboard accessible.
- Focus states are visible.
- Videos do not create unusable controls.
- Hover is not required for understanding.
- Screen readers receive meaningful project labels.
- Reduced-motion behavior is respected.

---

# 30. ERROR / FALLBACK

If a project preview video fails:

```text
video
 ↓
poster image
```

Do not show broken video controls or blank space.

---

# 31. QUALITY BAR

The section should feel:

- Editorial.
- Cinematic.
- Premium.
- Spacious.
- Confident.

It should NOT feel:

- Like Behance copied into cards.
- Like a SaaS dashboard.
- Like a generic Masonry template.
- Like every project has identical treatment.

The visitor should feel:

> **I want to see this project.**

---

# 32. ACCEPTANCE CRITERIA

Phase 4 is complete when:

- [ ] Hero handoff into The Good Stuff feels intentional.
- [ ] Selected work is curated.
- [ ] Project cards are media-first.
- [ ] Desktop hover preview works.
- [ ] Mobile does not depend on hover.
- [ ] Filters work where applicable.
- [ ] Project links route correctly.
- [ ] The section has strong editorial rhythm.
- [ ] Media loading is optimized.
- [ ] Accessibility works.
- [ ] Reduced motion works.
- [ ] No major console errors.
- [ ] Build passes.
- [ ] Performance remains acceptable.
- [ ] `/work` relationship is clearly defined.
- [ ] No unnecessary duplication of case-study content.

---

# 33. REQUIRED OUTPUT

Create:

```text
docs/kendits-v2/phase-4-work.md
```

Use:

```text
# Kendits V2 — Phase 4 The Good Stuff

## 1. Implemented Experience
## 2. Hero Handoff
## 3. Portfolio Structure
## 4. Project Selection
## 5. Project Card System
## 6. Hover Preview
## 7. Mobile Behavior
## 8. Filters
## 9. Media Performance
## 10. Accessibility
## 11. Responsive Testing
## 12. Work Page Relationship
## 13. Known Limitations
## 14. Questions / Decisions
## 15. Phase 5 Readiness
```

---

# 34. PHASE 5

The next phase should build:

# WORK ARCHIVE + DEDICATED CASE STUDY SYSTEM

This is where individual projects become complete experiences:

```text
PROJECT HERO
↓
CHALLENGE
↓
KENDITS ROLE
↓
PROCESS
↓
BTS
↓
BEFORE / AFTER
↓
FINAL WORK
↓
RESULTS
↓
NEXT PROJECT
```

Do not implement the entire case-study system inside Phase 4 unless explicitly instructed.

---

# CORE PRINCIPLE

# THE GOOD STUFF IS NOT A GALLERY.
# IT IS THE PROOF.

Make the work large.

Make the UI quiet.

Make the projects irresistible to open.