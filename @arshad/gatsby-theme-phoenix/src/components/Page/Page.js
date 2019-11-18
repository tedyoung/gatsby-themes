import React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Page = ({ title, excerpt, body, children }) => {
  return (
    <article>
      <div className="text-center md:w-4/5 mb-12 mx-auto">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {excerpt && <p className="lead mt-4">{excerpt}</p>}
      </div>

      <div className="lg:w-4/5 my-6 mx-auto content">
        {body && <MDXRenderer>{body}</MDXRenderer>}
        {children}
      </div>
    </article>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  body: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Page.defaultProps = {
  excerpt: null,
  children: null,
}

export default Page
