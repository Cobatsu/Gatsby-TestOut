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
  <Layout title='Level 6 Courses'>
   <div className={styles.main_wrapper}>
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 6 Courses'
     subTitle='Undergraduate - Final Year'
     type='Level 6'
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
