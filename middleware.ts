import { next } from "@vercel/functions";
import { GET as directory } from "./src/pages/llms-full.txt";
import { information } from "./src/data/information";
import type { APIContext } from "astro";

export const config = { runtime: "edge" };

export default async function middleware(request: Request) {
  const accept = request.headers.get("accept") ?? "";
  const markdown = accept.split(",").some((part) => {
    const [type, ...parameters] = part.trim().split(";");
    return (
      type === "text/markdown" && !parameters.some((value) => /^\s*q=0(?:\.0*)?\s*$/.test(value))
    );
  });
  if (!markdown || !["GET", "HEAD"].includes(request.method)) return next();
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";
  let body: string;
  let status = 200;
  if (path === "/") {
    const response = await directory({
      site: new URL("https://smeltery-website.vercel.app"),
    } as APIContext);
    body = await response.text();
  } else if (path === "/brand") {
    body =
      "# Smeltery brand assets\n\nDownload the [Smeltery mark](/mark.svg), [favicon](/favicon.png), and [social preview](/og.png). See the [brand page](/brand/) for colors, typography, and usage.\n";
  } else if (Object.hasOwn(information, path.slice(1))) {
    const page = information[path.slice(1) as keyof typeof information];
    body = `# ${page.title}\n\n${page.paragraphs.join("\n\n")}\n\n[Website support](https://github.com/smeltery/website/issues)\n`;
  } else if (/\.[a-z0-9]+$/i.test(path)) {
    return next();
  } else {
    status = 404;
    body =
      "# Page not found\n\nThis address does not exist. Return to the [homepage](/), browse the [sitemap](/sitemap.xml), or read the [project directory](/llms.txt).\n";
  }
  return new Response(request.method === "HEAD" ? null : body, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "no-store",
    },
  });
}
