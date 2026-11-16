/**
 * schema.org builders (JSON-LD). Values come from site.ts only.
 */
import type { ImageMetadata } from 'astro';

import { site } from '../config/site';
import { contentImageUrl } from './images';

const personId = `${site.url}/#person`;
const businessId = `${site.url}/#business`;

const areaServed = [
  { '@type': 'City', name: 'Mendoza' },
  { '@type': 'City', name: 'San Juan' },
  { '@type': 'Country', name: 'Argentina' },
];

export const personLd = (): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: site.brand.name,
  jobTitle: site.brand.role,
  description: site.brand.description,
  url: site.url,
  email: `mailto:${site.contact.email}`,
  sameAs: [site.social.instagram.url],
  worksFor: { '@id': businessId },
});

export const businessLd = (image: string): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': businessId,
  name: site.brand.legalName,
  description: site.brand.description,
  url: site.url,
  image,
  email: site.contact.email,
  telephone: `+${site.contact.whatsapp}`,
  founder: { '@id': personId },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Godoy Cruz',
    addressRegion: 'Mendoza',
    addressCountry: 'AR',
  },
  areaServed,
  priceRange: '$$',
  sameAs: [site.social.instagram.url],
});

export const imageObjectLd = async (image: ImageMetadata, caption: string, pageUrl?: string): Promise<Record<string, unknown>> => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: await contentImageUrl(image),
  caption,
  width: image.width,
  height: image.height,
  creator: { '@type': 'Person', '@id': personId, name: site.brand.name },
  creditText: site.brand.name,
  copyrightHolder: { '@id': personId },
  copyrightNotice: `© ${site.legal.copyrightHolder}. Todos los derechos reservados.`,
  ...(pageUrl ? { acquireLicensePage: `${site.url}/#contacto`, url: pageUrl } : {}),
});
