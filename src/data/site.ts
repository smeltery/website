export const github = "https://github.com/smeltery";
export const command = "npx smeltery";

export const nav = [
  { label: "Tools", href: "#tools" },
  { label: "Agents", href: "#tools" },
  { label: "Environment", href: "#tools" },
  { label: "Principles", href: "#principles" },
];

/** [label, value] for desktop, then the shorter pair the mobile design uses. */
export const ghostMode: [string, string, string, string][] = [
  ["Session transcript", "wiped on exit", "Transcript", "wiped"],
  ["Telemetry / phone-home", "blocked", "Telemetry", "blocked"],
  ["Network egress", "model API only", "Network", "API only"],
  ["Credentials on disk", "never written", "Credentials", "never written"],
];

export interface Tool {
  name: string;
  icon?: string;
  category: string;
  platform: string;
  blurb: string;
  short: string;
}

export const tools: Tool[] = [
  {
    name: "ember",
    icon: "/tools/ember.svg",
    category: "Agents",
    platform: "macOS",
    blurb: "Keep your Mac awake only while AI coding agents are working, then let it rest.",
    short: "Keep your Mac awake only while AI agents work.",
  },
  {
    name: "fugue",
    icon: "/tools/fugue.svg",
    category: "Agents",
    platform: "CLI",
    blurb: "Incognito mode for AI coding agents. Keep sensitive context out of the trail.",
    short: "Incognito mode for AI coding agents.",
  },
  {
    name: "set-me-up",
    category: "Environment",
    platform: "env",
    blurb: "Bootstrap and maintain macOS or Linux the way you like it, module by module.",
    short: "Bootstrap macOS or Linux your way.",
  },
  {
    name: "context",
    icon: "/tools/context.svg",
    category: "Environment",
    platform: "macOS",
    blurb: "A second dock for apps, links, clipboard history, and live widgets.",
    short: "A second dock for apps, links, and widgets.",
  },
  {
    name: "airlock",
    icon: "/tools/airlock.svg",
    category: "Security",
    platform: "local",
    blurb: "Open any link in a short-lived, containerized browser session. Then it vanishes.",
    short: "Open any link in a short-lived browser session.",
  },
];

export const principles = [
  { title: "Simplicity", text: "Intuitive tools that cut complexity and save time." },
  { title: "Efficiency", text: "Automate the repetitive so humans do the interesting work." },
  { title: "Ethical software", text: "Protect user data and privacy by default." },
  { title: "Community", text: "Build in the open, for developers, with developers." },
];

/** `only` hides an item on the other breakpoint, matching the Paper frames. */
type Only = { only?: "desktop" | "mobile" };
type FooterLink = Only & { label: string; href: string };

export const footer: (Only & { title: string; links: FooterLink[] })[] = [
  {
    title: "Tools",
    links: [
      { label: "All tools", href: "#tools" },
      { label: "Agents", href: "#tools" },
      { label: "Environment", href: "#tools" },
      { label: "CLIs", href: "#tools", only: "desktop" },
    ],
  },
  {
    title: "Resources",
    only: "desktop",
    links: [
      { label: "Documentation", href: github },
      { label: "Getting started", href: `${github}/set-me-up` },
      { label: "Skills", href: `${github}/skills` },
      { label: "Homebrew tap", href: `${github}/homebrew-tap` },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Principles", href: "#principles" },
      { label: "GitHub", href: github },
      { label: "npm", href: "https://www.npmjs.com/package/smeltery", only: "desktop" },
      { label: "Contact", href: `${github}/.github`, only: "desktop" },
      { label: "Privacy", href: "#principles", only: "mobile" },
    ],
  },
  {
    title: "Legal",
    only: "desktop",
    links: [
      { label: "Licenses", href: github },
      { label: "Privacy", href: "#principles" },
      { label: "Security", href: `${github}/.github/security/policy` },
    ],
  },
];
