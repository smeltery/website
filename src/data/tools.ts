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
    name: "next-ui",
    icon: "/repositories/next-ui.svg",
    category: "Development",
    platform: "React",
    blurb:
      "Explore interactive React components, copy the TypeScript source, and make each interaction your own.",
    short: "React components to copy, customize, and ship.",
  },
  {
    name: "iconforge",
    icon: "/repositories/iconforge.svg",
    category: "Design",
    platform: "web",
    blurb:
      "Create favicons with live color and size controls, icon stacking, and PNG or ICO exports right in your browser.",
    short: "Small icon. Big character. Create your next favicon.",
  },
  {
    name: "glimpse",
    icon: "/repositories/glimpse.svg",
    category: "Development",
    platform: "CLI",
    blurb:
      "Review Git diffs in your browser, leave inline feedback, and hand comments to your coding agent.",
    short: "A clearer view of your code changes.",
  },
  {
    name: "aptscout",
    icon: "/repositories/aptscout.svg",
    category: "Everyday",
    platform: "CLI",
    blurb:
      "Track apartment availability and price history across properties, with a filterable web interface.",
    short: "Keep an eye on your next apartment.",
  },
  {
    name: "pyreload-cli",
    icon: "/repositories/pyreload-cli.svg",
    category: "Development",
    platform: "Python",
    blurb:
      "Restart Python apps when files change. Keep your flow, with polling support for containers and mounted filesystems.",
    short: "Automatic restarts for Python development.",
  },
  {
    name: "hermes",
    icon: "/repositories/hermes.svg",
    category: "Development",
    platform: "Java",
    blurb:
      "Logging for modern Java, with compile-time logger injection, async output, and Spring Boot integration.",
    short: "Less boilerplate for modern Java logging.",
  },
  {
    name: "showrunner",
    icon: "/repositories/showrunner.svg",
    category: "Agents",
    platform: "Playwright",
    blurb:
      "Turn application changes into replayable pull request demos with captions, paced typing, and a visible cursor.",
    short: "Replayable pull request demos with Playwright.",
  },
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
      "Review GitHub pull requests and local branches with AI, verify findings, and browse readable Markdown results.",
    short: "A second look at your pull requests.",
  },
  {
    name: "distill",
    icon: "/repositories/distill.svg",
    category: "Agents",
    platform: "CLI",
    blurb:
      "Compact local Markdown into focused knowledge for AI agents, using templates and your preferred CLI or API provider.",
    short: "Less context. More clarity for your agent.",
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
