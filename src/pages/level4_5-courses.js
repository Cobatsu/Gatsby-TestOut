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
  <Layout title='Level 4 & 5 – University 1st and 2nd year Courses'>
   <div className={styles.main_wrapper}>
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 4 & 5 – University 1st and 2nd year Courses'
     type='Level 4 & 5 – University 1st and 2nd year'
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

export default Level4_5Courses;
