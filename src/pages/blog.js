import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

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
        <h2>Blog Posts</h2>
        <ol className={blogStyles.link}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li key={edge.node.id}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
                <Link
                  to={edge.node.fields.slug}
                  style={{ textDecoration: "none", color: "#1287A5" }}
                >
                  Learn more
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
export default BlogPage
