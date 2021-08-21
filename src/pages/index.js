import * as React from "react";
import { Link, graphql } from "gatsby";
import * as styles from "../../styles/posts.module.css";
import "../../styles/global.css";

const Posts = (props) => {
  const {
    data: { allMarkdownRemark },
  } = props;
  return (
    <div className={styles.postsWrapper}>
      <div className={styles.posts}>
        {allMarkdownRemark.nodes.map((node) => (
          <Link key={node.id} to={node.frontmatter.path} style={{marginTop:10}}>
            <span>{node.frontmatter.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query getAllPosts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          path
        }
        id
      }
    }
  }
`;

export default Posts;
