# KENDITS CREATIVE STUDIOS — PHASE 3
## Signature Homepage Hero: KENDITS Mask → Continuous Video Reveal → Fullscreen Transition

**Status:** Execute only after Phase 2 = READY  
**Phase:** 3 of the Kendits V2 redesign  
**Primary objective:** Implement the locked introductory homepage experience using the approved `trialvideo` asset.

---

# 1. PHASE OBJECTIVE

Phase 3 implements the defining visual entrance of Kendits V2.

The homepage must NOT begin with a conventional separate static hero followed by another video section.

The locked concept is one continuous visual sequence:

```text
PAGE LOAD
    ↓
KENDITS DOMINANT ON SCREEN
    ↓
trialvideo IS ALREADY PLAYING BEHIND / INSIDE THE KENDITS MASK
    ↓
USER SCROLLS
    ↓
THE KENDITS MASK EXPANDS
    ↓
MORE OF THE VIDEO IS REVEALED
    ↓
THE MASK OPENS INTO THE FULL VIEWPORT
    ↓
THE SAME VIDEO CONTINUES
    ↓
FULLSCREEN VIDEO
    ↓
TRANSITION INTO THE GOOD STUFF / SELECTED WORK
```

This should feel like one cinematic movement rather than multiple disconnected hero effects.

---

# 2. APPROVED VIDEO ASSET

The approved hero video is named:

```text
trialvideo
```

The agent MUST locate the actual file in the repository or approved media location.

Possible extensions may include:

```text
trialvideo.mp4
trialvideo.webm
trialvideo.mov
```

Do not assume the extension.

First locate it.

If the asset does not exist in the repository or approved media source:

> **STOP the hero implementation and ask the owner to provide/upload the approved `trialvideo` asset.**

Do not substitute:

- Random stock footage.
- Another project video.
- A generated placeholder presented as the real video.

A temporary technical placeholder may be used only for local animation testing, and it MUST be clearly marked as temporary and removed before Phase 3 is considered complete.

---

# 3. HERO CREATIVE CONCEPT

## 3.1 Core idea

The word:

# KENDITS

is the visual gateway into the video.

The video is not simply placed behind the heading.

The typography functions as a mask/window.

Conceptually:

```text
┌─────────────────────────────────────┐
│                                     │
│              KENDITS                │
│       VIDEO VISIBLE THROUGH         │
│             THE LETTERS             │
│                                     │
└─────────────────────────────────────┘
```

The video should already be moving when the user sees the initial state.

---

# 4. INITIAL STATE

On page load:

- The hero occupies the viewport.
- The `KENDITS` wordmark is the dominant visual element.
- The video is playing behind/inside the text mask.
- Video is muted.
- No sound is automatically played.
- The visual should begin quickly using an appropriate poster/fallback.
- The first state should be stable before scroll interaction begins.

The page must NOT first display:

```text
Static hero image
+
separate showreel section
```

That would duplicate the role of the video.

---

# 5. KENDITS TYPOGRAPHY

The hero typography must be extremely large and responsive.

The final size must be determined from the V2 design tokens and viewport behavior.

The typography should:

- Fill a substantial portion of the viewport.
- Remain legible as a word.
- Have enough internal area to display the video clearly.
- Scale fluidly.
- Avoid awkward clipping on mobile.
- Support the eventual mask expansion.

Do not hardcode one desktop size and assume it works everywhere.

---

# 6. MASK IMPLEMENTATION

Preferred implementation:

## SVG mask or equivalent precise masking technique.

The video must appear inside the actual letterforms.

The implementation should support:

- Responsive typography.
- Different viewport widths.
- Smooth scaling.
- Scroll-driven expansion.
- Reliable compositing.
- Good performance.

Do not create the effect by simply placing a video behind text with low opacity.

The visitor must clearly perceive:

> **video is being viewed through the KENDITS letters.**

---

# 7. CONTINUOUS VIDEO BEHAVIOR

The video should start before the scroll animation.

