import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { tools, projectUrl } from "../src/data/site";

const html = await Bun.file("dist/index.html").text();
const attrs = (name: string) =>
  [...html.matchAll(new RegExp(`${name}="([^"]+)"`, "g"))].map((m) => m[1]!);

describe("built page", () => {
  test("has every designed section", () => {
    for (const marker of [
      "Less friction.",
      'id="tools"',
      'id="principles"',
      "data-project-picker",
      'id="skills"',
    ]) {
      expect(html).toContain(marker);
    }
  });

  test("lists every featured tool with its destination", () => {
    for (const tool of tools) {
      expect(html).toContain(`href="${projectUrl(tool.name)}"`);
    }
  });

  test("provides crawlable discovery and recovery pages", async () => {
    const robots = await Bun.file("dist/robots.txt").text();
    expect(robots).toContain("Allow: /");
    expect(robots).toContain("/sitemap.xml");
    const sitemap = await Bun.file("dist/sitemap.xml").text();
    expect(sitemap).toContain("/brand/");
    const directory = await Bun.file("dist/llms-full.txt").text();
    expect(directory).toContain("https://github.com/smeltery/harbor");
    expect(directory).not.toContain("github.com/smeltery/.github");
    expect(await Bun.file("dist/404.html").text()).toContain("Back to Smeltery");
    expect(html).toContain('name="is-agentic-site-type" content="business"');
    expect(html).toContain('type="application/ld+json"');
  });

  test("ships absolute social metadata", () => {
    const og = html.match(/property="og:image" content="([^"]+)"/)?.[1];
    expect(og).toMatch(/^https:\/\/.+\/og\.png$/);
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
  });

  test("references only local assets that exist", () => {
    const local = [...attrs("src"), ...attrs("href")]
      .filter((url) => url.startsWith("/"))
      .map((url) => url.split("#")[0]!);
    expect(local.length).toBeGreaterThan(0);
    for (const url of local) {
      expect(existsSync(`dist${url === "/" ? "/index.html" : url}`)).toBe(true);
    }
  });

  test("makes no third-party requests for scripts, styles, or fonts", () => {
    expect(html).not.toMatch(/<script[^>]+src="https?:/);
    expect(html).not.toMatch(/<link[^>]+rel="stylesheet"[^>]+href="https?:/);
    expect(html).not.toMatch(/fonts\.(googleapis|gstatic)\.com/);
  });
});
