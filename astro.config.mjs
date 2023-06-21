import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  site: "https://bd-ranking.vercel.app/",
  output: "static",
  adapter: vercel(),
});
