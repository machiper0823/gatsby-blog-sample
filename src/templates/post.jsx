// src/template/post.jsx
import React from "react"
import "../styles/post.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Post({ pageContext }) {
  const { frontmatter, html, excerpt } = pageContext.post
  const updatedAt = frontmatter.date
  const title = frontmatter.title
  const description = frontmatter.description ?? excerpt

  return (
    <Layout>
      <Seo title={title} description={description} />
      <div className="post-header">
        <h1>{title}</h1>
        <p className="post-date">{updatedAt}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} className="post-body" />
    </Layout>
  )
}
