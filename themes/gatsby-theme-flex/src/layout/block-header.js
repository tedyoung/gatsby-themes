/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

const BlockHeader = ({ style, subHeading, heading, lead, ...props }) => {
  if (!subHeading && !heading && !lead) return null

  return (
    <div
      sx={{
        textAlign: `center`,
        maxWidth: [`none`, `80%`, `80%`, `50%`],
        mx: `auto`,
        mb: 6,
        ...style,
      }}
      {...props}
    >
      {subHeading && <Styled.h4>{subHeading}</Styled.h4>}
      {heading && (
        <Styled.h2
          dangerouslySetInnerHTML={{ __html: heading }}
          sx={{
            mt: 0,
          }}
        />
      )}
      {lead && (
        <Styled.p
          dangerouslySetInnerHTML={{ __html: lead }}
          sx={{
            variant: `text.lead`,
          }}
        />
      )}
    </div>
  )
}

BlockHeader.propTypes = {
  style: PropTypes.object,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
}

export default BlockHeader
