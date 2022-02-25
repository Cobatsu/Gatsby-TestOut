import * as React from "react";
import {Courses} from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import {graphql} from "gatsby";
import Layout from "../components/layoutelements/layout";

const IGCSECourses = (props) => {
    const {data: {
            allMarkdownRemark
        }} = props;
    return (
        <Layout title="IGCSE Courses">
            <div className={
                styles.main_wrapper
            }>
                <Courses allMarkdownRemark={allMarkdownRemark}
                    title="IGCSE Courses"
                    type="IGCSE"/>
            </div>
        </Layout>
    );
};

export const query = graphql `
  query getAllPosts3 {
    allMarkdownRemark {
      nodes {
        frontmatter {
          courseName
          courseCategory
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        html
      }
    }
  }
`;

export default IGCSECourses;
