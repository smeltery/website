import { projectUrl } from "./site";
import { repositoryLogos } from "./repository-logos";

const entries = [
  {
    name: "glimpse",
    label: "Glimpse",
    title: "Small changes.",
    accent: "Better perspective.",
    description:
      "Review working changes, branches, and pull requests in your browser. Leave inline feedback and hand it straight to your coding agent.",
    image: "glimpse.webp",
  },
  {
    name: "aptscout",
    label: "AptScout",
    title: "Your next place.",
    accent: "A little easier to find.",
    description:
      "Track apartment availability across properties, compare prices, and follow their history in a filterable web interface.",
    image: "aptscout.svg",
  },
  {
    name: "showrunner",
    label: "Showrunner",
    title: "Make your pull request",
    accent: "worth watching.",
    description:
      "Turn a change into a replayable demo. Give your agent a skill to write a Playwright scenario, verify the outcome, and record the story.",
    image: "showrunner.webp",
  },
  {
    name: "hermes",
    label: "Hermes",
    title: "Less logging boilerplate.",
    accent: "More useful signals.",
    description:
      "Logging for modern Java, with compile-time logger injection, async output, and Spring Boot integration.",
    image: "hermes.webp",
  },
  {
    name: "pyreload-cli",
    image: "previews/pyreload.webp",
    label: "PyReload",
    title: "Save your changes.",
    accent: "Stay in your flow.",
    description:
      "Restart Python apps automatically when files change, with polling support for containers and mounted filesystems.",
  },
  {
    name: "fugue",
    label: "fugue",
    title: "Your workflow.",
    accent: "With room to breathe.",
    description:
      "Incognito mode for AI coding agents. Keep sensitive context out of the trail, and give your workflow a little more peace of mind.",
  },
  {
    name: "trousseau",
    label: "Trousseau",
    title: "Your day. Your plans.",
    accent: "One shared budget.",
    description: "Keep your wedding budget together, from the first idea to the final detail.",
    image: "trousseau.webp",
  },
  {
    name: "convrt",
    label: "convrt",
    title: "The right format.",
    accent: "Just a right-click away.",
    description: "Convert files with native engines that run entirely on your machine.",
    image: "convrt.png",
  },
  {
    name: "loft",
    label: "Loft",
    title: "More space",
    accent: "for your Mac.",
    description:
      "Keep your files in the cloud and close at hand, with a drive that feels at home in Finder.",
    image: "loft.png",
  },
  {
    name: "harbor",
    label: "Harbor",
    title: "A quiet place",
    accent: "to test your next idea.",
    description:
      "One workspace for Mac app testing. Harbor brings Slipway and Porthole together, so your agent can work and you can follow along.",
    image: "harbor.png",
  },
  {
    name: "slipway",
    label: "Slipway",
    title: "Let your agent test.",
    accent: "Keep your screen free.",
    description:
      "Part of Harbor. Run headless Mac app tests for coding agents without taking over your desktop.",
    image: "slipway.png",
  },
  {
    name: "porthole",
    label: "Porthole",
    title: "A window into",
    accent: "your test workspace.",
    description:
      "Part of Harbor. Follow live screens, agent sessions, and command timelines in your Mac test VMs.",
    image: "porthole.png",
  },
  {
    name: "learn-git",
    image: "previews/learn-git.webp",
    label: "Learn Git",
    title: "Good ideas deserve",
    accent: "a little history.",
    description:
      "Get comfortable with Git and GitHub, one concept at a time. Save your work, try an idea, and build together.",
    url: "https://learn-git-five.vercel.app/",
  },
];

export const spotlightProjects = entries.map((project) => ({
  ...project,
  logo: repositoryLogos[project.name] ?? "/git-branch.svg",
  url: project.url ?? projectUrl(project.name),
  image: project.image ? `/spotlight/${project.image}` : undefined,
}));
