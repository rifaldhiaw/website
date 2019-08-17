import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ location }) => {
  const siteTitle = "Contact"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
    </Layout>
  )
}

export default ContactPage
