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
      <div>
        <div>
          {allMarkdownRemark.nodes.map((node) => (
            <Link
              key={node.id}
              to={
                node.frontmatter.courseCategory.split(" ").join("_") +
                "/" +
                node.frontmatter.courseName.split(" ").join("_")
              }
              style={{ marginTop: 10 }}
            >
              <span>
                {node.frontmatter.courseCategory +
                  " " +
                  node.frontmatter.courseName}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getAllPosts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          courseName
          courseCategory
        }
        id
        html
      }
    }
  }
`;

export default Home;
