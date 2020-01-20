/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

const Div = React.forwardRef(({ style, children, ...props }, ref) => (
  <div sx={{ ...style }} ref={ref} {...props}>
    {children}
  </div>
))

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
}

export default Div
