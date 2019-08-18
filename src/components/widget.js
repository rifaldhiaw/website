import React from "react"

const Widget = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h3 className="mb-3 mt-0">{title}</h3>
      <div className="font-playfair">{children}</div>
    </div>
  )
}

export default Widget
