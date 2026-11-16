# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, in this order of priority:

1. **Prospective clients of the photographer** (the site's visitors). Couples planning a wedding,
   people or families wanting portraits, and brands (wineries, restaurants, product makers) in Mendoza,
   San Juan or planning a destination wedding. Many arrive from Instagram on a phone. Their job:
   judge in seconds whether the work is good and has its own eye, understand what is offered and
   roughly what it costs, and ask for a quote or availability for a date.
2. **Photographers evaluating the template** (buyers). Mostly Argentine photographers who would buy
   it from Estudio Nodo. Their job: see a finished, credible portfolio that only needs their own photos,
   copy and prices loaded.

## Product Purpose

A static landing + portfolio site for a photographer, sold by Estudio Nodo as a demo and reusable
template. The demo photographer, "Tomás Aguirre Fotografía" (Mendoza, Argentina), is fictional.
Success for visitors: a quote request or availability inquiry (form or WhatsApp). Success for
buyers: the demo convinces them the template is complete and easy to rebrand.

## Positioning

A gallery-grade portfolio that is also a lead-generation page: the photos lead, and the path to
"Consultar disponibilidad" stays frictionless. As a template, everything brand-specific (copy,
services, packages, contact, projects) is centralized in `src/config/site.ts` and the `projects`
content collection, so rebranding means editing data, not components.

## Operating Context

- Visitors browse on mobile first (Instagram traffic), also desktop.
- Inquiries go through a static-site form service (Web3Forms or Formspree, configured in `site.ts`)
  with WhatsApp and email as fallbacks. In the demo the endpoint is empty and the form shows a demo
  notice instead of sending.
- Deliveries to clients happen in a private online gallery (outside this site).
- Buyers rebrand by editing `site.ts`, swapping images in `src/assets/`, and adding project entries.

## Capabilities and Constraints

- Astro 7 static output, TypeScript strict, Tailwind CSS v4; zero JS outside small islands
  (lightbox, portfolio filter, form, hero sequence).
- Specialties: weddings and events; portraits (personal, family, professional); brand photography
  (product, gastronomy, wineries).
- Planned surfaces: home landing, portfolio with client-side filter, project page
  (`/trabajos/[slug]`) with lightbox, privacy policy.
- Projects: 8–15 photos each with descriptive alt, orientation and optional stock credit; photos keep
  their original aspect ratio on project pages; EXIF stripped on output.
- Targets: WCAG AA, Lighthouse ≥ 95 in all four categories even with heavy galleries.
- Undecided: deploy target and the real production domain (placeholder `tomasaguirre-ejemplo.com`).

## Brand Commitments

- Name: Tomás Aguirre. Tagline: "Fotografía honesta para momentos que no se repiten."
- Voice: warm, confident, no grandiloquence, Rioplatense Spanish, first person.
- Facts of the fictional brand: 9 years of experience, 150+ weddings, works in Mendoza, San Juan and
  destination; studio in Godoy Cruz by appointment (no exact address).
- Contact (fictional): hola@tomasaguirre-ejemplo.com, WhatsApp +54 9 261 000-0000,
  Instagram @tomasaguirre.ejemplo.
- Visible footer line: "Sitio de demostración: el fotógrafo, los trabajos y los precios son
  ficticios" (toggle `demoNotice` in `site.ts`).
- Discreet footer credit "Sitio por Estudio Nodo", configurable in `site.ts` (`studioCredit`).
- Binding visual references live in `referencias/` and are analyzed in `CLAUDE.md`; never copy their
  text, logos, photos or brands.

## Evidence on Hand

- No real photos: all images are generated neutral placeholders labeled with scene and orientation
  (`src/assets/`). `CREDITS.md` lists no third-party images yet.
- Testimonials, clients and publications in `site.ts` are samples flagged `placeholder: true` and
  must never be presented as real. No real media or brands may be named.
- Package prices are plausible ARS examples, not real quotes.

## Product Principles

1. The photos speak first; the interface frames them and never competes.
2. Every page leads to an inquiry without friction: "Consultar disponibilidad" first, WhatsApp second.
3. Close and professional: a real person in first person, clear offer and approximate prices.
4. Honest demo: fictional data is always labeled as such.
5. Rebrand by data: no copy, price or contact detail hardcoded in components.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, visible focus, descriptive alt on every photo, keyboard-navigable lightbox
with focus trap and Esc, accessible form errors, touch targets ≥ 44 px, `prefers-reduced-motion`
respected.
