/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { find } from "lodash"
import Img from "gatsby-image"

const Image = ({ src, alt, title, style }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "image" } }) {
        images: nodes {
          relativePath
          src: childImageSharp {
            fluid(cropFocus: CENTER, quality: 100) {
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
  `)

  const image = find(data.allFile.images, {
    relativePath: src,
  })

  return (
    <figure
      sx={{
        width: `100%`,
        overflow: `hidden`,
        m: `0`,
        img: {
          width: `100%`,
          height: `auto`,
        },
        ...style,
      }}
    >
      {image ? (
        <Img fluid={image.src.fluid} alt={alt} title={title} />
      ) : (
        <Styled.img src={src} alt={alt} loading="lazy" />
      )}
    </figure>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
}

export default Image
