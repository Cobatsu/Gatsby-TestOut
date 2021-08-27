import * as React from "react";
import { Courseslvl3 } from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import { graphql } from "gatsby";
import Layout from "../components/layoutelements/layout";

const IGCSECourses = (props) => {
  const {
    data: { allMarkdownRemark },
  } = props;
  return (
    <Layout title="A level University Entry Courses">
      <div className={styles.main_wrapper}>
        <Courseslvl3 allMarkdownRemark={allMarkdownRemark} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getAllPosts2 {
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

export default IGCSECourses;
