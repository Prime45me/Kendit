# KENDITS V2 — PHASE 8
## Contact + EmailJS + Globe

**Status:** Ready for implementation

---

# 1. Phase Definition

Phase 8 is the **Contact + EmailJS + Globe** phase of the Kendits V2 redesign.

Its purpose is to provide the functional endpoint of the site:

> **Turn visitor interest into a real project enquiry.**

The phase consists of exactly three core areas:

```text
CONTACT
+
EMAILJS
+
GLOBE
```

---

# 2. Phase Boundaries

## Included

- `/contact`
- Contact hero
- Contact information
- Project enquiry form
- Validation
- Form states
- EmailJS
- Environment-based EmailJS configuration
- Globe
- Responsive behavior
- Accessibility
- CTA integration

## Excluded

- Homepage redesign
- Selected Work redesign
- Work archive redesign
- Case-study redesign
- Services redesign
- Studio redesign
- People/team system
- CMS introduction
- Full SEO work
- Full performance optimization
- Final QA/polish

---

# 3. Contact Experience

The Contact page should feel like the natural conclusion of the Kendits V2 narrative.

The experience should remain:

- cinematic
- editorial
- minimal
- premium
- typography-led
- restrained

It should not become a conventional corporate contact page.

---

# 4. Route

```text
/contact
```

The route should use the existing page shell/layout/navigation conventions where appropriate.

---

# 5. Contact Hero

The hero should establish a simple invitation to begin a conversation.

Conceptual directions:

```text
LET'S
CREATE.
```

or:

```text
START
A CONVERSATION.
```

Use approved Kendits copy where available.

The hero should remain concise.

---

# 6. Contact Form

The form is the core functional element.

Potential fields:

```text
Name
Company
Email
Project Type
Budget / Range
Project Details
```

Only include fields actually useful to Kendits.

Avoid unnecessary form complexity.

---

# 7. Project Type Integration

Project Type should use the actual confirmed Phase 6 service categories wherever practical.

Concept:

```text
Phase 6 service data
        ↓
Phase 8 project-type options
```

Avoid maintaining a separate conflicting taxonomy.

---

# 8. Form Visual Direction

The form should use the established Kendits editorial style.

Preferred conceptual treatment:

```text
NAME
──────────────────────

EMAIL
──────────────────────

PROJECT TYPE
──────────────────────

PROJECT DETAILS
──────────────────────

SEND ENQUIRY →
```

Avoid generic multi-card form layouts.

---

# 9. Validation

Implement sensible validation for:

- required name
- valid email
- necessary project fields

The user must be able to understand errors without seeing raw technical information.

---

# 10. Form States

The form must support:

### Idle

```text
SEND ENQUIRY →
```

### Submitting

```text
SENDING...
```

### Success

Clear confirmation that the enquiry was sent.

### Error

Clear non-technical recovery message.

During submission, prevent repeated submissions.

---

# 11. EmailJS Architecture

Submission flow:

```text
FORM
  ↓
EMAILJS
  ↓
KENDITS EMAIL
```

No custom backend is required for Phase 8.

---

# 12. EmailJS Configuration

Configuration should not be hard-coded in source components.

Use environment variables or the repository's established environment configuration.

Conceptual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Adapt naming to the repository if an existing convention exists.

Do not commit private credentials.

---

# 13. Email Content

The received message should contain useful submission information.

Conceptual structure:

```text
NEW KENDITS PROJECT ENQUIRY

Name:
Company:
Email:
Project Type:
Budget:

Project Details:
...
```

The actual template should be configured through EmailJS.

---

# 14. Submission Protection

Implement reasonable safeguards:

- disable repeated submission while sending
- client-side validation
- optional lightweight honeypot if appropriate

Do not build a full anti-spam backend in this phase.

---

# 15. Direct Contact Information

Where verified Kendits information exists, the page may also expose direct contact methods.

Examples:

```text
Email
Social
Phone
```

Do not invent any contact details.

---

# 16. Globe

The Globe is the second distinctive feature of Phase 8.

It should reinforce:

```text
Ghana → Global
```

and visually support the Contact experience.

It is primarily a visual/brand interaction.

---

# 17. Globe Placement

Possible compositions include:

```text
CONTACT + FORM          GLOBE
```

or:

```text
CONTACT HERO
FORM
GLOBE
```

depending on the strongest responsive/layout solution.

The Globe should not overpower the form.

---

# 18. Globe Technology

Before adding any package:

- inspect existing dependencies
- inspect existing Three.js/react-three infrastructure
- reuse existing systems if suitable

Only add a globe/3D dependency when necessary.

Avoid unnecessary large packages.

---

