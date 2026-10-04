import { Browser, getInstalledBrowsers } from "@puppeteer/browsers";
import { homedir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const browsers = await getInstalledBrowsers({
  cacheDir: join(homedir(), ".cache", "smeltery-website"),
});
const executablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ??
  browsers.find((browser) => browser.browser === Browser.CHROMEHEADLESSSHELL)?.executablePath;
if (!executablePath) {
  throw new Error("Run bun scripts/check-mermaid.ts to install the shared headless browser.");
}
const output = fileURLToPath(new URL("../public/og.png", import.meta.url));
const renderer = Bun.spawn(
  [
    executablePath,
    "--headless",
    "--no-sandbox",
    "--disable-gpu",
    "--hide-scrollbars",
    "--allow-file-access-from-files",
    "--window-size=1200,630",
    "--force-device-scale-factor=1",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=2000",
    `--screenshot=${output}`,
    new URL("./og.html", import.meta.url).href,
  ],
  { stdout: "inherit", stderr: "inherit" },
);
const exitCode = await renderer.exited;
if (exitCode !== 0) throw new Error(`OG renderer exited with code ${exitCode}`);
console.log(`Rendered ${output}`);
