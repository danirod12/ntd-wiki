// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NTD STUDIOS',
  tagline: 'Founded by danirod12 (Den Bekker)',
  url: 'https://danirod12.github.io',
  baseUrl: '/ntd-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'danirod12', // Usually your GitHub org/user name.
  projectName: 'ntd-wiki', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/danirod12/ntd-wiki/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Main page',
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'LuckyBlock NTD',
            position: 'left',
            to: 'docs/luckyblock/overview'
          },
          {
            href: 'https://www.spigotmc.org/members/danirod12.822980/',
            label: 'SpigotMC',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // title: 'SUPPORT',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vbYW3sperj',
              },
            ],
          },
          {
            // title: 'GitHub',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/danirod12',
              },
            ],
          },
          {
            // title: 'SpigotMC',
            items: [
              {
                label: 'SpigotMC',
                href: 'https://www.spigotmc.org/members/danirod12.822980/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NTD STUDIOS. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;