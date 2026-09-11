# KENDITS V2 — PHASE 7
## Studio

**Status:** Ready for implementation

---

## 1. Phase Definition

Phase 7 is the **Studio** phase of the Kendits V2 redesign.

Its purpose is to communicate:

> **Who Kendits Creative Studios is.**

The page should establish the studio's identity, story, philosophy, values, creative approach, and atmosphere behind the work.

The page should feel like the **studio behind the work**, rather than another portfolio or agency information page.

---

# 2. Phase Boundaries

## Included

- `/studio`
- Studio hero/introduction
- Who Kendits is
- Brand Story
- Studio philosophy
- Approved values
- Creative approach / working philosophy
- Behind-the-work / BTS visuals
- Studio imagery/video where available
- Closing CTA toward Contact
- Responsive implementation
- Accessibility
- Studio-specific motion

## Excluded

- People
- Team members
- Founder profiles
- Team roles
- Services redesign
- Work archive
- Case studies
- Homepage redesign
- EmailJS
- Contact implementation
- Interactive globe
- Final SEO
- Final performance optimization
- Final QA/polish

---

# 3. Core Narrative

The page should follow this general storytelling sequence:

```text
WHO WE ARE
      ↓
OUR STORY
      ↓
HOW WE THINK
      ↓
WHAT WE BELIEVE
      ↓
HOW WE WORK
      ↓
BEHIND THE WORK
      ↓
LET'S CREATE
```

The actual page may adjust section order where the visual narrative requires it.

---

# 4. Studio Hero

The Studio opening should immediately establish:

- Kendits identity
- creative-studio positioning
- visual tone

Use approved Kendits copy wherever possible.

Visual language:

- large typography
- cinematic imagery/video
- negative space
- restrained movement
- editorial composition

Do not introduce unsupported brand claims.

---

# 5. Who Kendits Is

This section introduces the studio itself.

It should communicate:

- what Kendits is
- what kind of creative work it engages in
- its broader creative purpose
- relevant Ghanaian/contextual identity where supported

Copy should remain concise.

Avoid long corporate biographies.

---

# 6. Brand Story

Use existing approved Kendits Brand Story material.

The story should communicate:

- why Kendits exists
- what motivates it
- what it aims to create
- the thinking behind the studio

Present this through editorial composition rather than a single uninterrupted text block.

Possible pattern:

```text
STATEMENT
   ↓
SUPPORTING COPY
   ↓
VISUAL
   ↓
STATEMENT
   ↓
SUPPORTING COPY
```

Do not fabricate historical information.

Missing content should be documented rather than invented.

---

# 7. Studio Philosophy

Communicate how Kendits approaches creative work.

The philosophy may address:

- storytelling
- creative thinking
- craft
- visual direction
- intentionality

Use approved Kendits language where available.

Avoid invented slogans.

---

# 8. Values

Current approved project values:

```text
Excellence
Integrity
Discipline
Respect
Teamwork
Creativity
Godliness
```

**Compassion is not automatically included.**

It may only be added if confirmed as approved Kendits content.

The values should be presented editorially.

Avoid:

```text
┌──────────┐
│ VALUE 1  │
└──────────┘
```

Use large typography, lists, progressive reveals, or another restrained editorial treatment.

---

# 9. Creative Approach / How We Work

This section communicates the studio's approach rather than its services.

Conceptual structure:

```text
UNDERSTAND
     ↓
EXPLORE
     ↓
CREATE
     ↓
REFINE
     ↓
DELIVER
```

The exact stages must reflect actual Kendits practice where source material exists.

Do not invent a process simply to fill a design section.

---

# 10. Behind the Work

Use available BTS material to reveal the atmosphere and making of Kendits work.

Possible material:

- production photography
- BTS video
- filming
- editing
- color grading
- sets
- creative process
- working environments

The purpose is to show the **making behind the output**.

This differs from Phase 5:

```text
Phase 5
BTS → explains a project

Phase 7
BTS → explains the studio atmosphere/process
```

Do not recreate project case studies.

---

# 11. Studio Reel

A Studio reel may be used when suitable BTS/studio footage exists.

It should:

- complement the homepage signature video
- focus on studio/process atmosphere
- avoid redundant hero behavior
- use optimized media
- avoid unnecessary simultaneous playback

A reel is optional and should not be forced when suitable assets are unavailable.

---

# 12. Services Relationship

Phase 7 must not duplicate Phase 6.

A small route may be provided:

```text
EXPLORE OUR SERVICES →
```

