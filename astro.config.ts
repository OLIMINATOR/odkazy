import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/static";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    //site: SITE.origin,
    base: "/",
    trailingSlash: "never",
    output: "static",
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

            logger: 1,
        }),
    ],
    adapter: vercel(),
});
