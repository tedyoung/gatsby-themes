import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout/Layout"
import Post from "../components/Post/Post"
import Seo from "../components/SEO/SEO"
import striptags from "striptags"

const PostTemplate = ({ pageContext }) => {
  const post = {
    title: pageContext.post.title,
    date: pageContext.post.date,
    slug: pageContext.post.slug,
    excerpt: striptags(pageContext.post.excerpt),
    body: pageContext.post.body,
    caption: pageContext.post.caption,
    image: pageContext.post.image ? pageContext.post.image.full.fluid : null,
    tags: pageContext.post.tags,
    source: pageContext.post.source,
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.excerpt}
        url={post.slug}
        image={
          pageContext.post.image ? pageContext.post.image.fixed.fixed.src : null
        }
      />
      <Post {...post} />
    </Layout>
  )
}

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
}

export default PostTemplate
