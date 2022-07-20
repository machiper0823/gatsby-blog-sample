// src/pages/404.jsx
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/404.css"

export default function NotFound() {
  return (
    <Layout>
      <Seo title="404 Not Found" description="ページが見つかりません" />
      <div className="not-found-message">
        <h1>ページが見つかりません</h1>
        <Link to="/">トップページへ</Link>
      </div>
    </Layout>
  )
}
