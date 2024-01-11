import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = "4Gives";
const projectName = "splitmo-api-docs";

const config: Config = {
  title: "Developer Portal",
  tagline: "API Documentation for Splitmo Checkout",
  favicon: "img/logo.jpg",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        blog: false,
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/splitmo-social-card.jpg",
    navbar: {
      title: "Splitmo",
      logo: {
        alt: "splitmo.",
        src: "img/logo.jpg",
      },
      items: [
        { to: "/docs/introduction", label: "Guides", position: "left" },
        { to: "/referrence", label: "API Referrence", position: "left" },
        { to: "/changelog", label: "Changelogs", position: "left" },
        { to: "/help", label: "Help", position: "left" },
        {
          href: "https://github.com/4Gives",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://v2.4gives.com",
          label: "Console",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
