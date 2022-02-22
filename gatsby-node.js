const path = require("path");

exports.createPages = async ({graphql, actions}) => {
 const response = await graphql(`
  query getAllPosts {
   allMarkdownRemark {
    nodes {
     frontmatter {
      courseCategory
      courseName
      university_progression
      university_progression_details
      curriculum_1
      fee
      doubleFee
      curriculum_2
      subTitle
      courseDetails
      featuredImage {
       childImageSharp {
        fluid(maxWidth: 800) {
         base64
         aspectRatio
         src
         srcSet
         sizes
        }
       }
      }
     }
     html
    }
   }
  }
 `);

 const {
  data: {allMarkdownRemark},
 } = response;

 allMarkdownRemark.nodes.forEach(node => {
  actions.createPage({
   path:
    node.frontmatter.courseCategory.split(" ").join("-") +
    "/" +
    node.frontmatter.courseName.split(",")[0].split(" ").join("-"),
   component: path.resolve("./src/templates/courseDetail.js"),
   context: {node},
  });
 });
};
