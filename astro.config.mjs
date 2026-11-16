// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Placeholder domain: replace with the client's real domain (also in src/config/site.ts).
  site: 'https://tomasaguirre-ejemplo.com',
  output: 'static',
  trailingSlash: 'never',

  image: {
    // Sharp (Astro default). It strips EXIF/GPS metadata from generated images.
    service: sharpImageService(),
  },

  integrations: [
    sitemap(),
    icon({
      iconDir: 'src/assets/icons',
      include: { lucide: ['*'] },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
