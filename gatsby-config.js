
module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog-posts/`,
      },
    },
  ]
};
