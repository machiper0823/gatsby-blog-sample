import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import "../styles/index.css"
import Seo from "../components/seo"
import Pagination from "../components/pagination"

export default function Home({ data, pageContext }) {
  const description = `ようこそ${data.site.siteMetadata.title}へ！`

  return (
    <Layout>
      <Seo title="Top" description={description} />
      <div className="hero">
        <h1 className="hero-text">{data.site.siteMetadata.title}</h1>
        <p className="hero-author-text">{description}</p>
      </div>
      {data.allMarkdownRemark.edges.map(edge => {
        const node = edge.node
        return <PostLink key={node.id} node={node} />
      })}
      <Pagination
        prevPath={pageContext.previousPagePath}
        nextPath={pageContext.nextPagePath}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            title
            slug
          }
          excerpt(format: PLAIN)
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
