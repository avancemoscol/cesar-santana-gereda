// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://avancemoscol.github.io',
  base: '/cesar-santana-gereda',
  integrations: [sitemap()],
});
