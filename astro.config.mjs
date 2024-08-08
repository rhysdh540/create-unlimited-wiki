import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap(), tailwind(), icon()],
  output: "static",
  base: "/create-unlimited-wiki/",
  trailingSlash: "never",
  site: "https://rhysdh540.github.io/create-unlimited-wiki/",
});
