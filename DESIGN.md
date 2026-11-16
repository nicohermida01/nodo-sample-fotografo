---
name: Tomás Aguirre Fotografía
description: A quiet gallery wall that happens to take bookings.
colors:
  bone-paper: "#f4efe8"
  gallery-ink: "#1f1c19"
  wall-label-grey: "#6b645c"
  hairline: "#d8d0c5"
  muted-terracotta: "#9a5536"
  photo-ground: "#ddd6cc"
  photo-scrim: "rgb(20 17 14 / 0.62)"
  oxide-red: "#9b2f24"
typography:
  display:
    fontFamily: "Instrument Serif, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(3.25rem, 1.75rem + 6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Instrument Serif, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Instrument Serif, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(1.625rem, 1.35rem + 1.1vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 3rem)"
  section: "clamp(5rem, 3rem + 7vw, 10rem)"
  header: "4.5rem"
  container-text: "1320px"
  container-wide: "1600px"
components:
  button-primary:
    backgroundColor: "{colors.gallery-ink}"
    textColor: "{colors.bone-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1.5rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.muted-terracotta}"
    textColor: "{colors.bone-paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.gallery-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1.5rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.gallery-ink}"
    textColor: "{colors.bone-paper}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.gallery-ink}"
    typography: "{typography.label}"
    padding: "0.875rem 0"
  button-on-photo:
    backgroundColor: "transparent"
    textColor: "{colors.bone-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1.5rem"
  button-on-photo-hover:
    backgroundColor: "{colors.bone-paper}"
    textColor: "{colors.gallery-ink}"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.gallery-ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0"
    height: "3rem"
  card-package:
    backgroundColor: "{colors.bone-paper}"
    textColor: "{colors.gallery-ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem 1.5rem 1.5rem"
  nav-link:
    textColor: "{colors.gallery-ink}"
    typography: "{typography.label}"
    height: "2.75rem"
---

# Design System: Tomás Aguirre Fotografía

## Overview

**Creative North Star: "The Quiet Gallery Wall"**

The site is a contemporary gallery that happens to take bookings. Photographs are hung, not displayed: they sit on a warm bone-paper wall at their real aspect ratios, with generous margins, a single hairline caption beneath, and nothing competing for the eye. The interface nearly disappears. Type does the structural work that boxes and colors do elsewhere: a large, sentence-case serif for names and section titles, small tracked uppercase sans for every caption, count and piece of metadata, exactly like wall labels.

Density is low and rhythm is long. Sections are separated by a fluid section space, not by bands of color, and each section heading is a serif title followed by a 1px rule that runs to the container edge. The portfolio "hang" is an asymmetric 12-column wall with deliberate vertical offsets, never a uniform grid. Motion is slow and architectural: photographs open upward through a clip-path mask as they enter, the hero headline rises line by line, a project cover morphs into its page. Everything is square-cornered, flat and ruled.

The system refuses the category default for photographers: a dark full-screen slider with a script logo and stacked service cards.

**Key Characteristics:**
- Warm bone-paper ground, near-black warm ink, one muted terracotta used sparingly.
- Instrument Serif display at large sizes, sentence case; Inter for everything else.
- Wall-label captions: 11px uppercase Inter, 500 weight, 0.2em tracking.
- Square corners everywhere, no shadows, 1px hairline rules as the only structure.
- Photos at their own aspect ratio on a dominant-color ground; cropping only inside fixed-ratio cards.
- Motion grammar: one ease, 300 / 600 / 900ms, transform, opacity and clip-path only.

## Colors

A warm, near-monochrome paper-and-ink palette with a single quiet earth accent; the photographs supply all the color.

### Primary
- **Muted Terracotta** (`muted-terracotta`): the only accent. Used for the keyboard focus ring, the underline color of inline links (`link-accent`), the hover fill of the solid primary button, the package CTA and the form submit, the focus underline of form fields, and the browser `accent-color` and caret. It never fills a surface at rest.

### Neutral
- **Bone Paper** (`bone-paper`): the wall. Page, header, mobile menu, lightbox and package-card background; also the text color on ink and on photographs.
- **Gallery Ink** (`gallery-ink`): all primary text, the solid primary button, the highlighted package border and CTA, text selection fill.
- **Wall-Label Grey** (`wall-label-grey`): secondary text, intros, metadata, counters, FAQ answers, the resting underline of form fields, the scrollbar thumb on hover.
- **Hairline** (`hairline`): every 1px rule: section-heading rules, list dividers, card borders, the scrolled header's bottom edge, the resting underline of text buttons.
- **Photo Ground** (`photo-ground`): the fallback ground behind a loading photograph; each photo actually loads over its own extracted dominant color.
- **Photo Scrim** (`photo-scrim`): bottom-up gradient over the lower 70% of the hero only, so bone-paper text reads on the photograph.

### Semantic
- **Oxide Red** (`oxide-red`): form validation only: invalid field underline, inline error text, error summary border and its focus outline.

