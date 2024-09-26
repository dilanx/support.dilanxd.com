// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { faUsers, faCode } = require('@fortawesome/free-solid-svg-icons');
const { themes } = require('prism-react-renderer');

const title = "Dilan's Help Center";
const tagline = 'Find answers here.';

const categories = [
  {
    label: 'Services',
    items: [
      {
        label: 'Account',
        icon: faUsers,
        to: '/account',
      },
      {
        label: 'Developer',
        icon: faCode,
        to: '/developer',
      },
    ],
  },
  {
    label: 'Applications and Tools',
    items: [
      {
        label: 'Paper',
        image: '/img/paper.png',
        to: '/paper',
      },
      {
        label: 'CRACO',
        image: '/img/craco.png',
        href: 'https://craco.js.org',
      },
    ],
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline,
  url: 'https://support.dilanxd.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dilanx', // Usually your GitHub org/user name.
  projectName: 'support.dilanxd.com', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    categories,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: false,
          editUrl: 'https://github.com/dilanx/support.dilanxd.com/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-JSZXDNKC3C',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'Dilan Nair Logo',
          src: 'img/logo.svg',
        },
        items: [
          ...categories,
          {
            href: 'https://www.dilanxd.com/projects',
            label: 'All Projects',
          },
          {
            href: 'https://www.dilanxd.com',
            label: 'dilanxd.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          ...categories.map((category) => ({
            title: category.label,
            items: category.items,
          })),
          ...require('@dilanx/themes/docusaurus-content').footer,
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dilan Nair`,
      },
      prism: {
        theme: themes.github,
      },
    }),
  themes: ['@dilanx/themes/docusaurus-core'],
  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
