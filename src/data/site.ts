export const allRepositoriesUrl = "https://github.com/orgs/smeltery/repositories";
export const github = "https://github.com/smeltery";
export const skillsUrl = "https://smeltery-skills.vercel.app";
export const featuredSkills = [
  {
    name: "design",
    task: "Shape an idea",
    description: "Turn a proposed feature into a clear design.",
    mark: "◇",
  },
  {
    name: "diagnose",
    task: "Untangle a bug",
    description: "Work through hard bugs with a disciplined diagnosis loop.",
    mark: "⌘",
  },
  {
    name: "review",
    task: "Give changes a second look",
    description: "Review a pull request or local changes before shipping.",
    mark: "✓",
  },
];

export const nav = [
  { label: "Tools", href: "#tools" },
  { label: "Skills", href: "#skills" },
  { label: "Principles", href: "#principles" },
];

/** Full terminal labels followed by compact phone labels. */
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
  {
    name: "agnt",
    icon: "/repositories/agnt.png",
    category: "Agents",
    platform: "iPhone",
    blurb: "Control coding agents on your Mac from your iPhone, through a paired secure session.",
    short: "Your coding agents, within reach.",
  },
  {
    name: "bureau",
    icon: "/repositories/bureau.svg",
    category: "Agents",
    platform: "web",
    blurb:
      "See which AI agents are working, waiting, or need your attention in a browser-based office.",
    short: "A shared office for your AI agents.",
  },
  {
    name: "convrt",
    icon: "/repositories/convrt.svg",
    category: "Files",
    platform: "local",
    blurb:
      "Convert files with a right-click, using native engines that run entirely on your machine.",
    short: "Right-click. Convert. Keep it local.",
  },
  {
    name: "loft",
    icon: "/repositories/loft.svg",
    category: "Environment",
    platform: "macOS",
    blurb: "Make more space for the work you do on your Mac.",
    short: "More space for your Mac.",
  },
  {
    name: "prr",
    icon: "/repositories/prr.svg",
    category: "Development",
    platform: "CLI",
    blurb:
      "Run AI-powered pull request reviews and get readable Markdown comments ready for GitHub.",
    short: "A second look at your pull requests.",
  },
  {
    name: "distill",
    icon: "/repositories/distill.svg",
    category: "Agents",
    platform: "CLI",
    blurb:
      "Turn technical books and documentation into structured Markdown context for your coding agent.",
    short: "Useful reference material, ready for agents.",
  },
  {
    name: "yeet",
    icon: "/repositories/yeet.svg",
    category: "Environment",
    platform: "macOS",
    blurb:
      "Remove Mac apps and their related files from your terminal, with a TUI or a single command.",
    short: "Give unwanted apps a clean exit.",
  },
];

export const principles = [
  { title: "Simplicity", text: "Intuitive tools that cut complexity and save time." },
  { title: "Efficiency", text: "Automate the repetitive so humans do the interesting work." },
  { title: "Ethical software", text: "Protect user data and privacy by default." },
  { title: "Community", text: "Build in the open, for developers, with developers." },
];

export const footer = [
  {
    title: "The toolbox",
    links: [
      { label: "All tools", href: "#tools" },
      { label: "Agent skills", href: skillsUrl },
      { label: "All projects", href: allRepositoriesUrl },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand & assets", href: "/brand/" },
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      { label: "Privacy", href: "/privacy/" },
      { label: "Documentation", href: `${github}/website/tree/main/docs` },
      { label: "Getting started", href: `${skillsUrl}/guides/installation/` },
      { label: "Homebrew tap", href: `${github}/homebrew-tap` },
    ],
  },
  {
    title: "In the open",
    links: [
      { label: "Our principles", href: "#principles" },
      { label: "Contact", href: "/contact/" },
      { label: "GitHub repository", href: `${github}/website` },
      { label: "Feedback & issues", href: `${github}/website/issues` },
      { label: "Security", href: `${github}/.github/security/policy` },
    ],
  },
];
