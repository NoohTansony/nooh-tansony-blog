// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Update "site" once final domain is decided.
export default defineConfig({
	site: 'https://noohtansony.github.io',
	integrations: [mdx(), sitemap()],
});
