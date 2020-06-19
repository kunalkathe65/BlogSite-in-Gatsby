import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do,YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h2>{data.contentfulBlogPost.title}</h2>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {/* <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}> // for md files
      </div> */}
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}
export default Blog