The scroll controls the **mask/reveal**, not the existence of the video.

Desired behavior:

```text
VIDEO TIME
────────────────────────────────────►

MASK STATE
small → medium → large → full
```

The video timeline continues normally.

Do not restart the video when:

- The user begins scrolling.
- The mask expands.
- The video becomes fullscreen.

The fullscreen state should reveal the continuation of the same video timeline.

This continuity is a key part of the experience.

---

# 8. SCROLL EXPERIENCE

Use GSAP + ScrollTrigger for the hero choreography.

The intended conceptual sequence:

```text
STATE 01
KENDITS / MASKED VIDEO

      ↓ scroll

STATE 02
MASK EXPANDS

      ↓ scroll

STATE 03
VIDEO REVEALS MORE OF ITSELF

      ↓ scroll

STATE 04
MASK REACHES / EXCEEDS VIEWPORT EDGES

      ↓ scroll

STATE 05
FULLSCREEN VIDEO

      ↓

STATE 06
THE GOOD STUFF
```

The exact values must be tuned visually.

Do not implement the animation from arbitrary percentages without testing.

---

# 9. HERO PINNING

The hero may use a pinned ScrollTrigger section.

Preferred conceptual model:

```text
Normal document flow
        ↓
Hero enters
        ↓
Hero pins
        ↓
Scroll drives animation
        ↓
Hero completes
        ↓
Pin releases
        ↓
The Good Stuff enters
```

Do not trap the user inside the hero indefinitely.

The scroll distance should feel proportional to the story.

---

# 10. TIMELINE DESIGN

The timeline should have clear stages.

Example conceptual timeline:

```text
0.00
KENDITS stable

0.15
subtle typography movement begins

0.30
mask begins expansion

0.50
video exposure increases

0.70
typography expands strongly

0.90
video approaches fullscreen

1.00
fullscreen visual state

1.00+
handoff to The Good Stuff
```

These values are conceptual only.

Use actual GSAP durations/progress values based on visual testing.

---

# 11. NO REDUNDANT HERO VIDEO

Do NOT create:

```text
Hero video
    ↓
another masked video section
    ↓
another fullscreen showreel
```

Correct:

```text
KENDITS
   ↓
masked trialvideo
   ↓
expanded trialvideo
   ↓
fullscreen trialvideo
   ↓
The Good Stuff
```

---

# 12. TRANSITION INTO THE GOOD STUFF

The fullscreen video should hand off naturally into the first portfolio section.

Preferred conceptual transition:

```text
FULLSCREEN VIDEO
       ↓
video subtly scales / shifts
       ↓
project context begins to appear
       ↓
video becomes first featured project or transitions into portfolio
       ↓
THE GOOD STUFF
```

Avoid an abrupt:

```text
VIDEO ENDS
WHITE PAGE
PORTFOLIO
```

The visual language should remain continuous.

---

# 13. THE GOOD STUFF ENTRY

Phase 3 only needs to prepare the handoff.

If the full portfolio section is not yet built, create a temporary visual placeholder for the downstream handoff.

Do not implement the entire portfolio system as part of Phase 3.

The next phase will build the actual Selected Work / The Good Stuff section.

---

# 14. VIDEO TECHNICAL REQUIREMENTS

The approved hero video should be web-optimized.

Target source variants:

```text
Desktop:
1920 × 1080

Mobile:
1080 × 1920
```

The exact files may differ depending on the approved source.

Support, where appropriate:

- Desktop source.
- Mobile source.
- Poster image.
- Muted autoplay.
- Loop if creative direction requires it.
- PlaysInline.
- Appropriate preload strategy.

Do not unnecessarily download multiple versions simultaneously.

---

# 15. VIDEO LOADING STRATEGY

The hero is above the fold and is the primary visual.

Use an intelligent loading sequence:

```text
Poster / fallback
      ↓
Video metadata
      ↓
Video begins playback when sufficiently ready
      ↓
Hero animation becomes active
```

Do not lock the page waiting indefinitely for video.

