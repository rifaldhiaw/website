import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Widget from "../components/widget"

import VanillaTilt from "vanilla-tilt"

const IndexPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges

  const siteTitle = "Rifaldhi AW"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mt-0 lg:mt-10 pl-0 xl:pl-16">
          <div className="logo-scale text-center">
            <LogoAw />
          </div>
          <div className="mt-0 xl:mt-16 text-xs font-playfair italic text-center md:text-left">
            <p>- The Key of Your Future is Always in Your Hand -</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 pt-5">
          <Widget title="A Web Developer" useBorder={true}>
            <p className="text-sm">
              who love learning, write a maintainable code yet love observing
              and appreciate the value of a good design, based on Jakarta,
              Indonesia
            </p>
          </Widget>
          <Widget title="Recent Posts" className="mt-16 h-64 overflow-y-auto">
            <div className="w-full overflow-y-auto">
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
      scale: 1.2,
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

  const partDesc = desc ? desc.substring(0, 150) + " ..." : ""

  return (
    <div key={node.fields.slug} className="flex">
      <div className="h-3 w-3 rounded-full bg-yellow-400 mt-3 mr-5" />
      <div>
        <div>
          <Link to={`blog${node.fields.slug}`}>{title}</Link>
        </div>
        {/* <small>{node.frontmatter.date}</small> */}
        <p className="text-xs mb-3">{partDesc}</p>
      </div>
    </div>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
