import * as React from "react";
import { Link, graphql } from "gatsby";
import * as styles from "../../styles/posts.module.css";
import "../../styles/global.css";
import Layout from "../components/layoutelements/layout";

const Home = (props) => {
  const {
    data: { allMarkdownRemark },
  } = props;
  return (
    <Layout title="Richmond College">
      {/* <div className={styles.postsWrapper}>
        <div className={styles.posts}>
          {allMarkdownRemark.nodes.map((node) => (
            <Link
              key={node.id}
              to={node.frontmatter.path}
              style={{ marginTop: 10 }}
            >
              <span>{node.frontmatter.title}</span>
            </Link>
          ))}
        </div>
      </div> */}
    </Layout>
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

export default Home;
