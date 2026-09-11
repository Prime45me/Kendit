# KENDITS CREATIVE STUDIOS — PHASE 2
## Design System + Global V2 Foundation

**Status:** Execute after Phase 1 = READY WITH CONDITIONS  
**Phase:** 2 of the Kendits V2 redesign  
**Primary objective:** Establish the complete visual, structural, responsive, and reusable foundation for the premium V2 website before implementing the signature masked-video hero.

---

# 1. PHASE OBJECTIVE

Phase 2 transforms the findings from Phase 1 into a controlled V2 foundation.

This phase is about **design-system and application infrastructure**, not about completing the homepage or implementing the hero.

By the end of Phase 2, the codebase should have:

- A documented V2 visual language.
- A dark cinematic base.
- A refined green → blue → turquoise Kendits accent system.
- Final typography tokens or approved temporary fallbacks.
- Consistent spacing and layout tokens.
- Responsive breakpoints and container rules.
- Global navigation shell.
- Footer shell.
- Reusable button/link primitives.
- Basic modal/overlay primitive where required.
- Global motion policy.
- Accessibility defaults.
- A clean distinction between Server Components and interactive Client Components.
- A clean place for future GSAP and Motion code.
- A documented media abstraction strategy.
- A stable foundation on which Phase 3 can build the signature hero.

The central principle is:

> **Build the system before building the spectacle.**

---

# 2. RELATIONSHIP TO PHASE 1

Phase 1 discovered that:

- The existing site is an App Router Next.js project.
- The current site contains Aceternity UI effects and a green/blue/turquoise visual language.
- The current hero has no actual video asset.
- The existing code includes substantial template artifacts.
- The client bundle is too heavy due partly to Three.js/Lottie/other legacy functionality.
- Several existing components can be reused or refactored.
- Sanity/CMS is not required.
- The new V2 experience will be multi-page.
- The homepage hero is locked conceptually as:
  `KENDITS mask → continuous video behind/inside text → scroll reveal → fullscreen video → The Good Stuff`.

Phase 2 must respect those findings.

---

# 3. NON-NEGOTIABLE RULES

## 3.1 Do not build the full V2 homepage yet

Do NOT implement:

- Signature KENDITS masked-video hero.
- Final hero video system.
- Hero GSAP timeline.
- Complete Selected Work section.
- Full case-study system.
- Full Services page.
- Full Studio page.
- Full Contact page.

Those belong to later phases.

## 3.2 Do not redesign content during this phase

Content copy can be placed only where required to test components.

Do not spend this phase rewriting:

- Project descriptions.
- Brand story.
- Service copy.
- Testimonials.
- Case studies.

## 3.3 Do not introduce Sanity/CMS

Sanity is not part of the V2 launch foundation.

Use the existing structured content direction.

Future CMS integration must remain possible but should not affect the current architecture.

## 3.4 Do not add Three.js merely for visual effect

Three.js is not part of the default V2 foundation.

If Phase 1 identified legacy Three.js features that are no longer required, Phase 2 may remove or isolate them where that is safe and directly justified.

## 3.5 Do not add every animation library

The intended animation responsibility is:

```text
CSS
→ simple states and transitions

Motion
→ UI-level interaction

GSAP + ScrollTrigger
→ cinematic, timeline-driven storytelling
```

Do not use all three for the same interaction.

---

# 4. PHASE 2 DELIVERABLES

Produce:

1. V2 design tokens.
2. V2 typography system.
3. V2 colour system.
4. V2 spacing/grid system.
5. V2 responsive system.
6. V2 navigation shell.
7. V2 footer shell.
8. Global page/container primitives.
9. Button/link primitives.
10. Modal/overlay primitive where needed.
11. Global motion policy.
12. Accessibility foundation.
13. Server/client boundary conventions.
14. Media abstraction conventions.
15. Removal/isolation plan for legacy visual/template systems.
16. Visual QA page or component showcase for the foundation.
17. Phase 2 implementation report.

---

# 5. PHASE 2 VISUAL DIRECTION

The visual target is:

> **Dark cinematic environment + Kendits green/blue/turquoise energy + strong typography + restrained interaction.**

The site should feel:

- Premium.
- Editorial.
- Cinematic.
- Confident.
- Creative.
- Modern.
- Intentional.

Avoid:

- Generic SaaS aesthetics.
- Overly rounded card-heavy interfaces.
- Excessive glowing borders.
- Random gradients everywhere.
- Excessive glassmorphism.
- Excessive animation.
- Template-like visual patterns.

---

# 6. COLOUR SYSTEM

The final exact values should be derived from the existing Kendits identity and Phase 1 audit rather than invented blindly.

