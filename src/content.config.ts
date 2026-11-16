import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { SPECIALTY_IDS } from './config/site';

const orientation = z.enum(['vertical', 'horizontal']);

const credit = z
  .object({
    author: z.string(),
    url: z.url(),
  })
  .optional();

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const photo = z.object({
      src: image(),
      alt: z.string().min(10, 'Write a descriptive alt text (10+ chars).'),
      orientation,
      /** Required for stock photos (Unsplash/Pexels). Mirror it in CREDITS.md. */
      credit,
    });

    return z.object({
      title: z.string(),
      /** URL segment: /trabajos/[slug]. Also used as the entry id. */
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use kebab-case.'),
      category: z.enum(SPECIALTY_IDS),
      location: z.string(),
      date: z.coerce.date(),
      summary: z.string().max(320),
      /** Shown on the home featured grid. */
      featured: z.boolean().default(false),
      /** Cover orientation, drives the card layout in grids. */
      orientation,
      cover: photo.omit({ orientation: true }),
      gallery: z.array(photo).min(8).max(15),
      /** Optional SEO description override (defaults to summary). */
      seoDescription: z.string().max(160).optional(),
      draft: z.boolean().default(false),
    });
  },
});

export const collections = { projects };
