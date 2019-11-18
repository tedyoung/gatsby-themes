import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Tag from "../components/Tag/Tag"
import Seo from "../components/SEO/SEO"

export const query = graphql`
  query($name: String!) {
    allPost(
      filter: { tags: { eq: $name } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        id
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        body
        slug
        caption
        image {
          thumbnail: childImageSharp {
            fluid(
              maxWidth: 456
              maxHeight: 325
              cropFocus: CENTER
              quality: 100
            ) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`

const TagTemplate = ({ pageContext, data }) => {
  return (
    <Layout>
      <Seo title={pageContext.name} />
      <Tag name={pageContext.name} posts={data.allPost.nodes}></Tag>
    </Layout>
  )
}

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
}

export default TagTemplate