Establish tokens for:

```text
Background / Canvas
Background Elevated
Surface
Surface Elevated
Text Primary
Text Secondary
Text Muted
Border
Accent Green
Accent Blue
Accent Turquoise
Accent Gradient
Focus
Success
Warning
Error
```

The visual hierarchy should be:

```text
Dark neutral canvas
       ↓
Off-white typography
       ↓
Green/blue/turquoise accents
       ↓
Gradient used selectively
```

---

# 7. KENDITS GRADIENT SYSTEM

The green → blue → turquoise identity should be preserved.

Create a reusable gradient token/function rather than hardcoding different gradients everywhere.

Possible conceptual usage:

```text
Hero atmosphere
CTA atmosphere
Active navigation state
Selected accent
Hover state
Decorative ambient glow
```

Do NOT place the gradient behind every section.

The gradient should function as:

> **Kendits' signature energy.**

---

# 8. TYPOGRAPHY SYSTEM

Select the final typography only after checking:

- Existing fonts.
- Brand assets.
- Licensing/availability.
- Performance implications.

Establish:

```text
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
Eyebrow
Navigation
Button
```

Define:

- Font family.
- Weight.
- Size.
- Line height.
- Letter spacing.
- Text transform.

The display typography should support the future KENDITS mask.

Important:

The `KENDITS` hero will eventually rely on very large typography, so the chosen display face must remain effective at extreme sizes.

---

# 9. DESIGN TOKENS

Create a central token system.

At minimum:

```text
Colours
Typography
Spacing
Radius
Shadows
Borders
Z-index
Motion duration
Motion easing
Container widths
Breakpoints
```

Use CSS variables or the project's appropriate Tailwind token system.

Do not scatter magic values throughout components.

---

# 10. SPACING SYSTEM

Create a predictable spacing scale.

Example conceptual scale:

```text
xs
sm
md
lg
xl
2xl
3xl
4xl
5xl
```

The actual numeric values should fit the existing project's Tailwind setup.

Major sections should use consistent rhythm.

---

# 11. CONTAINER / GRID SYSTEM

Establish:

- Global max-width.
- Main content width.
- Wide-media width.
- Full-bleed behavior.
- Side padding.
- Desktop grid.
- Mobile grid.

Recommended conceptual modes:

```text
CONTAINED
→ text/content

WIDE
→ portfolio media

FULL-BLEED
→ cinematic video/image
```

This will become critical for case studies and the hero.

---

# 12. RESPONSIVE SYSTEM

Define explicit behavior for:

```text
Mobile
Tablet
Laptop
Desktop
Wide / Ultrawide
```

Do not simply resize desktop layouts.

Define mobile behavior for:

- Navigation.
- Typography.
- Media.
- Portfolio cards.
- Hero.
- Buttons.
- Modals.
- Motion.
- Horizontal layouts.

The future masked hero must have a deliberate mobile composition, not a desktop crop.

---

# 13. GLOBAL NAVIGATION

Build the V2 navigation shell now, but keep its content minimal.

Target concept:

```text
KENDITS

WORK
SERVICES
STUDIO
CONTACT

START A PROJECT
```

Possible immersive alternative:

```text
KENDITS                    MENU
```

The actual decision should reflect Phase 1 findings and available brand assets.

---

# 14. NAVIGATION REQUIREMENTS

The navigation must:

- Work on all screen sizes.
- Have keyboard navigation.
- Have visible focus.
- Have predictable focus return from a mobile drawer/modal.
- Avoid scroll locking bugs.
- Respect reduced motion.
- Provide accessible labels.
- Not depend on hover.

Desktop may include subtle visual interaction.

Mobile should use a proper drawer/overlay.

---

# 15. LOGO HANDLING

Phase 1 identified that an official vector logo may be missing.

Do not fabricate an official logo.

If an official logo is supplied:

- Optimize it.
- Use the vector where possible.
- Define correct sizing.
- Define light/dark variants if appropriate.

If not supplied:

Use a temporary text/wordmark treatment clearly marked as temporary.

Do not create a fake official brand mark.

---

# 16. GLOBAL FOOTER

Create the structural footer now.

It should support:

```text
KENDITS
Short studio statement

WORK
SERVICES
STUDIO
CONTACT

Social links

Legal / Terms

Copyright
```

The final content may be populated later.

Footer styling should follow the dark cinematic system.

---

# 17. BUTTON SYSTEM

Create reusable button primitives.

Required states:

```text
Default
Hover
Active
Focus
Disabled
Loading (if applicable)
```

Types may include:

```text
Primary
Secondary
Text / Link
Icon
```

Buttons should support the eventual CTA language:

