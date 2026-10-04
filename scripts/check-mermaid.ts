// Renders every mermaid block in tracked Markdown with the real Mermaid
// renderer, so a diagram GitHub would fail to draw fails the check instead.
import { run } from "@mermaid-js/mermaid-cli";
import {
  Browser,
  detectBrowserPlatform,
  getInstalledBrowsers,
  install,
  resolveBuildId,
} from "@puppeteer/browsers";
import { $ } from "bun";
import { mkdtemp } from "node:fs/promises";
import { homedir, tmpdir } from "node:os";
import { basename, join } from "node:path";

async function headlessShell(): Promise<string> {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const cacheDir = join(homedir(), ".cache", "smeltery-website");
  const installed = await getInstalledBrowsers({ cacheDir });
  const cached = installed.find((b) => b.browser === Browser.CHROMEHEADLESSSHELL);
  if (cached) return cached.executablePath;
  const platform = detectBrowserPlatform();
  if (!platform) throw new Error("unsupported platform for chrome-headless-shell");
  const buildId = await resolveBuildId(Browser.CHROMEHEADLESSSHELL, platform, "stable");
  console.log(`installing chrome-headless-shell ${buildId} into ${cacheDir}`);
  return (await install({ browser: Browser.CHROMEHEADLESSSHELL, buildId, cacheDir }))
    .executablePath;
}

const files = (await $`git ls-files --cached --others --exclude-standard -- '*.md'`.text())
  .split("\n")
  .filter(Boolean);
const withDiagrams: string[] = [];
for (const file of files) {
  if ((await Bun.file(file).text()).includes("```mermaid")) withDiagrams.push(file);
}

const executablePath = await headlessShell();
const outDir = await mkdtemp(join(tmpdir(), "mermaid-"));
const failures: string[] = [];

for (const file of withDiagrams) {
  try {
    await run(file as `${string}.md`, join(outDir, basename(file)) as `${string}.md`, {
      quiet: true,
      puppeteerConfig: { executablePath, headless: "shell", args: ["--no-sandbox"] },
    });
  } catch (error) {
    failures.push(`${file}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length) {
  console.error(failures.map((f) => `FAIL: ${f}`).join("\n"));
  process.exit(1);
}
console.log(`mermaid ok: ${withDiagrams.length} files rendered`);
