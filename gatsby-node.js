// gatsby-node.js
const path = require("path")
const {
    paginate
} = require("gatsby-awesome-pagination")

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
                    previous {
                        id
                        frontmatter {
                          title
                          slug
                        }
                    }
                    next {
                        id
                        frontmatter {
                          title
                          slug
                        }
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

    paginate({
        createPage,
        items: edges,
        itemsPerPage: 5,
        pathPrefix: ({
            pageNumber
        }) => (pageNumber === 0 ? "/" : "/page"),
        component: path.resolve("./src/templates/index.jsx"),
    })

    edges.forEach(edge => {
        createPage({
            path: `/post/${edge.node.frontmatter.slug}/`,
            component: path.resolve("./src/templates/post.jsx"),
            context: {
                post: edge.node,
                prev: edge.previous,
                next: edge.next,
            }
        })
    });
}