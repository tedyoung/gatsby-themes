/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global } from "@emotion/core"

export default ({ children }) => (
  <Styled.root>
    <Global
      styles={{
        "*": { boxSizing: `border-box` },
        body: { margin: 0, padding: 0 },
      }}
    />
    {children}
  </Styled.root>
)
