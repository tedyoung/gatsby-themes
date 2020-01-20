/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "../components/image"

const Branding = ({ style, name, logo }) => (
  <Link
    to="/"
    sx={{
      variant: `text.branding`,
      display: `flex`,
      alignItems: `center`,
      ...style,
    }}
  >
    <Image
      src={logo}
      alt={name}
      style={{
        width: `32px`,
        mr: 2,
      }}
    />
    {name}
  </Link>
)

Branding.propTypes = {
  style: PropTypes.object,
  logo: PropTypes.string,
  name: PropTypes.string,
}

export default Branding
