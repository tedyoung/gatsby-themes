import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Header from "./Header"
import Footer from "./Footer"
import Seo from "../SEO/SEO"

import Icon from "../Icon/Icon"
import IconNav from "../Icon/IconNav"
import Button from "../Button/Button"
import ProjectList from "../Project/ProjectList"

// Components available in MDX files.
const mdxComponents = {
  Link,
  Button,
  Icon,
  IconNav,
  ProjectList,
}

const Layout = ({ children }) => {
  const [mode, setMode] = useState(
    typeof localStorage !== "undefined" ? localStorage.getItem("mode") || "light" : "light"
  )

  React.useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("mode", mode)
    }
  }, [mode])

  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            title
            description
            copyright
            menuLinks {
              name
              link
            }
            socialLinks {
              icon
              name
              url
            }
          }
        }
      }
    }
  `)

  const {
    title,
    description,
    copyright,
    socialLinks,
    menuLinks,
  } = data.allSite.nodes[0].siteMetadata

  return (
    <>
      <Seo
        title={title}
        description={description}
        htmlAttributes={{
          class: mode === "dark" ? "mode-dark" : "",
        }}
        bodyAttributes={{
          class: "antialiased bg-white dark:bg-dark px-4",
        }}
      />

      <Header
        siteName={title}
        mode={mode}
        setMode={setMode}
        socialLinks={socialLinks}
        menuLinks={menuLinks}
      />

      <main className="py-6 md:py-12">
        <div className="container mx-auto">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
      </main>

      <Footer>
        <p className="small text-center">
          {copyright.replace(/(Y{4})/, new Date().getFullYear())}
        </p>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
