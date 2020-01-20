/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

const BlockLinks = ({ style, children, ...props }) =>
  children ? (
    <div
      sx={{
        display: `flex`,
        justifyContent: [`center`],
        mt: [4, 6],
        "* + *": {
          ml: [`2`],
        },
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ) : null

BlockLinks.propTypes = {
  children: PropTypes.node,
}

export default BlockLinks