If video is delayed:

- Maintain a strong poster/fallback.
- Do not show a broken canvas.
- Do not initiate a half-functional mask sequence.

---

# 16. VIDEO AUTOPLAY RULES

Hero video:

- Muted.
- PlaysInline.
- Autoplay where browser policy permits.
- No automatic sound.

Never force audio playback.

---

# 17. SOUND TOGGLE

A sound control may be prepared but is not required for initial hero completion.

If implemented:

- User-initiated only.
- Clearly understandable.
- Accessible.
- Minimal.
- Does not alter scroll behavior.
- Respects mute state.

Do not allow sound to start automatically.

---

# 18. DESKTOP EXPERIENCE

Desktop should prioritize:

- Large KENDITS typography.
- High-quality video visibility.
- Smooth scrub.
- Strong mask expansion.
- Fullscreen payoff.

Use the full viewport intelligently.

Do not let the typography become unreadably large.

---

# 19. MOBILE EXPERIENCE

Mobile requires a deliberate composition.

Do not simply reuse desktop dimensions.

Use the approved mobile video where available:

```text
1080 × 1920
```

Mobile requirements:

- KENDITS remains readable.
- Mask remains visually meaningful.
- Video remains visible.
- Scroll does not become excessively long.
- Animation remains smooth.
- Touch scrolling is never blocked.
- No hover dependency.
- Reduced-motion fallback works.

If the desktop mask concept becomes technically or visually poor on mobile, create a simplified but conceptually faithful mobile version.

Do not sacrifice usability to preserve identical desktop animation.

---

# 20. REDUCED MOTION

Respect:

```text
prefers-reduced-motion
```

Reduced-motion mode should avoid:

- Large scroll-linked transformations.
- Excessive scale animation.
- Long cinematic pinning.
- Custom cursor motion.

A valid fallback may be:

```text
KENDITS
with video mask
    ↓
controlled/simple reveal
    ↓
fullscreen/static video
    ↓
The Good Stuff
```

The user must still understand the visual concept.

---

# 21. GSAP IMPLEMENTATION RULES

Use GSAP + ScrollTrigger for the main hero choreography.

Requirements:

- Register ScrollTrigger correctly.
- Scope animations to the hero component/container.
- Clean up animations and contexts on unmount.
- Prevent duplicate timelines during development/hot reload.
- Avoid global selectors where possible.
- Use React refs or scoped GSAP contexts.
- Avoid unnecessary React state updates on every animation frame.

Do not drive the entire timeline through React state.

---

# 22. CLIENT BOUNDARY

The hero animation will require browser behavior.

Keep the Client Component boundary as small as practical.

Preferred structure:

```text
Hero section/page structure
    ↓
Client HeroAnimation component
    ↓
GSAP + ScrollTrigger
```

Do not turn the entire homepage into a Client Component simply because the hero is interactive.

---

# 23. PERFORMANCE REQUIREMENTS

This hero is visually heavy.

Performance is part of the implementation, not an afterthought.

Monitor:

- Video decode/playback.
- Main-thread work.
- Scroll smoothness.
- Layout shifts.
- Animation frame rate.
- JavaScript bundle impact.
- Mobile performance.

Do not combine this feature with unnecessary:

- Three.js.
- Large background effects.
- Lottie.
- Multiple independent scroll engines.

---

# 24. IMAGE / VIDEO COMPOSITING

The mask must not cause unnecessary duplicate media playback.

Avoid:

```text
Video A behind mask
+
Video B for fullscreen
```

unless there is a compelling, documented reason.

Preferred:

> One logical `trialvideo` playback instance carried through the visual states.

If browser/compositing limitations require a different implementation, document the reason and ensure synchronization is seamless.

---

# 25. TYPOGRAPHY / VIDEO CROPPING

The agent must visually test the placement of important video subjects.

The mask may crop the video heavily.

Therefore:

