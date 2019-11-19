import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Button from "../Button/Button"

const Project = ({ title, excerpt, url, image }) => {
  return (
    <article>
      {image && <Img fluid={image.full.fluid} className="rounded-sm" />}
      <h3>{title}</h3>
      {excerpt && <p className="-mt-4 small">{excerpt}</p>}
      {url && (
        <Button text="Learn more" url={url} icon="arrow-right" type="link" />
      )}
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

Project.defaultProps = {
  excerpt: null,
  url: null,
  image: null,
}

export default Project
