import * as React from "react";
import {Courses} from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import {graphql} from "gatsby";
import Layout from "../components/layoutelements/layout";

const Level5Courses = props => {
 const {
  data: {allMarkdownRemark},
 } = props;
 return (
  <Layout title='Level 5 Courses'>
   <div className={styles.main_wrapper}>
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 5 Courses'
     subTitle='Undergraduate - Final Year 2'
     type='Level 4-5,Level 5'
    />
   </div>
  </Layout>
 );
};

export const query = graphql`
 query getAllPosts15 {
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

export default Level5Courses;
