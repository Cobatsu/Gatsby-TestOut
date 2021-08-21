const path = require('path');

exports.createPages = async ({graphql,actions})=>{
    const response = await graphql(`query getAllPosts {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              path
            }
            html
          }
        }
      }`);

    const {data:{allMarkdownRemark}} = response;
      
    allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: node.frontmatter.path,
            component: path.resolve("./src/templates/post.js"),
            context:{ node }
        })
    });
}