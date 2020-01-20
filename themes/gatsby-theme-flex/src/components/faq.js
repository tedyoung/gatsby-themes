/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { useState } from "react"
import Button from "./button"

const Faq = ({ style, heading, children }) => {
  const [active, setActive] = useState(false)

  return (
    <dl
      sx={{
        borderWidth: `0 0 1px`,
        borderStyle: `solid`,
        borderColor: `highlight`,
        pb: `2`,
        ...style,
      }}
    >
      <dt>
        <Button
          type="link"
          sx={{
            width: `100%`,
            textAlign: `left`,
          }}
          onClick={() => setActive(!active)}
        >
          <Styled.h3
            sx={{
              width: `100%`,
              display: `flex`,
              justifyContent: `space-between`,
              mt: [0, 0],
            }}
          >
            {heading}

            <span>{active ? `-` : `+`}</span>
          </Styled.h3>
        </Button>
      </dt>
      <dd
        sx={{
          display: active ? `block` : `none`,
          mt: 4,
          ml: 0,
        }}
      >
        {children}
      </dd>
    </dl>
  )
}

Faq.propTypes = {
  style: PropTypes.object,
  heading: PropTypes.string,
  children: PropTypes.node,
}

export default Faq
