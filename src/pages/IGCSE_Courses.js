import * as React from "react";
import { CoursesIGCSE } from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import { graphql } from "gatsby";
import Layout from "../components/layoutelements/layout";

const IGCSECourses = (props) => {
  const {
    data: { allMarkdownRemark },
  } = props;
  return (
    <Layout title="IGCSE Courses">
      <div className={styles.main_wrapper}>
        <CoursesIGCSE allMarkdownRemark={allMarkdownRemark} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getAllPostsAndGetAllPosts {
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