```text
VIEW OUR WORK
START A PROJECT
PLAY SHOWREEL
BOOK A CALL
```

---

# 18. LINK SYSTEM

Create consistent link behavior.

Examples:

```text
VIEW PROJECT →
EXPLORE SERVICES →
ENTER STUDIO →
```

Animation should be subtle.

Examples:

- Arrow movement.
- Underline transition.
- Opacity/colour shift.

Do not create heavy animations for ordinary links.

---

# 19. MOTION FOUNDATION

Define reusable motion constants.

Example:

```text
Fast
Normal
Slow
Cinematic
```

Define easing conventions.

Prefer a small, coherent set.

Do not have twenty unrelated easing curves.

---

# 20. MOTION RESPONSIBILITY

Use:

### CSS

For:

- Simple hover.
- Colour transition.
- Opacity.
- Basic transform.

### Motion

For:

- Menus.
- Modals.
- Buttons.
- Interactive cards.
- Layout transitions.
- Small UI reveals.

### GSAP / ScrollTrigger

Reserved for:

- Hero mask.
- Large typography sequences.
- Pinned sections.
- Scroll storytelling.
- Cinematic case-study sequences.
- Complex timeline choreography.

---

# 21. FUTURE HERO COMPATIBILITY

Phase 2 must prepare for:

```text
KENDITS
    ↓
Video inside mask
    ↓
Scroll
    ↓
Mask expands
    ↓
Fullscreen video
    ↓
The Good Stuff
```

Do not implement the sequence now.

But ensure:

- Typography tokens support very large text.
- Full-bleed media utilities exist.
- Overflow behavior is intentional.
- Section height/pinning utilities are possible.
- Client animation boundaries are clean.
- Video container abstraction can accept responsive sources later.
- Motion preferences can disable the cinematic sequence.

---

# 22. MEDIA ABSTRACTION

Create a reusable media approach.

Do not hardcode video markup across many components.

Future components should be able to consume:

```text
source
poster
alt
priority
mobile source
desktop source
autoplay
muted
loop
controls
```

For images, use the project's Next.js image strategy.

For videos, define a reusable interface so future hero/project media can be optimized consistently.

Do not require a CMS.

---

# 23. LEGACY TEMPLATE ARTIFACTS

Phase 1 found template artifacts including:

- Developer tech badges.
- Template sponsor logos.
- Legacy 3D/Three.js systems.
- Resume/CV-style sections.

Phase 2 should prepare them for removal or isolation.

Do not remove authentic Kendits content.

Remove/retire template content only when its role is confirmed.

---

# 24. THREE.JS / LOTTIE BOUNDARY

Phase 1 identified bundle bloat from:

- Three.js.
- React Three Fiber.
- Three Globe.
- Lottie/confetti.

The V2 foundation should avoid allowing unused legacy systems into the initial route.

Where safe:

- Remove unused imports.
- Isolate legacy components.
- Prevent unnecessary route-level loading.
- Identify code that can be deleted in later phases.

Do not delete functionality blindly.

---

# 25. SERVER / CLIENT RULES

Adopt this V2 convention:

```text
Server Components
→ page structure
→ static content
→ metadata
→ project data

Client Components
→ interaction
→ browser APIs
→ Motion
→ GSAP
→ video interaction where necessary
```

Do not put `"use client"` on root pages unless necessary.

---

# 26. ACCESSIBILITY FOUNDATION

Implement global defaults for:

- Focus visibility.
- Keyboard interaction.
- Reduced motion.
- Accessible buttons.
- Semantic navigation.
- Proper heading structure.
- Colour contrast.
- Touch targets.

Respect:

```text
prefers-reduced-motion
```

Reduced-motion mode should significantly reduce:

- Smooth scrolling.
- Scroll-linked movement.
- Large reveals.
- Custom cursor effects.
- Decorative motion.

---

# 27. CUSTOM CURSOR PREPARATION

Do not make the cursor the primary interaction system.

If prepared in Phase 2, create an abstraction that can later support:

```text
Default
VIEW
PLAY
DRAG
```

Rules:

- Desktop only.
- Touch devices disabled.
- Keyboard interaction unaffected.
- Normal pointer semantics preserved.
- No excessive lag.

Actual cursor visuals may be finalized later.

---

# 28. COMPONENT FOUNDATION

Establish reusable primitives such as:

```text
Container
Section
Button
Link
PageHeader
SectionHeading
Media
Video
Modal
MobileMenu
Navbar
Footer
```

Create only components that have genuine reuse potential.

Avoid premature abstraction.

---

# 29. PAGE SHELL

Create a global page shell that supports:

