const withDefaults = require(`./theme-options`)

module.exports = themeOptions => {
  const { manifest } = withDefaults(themeOptions)

  return {
    siteMetadata: {
      title: `Flex`,
      description: `A Gatsby theme with flexible blocks for your Markdown pages.`,
      siteUrl: `http://localhost:8000`,
      logo: `logo.png`,
      copyright: `© YYYY Flex. All rights reserved.`,
      headerLinks: [
        {
          title: `Home`,
          path: `/`,
        },
      ],
      footerLinks: [
        {
          title: `Home`,
          path: `/`,
        },
      ],
    },
    plugins: [
      `@arshad/gatsby-theme-page-core`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          ...manifest,
        },
      },
    ],
  }
}
