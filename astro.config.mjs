import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), tailwind(), react(), markdoc()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
});