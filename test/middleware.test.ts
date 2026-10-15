import { describe, expect, test } from "bun:test";
import middleware from "../middleware";
const request = (path: string, accept = "text/markdown", method = "GET") =>
  new Request(`https://smeltery-labs.vercel.app${path}`, { headers: { accept }, method });

describe("Markdown negotiation", () => {
  test("redirects the old domain while preserving paths and queries", async () => {
    const response = await middleware(
      new Request("https://smeltery-website.vercel.app/brand/?source=link"),
    );
    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe(
      "https://smeltery-labs.vercel.app/brand/?source=link",
    );
  });
  test("returns useful homepage content with cache-safe headers", async () => {
    const response = await middleware(request("/"));
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/markdown");
    expect(response.headers.get("vary")).toBe("Accept");
    expect(await response.text()).toContain("https://github.com/smeltery/harbor");
  });
  test("returns a real Markdown 404 with recovery links", async () => {
    const response = await middleware(request("/missing-page"));
    expect(response.status).toBe(404);
    expect(await response.text()).toContain("[sitemap](/sitemap.xml)");
  });
  test("leaves HTML, rejected Markdown and assets to the static host", async () => {
    for (const req of [
      request("/", "text/html"),
      request("/", "text/markdown;q=0"),
      request("/mark.svg"),
    ]) {
      expect((await middleware(req)).headers.get("x-middleware-next")).toBe("1");
    }
  });
  test("supports information pages and HEAD without a body", async () => {
    expect(await (await middleware(request("/about/"))).text()).toContain("# About Smeltery");
    expect(await (await middleware(request("/", "text/markdown", "HEAD"))).text()).toBe("");
  });
});
