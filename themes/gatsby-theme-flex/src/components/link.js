/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import isRelativeUrl from "is-relative-url"

export default ({ style, to, children, ...props }) => {
  if (to && isRelativeUrl(to)) {
    return (
      <Link
        to={to}
        sx={{
          ...style,
        }}
        activeClassName="active"
        {...props}
      >
        {children}
      </Link>
    )
  }
  return (
    <a
      href={to}
      sx={{
        ...style,
      }}
      {...props}
    >
      {children}
    </a>
  )
}
