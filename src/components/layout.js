import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Sidebar from "./sidebar"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
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
            <div className="w-3/12 px-5 pt-5">
              <header>{header}</header>
              <Sidebar></Sidebar>
            </div>
            <div className="w-9/12 px-6 pt-5">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
