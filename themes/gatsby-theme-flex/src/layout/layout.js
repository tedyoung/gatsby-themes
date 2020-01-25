/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Seo from "../misc/seo"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ title, description, url, children }) => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          site: siteMetadata {
            title
            copyright
            logo
            headerLinks {
              title
              path
            }
            footerLinks {
              title
              path
            }
          }
        }
      }
    }
  `)

  const { site } = data.allSite.nodes[0]

  return (
    <React.Fragment>
      <Seo title={title} description={description} url={url} />

      <Header
        siteName={site.title}
        logo={site.logo}
        headerLinks={site.headerLinks}
      />

      <main
        sx={{
          bg: `background`,
          flex: `1`,
        }}
      >
        {children}
      </main>

      <Footer copyright={site.copyright} footerLinks={site.footerLinks} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
}

export default Layout
