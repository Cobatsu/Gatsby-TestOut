import * as React from "react";
import {Courses} from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import {graphql} from "gatsby";
import Layout from "../components/layoutelements/layout";

const IGCSECourses = props => {
 const {
  data: {allMarkdownRemark},
 } = props;
 return (
  <Layout title='A level University Entry Courses'>
   <div className={styles.main_wrapper}>
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 3 Courses'
     type='Level 3'
     subTitle='Pre-University Module'
    />
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
