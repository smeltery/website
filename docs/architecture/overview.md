# Architecture

The site is one static page. Astro renders it at build time, inlines the CSS,
and emits a single `index.html` plus assets. A tiny inline script handles the
copy-to-clipboard command button. Decorative motion uses CSS and respects
reduced-motion preferences.

## Page composition

Each component owns one section of the page.

```mermaid
flowchart TD
  index[pages/index.astro] --> Base[layouts/Base.astro<br/>meta, OG, fonts, copy script]
  Base --> Nav[Nav<br/>responsive navigation]
  Base --> Hero
  Hero --> Terminal[Terminal<br/>fugue ghost mode demo]
  Base --> Tools[Tools<br/>featured tool cards]
  Base --> Principles
  Tools --> SectionHead
  Principles --> SectionHead
  Base --> Cta[Cta<br/>Say hello panel]
  Base --> Footer
  data[(data/site.ts)] -.-> Nav & Terminal & Tools & Principles & Cta & Footer
```

## Build pipeline

```mermaid
flowchart LR
  src[src/**/*.astro] --> astro[astro build]
  css[styles/global.css<br/>scoped component CSS] --> astro
  fonts["@fontsource packages"] --> astro
  public[public/] --> astro
  astro --> html[dist/index.html<br/>CSS inlined]
  astro --> assets[dist/_astro and static assets]
```

## Choices

- **Astro** renders components to HTML with no runtime, which keeps the
  page fast and lightweight.
- **Scoped CSS per component** keeps each section's styles next to its markup.
  Shared tokens and utilities live in `src/styles/global.css`.
- **Self-hosted fonts** through Fontsource avoid third-party requests,
  matching the "privacy by default" principle.
- **Responsive layouts** use 760px, 640px, and 480px breakpoints to adapt
  the workbench, navigation, tool grid, and footer.
