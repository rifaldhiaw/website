import React from "react"

import { rhythm } from "../utils/typography"
import Menubar from "./menubar"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="min-h-screen">
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `1300px`,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          <Menubar />
          <div className="flex">
            <div className="px-2 md:px-6 pt-5">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
