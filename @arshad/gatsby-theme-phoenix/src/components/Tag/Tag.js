import React from "react"
import PropTypes from "prop-types"
import PostTeaser from "../Post/PostTeaser"

const Tag = ({ name, posts }) => {
  const count = posts.length
  return (
    <div>
      <div className="text-center md:w-4/5 mb-12 mx-auto">
        <h1>{`${count} post${
          count === 1 ? `` : `s`
        } tagged with "${name}"`}</h1>
      </div>

      {posts &&
        posts.map(node => {
          const post = {
            title: node.title,
            slug: node.slug,
            image: node.image.thumbnail.fluid,
            date: node.date,
            excerpt: node.excerpt,
          }

          return <PostTeaser key={node.id} {...post} />
        })}
    </div>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Tag
