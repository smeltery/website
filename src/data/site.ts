export const allRepositoriesUrl = "https://github.com/orgs/smeltery/repositories";
export const github = "https://github.com/smeltery";
export const projectWebsites: Record<string, string> = {
  "next-ui": "https://next-ui-orcin-chi.vercel.app/",
  prr: "https://prr-seven.vercel.app/",
  distill: "https://distill-ochre.vercel.app/",
  iconforge: "https://iconforge-gamma.vercel.app/",
  glimpse: "https://glimpse-black.vercel.app/",
  aptscout: "https://aptscout-five.vercel.app/",
  showrunner: "https://showrunner-orpin-phi.vercel.app/",
  "pyreload-cli": "https://pyreload-cli.vercel.app/",
  hermes: "https://hermes-logging.vercel.app/",
  loft: "https://loft-delta.vercel.app/",
};
export const projectUrl = (name: string) => projectWebsites[name] ?? `${github}/${name}`;
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

export { tools, type Tool } from "./tools";

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
