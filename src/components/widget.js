import React from "react"

const Widget = ({ title, children, useBorder = false, className = "" }) => {
  let base = "mb-6 "
  let leftBorder = "border-solid border-0 border-l-4 border-yellow-400 pl-4"
  let main = base + (useBorder ? leftBorder : "") + className

  return (
    <div className={main}>
      <h3 className="mb-3 mt-0">{title}</h3>
      <div className="font-playfair">{children}</div>
    </div>
  )
}

export default Widget
