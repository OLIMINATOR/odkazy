import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import vercel from '@astrojs/vercel/static';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

import { SITE } from './src/config';

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	base: '/',
	trailingSlash: 'never',
	output: 'static',
	integrations: [
		tailwind(),
		sitemap(),
		image(),
		compress({
			css: true,
			html: true,
			img: false,
			js: true,
			svg: false,
		}),
		robotsTxt({
			policy: [
				{
					userAgent: '*',
				},
			],
			sitemap: true,
		}),
	],
	adapter: vercel(),
});
