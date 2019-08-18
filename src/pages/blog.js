import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Widget from "../components/widget"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.posts.edges
    const allPosts = data.allPosts.edges
    const tags = data.tags.group

    let fiveRandomPosts = allPosts
      .slice(0, 5)
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="flex flex-wrap">
          <div className="w-2/3 pr-5">
            <div style={{ margin: "20px 0 40px" }}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`blog${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-1/3 pt-10 px-5">
            <Widget title="Category">
              <ul className="ml-2 text-sm font-bold">
                {tags.map(tag => {
                  return (
                    <li className="list-none my-1">
                      <div className="inline-block bg-yellow-400 w-2 h-2 rounded-full mr-2"></div>
                      {tag.fieldValue} ( {tag.totalCount} )
                    </li>
                  )
                })}
              </ul>
            </Widget>
            <Widget title="Random Posts">
              <div className="bg-yellow-200 w-full rounded-lg p-5 overflow-y-auto">
                {fiveRandomPosts.map(post => {
                  return <RandomPostList post={post.node}></RandomPostList>
                })}
              </div>
            </Widget>
          </div>
        </div>
      </Layout>
    )
  }
}

const RandomPostList = ({ post }) => {
  console.log(post)
  const title = post.frontmatter.title
    ? post.frontmatter.title
    : post.fields.slug

  return (
    <div key={post.fields.slug} className="mb-3">
      <div className="leading-none">
        <Link to={`blog${post.fields.slug}`}>{title}</Link>
      </div>
      <small>{post.frontmatter.date}</small>
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
            tags
          }
        }
      }
    }
    allPosts: allMarkdownRemark(limit: 2000) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
    tags: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
