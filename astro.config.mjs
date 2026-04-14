import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jacobmarriott.com',
  integrations: [
    sitemap({
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
});
