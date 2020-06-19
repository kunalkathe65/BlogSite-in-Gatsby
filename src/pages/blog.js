import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h2>Blog Post</h2>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li key={edge.node.id}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
                <Link to={edge.node.fields.slug}>Learn more</Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
export default BlogPage
