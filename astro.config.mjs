import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: vercel({
  //   webAnalytics: { enabled: true }
  // }),
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
});