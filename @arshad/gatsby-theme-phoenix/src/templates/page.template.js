import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout/Layout"
import Page from "../components/Page/Page"
import Seo from "../components/SEO/SEO"

const PageTemplate = ({ pageContext }) => {
  const page = {
    title: pageContext.page.title,
    date: pageContext.page.date,
    excerpt: pageContext.page.excerpt,
    body: pageContext.page.body,
  }

  return (
    <Layout>
      <Seo title={page.title} description={page.excerpt} />
      <Page {...page} />
    </Layout>
  )
}

PageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    page: PropTypes.object,
  }).isRequired,
}

export default PageTemplate
