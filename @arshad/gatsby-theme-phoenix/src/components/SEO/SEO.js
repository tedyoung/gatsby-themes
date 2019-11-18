import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  description,
  image,
  url,
  type,
  htmlAttributes,
  bodyAttributes,
}) => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
      allSitePlugin(filter: { name: { eq: "@arshad/gatsby-theme-phoenix" } }) {
        nodes {
          pluginOptions {
            colors {
              primary
            }
          }
        }
      }
    }
  `)

  const site = data.allSite.nodes[0].siteMetadata
  const themeOptions = data.allSitePlugin.nodes[0].pluginOptions

  const absoluteUrl = path => (path ? `${site.siteUrl}/${path}` : site.siteUrl)

  return (
    <Helmet
      titleTemplate={`%s | ${site.title}`}
      title={title || site.title}
      htmlAttributes={{
        ...htmlAttributes,
        lang: "en",
      }}
      bodyAttributes={bodyAttributes}
    >
      <link rel="canonical" href={absoluteUrl(url) || site.siteUrl} />
      <meta name="theme-color" content={themeOptions.colors.primary} />
      <meta name="description" content={description || site.description} />
      <meta name="og:title" content={title || site.title} />
      <meta name="og:type" content={type} />
      <meta name="og:url" content={absoluteUrl(url)} />
      <meta name="og:image" content={absoluteUrl(image)} />
      <meta name="og:description" content={description || site.description} />
      <meta name="og:site_name" content={site.title} />
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
}

Seo.defaultProps = {
  description: null,
  type: "article",
  image: null,
  url: null,
}

export default Seo
