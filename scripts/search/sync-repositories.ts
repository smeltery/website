import { $ } from "bun";

interface Repository {
  name: string;
  description: string | null;
  html_url: string;
}

// gh handles pagination and authentication; only public repositories are included.
const output =
  await $`gh api "orgs/smeltery/repos?per_page=100&type=public" --paginate --slurp`.text();
const excludedRepositories = new Set(["dotbrains.dev", ".github"]);
const repositories = (JSON.parse(output) as Repository[][])
  .flat()
  .filter(({ name }) => !excludedRepositories.has(name))
  .map(({ name, description, html_url }) => ({
    name,
    description: description?.trim() || `Explore the ${name} repository on GitHub.`,
    href: html_url,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
if (!repositories.length)
  throw new Error("GitHub returned no repositories; keeping the existing index.");
await Bun.write(
  new URL("../../src/data/repositories.json", import.meta.url),
  `${JSON.stringify(repositories, null, 2)}\n`,
);
console.log(`Indexed ${repositories.length} public Smeltery repositories.`);
