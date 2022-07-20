module.exports = {
  plugins: [{
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
      },
    },
  ],
  siteMetadata: {
    title: "サイトタイトル",
    author: "サイト作成者",
  },
}