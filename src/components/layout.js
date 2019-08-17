import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Sidebar from "./sidebar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let header

    header = (
      <h1 className="text-5xl my-0">
        <Link className="text-black" to={`/`}>
          {title}
        </Link>
      </h1>
    )

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `1300px`,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          <div className="flex">
            <div className="w-3/12 px-5 py-2">
              <header>{header}</header>
              <Sidebar></Sidebar>
            </div>
            <div className="w-9/12 px-6 py-2">
              <main>{children}</main>
            </div>
          </div>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
