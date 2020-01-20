/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Container } from "@theme-ui/components"
import PropTypes from "prop-types"
import Branding from "../misc/branding"
import HeaderNav from "./header-nav"
import ColorModeSelector from "../misc/color-mode-selector"
import { useState } from "react"
import Button from "../components/button"

const Header = ({ logo, siteName, headerLinks }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <Container>
        <Flex
          sx={{
            flexDirection: [`column`, `row`],
            justifyContent: `space-between`,
            py: [4],
          }}
        >
          <Flex
            sx={{
              justifyContent: `space-between`,
              alignItems: `center`,
            }}
          >
            <Branding name={siteName} logo={logo} />
            <Button
              onClick={() => setShowMenu(!showMenu)}
              sx={{
                display: [`inline-block`, `none`],
                py: 0,
              }}
            >
              Menu
            </Button>
          </Flex>

          <div
            sx={{
              flexDirection: [`column`, `row`],
              alignItems: `center`,
              display: [showMenu ? `flex` : `none`, `flex`],
            }}
          >
            <HeaderNav links={headerLinks} />
            <ColorModeSelector style={{ ml: [0, 4] }} />
          </div>
        </Flex>
      </Container>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string,
  siteName: PropTypes.string,
  headerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

export default Header
