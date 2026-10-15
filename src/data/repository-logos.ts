import sources from "./repository-logo-sources.json";

/** Reviewed official marks; source URLs retain the audited repository revision. */
export const repositoryLogos: Record<string, string> = Object.fromEntries(
  sources.map(({ repository, asset }) => [repository, asset]),
);
