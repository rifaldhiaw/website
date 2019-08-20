import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Project"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="w-full md:w-3/4">
        <h2>My Projects</h2>
        <p>- Page is Under Development -</p>
      </div>
    </Layout>
  )
}

export default ProjectPage

export const projectPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
