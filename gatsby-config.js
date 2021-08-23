module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-head",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `courses`,
        path: `${__dirname}/src/courses/`,
      },
    },
  ],
};
