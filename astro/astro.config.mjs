import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "astro-sanity";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sanity-minimal-starter.netlify.app/",
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [sitemap(), sanity({
    projectId: "8yiyn93s",
    // projectId: "8hj1t7km", // example from template
    dataset: "production",
    apiVersion: "v2021-03-25",
    useCdn: true
  }), tailwind()]
});