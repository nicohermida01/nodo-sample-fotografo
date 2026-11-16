---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/trabajos/index.astro","src/pages/trabajos/[slug].astro","src/pages/privacidad.astro"]
---

# Surface: Tomás Aguirre Fotografía — full site

Scope: home landing (`/`), portfolio (`/trabajos`), project page (`/trabajos/[slug]`), privacy (`/privacidad`), 404.
Mode: Persuade (home) with Experience (portfolio, project pages). Build path: code-led (no image generation on this machine).

Audience and job: prospective clients (mostly mobile, from Instagram) judge the work in seconds, understand offer + approximate price, ask for availability. Secondary: photographers evaluating the template must see a finished portfolio.
Action: "Consultar disponibilidad" (form at /#contacto), WhatsApp secondary.
Proof/content: 9 placeholder projects (collection), sample packages in ARS, testimonials/clients flagged placeholder (render with a visible "Ejemplo" label). No invented claims.
Constraints: CLAUDE.md (ESTÉTICA → COMPORTAMIENTO) and PRODUCT.md. referencias/ set feel, never content.

## Direction contract

THESIS: A quiet gallery wall that happens to take bookings. Photos are hung, not displayed: generous paper margins, hairline captions, real aspect ratios. Refuses the category default of a dark full-screen slider with a script logo and stacked service cards.

OWN-WORLD: Warm bone paper ground (#F4EFE8), ink #1F1C19, muted #6B645C, hairlines #D8D0C5, one muted terracotta (#9A5536) used only for focus, link underlines and the CTA hover. Display: Instrument Serif, large, sentence case, italic only for the photographer's quiet asides. UI/body: Inter. Captions and metadata: small uppercase Inter with wide tracking, like gallery wall labels. Square-cornered photos, no shadows, 1px rules, rectangular buttons (solid ink primary, underlined secondary).

STORY: First, the work (a photo at full bleed, then a curated hang). Then the person (first-person about text, two overlapping photos). Then the offer, plain and priced ("desde"). Then a frictionless inquiry with WhatsApp always one tap away.

FIRST VIEWPORT: Full-bleed hero photo (slow 3-image crossfade, pausable, reduced-motion = first image only) occupying ~88svh. Bottom-left over a subtle bottom scrim: "Tomás Aguirre" in Instrument Serif at clamp(3.25rem, 1.75rem + 6vw, 6rem), role line in wall-label caps below, tagline in body. Bottom-right: pause control + slide counter. Header above the photo: name left, nav caps center/right, "Consultar disponibilidad" solid button right. Below the fold edge: a single hairline row with the credentials as a plain sentence, not big metrics.

FORM: Gallery wall label system (curated hang with captions as wall labels) — seed: none (pinned) — "Galería contemporánea / editorial de autor: silenciosa, cinematográfica, con mucho aire, precisa, cálida y atemporal; la interfaz casi desaparece." + "hero (foto a sangre o secuencia lenta de 3 fotos con crossfade, pausable, con nombre en display grande y bajada".

Signature interaction: photos reveal with a clip-path mask opening upward on scroll (scroll-driven CSS, IO fallback), staggered in the hang; card cover morphs into the project cover via View Transitions; lightbox with hash per photo. Motion grammar: cubic-bezier(0.22,1,0.36,1), 300–900ms, transform/opacity/clip-path only.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Deploy target and real domain (placeholder).
- Estudio Nodo URL for footer credit (placeholder '#').
