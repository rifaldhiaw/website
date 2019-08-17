import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location }) => {
  const siteTitle = "About me"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
    </Layout>
  )
}

export default AboutPage
