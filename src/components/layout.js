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
          <div className="flex">
            <div className="px-2 md:px-6">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
