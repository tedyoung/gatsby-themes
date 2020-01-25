/** @jsx jsx */
import React from "react"
import { jsx, Container } from "theme-ui"
import PropTypes from "prop-types"
import BlockHeader from "../layout/block-header"
import BlockLinks from "../layout/block-links"

const Cta = React.forwardRef(
  ({ style, heading, subHeading, lead, links, children, ...props }, ref) => (
    <section
      ref={ref}
      sx={{
        py: [6, 8],
        ...style,
      }}
      {...props}
    >
      <Container
        sx={{
          display: `flex`,
          flexDirection: [`column`, `column`, `row`],
          alignItems: [`center`],
          justifyContent: [`space-between`],
        }}
      >
        <BlockHeader
          sx={{
            textAlign: [`center`, `center`, `left`],
            maxWidth: [`none`, `none`, `80%`],
            m: 0,
          }}
          subHeading={subHeading}
          heading={heading}
          lead={lead}
        />
        {children}

        <BlockLinks
          sx={{
            mt: [4, 4, 0],
          }}
        >
          {links}
        </BlockLinks>
      </Container>
    </section>
  )
)

Cta.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.node,
}

export default Cta
