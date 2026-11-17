// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

/**
 * Public site URL (canonical, sitemap, Open Graph, JSON-LD).
 * 1. SITE_URL env var, when set (use it for a custom domain).
 * 2. Vercel's production domain, provided automatically at build time.
 * 3. Placeholder for local builds.
 */
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://tomasaguirre-ejemplo.com');

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'never',

  image: {
    // Sharp (Astro default). It strips EXIF/GPS metadata from generated images.
    service: sharpImageService(),
  },

  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
    icon({
      iconDir: 'src/assets/icons',
      include: {
        lucide: [
          'arrow-left', 'arrow-right', 'chevron-down', 'menu', 'message-circle', 'pause', 'play', 'plus', 'x',
        ],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
