/**
 * Build-time image helpers. Never imported by client scripts.
 */
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import sharp from 'sharp';

import { site } from '../config/site';

const dominantCache = new Map<string, string>();

const toHex = (n: number): string => n.toString(16).padStart(2, '0');

/**
 * Dominant color of the source file, used as the frame background while the photo loads.
 * Falls back to an empty string (the CSS token) when the source path is unavailable.
 */
export async function dominantColor(image: ImageMetadata): Promise<string> {
  const fsPath = (image as ImageMetadata & { fsPath?: string }).fsPath;
  if (!fsPath) return '';
  const cached = dominantCache.get(fsPath);
  if (cached !== undefined) return cached;
  try {
    const { dominant } = await sharp(fsPath).resize(32).stats();
    const hex = `#${toHex(dominant.r)}${toHex(dominant.g)}${toHex(dominant.b)}`;
    dominantCache.set(fsPath, hex);
    return hex;
  } catch {
    dominantCache.set(fsPath, '');
    return '';
  }
}

/** Absolute 1200×630 JPEG for Open Graph / JSON-LD. */
export async function socialImageUrl(image: ImageMetadata): Promise<string> {
  const result = await getImage({ src: image, width: 1200, height: 630, fit: 'cover', format: 'jpg', quality: 80 });
  return new URL(result.src, site.url).href;
}

/** Absolute large JPEG URL (keeps aspect ratio) for ImageObject.contentUrl. */
export async function contentImageUrl(image: ImageMetadata, width = 1600): Promise<string> {
  const result = await getImage({ src: image, width: Math.min(width, image.width), format: 'jpg', quality: 82 });
  return new URL(result.src, site.url).href;
}

/** Aspect ratio as a CSS value. */
export const ratio = (image: ImageMetadata): string => `${image.width} / ${image.height}`;
