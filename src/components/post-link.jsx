// src/components/post-link.jsx
import React from "react"
import "../styles/post-link.css"
import { Link } from "gatsby"

export default function PostLink({ node }) {
  const { frontmatter, excerpt } = node
  const pageLink = `/post/${frontmatter.slug}/`

  return (
    <Link to={pageLink} className="post-link-anchor">
      <div className="post-link">
        <div className="post-link-text">
          <h2>{frontmatter.title}</h2>
          <p className="post-link-body">{excerpt}</p>
          <p className="post-link-date">{frontmatter.date}</p>
        </div>
      </div>
    </Link>
  )
}