### Named Rules
**The One Accent Rule.** Terracotta marks interaction (focus, link underline, hover on the primary action) and nothing else. If it appears on a surface at rest, it is wrong.

**The Photographs Are the Color Rule.** Chrome stays within paper, ink, grey and hairline. No tinted section bands, no colored cards; color belongs to the work.

## Typography

**Display Font:** Instrument Serif 400 (with Iowan Old Style, Times New Roman, serif); the italic is loaded for quiet asides.
**Body Font:** Inter Variable (with Inter, ui-sans-serif, system-ui).
**Label Font:** Inter, uppercase and tracked.

**Character:** A tall, narrow editorial serif set big and calm against a neutral, precise sans. The serif carries names and voice; the sans carries information.

### Hierarchy
- **Display** (400, `display`, line-height 0.95, -0.015em): the photographer's name in the hero only, entering line by line.
- **Headline** (400, `headline`, line-height 1): section titles, the contact title, the footer's closing line.
- **Title** (400, `title`, line-height 1.1): package names, specialty titles, testimonial quotes, the specialty group titles. Card titles scale with their container (`clamp(1.125rem, 0.5rem + 5cqi, 2.25rem)`); FAQ questions and portfolio filter options use serif at intermediate fluid sizes.
- **Lead** (400, `lead`, 1.5): hero tagline (max 30ch), first paragraph of the about text, contact intro (max 36ch).
- **Body** (400, `body`, 1.65): running text, kept to 52–62ch.
- **Small** (400, 0.875rem, 1.55): package inclusions, hints, errors, notes, footer lists.
- **Label** (500, 0.6875rem, 0.2em tracking, uppercase): captions, metadata, nav links, buttons, form labels, counters.

### Named Rules
**The Wall Label Rule.** Every caption, metadata line, count and control label is the uppercase tracked label. Labels sit beside or below what they describe, never as a tag line above a heading.

**The Sentence Case Serif Rule.** Display and headings are always sentence case, weight 400, with `text-wrap: balance`. Italic is reserved for the photographer's own quiet asides (the about signature); it is never used for emphasis or decoration.

**The Tabular Count Rule.** Slide counters, photo counts, filter counts, prices, process numbers and phone numbers use tabular numerals.

## Layout

Two containers carry all content: a text container (max 1320px) for headings, copy, pricing, FAQ and contact, and a wide container (max 1600px) for the header, the hero content and the portfolio wall. Both pad with the fluid `gutter`. Sections are separated only by the fluid `section` space at the top of each section; the sticky header is `header` tall and scroll padding accounts for it.

The featured hang is a 12-column wall with fluid column gap (`clamp(0.75rem, 2vw, 2rem)`) and a large row gap (`clamp(3rem, 7vw, 7rem)`). It leads with one 16:9 piece at full width, then alternates verticals and horizontals into offset slots (spans of 4, 7 and 9 columns, with 6–8rem top offsets on some pieces) using dense auto-flow. Below 40rem every piece is full width; from 40rem verticals pair in halves. Project galleries pair photos in rows sized by their own aspect ratios, and isolate single photos at 75% width with extra air.

Two-column text sections use asymmetric splits (5fr / 7fr for contact and FAQ, 6fr / 5fr for about), collapsing to one column below 64rem. Breakpoints are 40rem, 48rem and 64rem; 64rem switches the header from the full-screen menu to inline nav plus the primary CTA. Every interactive target is at least 2.75rem (44px) tall.

**The Hang, Not Grid Rule.** Portfolio pieces keep their orientation and are placed with asymmetry and vertical offsets. A uniform card grid is the wrong answer on the home wall.

## Elevation & Depth

The system is completely flat. There are no shadows on any surface. Depth comes from the photographs themselves, from hairline rules and from overlap: the about section layers a secondary photo over the portrait's corner, and the hero layers type over a scrim. The only `box-shadow` in the build is a 1px accent line under a focused form field, a thickened underline rather than elevation.

**The Flat Wall Rule.** Nothing floats. Separation is a 1px hairline or empty space, never a shadow or a raised card.

## Shapes

Every corner is square (`rounded.none`): photographs, buttons, inputs, package cards, the lightbox controls, the placeholder tag. Borders are 1px only, in hairline for structure and ink for emphasis (highlighted package, outline buttons). Section headings extend into a 1px rule; credentials are separated by short 2.5rem hairline dashes; form fields are a single bottom line with no box.

**The Square Frame Rule.** Photographs are never rounded, masked into shapes or framed with borders; the frame is the paper around them.

## Components

