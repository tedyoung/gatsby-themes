/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import Image from "../components/image"

const Testimonial = ({ style, text, name, company, imageUrl }) => (
  <blockquote
    sx={{
      ...style,
    }}
  >
    <Styled.p
      sx={{
        variant: `text.quote`,
      }}
    >
      {text}
    </Styled.p>
    <footer
      sx={{
        display: `flex`,
        alignItems: `center`,
        mt: 4,
      }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={name}
          style={{
            variant: `image.avatar`,
          }}
        />
      )}

      <div
        sx={{
          display: `flex`,
          flexDirection: `column`,
          ml: 4,
        }}
      >
        <cite
          sx={{
            fontWeight: `bold`,
            lineHeight: 1,
            color: `primary`,
          }}
        >
          {name}
        </cite>
        {company && <cite>{company}</cite>}
      </div>
    </footer>
  </blockquote>
)

Testimonial.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Testimonial
