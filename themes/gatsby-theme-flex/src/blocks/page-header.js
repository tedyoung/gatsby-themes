/** @jsx jsx */
import React from "react"
import { jsx, Container, Styled } from "theme-ui"
import PropTypes from "prop-types"

const PageHeader = React.forwardRef(
  ({ style, heading, subHeading, lead, children, ...props }, ref) => (
    <section
      ref={ref}
      sx={{
        py: [6, 8],
        bg: `muted`,
        ...style,
      }}
      {...props}
    >
      <Container
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        {subHeading && <Styled.h4>{subHeading}</Styled.h4>}
        {heading && (
          <Styled.h1
            sx={{
              mt: [0, 0],
            }}
          >
            {heading}
          </Styled.h1>
        )}
        {lead && (
          <Styled.p
            sx={{
              variant: `text.lead`,
            }}
          >
            {lead}
          </Styled.p>
        )}
      </Container>
    </section>
  )
)

PageHeader.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
}

export default PageHeader
