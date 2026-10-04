import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://smeltery.dev",
  build: { inlineStylesheets: "always" },
});
