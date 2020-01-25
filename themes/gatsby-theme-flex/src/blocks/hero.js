/** @jsx jsx */
import React from "react"
import { jsx, Container, Styled } from "theme-ui"
import PropTypes from "prop-types"
import BlockLinks from "../layout/block-links"
import Lead from "../components/lead"
import Image from "../components/image"

const Hero = React.forwardRef(
  (
    {
      style,
      subHeading,
      heading,
      lead,
      children,
      links,
      imageUrl,
      imageStyle,
      imageAlt,
      ...props
    },
    ref
  ) => (
    <section
      ref={ref}
      sx={{
        py: [6, 8, 10],
        ...style,
      }}
      {...props}
    >
      <Container
        sx={{
          display: `flex`,
          flexDirection: [`column`],
          alignItems: [`center`],
          textAlign: [`center`],
        }}
      >
        <div
          sx={{
            maxWidth: [`none`, `none`, `80%`, `80%`, `50%`],
          }}
        >
          {subHeading && <Styled.h4>{subHeading}</Styled.h4>}
          {heading && (
            <Styled.h1
              sx={{
                mt: 0,
              }}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          )}
          <Lead>{lead}</Lead>
          <BlockLinks>{links}</BlockLinks>
        </div>

        {children}

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            style={{
              mt: [4, 8],
              ...imageStyle,
            }}
          />
        )}
      </Container>
    </section>
  )
)

Hero.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.node,
  imageUrl: PropTypes.string,
  imageStyle: PropTypes.object,
  imageAlt: PropTypes.string,
}

export default Hero
