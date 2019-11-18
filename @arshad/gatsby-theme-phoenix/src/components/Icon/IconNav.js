import React from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"

const IconNav = ({ links, size, navClasses, ulClasses }) => {
  return (
    <nav className={navClasses}>
      <ul className={ulClasses}>
        {links.map(({ icon, url, title }) => (
          <li className="mx-2" key={url}>
            <a href={url} title={title} className="text-dark dark:text-white">
              <Icon name={icon} size={size} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

IconNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  size: PropTypes.number,
  navClasses: PropTypes.string,
  ulClasses: PropTypes.string,
}

IconNav.defaultProps = {
  size: 32,
  navClasses: null,
  ulClasses: null,
}

export default IconNav
