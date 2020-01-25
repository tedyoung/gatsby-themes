/** @jsx jsx */
import React from "react"
import { jsx, Container, Grid } from "theme-ui"
import PropTypes from "prop-types"
import Logo from "../components/logo"
import BlockHeader from "../layout/block-header"
import BlockLinks from "../layout/block-links"

const Logos = React.forwardRef(
  (
    { style, heading, subHeading, lead, links, logos, children, ...props },
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
      <Container>
        <BlockHeader subHeading={subHeading} heading={heading} lead={lead} />

        <div
          sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Grid
            columns={[1, 2, logos.length]}
            gap={[`50px`, `100px`]}
            sx={{
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            {logos.map((logo, index) => (
              <Logo {...logo} key={index} />
            ))}
          </Grid>
        </div>

        {children}

        <BlockLinks>{links}</BlockLinks>
      </Container>
    </section>
  )
)

Logos.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.node,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default Logos
