const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const response = await graphql(`
    query getAllPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            courseCategory
            courseName
            courseDetails
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
        node.frontmatter.courseCategory.split(" ").join("_").toLowerCase() +
        "/" +
        node.frontmatter.courseName.split(" ").join("_").toLowerCase(),
      component: path.resolve("./src/templates/courseDetail.js"),
      context: { node },
    });
  });
};
