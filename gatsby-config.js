module.exports = {
 siteMetadata: {
  title: "My Gatsby Site",
 },
 plugins: [
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-image",
  "gatsby-transformer-remark",
  "gatsby-plugin-react-head",
  `gatsby-plugin-styled-components`,
  "gatsby-plugin-use-query-params",
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `courses`,
    path: `${__dirname}/src/courses/`,
   },
  },
  {
   resolve: `gatsby-plugin-nprogress`,
   options: {
    // Setting a color is optional.
    color: `rgb(251, 201, 51)`,
    // Disable the loading spinner.
    showSpinner: false,
   },
  },
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    path: `${__dirname}/src/images`,
   },
  },
 ],
};
