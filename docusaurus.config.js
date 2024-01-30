// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "4Gives";
const projectName = "splitmo-api-docs";
const baseUrl = process.env.BASE_URL || projectName;
const domain = process.env.DOMAIN || `https://${organizationName}.github.io`


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Developer Portal",
  tagline: "API Documentation for Splitmo Checkout",
  favicon: "img/logo.jpg",
  url: domain,
  baseUrl: `/${baseUrl}`,
  organizationName,
  projectName,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem"
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "docs-api",
        config: {
          checkout_api: {
            specPath: "data/splitmo.yml",
            outputDir: "docs-api",
            label: "v1",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            },
          },
        }
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-api',
        path: 'docs-api',
        routeBasePath: 'api',
        docLayoutComponent: "@theme/DocPage",
        docItemComponent: "@theme/ApiItem",
        sidebarPath: require.resolve("./sidebarsDocsApi.js")
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project"s social card
      image: "img/splitmo-social-card.jpg",
      navbar: {
        title: "Splitmo",
        logo: {
          alt: "splitmo.",
          src: "img/logo.jpg",
        },
        items: [
          { to: "/docs/introduction", label: "Guides", position: "left" },
          { to: "/api/splitmo-api", label: "API Referrence", position: "left" },
          { to: "/changelog", label: "Changelogs", position: "left" },
          { to: "/help", label: "Help", position: "left" },
          {
            href: "https://github.com/4Gives",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://app.splitmo.co",
            label: "Console",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