# 19. Globe Interaction

Possible behavior:

- ambient rotation
- pointer response
- touch response
- controlled drag
- subtle scroll interaction

The interaction should remain restrained.

The Globe should not become a game or dominate attention.

---

# 20. Ghana Marker / Location

A Ghana/Accra marker may be used where appropriate.

If used:

- geographic positioning must be accurate
- do not imply unsupported office locations
- do not invent global branches
- do not fabricate client locations

The purpose is:

```text
ORIGIN
  ↓
GLOBAL REACH
```

not unsupported business claims.

---

# 21. Reduced Motion

Respect:

```text
prefers-reduced-motion
```

Reduced-motion users should receive:

- minimal/no ambient globe rotation
- reduced page transitions
- full access to all Contact content

Functionality must remain intact.

---

# 22. Mobile Globe

Mobile should use a simplified presentation where necessary.

Possible behavior:

```text
desktop → interactive globe
mobile → lighter interaction/static fallback
```

The actual implementation should be based on performance and usability.

The form remains primary.

---

# 23. Navigation Integration

Primary navigation should route to:

```text
WORK
SERVICES
STUDIO
CONTACT
```

Contact:

```text
/contact
```

Avoid maintaining a redundant `#contact` anchor as the primary Contact route.

---

# 24. CTA Integration

Relevant existing CTAs should flow toward:

```text
/contact
```

Examples:

```text
Work → Start a Project → Contact
Services → Let's Talk → Contact
Studio → Let's Create → Contact
```

Do not redesign previous phases while making these links functional.

---

# 25. Accessibility

The Contact experience must provide:

- semantic labels
- proper form associations
- required-state communication
- accessible errors
- keyboard navigation
- visible focus
- accessible submit state
- accessible success/error messaging

The Globe must not interfere with form accessibility.

---

# 26. Responsive Structure

Desktop may use a composed layout such as:

```text
CONTACT COPY
        +
FORM
        +
GLOBE
```

Mobile should prioritize:

```text
CONTACT
   ↓
FORM
   ↓
GLOBE
   ↓
DIRECT CONTACT
```

The user should never struggle to locate or complete the enquiry form.

---

# 27. Performance Constraints

The Globe should be implemented responsibly.

Avoid:

- excessively complex geometry
- oversized textures
- several simultaneous WebGL scenes
- unnecessary continuous animation
- heavy mobile rendering

Phase 9 performs the final performance assessment.

---

# 28. Content Rules

Use only verified Kendits information.

Do not invent:

- emails
- phone numbers
- addresses
- offices
- international locations
- client locations
- company claims

Missing contact information should be documented rather than fabricated.

---

# 29. Technical Constraints

- Preserve the existing architecture.
- Reuse current components where appropriate.
- Reuse current design/motion conventions.
- Avoid unnecessary dependencies.
- Avoid modifying unrelated application areas.
- Keep EmailJS configuration environment-driven.
- Keep the Contact form maintainable.
- Keep Globe implementation isolated and maintainable.

---

# 30. Completion Criteria

## Contact

- [ ] `/contact` exists.
- [ ] Contact hero exists.
- [ ] Form exists.
- [ ] Form validation works.
- [ ] Submit state works.
- [ ] Success state works.
- [ ] Error state works.
- [ ] Direct contact details are accurate where shown.

## EmailJS

- [ ] EmailJS configured.
- [ ] Environment values used.
- [ ] Submission reaches intended email.
- [ ] Email includes submitted project information.
- [ ] Repeated submission is prevented during send.
- [ ] Technical errors are not exposed directly.

## Globe

- [ ] Globe renders.
- [ ] Interaction works where enabled.
- [ ] Ghana/location representation is accurate where used.
- [ ] Reduced-motion behavior works.
- [ ] Mobile behavior is appropriate.

## Integration

- [ ] Navigation points to Contact.
- [ ] Relevant CTAs point to Contact.
- [ ] Project Type reflects Phase 6 service categories.
- [ ] Existing Phase 3–7 functionality remains intact.

## Technical

- [ ] TypeScript passes.
- [ ] Existing build passes.
- [ ] No runtime errors.
- [ ] No unnecessary dependencies.
- [ ] No unrelated regressions.

---

# 31. Definition of Done

Phase 8 is complete when:

```text
VISITOR
   ↓
CONTACT
   ↓
PROJECT ENQUIRY
   ↓
EMAILJS
   ↓
KENDITS RECEIVES ENQUIRY
```

and the Globe provides a restrained visual expression of:

```text
GHANA → GLOBAL
```

without unsupported business/location claims.

Stop at Phase 8.

Phase 9 begins only after this phase is complete.