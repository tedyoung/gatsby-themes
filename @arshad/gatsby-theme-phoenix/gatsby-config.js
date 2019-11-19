const path = require("path")
const tailwindConfig = require("./src/tailwind.config")

module.exports = ({
  title,
  siteUrl,
  startUrl,
  icon,
  colors = {},
  fonts = {},
  contentPath,
}) => {
  tailwindConfig.theme.colors = {
    ...tailwindConfig.theme.colors,
    ...colors,
  }

  tailwindConfig.theme.fontFamily = {
    ...tailwindConfig.theme.fontFamily,
    ...fonts,
  }

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          defaultLayouts: {
            default: path.resolve(
              `${__dirname}/src/components/Layout/Layout.js`
            ),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                linkImagesToOriginal: false,
                quality: 100,
                withWebp: true,
              },
            },
          ],
          plugins: [`gatsby-remark-images`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `page`,
          path: `${contentPath}/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `post`,
          path: `${contentPath}/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `project`,
          path: `${contentPath}/projects`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-sharp`,
      `gatsby-image`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          google: {
            families: [
              "Alegreya Sans:500,700",
              "Open Sans:300,400,600,700",
              "Bowlby One SC",
            ],
          },
        },
      },
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(tailwindConfig),
            require("autoprefixer"),
            require("postcss-color-function"),
          ],
        },
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allPost } }) => {
                return allPost.posts.map(post => {
                  const url = site.siteMetadata.siteUrl + post.slug
                  return {
                    title: post.title,
                    description: post.excerpt,
                    date: post.date,
                    url,
                    guid: url,
                  }
                })
              },
              query: `
                {
                  allPost(sort: { fields: date, order: DESC }) {
                    posts: nodes {
                      id
                      title
                      date(formatString: "MMMM DD, YYYY")
                      excerpt
                      slug
                    }
                  } 
                }
              `,
              output: "/rss.xml",
              title: "RSS Feed",
            },
          ],
        },
      },
      {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          host: siteUrl,
          sitemap: `${siteUrl}/sitemap.xml`,
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: title,
          short_name: title,
          start_url: startUrl,
          background_color: `#fff`,
          theme_color: colors.primary,
          display: `standalone`,
          icon: icon,
        },
      },
    ],
  }
}
