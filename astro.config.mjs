import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://smeltery-website.vercel.app",
  build: { inlineStylesheets: "always" },
});