```text
Navbar
Page content
Footer
```

It must work with:

- Homepage.
- Work.
- Project/case study.
- Services.
- Studio.
- Contact.

Do not build all those pages yet.

The shell should be ready for them.

---

# 30. GLOBAL BACKGROUND SYSTEM

Create an optional atmospheric background layer.

Potential capabilities:

- Dark canvas.
- Subtle gradient glow.
- Noise texture if genuinely useful.
- Section-specific accent glow.

Do not use heavy animated backgrounds globally.

The visual system must permit:

```text
NO ATMOSPHERE
SUBTLE ATMOSPHERE
STRONG ATMOSPHERE
```

based on section requirements.

---

# 31. ACETERNITY UI STRATEGY

Aceternity components can remain in the project where useful.

However:

> Aceternity components must serve the Kendits design system, not dictate it.

Any retained component should be:

- Restyled.
- Accessible.
- Performance-checked.
- Visually consistent.

Do not place a different Aceternity effect in every section.

---

# 32. VISUAL FOUNDATION SHOWCASE

Create a temporary internal development page, story page, or documented component showcase for:

- Typography.
- Colours.
- Buttons.
- Links.
- Navigation.
- Footer.
- Containers.
- Section headings.
- Modal.
- Media placeholders.
- Motion examples.

This is for engineering/design validation and does not need to be public in production.

---

# 33. QUALITY GATE

Before Phase 3, verify:

## Visual

- Dark cinematic foundation is consistent.
- Kendits accent colours are consistent.
- Typography is consistent.
- Spacing is consistent.
- Buttons/links are consistent.
- Navigation looks intentional.
- Footer looks intentional.

## Technical

- No unnecessary new dependencies.
- No unnecessary Client Components.
- Build succeeds.
- Existing useful functionality remains intact.
- No new major console errors.
- No major responsive regressions.

## Accessibility

- Keyboard navigation works.
- Focus is visible.
- Mobile navigation is operable.
- Reduced motion is respected.

---

# 34. PHASE 2 DEFINITION OF DONE

Phase 2 is complete only when:

- [ ] V2 colour tokens exist.
- [ ] Typography system exists.
- [ ] Spacing tokens exist.
- [ ] Container/grid rules exist.
- [ ] Responsive behavior is documented.
- [ ] Navbar shell exists.
- [ ] Mobile navigation exists.
- [ ] Footer shell exists.
- [ ] Button primitives exist.
- [ ] Link primitives exist.
- [ ] Page shell exists.
- [ ] Media abstraction exists.
- [ ] Motion conventions exist.
- [ ] Server/client conventions are applied.
- [ ] Accessibility foundations exist.
- [ ] Legacy visual systems are isolated or documented for removal.
- [ ] No CMS has been introduced.
- [ ] No unnecessary 3D/animation dependency has been introduced.
- [ ] Component showcase/foundation QA exists.
- [ ] Build passes.
- [ ] Phase 3 readiness is documented.

---

# 35. PHASE 2 OUTPUT

Create:

```text
docs/kendits-v2/phase-2-foundation.md
```

Include:

```text
# Kendits V2 — Phase 2 Foundation

## 1. Implemented Foundation
## 2. Design Tokens
## 3. Typography
## 4. Colour System
## 5. Layout / Grid
## 6. Responsive System
## 7. Navigation
## 8. Footer
## 9. UI Primitives
## 10. Motion System
## 11. Media Abstraction
## 12. Server / Client Boundaries
## 13. Accessibility Foundation
## 14. Aceternity Strategy
## 15. Legacy Systems / Removal Candidates
## 16. Performance Impact
## 17. Remaining Questions
## 18. Phase 3 Readiness
```

---

# 36. PHASE 3 READINESS

Use exactly one:

```text
READY
READY WITH CONDITIONS
NOT READY
```

Phase 3 is:

# Signature Homepage Hero

The next phase will implement:

```text
KENDITS
    ↓
VIDEO PLAYING BEHIND / INSIDE TEXT
    ↓
SCROLL-TRIGGERED MASK EXPANSION
    ↓
FULLSCREEN VIDEO
    ↓
THE GOOD STUFF
```

Do not implement Phase 3 during this phase.

---

# 37. CORE PHASE 2 PRINCIPLE

Phase 2 should make the project feel like **Kendits V2 before any major page has been built**.

The system should already communicate:

- Dark cinematic atmosphere.
- Strong typography.
- Kendits colour energy.
- Minimal navigation.
- Premium interaction language.

But it must remain a foundation.

# BUILD THE LANGUAGE.
# BUILD THE SYSTEM.
# DO NOT BUILD THE SPECTACLE YET.
