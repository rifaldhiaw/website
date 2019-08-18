import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Widget from "../components/widget"

import VanillaTilt from "vanilla-tilt"

const IndexPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges

  const siteTitle = "Rifaldhi AW"
  const summaryWidgetTitle = (
    <>
      Hello there, <br />I am Rifaldhi AW
    </>
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div className="flex flex-wrap">
        <div className="w-2/3 mt-20 md:pl-6">
          <LogoAw />
          <div
            className="mt-8 text-xs font-playfair italic"
            style={{ marginLeft: "15px" }}
          >
            <p>- The Key of Your Future is Always in Your Hand -</p>
          </div>
        </div>

        <div className="w-1/3 pt-5">
          <Widget title={summaryWidgetTitle}>
            A Developer who love learning and making trusted and maintainable
            code based on Jakarta, Indonesia
          </Widget>
          <Widget title="Recent Posts">
            <div className="bg-yellow-200 w-full rounded-lg p-5 overflow-y-auto">
              <ul className="m-0">
                {posts.map(({ node }) => {
                  return <RecentPostList node={node} />
                })}
              </ul>
            </div>
          </Widget>
        </div>
      </div>
    </Layout>
  )
}

const LogoAw = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".yellow-square"), {
      max: 15,
      speed: 500,
      glare: false,
      scale: 1.3,
    })
  })

  return (
    <div
      className="yellow-square"
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
}

const RecentPostList = ({ node }) => {
  const title = node.frontmatter.title
    ? node.frontmatter.title
    : node.fields.slug
  const desc = node.frontmatter.description
    ? node.frontmatter.description
    : node.excerpt

  const partDesc = desc ? desc.substring(0, 70) + " ..." : ""

  return (
    <div key={node.fields.slug}>
      <div>
        <Link to={`blog${node.fields.slug}`}>{title}</Link>
      </div>
      <small>{node.frontmatter.date}</small>
      <p className="text-xs mb-3">{partDesc}</p>
    </div>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
