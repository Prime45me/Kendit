# KENDITS V2 — PHASE 6
## Services

**Status:** Ready for implementation

---

## 1. Phase Definition

Phase 6 is the **Services** phase of the Kendits V2 redesign.

The purpose of this phase is to communicate:

> **What Kendits can create.**

Phase 6 should transform the studio's capabilities into a premium, cinematic, editorial Services experience.

This phase builds directly on the visual and structural language established in previous phases while remaining strictly within the Services scope.

---

# 2. Phase Boundaries

### Included

- Services page/section
- Services introduction
- Editorial service list
- Expanding service rows
- Service descriptions/outcomes
- Service capabilities
- Service media
- Service → relevant Work connections
- Service-related motion
- Responsive service behavior
- Accessibility for the service interface

### Not included

- Homepage redesign
- “The Good Stuff / Selected Work” redesign
- Work archive redesign
- Case-study redesign
- Studio page
- Contact page
- EmailJS
- Globe
- Final SEO work
- Final performance pass
- Final QA/polish pass

Those belong to later phases.

---

# 3. Strategic Direction

The Services experience takes inspiration from two references.

## 3.1 Kwesiverse principle

Borrow:

- service clarity
- concise descriptions
- outcome-oriented messaging
- easy-to-understand capabilities

The visitor should quickly understand what a service does and why it matters.

Do not copy:

- wording
- layout
- visual identity
- components
- implementation

---

## 3.2 Mosaic06 principle

Borrow:

- service depth
- service → capability relationship
- service → relevant work relationship
- editorial presentation
- connection between capability and proof

The visitor should be able to move conceptually from:

```text
SERVICE
   ↓
CAPABILITIES
   ↓
RELEVANT WORK
```

Do not copy:

- wording
- layout
- visual identity
- page structure
- implementation

---

# 4. Kendits Interpretation

Kendits should reinterpret these principles through its own visual identity.

The Services experience should feel:

- cinematic
- editorial
- premium
- minimal
- typography-led
- visual
- restrained
- production-focused

It should feel like a **creative studio**, not a generic agency template.

---

# 5. Core UI Concept

The core Services interface is an **expanding editorial row system**.

It is intentionally **not a card grid**.

Initial state:

```text
01    FILM & VISUAL PRODUCTION                  →

02    BRAND & CREATIVE DIRECTION                →

03    CONTENT & SOCIAL                          →

04    MOTION & POST                             →

05    DIGITAL EXPERIENCES                       →
```

Expanded state:

```text
01    FILM & VISUAL PRODUCTION                  ↓

      [MEDIA]

      Outcome-oriented description

      Capabilities

      See selected work →
```

Only one service is expanded at a time.

---

# 6. Accordion Behavior

The service interaction must provide:

- one open service at a time
- optional first-row-open initial state
- clicking the open row closes it
- clicking another row switches the open state
- native button interaction
- keyboard support
- correct ARIA state
- correct trigger/panel association
- reduced-motion support

The interface must remain usable without animation.

---

# 7. Service Data Model

The conceptual service model is:

```ts
type Service = {
  index: string;
  title: string;
  outcome: string;
  capabilities: string[];
  media: {
    src: string;
    type: "image" | "video";
    alt?: string;
  };
  workHref?: string;
  workLabel?: string;
};
```

The exact implementation may follow existing repository conventions.

The type should be shared rather than duplicated between components.

---

# 8. Working Service Categories

The following are the current conceptual categories for design exploration:

```text
01 — Film & Visual Production
02 — Brand & Creative Direction
03 — Content & Social
04 — Motion & Post
05 — Digital Experiences
```

These must be validated against actual Kendits content before being treated as final.

Do not invent services to populate the design.

Do not invent capabilities that Kendits has not established.

---

# 9. Service Content

Each service should communicate three things:

### 9.1 What it is

The service title.

### 9.2 What it achieves

A concise, outcome-oriented description.

Concept:

```text
service → problem → outcome
```

### 9.3 What it includes

A concise capability list.

Concept:

```text
Creative Direction
Production
Cinematography
Editing
VFX
Color
```

Only use capabilities supported by actual Kendits content.

---

# 10. Service Media

Each service may have:

- image
- video

Media should support the meaning of the service.

Examples:

### Film & Visual Production

Use actual production/film material.

### Brand & Creative Direction

Use actual brand/identity/campaign work.

### Content & Social

Use actual relevant content work.

### Motion & Post

Use actual motion/VFX/post-production material.

### Digital Experiences

Use actual digital/web/interface material if this service is confirmed.

Do not fabricate assets.

---

# 11. Media Loading Strategy

Media should be mounted/loaded only when required.

Preferred behavior:

```text
CLOSED
  ↓
No heavy service media required

OPEN
  ↓
Mount media
  ↓
Display/play media
```

For video:

- autoplay
- muted
- loop
- playsInline

