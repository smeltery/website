import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://smeltery-labs.vercel.app",
  build: { inlineStylesheets: "always" },
});
