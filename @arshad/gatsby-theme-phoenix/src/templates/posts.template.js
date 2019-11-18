import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import PostTeaser from "../components/Post/PostTeaser"
import Layout from "../components/Layout/Layout"
import Icon from "../components/Icon/Icon"
import striptags from "striptags"

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allPost(sort: { fields: [date], order: DESC }, skip: $skip, limit: $limit) {
      posts: nodes {
        id
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        body
        slug
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
        caption
      }
    }
  }
`

const PostsTemplate = ({ pageContext, data }) => {
  const { previousPagePath, nextPagePath, total } = pageContext
  const { posts } = data.allPost

  return (
    <Layout>
      <h1 className="hidden">{`Showing ${posts.length} of ${total} posts`}</h1>

      {posts &&
        posts.map(node => {
          const post = {
            title: node.title,
            slug: node.slug,
            image: node.image ? node.image.thumbnail.fluid : null,
            date: node.date,
            excerpt: striptags(node.excerpt),
          }

          return <PostTeaser key={node.id} {...post} />
        })}

      <div className="flex items-center justify-between mt-16">
        {previousPagePath && (
          <Link to={previousPagePath} className="button">
            <Icon name="arrow-left" className="mr-2" />
            Previous
          </Link>
        )}
        {nextPagePath && (
          <Link to={nextPagePath} className="button ml-auto">
            Next <Icon name="arrow-right" className="ml-2" />
          </Link>
        )}
      </div>
    </Layout>
  )
}

PostsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    skip: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
  }).isRequired,
}

export default PostsTemplate
