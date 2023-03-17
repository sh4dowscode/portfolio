import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://sh4dowscode.github.io",
  base: "/portfolio",
  output: 'static',
  server: {
    mimeTypes: {
      "text/css": ["css"]
    }
  },
});