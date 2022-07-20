// src/components/seo.jsx
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description }) => {
  const data2 = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  title = (title ? title + " | " : "") + data2.site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{ lang: "ja-jp" }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `Dev Blog`,
        },
        {
          property: `og:locale`,
          content: `ja_JP`,
        },
      ]}
    />
  )
}

export default Seo
