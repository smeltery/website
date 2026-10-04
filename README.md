# smeltery/website

[![CI](https://github.com/smeltery/website/actions/workflows/ci.yml/badge.svg)](https://github.com/smeltery/website/actions/workflows/ci.yml)
[![Release](https://github.com/smeltery/website/actions/workflows/release.yml/badge.svg)](https://github.com/smeltery/website/actions/workflows/release.yml)
[![License: PolyForm Shield 1.0.0](https://img.shields.io/badge/license-PolyForm%20Shield%201.0.0-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/astro-7-bc52ee?logo=astro&logoColor=white)](https://astro.build)
[![Bun](https://img.shields.io/badge/bun-1.3-f9f1e1?logo=bun&logoColor=black)](https://bun.sh)
[![TypeScript: strictest](https://img.shields.io/badge/typescript-strictest-3178c6?logo=typescript&logoColor=white)](tsconfig.json)
[![Dev env: Flox](https://img.shields.io/badge/dev%20env-flox-7c3aed.svg)](https://flox.dev)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](.pre-commit-config.yaml)
[![Docs: Mermaid](https://img.shields.io/badge/docs-mermaid%20validated-ff3670?logo=mermaid&logoColor=white)](docs/README.md)
[![JS shipped: ~1 KB](https://img.shields.io/badge/client%20JS-~1%20KB-0a0a0a.svg)](docs/architecture/overview.md)

The Smeltery Labs landing page: a static Astro site inspired by the
quiet, playful design of `smeltery/convrt` and `smeltery/loft`. It ships zero framework JavaScript, self-hosts
its fonts, and sends no telemetry.

![Smeltery Labs: Less friction. More making. Warm paper background, sage serif accents, and floating tool icons.](public/og.png)

```console
$ flox activate
$ bun run dev        # http://localhost:4321
$ bun run verify     # everything CI checks
```

## What is here

- `src/` holds the page, one Astro component per section, and the design
  tokens.
- `src/data/site.ts` holds every piece of copy, link, and tool listing.
- `public/` holds the mark, tool icons, optimized 3D renders, and the OG image.
- `scripts/` holds the LOC budget and Mermaid checks.

## Documentation

Start at [docs/README.md](docs/README.md). Highlights:

- [Setup](docs/getting-started/setup.md) with Flox and Bun
- [Architecture](docs/architecture/overview.md) and the
  [design system](docs/architecture/design-system.md)
- [Editing content](docs/guides/editing-content.md)
- [CI and hooks](docs/operations/ci.md) and [releasing](docs/operations/releasing.md)

## License

[PolyForm Shield 1.0.0](LICENSE)
