import React from "react"
import PropTypes from "prop-types"
import icons from "../../assets/icons.svg"

const Icon = ({ name, color, size, ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...restProps}
  >
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

Icon.defaultProps = {
  color: "currentColor",
  size: 24,
}

export default Icon
