import React from "react"
import Menubar from "./menubar"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="min-h-screen">
        <div
          style={{
            maxWidth: `1300px`,
          }}
          className="mx-auto px-6 pt-2 pb-10"
        >
          <Menubar />
          <main className="px-2 md:px-5">{children}</main>
        </div>
      </div>
    )
  }
}

export default Layout
