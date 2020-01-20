/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

const Lead = ({ style, children }) => (
  <Styled.p
    sx={{ variant: `text.lead`, ...style }}
    dangerouslySetInnerHTML={{ __html: children }}
  />
)

Lead.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
}

export default Lead
