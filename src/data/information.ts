interface InformationSection {
  id: string;
  title: string;
  text: string;
  link?: { label: string; href: string };
}
interface InformationPage {
  title: string;
  eyebrow: string;
  heading: string;
  accent: string;
  introduction: string;
  highlights: string[];
  sections: InformationSection[];
  closing: { title: string; text: string; label: string; href: string };
}
export const information: Record<"about" | "contact" | "privacy", InformationPage> = {
  about: {
    title: "About Smeltery Labs",
    eyebrow: "A small collective. A lot of little tools.",
    heading: "Made with care.",
    accent: "Made for your day.",
    introduction:
      "We build focused tools that make everyday work feel a little easier. Less time wrestling with your setup. More time making something you care about.",
    highlights: ["Focused tools", "Built in public", "Human-sized details"],
    sections: [
      {
        id: "what-we-make",
        title: "Small tools, useful company",
        text: "From coding-agent utilities to Mac workflows and everyday CLIs, our projects each start with a specific job to do. This directory helps you find the right one, then takes you to its source, documentation, and releases.",
        link: { label: "Find your next tool", href: "/#tools" },
      },
      {
        id: "how-we-build",
        title: "The same care behind every one",
        text: "Simplicity, efficiency, privacy, and community guide our work. We favor clear responsibilities and thoughtful details. Building in public lets people inspect how things work, share feedback, and contribute.",
        link: { label: "Our principles", href: "/#principles" },
      },
      {
        id: "better-together",
        title: "Some things work better together",
        text: "Harbor brings Slipway and Porthole into one workspace for Mac app testing. Our skill library gives coding agents reusable instructions for planning, debugging, and reviewing. Different tools, connected by the work they help you do.",
        link: { label: "Explore the skill library", href: "https://smeltery-skills.vercel.app/" },
      },
      {
        id: "make-it-yours",
        title: "Find your starting point",
        text: "Each project has its own README, installation steps, supported platforms, license, and release history. Start there for the details, including any costs. Choose the tools that fit your workflow and help shape what comes next.",
      },
    ],
    closing: {
      title: "There’s more in the forge.",
      text: "Take a look around. Your next little time-saver might be waiting.",
      label: "Explore all projects",
      href: "https://github.com/orgs/smeltery/repositories",
    },
  },
  contact: {
    title: "Contact Smeltery Labs",
    eyebrow: "A little help finding the right place",
    heading: "Let’s get you",
    accent: "to the right people.",
    introduction:
      "A question, an idea, or something that isn’t working? Choose the place that matches what you’re working on, so the details reach the right project.",
    highlights: ["Project-specific help", "Public GitHub discussions", "Useful details welcome"],
    sections: [
      {
        id: "website",
        title: "Something on this website?",
        text: "Report a broken link, a display issue, or an idea for this directory in the website’s GitHub issue tracker. Include the page address and a short description of what you expected to happen.",
        link: {
          label: "Open a website issue",
          href: "https://github.com/smeltery/website/issues/new",
        },
      },
      {
        id: "tool",
        title: "Need help with a tool?",
        text: "Start with the project’s README, then use its own issue tracker. Keeping questions with the relevant source code and documentation helps contributors understand your setup and the version you’re using.",
        link: { label: "Find your project", href: "https://github.com/orgs/smeltery/repositories" },
      },
      {
        id: "skills",
        title: "Working with agent skills?",
        text: "The skill library has installation guidance and links to its repository. Use those resources for questions about a skill, setup help, or a contribution you’d like to make.",
        link: { label: "Visit the skill library", href: "https://smeltery-skills.vercel.app/" },
      },
    ],
    closing: {
      title: "A few details go a long way.",
      text: "Share what happened, what you expected, and steps to reproduce it. For visual issues, a screenshot and browser size help. GitHub issues are public: leave out private data and access tokens. Posting requires a GitHub account; response times vary by project.",
      label: "Browse existing website issues",
      href: "https://github.com/smeltery/website/issues",
    },
  },
  privacy: {
    title: "Privacy on this website",
    eyebrow: "Clear information, in plain language",
    heading: "Your visit.",
    accent: "A lighter footprint.",
    introduction:
      "Here’s how this directory handles your visit, what stays in your browser, and what changes when you follow a link to another service.",
    highlights: ["No analytics scripts", "Search stays local", "No account needed"],
    sections: [
      {
        id: "browsing",
        title: "Just browsing",
        text: "This directory has no account system, payment form, or newsletter signup. The site code includes no analytics trackers or advertising scripts. Fonts and project artwork are served with the site, rather than requested from third-party font services.",
      },
      {
        id: "browser",
        title: "What stays in your browser",
        text: "The command menu searches the project directory in your browser. Your search text is not sent to an external search service. Copy buttons write to your clipboard only when you activate them.",
      },
      {
        id: "hosting",
        title: "How the site is delivered",
        text: "Vercel hosts this website and processes network and request metadata needed to deliver it. That hosting activity is covered by Vercel’s own privacy policy.",
        link: {
          label: "Read Vercel’s privacy policy",
          href: "https://vercel.com/legal/privacy-policy",
        },
      },
      {
        id: "external-links",
        title: "When you follow a link",
        text: "GitHub, the skill library, and individual project websites are separate services with their own policies. This notice describes the Smeltery directory, not the data practices of every linked project. Public GitHub issues and attachments can be read by others, so avoid including personal or sensitive information.",
      },
    ],
    closing: {
      title: "A question about this notice?",
      text: "Use the website’s issue tracker for questions about these practices. Keep your message free of personal information, since the conversation is public.",
      label: "Ask a privacy question",
      href: "https://github.com/smeltery/website/issues/new",
    },
  },
};
