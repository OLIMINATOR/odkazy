import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap(), image()],
    output: "static",
    adapter: vercel(),
});
