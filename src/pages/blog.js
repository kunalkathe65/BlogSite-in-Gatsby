import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            id
            title
            publishedDate(formatString: "MMMM Do,YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Blogs" />
        <h2>Blog Posts</h2>
        <ol className={blogStyles.link}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li key={edge.node.id}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
                <Link
                  to={edge.node.slug}
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
