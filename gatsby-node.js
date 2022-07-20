// gatsby-node.js
const path = require("path")

exports.createPages = async ({
    graphql,
    actions,
    reporter
}) => {
    const {
        createPage
    } = actions

    const result = await graphql(
        `
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
              ) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                          date(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                          title
                          slug
                          description
                        }
                        excerpt(format: PLAIN)
                    }
                }
            }
        }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const {
        edges
    } = result.data.allMarkdownRemark

    edges.forEach(edge => {
        createPage({
            path: `/post/${edge.node.frontmatter.slug}/`,
            component: path.resolve("./src/templates/post.jsx"),
            context: {
                post: edge.node,
            }
        })
    });
}