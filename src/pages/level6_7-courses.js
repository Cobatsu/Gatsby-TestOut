import * as React from "react";
import {Courses} from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import {graphql} from "gatsby";
import Layout from "../components/layoutelements/layout";

const Level4_5Courses = props => {
 const {
  data: {allMarkdownRemark},
 } = props;
 return (
  <Layout title='Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA) Courses'>
   <div className={styles.main_wrapper}>
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA) Courses'
     type='Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA)'
    />
   </div>
  </Layout>
 );
};

export const query = graphql`
 query getAllPosts6 {
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

export default Level4_5Courses;
