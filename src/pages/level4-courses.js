import * as React from "react";
import {Courses} from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import {graphql} from "gatsby";
import Layout from "../components/layoutelements/layout";

const Level4Courses = props => {
 const {
  data: {allMarkdownRemark},
 } = props;
 return (
  <Layout title='Level 4 Courses'>
   <div className={styles.main_wrapper}>
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 4 Courses'
     type='Level 4-5'
    />
   </div>
  </Layout>
 );
};

export const query = graphql`
 query getAllPosts4 {
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

export default Level4Courses;