- Keep important subjects within flexible safe areas.
- Avoid assuming the center crop always works.
- Test desktop and mobile separately.
- Use `object-position` or an equivalent positioning strategy where necessary.

---

# 26. ERROR / FALLBACK BEHAVIOR

If the video fails:

```text
trialvideo
  ↓ failure
Poster / static visual
  ↓
Static KENDITS experience
  ↓
The Good Stuff
```

No:

- black empty space
- infinite loading UI
- broken video controls
- frozen scroll

---

# 27. BROWSER TESTING

Test at minimum:

### Desktop

- Chrome
- Safari
- Firefox
- Edge

### Mobile

- iOS Safari
- Android Chrome

Test:

- Initial load.
- Autoplay.
- Scrolling.
- Fast scrolling.
- Slow scrolling.
- Scroll reversal.
- Resize.
- Orientation change.
- Tab switching.
- Reduced motion.
- Video failure fallback.

---

# 28. EDGE CASES

Test:

- User enters through a direct URL.
- Browser restores scroll position.
- Page loads while tab is backgrounded.
- User scrolls rapidly.
- User scrolls backwards.
- Window resizes during animation.
- Mobile rotates.
- Video has not buffered enough.
- Video playback is interrupted.

The animation must fail gracefully.

---

# 29. VISUAL QUALITY BAR

The result should feel:

- Premium.
- Cinematic.
- Bold.
- Minimal.
- Intentional.

It should NOT feel:

- Like a demo of GSAP.
- Like a template.
- Like a generic text reveal.
- Like multiple unrelated effects stacked together.

The important thing is:

> **The visitor remembers the KENDITS reveal, not the animation library.**

---

# 30. ACCEPTANCE CRITERIA

The hero is complete only when:

- [ ] `trialvideo` is the approved media source.
- [ ] KENDITS appears as the dominant mask.
- [ ] Video is already playing behind/inside the mask.
- [ ] Scroll expands/reveals the mask.
- [ ] The same logical video experience continues into fullscreen.
- [ ] There is no redundant second hero video.
- [ ] The hero transitions naturally toward The Good Stuff.
- [ ] Desktop is polished.
- [ ] Mobile is intentionally designed.
- [ ] Reduced motion works.
- [ ] Video failure fallback works.
- [ ] No touch scrolling is blocked.
- [ ] No major console errors.
- [ ] Build passes.
- [ ] GSAP animation is properly cleaned up.
- [ ] Performance remains acceptable.
- [ ] Visual QA has been completed.

---

# 31. PHASE 3 OUTPUT

Create:

```text
docs/kendits-v2/phase-3-hero.md
```

Include:

```text
# Kendits V2 — Phase 3 Hero Implementation

## 1. Implemented Experience
## 2. trialvideo Asset Details
## 3. Mask Architecture
## 4. GSAP / ScrollTrigger Architecture
## 5. Video Playback Strategy
## 6. Desktop Behavior
## 7. Mobile Behavior
## 8. Reduced Motion
## 9. Fallbacks
## 10. Performance
## 11. Browser Testing
## 12. Known Limitations
## 13. Questions / Decisions
## 14. Phase 4 Readiness
```

---

# 32. PHASE 4 READINESS

Use exactly one:

```text
READY
READY WITH CONDITIONS
NOT READY
```

Phase 4 will build:

# THE GOOD STUFF / SELECTED WORK

This will transform the hero handoff into the actual portfolio experience.

Do not build the full Phase 4 system during Phase 3.

---

# 33. CORE PRINCIPLE

This is the first flagship interaction of Kendits V2.

Do not optimize for complexity.

Optimize for:

```text
CONTINUITY
+
VISUAL IMPACT
+
RESPONSIVE BEHAVIOR
+
PERFORMANCE
+
MEMORABILITY
```

# KENDITS IS THE MASK.
# TRIALVIDEO IS THE WORLD INSIDE IT.
# SCROLL IS THE REVEAL.
# FULLSCREEN IS THE PAYOFF.
# THE GOOD STUFF IS THE DESTINATION.