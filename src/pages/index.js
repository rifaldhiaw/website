import React, { useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
import VanillaTilt from "vanilla-tilt"

const IndexPage = ({ location }) => {
  const siteTitle = "Rifaldhi AW"

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".yellow-square"), {
      max: 15,
      speed: 500,
      glare: false,
      scale: 1.3,
    })
  })

  const LogoAw = (
    <div
      className="yellow-square mx-auto"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)",
      }}
    >
      <h2 className="logo-rifaldhi" style={{ transform: "translateZ(30px)" }}>
        Rifaldhi
      </h2>
      <h2 className="logo-aw" style={{ transform: "translateZ(60px)" }}>
        AW
      </h2>
    </div>
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div className="mt-10">{LogoAw}</div>

      {/* <Link to="/blog/">
        <Button marginTop="35px">Go to Blog</Button>
      </Link> */}
    </Layout>
  )
}

export default IndexPage
