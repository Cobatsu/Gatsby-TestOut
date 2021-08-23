const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const response = await graphql(`
    query getAllPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            courseCategory
            courseName
          }
          html
        }
      }
    }
  `);

  const {
    data: { allMarkdownRemark },
  } = response;

  allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path:
        node.frontmatter.courseCategory.split(" ").join("_") +
        "/" +
        node.frontmatter.courseName.split(" ").join("_"),
      component: path.resolve("./src/templates/courseDetail.js"),
      context: { node },
    });
  });
};
