/** @jsx jsx */
import React from "react"
import { jsx, Container } from "theme-ui"
import PropTypes from "prop-types"
import Image from "../components/image"
import BlockLinks from "../layout/block-links"
import BlockHeader from "../layout/block-header"

const Feature = React.forwardRef(
  (
    {
      style,
      heading,
      subHeading,
      lead,
      links,
      imageUrl,
      imageAlt,
      imageCaption,
      imagePosition = `left`,
      imageStyle,
      children,
      ...props
    },
    ref
  ) => {
    const getFlexDirection = imagePosition => {
      switch (imagePosition) {
        case `top`:
          return `column`
        case `bottom`:
          return `column-reverse`
        case `left`:
          return [`column`, `row`]
        case `right`:
          return [`column`, `row-reverse`]
        default:
          return `row`
      }
    }

    return (
      <section
        ref={ref}
        sx={{
          py: [6, 8, 10],
          ...style,
        }}
        {...props}
      >
        <Container>
          <BlockHeader subHeading={subHeading} heading={heading} lead={lead} />

          <div
            sx={{
              display: `flex`,
              flexDirection: getFlexDirection(imagePosition),
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            {imageUrl && (
              <figure
                sx={{
                  width: `100%`,
                }}
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt || heading}
                  style={imageStyle}
                />
                {imageCaption && (
                  <figcaption
                    sx={{
                      variant: `text.small`,
                      color: `muted`,
                      textAlign: `center`,
                    }}
                  >
                    {imageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            <div
              sx={{
                "h2, h3, h4": {
                  mt: 0,
                },
              }}
            >
              {children}
            </div>
          </div>

          <BlockLinks>{links}</BlockLinks>
        </Container>
      </section>
    )
  }
)

Feature.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.node,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePosition: PropTypes.oneOf([`top`, `bottom`, `left`, `right`]),
}

export default Feature
