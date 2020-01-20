import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import striptags from "striptags"
import { useThemeUI } from "theme-ui"

export default ({
  title,
  description,
  image,
  url,
  type = `article`,
  htmlAttributes,
  bodyAttributes,
}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        site: siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const { theme } = useThemeUI()
  const { site } = data.site
  const absoluteUrl = path => (path ? `${site.siteUrl}/${path}` : site.siteUrl)

  return (
    <Helmet
      titleTemplate={`%s | ${site.title}`}
      title={striptags(title || site.title)}
      htmlAttributes={{
        ...htmlAttributes,
        lang: `en`,
      }}
      bodyAttributes={bodyAttributes}
    >
      <link rel="canonical" href={absoluteUrl(url) || site.siteUrl} />
      <meta
        name="description"
        content={striptags(description || site.description)}
      />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:title" content={striptags(title || site.title)} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={absoluteUrl(url)} />
      {image && <meta property="og:image" content={absoluteUrl(image)} />}
      <meta
        property="og:description"
        content={striptags(description || site.description)}
      />
      <meta property="og:site_name" content={site.title} />
    </Helmet>
  )
}
