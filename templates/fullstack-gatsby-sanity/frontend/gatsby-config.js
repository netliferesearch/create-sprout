const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Using environment config: '${activeEnv}'`);

const { api, env } = require('../server/sanity/sanity.json');

const projectId = api.projectId;
const sanityDataset = activeEnv === 'production' ? api.dataset : env.development.api.dataset;

module.exports = {
  siteMetadata: {
    title: `<% replace with project name %>`,
    description: `<% replace with project description %>`,
    author: `Netlife Design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /components/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: '<% replace with project name kebab-case %>',
        name: '<% replace with project name %>',
        // This path is relative to the root of the site. All icons are generated based on this one.
        icon: 'src/images/logo512.png',
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: '<% replace with site url %>',
        sitemap: '<% replace with site url %>/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset: sanityDataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: activeEnv !== 'production',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
