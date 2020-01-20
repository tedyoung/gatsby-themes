/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Link from "./link"
import Image from "../components/image"

const Logo = ({ style, imageUrl, url }) => {
  const image = (
    <Image
      src={imageUrl}
      style={{
        maxHeight: `50px`,
        maxWidth: `150px`,
      }}
    />
  )
  return (
    <div
      sx={{
        display: `flex`,
        justifyContent: `center`,
        ...style,
      }}
    >
      {url ? <Link to={url}>{image}</Link> : image}
    </div>
  )
}

Logo.propTypes = {
  style: PropTypes.object,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
}

export default Logo
