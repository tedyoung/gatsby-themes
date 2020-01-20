/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import Image from "../components/image"

const Card = React.forwardRef(
  (
    {
      style,
      type = `default`,
      heading,
      subHeading,
      imageUrl,
      imageAlt,
      imageStyle,
      url,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      sx={{
        variant: `card.${type}`,
        ...style,
      }}
      {...props}
    >
      {imageUrl && (
        <Image src={imageUrl} alt={imageAlt || heading} style={imageStyle} />
      )}

      <div>
        {heading && (
          <Styled.h3
            sx={{
              mt: 0,
            }}
          >
            {heading}
          </Styled.h3>
        )}
        {subHeading && <Styled.p>{subHeading}</Styled.p>}
        {children}
      </div>
    </div>
  )
)

Card.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.object,
  url: PropTypes.string,
  children: PropTypes.node,
}

export default Card
