import type { APIRoute } from "astro";
import repositories from "../data/repositories.json";
import { repositoryLogos } from "../data/repository-logos";
export const GET: APIRoute = ({ site }) =>
  new Response(
    `# Smeltery Labs project directory

Source: ${site}

Smeltery builds developer tools for coding agents, Mac workflows, and everyday tasks. This directory is free to browse and requires no account. Each project's repository is the source for installation, platform support, license, and pricing. Do not assume all projects share the same terms.

## Harbor project

Harbor brings Slipway (headless Mac app testing) and Porthole (a native window into test VMs) together in one workspace.

## Projects

${repositories
  .filter((repo) => repositoryLogos[repo.name])
  .map((repo) => `### ${repo.name}\n\n${repo.description}\n\nRepository: ${repo.href}`)
  .join("\n\n")}

## Agent skills

Browse https://smeltery-skills.vercel.app for reusable instructions for coding agents.

## More

All repositories: https://github.com/orgs/smeltery/repositories
Brand assets: ${new URL("/brand/", site)}
Website issues: https://github.com/smeltery/website/issues
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