### Buttons
Rectangular, typographic and quiet: the label style does the work.
- **Shape:** square corners, 1px border, minimum 2.75rem tall; `md` padding 0.875rem 1.5rem, `sm` 0.625rem 1rem.
- **Primary:** solid gallery ink with bone-paper label; hover fills muted terracotta (300ms).
- **Secondary:** 1px ink outline, transparent; hover inverts to solid ink.
- **Text:** no box, hairline underline offset 0.45em; hover turns the underline terracotta.
- **On photo:** 1px bone-paper outline over imagery; hover fills bone paper with ink text.
- **Focus:** the global 2px terracotta outline at 3px offset.
- **Submit:** the form's primary is wider (min 18rem), with the label left and an arrow right.

### Package Cards
- **Corner Style:** square.
- **Background:** bone paper, 1px hairline border; the highlighted package switches the border to ink and its CTA to solid ink.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Internal Padding:** head 1.75rem 1.5rem 1.5rem; inclusions as hairline-divided rows in small text; price set as a "desde" label plus a 1.5rem tabular amount.
- **CTA:** a full-width bottom row divided by a hairline, label left and arrow right; hover fills terracotta and nudges the arrow 0.25rem.

### Inputs / Fields
- **Style:** underline only: transparent, no radius, 1px wall-label-grey bottom line, 3rem tall, labels in the label style above.
- **Hover:** underline darkens to ink.
- **Focus:** underline turns terracotta with a 1px terracotta line beneath; no outline box.
- **Error:** underline and message in oxide red; an error summary box with a 1px oxide-red border takes focus on submit.
- **Checkbox:** native, 1.25rem, ink accent color.

### Navigation
- **Header:** sticky, bone paper, transparent bottom border that becomes a hairline once scrolled. Name in serif (1.625rem) with the role as a grey label beside it.
- **Links:** label style in ink; an underline draws in from the left on hover, focus and for the current page (600ms).
- **Mobile:** below 64rem a full-screen bone-paper dialog with serif links at `clamp(2.5rem, 10vw, 3.5rem)` that rise in sequence, the primary and WhatsApp buttons at the bottom.
- **Sticky inquiry bar (mobile):** a two-cell bar (ink primary, paper WhatsApp) that slides up only over text and hides whenever a photo, the hero, the contact form or the footer reaches its band.

### Project Card (signature)
A hung photograph with a wall-label caption: cover in a fixed 4:5 or 3:2 frame (or the slot's ratio), title in container-scaled serif, category in ink and place in grey as labels below. On hover the photo scales to 1.03 over 900ms and a label cue with an arrow slides in from the left; it is dropped in narrow cards. The cover shares a view-transition name with the project page cover so it morphs on navigation.

### Section Heading (signature)
A serif headline followed on the same baseline by a 1px hairline that runs to the container edge, with an optional grey intro (max 52ch) beneath. On narrow screens the rule wraps under the title at full width.

### Lightbox
A full-screen bone-paper dialog, not a dark overlay: photo contained within the viewport at its own ratio, tabular counter in the top bar, square 3rem icon buttons with hairline borders that darken to ink on hover, side arrows on desktop. Slides crossfade (600ms) and each photo has its own URL hash.

### Motion Grammar
One easing (`cubic-bezier(0.22, 1, 0.36, 1)`) and three durations (300ms state changes, 600ms reveals and underlines, 900ms photo masks, hero crossfade and line entries). Photos reveal with a clip-path mask opening upward from 14% while rising 24px, scroll-driven where supported and IntersectionObserver otherwise, staggered in steps of 8% of the entry range (90ms in the fallback). Text rises 20px with opacity. The hero headline lines enter 120ms apart. Content is visible by default; every animation is gated on `prefers-reduced-motion: no-preference`, and reduced motion also stops the hero sequence at its first photo.

## Do's and Don'ts

### Do:
- **Do** hang photographs at their real aspect ratio over their dominant color, and crop only inside a fixed-ratio card frame.
- **Do** caption every piece with the label style (0.6875rem, 500, 0.2em, uppercase) below or beside it.
- **Do** separate with 1px hairline rules and the fluid section space; end section headings with a rule to the container edge.
- **Do** keep terracotta to focus, link underlines and the hover of the primary action.
- **Do** use only the motion grammar: one ease, 300 / 600 / 900ms, transform, opacity and clip-path, with reduced motion honored.
- **Do** keep every target at least 2.75rem tall and every photo ground set before it loads.
- **Do** mark placeholder testimonials with a visible hairline-bordered "Ejemplo" label.

### Don't:
- **Don't** use a dark full-screen slider, a script logo or stacked service cards; that is the category default this system refuses.
- **Don't** round any corner or add any shadow; the wall is flat and square.
- **Don't** put uppercase labels above headings as tag lines; labels caption things, they don't announce sections.
- **Don't** use the serif in bold, in all caps, or italic for emphasis; italic belongs only to the photographer's asides.
- **Don't** fill surfaces with terracotta or tint section backgrounds; the photographs supply the color.
- **Don't** lay the home portfolio out as a uniform grid of equal cards.
- **Don't** animate layout properties or add bounce; motion is slow masks and rises only.
