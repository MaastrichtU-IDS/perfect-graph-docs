/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Perfect Graph',
  tagline: 'Build Perfect Graphs',
  url: 'https://sabaturgay.github.io.',
  baseUrl: '/perfect-graph-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sabaturgay', // Usually your GitHub org/user name.
  projectName: 'perfect-graph-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Perfect Graph',
      logo: {
        alt: 'Perfect Graph',
        src: 'img/perfect-graph.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/MaastrichtU-IDS/perfect-graph',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/perfect-graph',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MaastrichtU-IDS/perfect-graph',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Perfect Graph, Inc. Built with &hearts;.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
