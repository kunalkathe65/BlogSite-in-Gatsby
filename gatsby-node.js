const path = require("path")

//Following method is required in md file because we need to create 'slug' in CMS it is not required

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog.js`)

  const res = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // Create blog post pages.
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`, //how we want our link
      component: blogPostTemplate, //template or component we want to use
      context: {
        //variable or context for graphql query
        slug: edge.node.slug,
      },
    })
  })
}
