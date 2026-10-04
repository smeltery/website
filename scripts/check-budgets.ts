// Fails when a tracked file exceeds its line budget or a directory holds more
// direct files than its budget. Budgets and justified exceptions live in
// scripts/budgets.json; lockfiles and binary assets are excluded outright.
import { $ } from "bun";

interface Budgets {
  default_lines: number;
  files: Record<string, number>;
  default_files: number;
  directories: Record<string, { limit: number; reason: string }>;
}

const budgets: Budgets = await Bun.file(process.argv[2] ?? "scripts/budgets.json").json();
const tracked = (await $`git ls-files --cached --others --exclude-standard`.text())
  .split("\n")
  .filter((path) => path && !path.startsWith(".flox/") && path !== "bun.lock");

const failures: string[] = [];

for (const path of tracked.filter((p) => /\.(astro|ts|mjs|css|md|ya?ml|json|toml)$/.test(p))) {
  const file = Bun.file(path);
  if (!(await file.exists())) continue;
  const lines = (await file.text()).split("\n").length - 1;
  const budget = budgets.files[path] ?? budgets.default_lines;
  if (lines > budget) failures.push(`${path}: ${lines} lines > budget ${budget}`);
}

const perDirectory = new Map<string, number>();
for (const path of tracked) {
  const dir = path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : ".";
  perDirectory.set(dir, (perDirectory.get(dir) ?? 0) + 1);
}
for (const [dir, count] of perDirectory) {
  const limit = budgets.directories[dir]?.limit ?? budgets.default_files;
  if (count > limit) failures.push(`${dir}/: ${count} files > budget ${limit}`);
}

if (failures.length) {
  console.error(failures.map((f) => `FAIL: ${f}`).join("\n"));
  process.exit(1);
}
console.log(
  `budgets ok: ${tracked.length} files, ${budgets.default_lines} lines/file, ${budgets.default_files} files/dir`,
);
