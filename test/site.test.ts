import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { tools } from "../src/data/site";

const html = await Bun.file("dist/index.html").text();
const attrs = (name: string) =>
  [...html.matchAll(new RegExp(`${name}="([^"]+)"`, "g"))].map((m) => m[1]!);

describe("built page", () => {
  test("has every designed section", () => {
    for (const marker of [
      "Developer tools that cut the friction out of building.",
      'id="tools"',
      'id="principles"',
      "Say hello from your terminal.",
      "forge hot",
    ]) {
      expect(html).toContain(marker);
    }
  });

  test("lists every featured tool with a repo link", () => {
    for (const tool of tools) {
      expect(html).toContain(`href="https://github.com/smeltery/${tool.name}"`);
    }
  });

  test("ships absolute social metadata", () => {
    const og = html.match(/property="og:image" content="([^"]+)"/)?.[1];
    expect(og).toMatch(/^https:\/\/.+\/og\.png$/);
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
  });

  test("references only local assets that exist", () => {
    const local = [...attrs("src"), ...attrs("href")].filter((url) => url.startsWith("/"));
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
