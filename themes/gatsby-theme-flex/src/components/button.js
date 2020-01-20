/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Link from "./link"

const Button = ({ style, url, type = `primary`, children, ...props }) => {
  const styles = {
    variant: `buttons.${type}`,
    ...style,
  }
  return url ? (
    <Link to={url} sx={styles} {...props}>
      {children}
    </Link>
  ) : (
    <button sx={styles} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  url: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
}

export default Button