Do not autoplay all service videos simultaneously.

---

# 12. Service → Work

Each service should connect to relevant existing Work content where possible.

The connection should communicate:

```text
THIS IS WHAT WE OFFER
        ↓
THIS IS HOW WE DO IT
        ↓
THIS IS WHERE YOU CAN SEE IT
```

Use existing Phase 5 project routes/architecture.

Do not recreate the Work archive or case-study system.

CTA wording can remain concise, for example:

```text
See selected work →
```

or another approved equivalent.

---

# 13. Visual Hierarchy

### Closed row

- large service title
- index
- directional indicator
- clear divider
- readable reduced emphasis without appearing disabled

### Open row

- full emphasis
- expanded media
- description
- capabilities
- work link
- directional state

The service title is the dominant element.

Do not allow secondary UI to overpower the typography.

---

# 14. Motion Direction

Motion should be:

- smooth
- restrained
- editorial
- purposeful

Possible behaviors:

- height expansion
- opacity transition
- media reveal
- directional arrow movement
- subtle hover emphasis

Avoid:

- excessive parallax
- unnecessary 3D effects
- excessive bouncing
- decorative animation without purpose
- simultaneous animation of every service

The interaction should feel deliberate.

---

# 15. Accessibility

The Services interface must support:

- keyboard navigation
- native buttons
- `aria-expanded`
- `aria-controls`
- associated panel IDs
- visible focus
- semantic headings
- appropriate alt text
- reduced-motion behavior

Interaction must not depend on hover.

---

# 16. Responsive Design

## Desktop

Use:

- strong typography
- editorial spacing
- horizontal compositions
- integrated media/content layout

## Mobile

Use:

- stacked layout where appropriate
- large but controlled typography
- touch-friendly rows
- always-accessible content
- no hover dependency

Do not simply scale down the desktop composition.

---

# 17. Page Structure

The Services experience may follow this structure:

```text
SERVICES INTRO
       ↓
EDITORIAL SERVICE LIST
       ↓
RELEVANT SELECTED WORK
       ↓
OPTIONAL CONCISE APPROACH/PROCESS
       ↓
PROJECT CTA
```

The editorial service list is the core.

Supporting sections should remain minimal and should use existing approved Kendits content.

---

# 18. Relationship to Other Phases

## Phase 3

Provides the signature cinematic homepage language.

## Phase 4

Provides the curated “The Good Stuff / Selected Work” experience.

## Phase 5

Provides the deeper Work archive and project/case-study system.

## Phase 6

Explains:

> **What Kendits creates.**

## Phase 7

Will explain:

> **Who Kendits is.**

## Phase 8

Will provide:

> **How to contact/work with Kendits.**

## Phase 9

Will perform:

> **Final polish, performance, SEO and QA.**

Phase 6 should not absorb those later responsibilities.

---

# 19. Technical Principles

- Preserve the existing application architecture.
- Follow repository conventions.
- Reuse existing utilities/components.
- Avoid unnecessary dependencies.
- Use the existing animation approach where practical.
- Do not introduce a CMS solely for this phase.
- Do not restructure unrelated application areas.
- Keep service content data-driven where practical.
- Keep heavy media controlled.
- Avoid unnecessary client-side state outside the service interaction.

---

# 20. Completion Criteria

Phase 6 is complete when:

### Content

- [ ] Actual Kendits service categories are confirmed.
- [ ] Service descriptions are approved/accurate.
- [ ] Capabilities are accurate.
- [ ] No invented claims remain.
- [ ] Available service media is integrated.
- [ ] Missing media/content is documented rather than fabricated.

### Interface

- [ ] Services route/section exists.
- [ ] Editorial service list exists.
- [ ] One service opens at a time.
- [ ] Open/closed states are visually clear.
- [ ] Service media is shown appropriately.
- [ ] Service capabilities are visible.
- [ ] Service → Work links function.

### Interaction

- [ ] Keyboard operation works.
- [ ] ARIA state is correct.
- [ ] Reduced-motion behavior works.
- [ ] Hover is not required for functionality.
- [ ] Motion is restrained and consistent.

### Responsive

- [ ] Desktop layout works.
- [ ] Tablet behavior works.
- [ ] Mobile layout works.
- [ ] Touch interaction works.

### Technical

- [ ] No unnecessary dependencies were added.
- [ ] No unrelated sections were changed.
- [ ] No console/runtime errors remain.
- [ ] Existing application behavior remains intact.
- [ ] Project checks pass.

---

# 21. Definition of Done

The finished Phase 6 experience should communicate:

> **What Kendits creates → what capabilities make it possible → where that work can be seen**

through a **cinematic editorial service system**, not a generic collection of cards.

Phase 6 ends there.

Do not proceed into Studio, Contact, EmailJS, Globe, or final Polish/SEO/QA work as part of this phase.