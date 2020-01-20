/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "../components/link"
import PropTypes from "prop-types"

const FooterNav = ({ links }) => {
  return (
    links && (
      <nav>
        <ul
          sx={{
            margin: 0,
            padding: 0,
            listStyle: `none outside none`,
            display: `flex`,
            flexDirection: `row`,
            alignItems: [`center`],
          }}
        >
          {links.map(({ title, path }) => (
            <li
              key={title}
              sx={{
                marginLeft: 4,
              }}
            >
              <Link
                to={path}
                sx={{
                  variant: `text.small`,
                  textDecoration: `none`,
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  )
}

FooterNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

export default FooterNav