leading to:

```text
/services
```

The complete Services experience remains in Phase 6.

---

# 13. Work Relationship

Phase 7 must not recreate Phase 5.

Where useful, Studio may show selected existing work/BTS references.

Possible relationship:

```text
FROM THE STUDIO
        ↓
SELECTED VISUALS
        ↓
SEE THE WORK →
```

Use existing Work architecture.

---

# 14. Closing CTA

The Studio page should end with a clear transition toward Contact.

Concept:

```text
HAVE SOMETHING
WORTH CREATING?

LET'S TALK →
```

The CTA may point to `/contact`.

EmailJS and contact-system implementation belong to Phase 8.

---

# 15. Motion Direction

Studio motion should feel atmospheric and editorial.

Suitable patterns:

- text reveal
- typography masking
- image reveal
- subtle scroll movement
- restrained parallax
- section transitions
- video reveal
- staggered text

Avoid excessive animation.

Motion should establish pacing rather than visual noise.

---

# 16. Editorial Direction

The visual composition should use:

- oversized typography
- strong hierarchy
- generous whitespace
- asymmetric compositions
- intentional image placement
- full-width cinematic moments
- restrained supporting text

Avoid generic agency layouts and card grids.

---

# 17. Responsive Behavior

## Desktop

May use:

- large type
- asymmetric layouts
- layered compositions
- cinematic spacing

## Mobile

Should prioritize:

- vertical narrative
- controlled typography
- readable text
- simpler composition
- touch-friendly interaction

Desktop effects should not be blindly compressed onto mobile.

---

# 18. Accessibility

The implementation must provide:

- semantic headings
- meaningful alt text
- keyboard access
- visible focus states
- reduced-motion support
- readable contrast
- understandable content without animation

---

# 19. Media Handling

Use sensible media loading.

Preferred approach:

```text
Above fold
→ optimized media

Below fold
→ lazy loading

Large video
→ web-appropriate encoding

Mobile
→ lighter media where practical
```

Avoid multiple unnecessary autoplay videos.

Final performance work belongs to Phase 9.

---

# 20. Content Rules

Use only:

- approved Kendits Brand Story content
- approved values
- verified studio information
- actual BTS/studio assets

Do not invent:

- people
- team roles
- awards
- statistics
- testimonials
- clients
- unsupported claims
- fabricated history

Missing content/assets should be documented.

---

# 21. Technical Constraints

- Preserve current architecture.
- Follow repository conventions.
- Reuse existing components.
- Reuse existing animation conventions.
- Avoid unnecessary dependencies.
- Do not introduce a CMS solely for this phase.
- Do not restructure unrelated application areas.
- Keep Studio content maintainable.
- Avoid modifications outside Phase 7 unless required for integration.

---

# 22. Completion Criteria

## Structure

- [ ] `/studio` exists.
- [ ] Studio hero exists.
- [ ] Who-we-are section exists.
- [ ] Brand Story is represented where approved content exists.
- [ ] Philosophy is represented.
- [ ] Values are represented.
- [ ] Creative approach is represented where supported.
- [ ] BTS/studio visual section exists where assets allow.
- [ ] Closing CTA exists.

## Explicitly excluded

- [ ] No people/team section.
- [ ] No founder profile.
- [ ] No team-role system.

## Visual

- [ ] Premium.
- [ ] Cinematic.
- [ ] Editorial.
- [ ] Typography-led.
- [ ] Consistent with existing Kendits V2 language.
- [ ] No generic card-grid presentation.

## Interaction

- [ ] Motion is restrained.
- [ ] Reduced-motion behavior works.
- [ ] Keyboard access works.
- [ ] Links work correctly.

## Responsive

- [ ] Desktop works.
- [ ] Tablet works.
- [ ] Mobile works.
- [ ] No functionality depends on hover.

## Technical

- [ ] TypeScript passes.
- [ ] Existing build passes.
- [ ] No runtime errors.
- [ ] No unnecessary dependencies.
- [ ] No unrelated regressions.

---

# 23. Definition of Done

Phase 7 is complete when the Studio experience communicates:

```text
WHO KENDITS IS
      ↓
WHAT KENDITS BELIEVES
      ↓
HOW KENDITS THINKS
      ↓
HOW THE WORK IS APPROACHED
      ↓
THE ATMOSPHERE BEHIND THE WORK
```

through a cinematic, editorial experience.

The people/team layer is intentionally excluded from this phase.

Stop at Phase 7. Do not proceed into Phase 8 or Phase 9.