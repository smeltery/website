# Design system

The site takes inspiration from `smeltery/convrt` and `smeltery/loft`:
quiet paper backgrounds, generous spacing, serif emphasis, pill buttons,
and playful product imagery. Smeltery keeps its existing mark and tool icons.

## Tokens and typography

Shared tokens live in `src/styles/global.css`:

- Paper: `#f7f7f2`; surfaces: white; ink: `#292b25`.
- Secondary text: `#696d63`; borders: `#e1e3d9`; green: `#526447`.
- DM Sans for headings and body, Georgia italic for editorial emphasis,
  and IBM Plex Mono for commands and the terminal preview.
- Content is capped at 940px with 24px side gutters, reducing to 18px on phones.

## Components

The rounded navigation leads into a centered hero with decorative floating
tool icons. A sage workbench pairs introductory copy with a light fugue
terminal preview. Featured projects occupy a three-column card grid, followed
by principles, a command-copy panel, and resource links.

## Responsive behavior

At 760px the workbench stacks and cards become two columns. At 640px the
navigation tightens, principles stack, and terminal labels shorten. At 480px
the cards become one column and footer links become two columns. Navigation
links remain directly available without a menu toggle.

## Interaction and accessibility

Buttons and cards lift gently on hover. Decorative icons bob using CSS.
Reduced-motion preferences disable animation and smooth scrolling. Keyboard
users get visible focus outlines and a skip link. The command-copy button
announces success or failure through a polite live region.

## Assets

Existing tool SVGs and the anvil WebP are served locally. Decorative imagery
has empty alt text. Fonts are self-hosted; the page sends no telemetry.

## Social preview

`public/og.png` is a 1200 × 630 rendering of `scripts/og.html`, using the same
local fonts, palette, mark, and tool icons as the site. Regenerate it with
`bun scripts/render-og.ts` after editing the template. The renderer shares
the headless browser cache used by `scripts/check-mermaid.ts`. The README
and social metadata both reference the generated image.
