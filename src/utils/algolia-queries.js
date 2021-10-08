const escapeStringRegexp = require('escape-string-regexp')

const pagePath = `blog`
const indexName = `blog`

// const pageQuery = `{
//   pages: allMarkdownRemark(
//     filter: {
//       fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
//     }
//   ) {
//     edges {
//       node {
//         id
//         frontmatter {
//           title
//         }
//         fields {
//           slug
//         }
//         excerpt(pruneLength: 5000)
//       }
//     }
//   }
// }`

const pageQuery = `{
  pages: allContentfulBlogPost {
    nodes {
      id
      title
      slug
      tags
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
}`

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      // data.pages.edges.map(pageToAlgoliaRecord)
      return data.pages.nodes.map(({ id, title, slug, ...rest }) => {
        return {
          objectID: id,
          title,
          slug: `${pagePath}/${slug}`,
          ...rest,
        }
      })
    },
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
