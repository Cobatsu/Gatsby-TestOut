import * as React from "react";
import {Courses} from "../components/common/courses";
import * as styles from "../../styles/pages/home.module.css";
import {graphql} from "gatsby";
import Layout from "../components/layoutelements/layout";

const courses = props => {
 const {
  data: {allMarkdownRemark},
 } = props;

 return (
  <Layout>
   <Courses
    allMarkdownRemark={allMarkdownRemark}
    title='IGCSE Courses'
    type='IGCSE'
    subTitle='Short'
    circle={
     <div className={styles.course_background_image}>
      <img src='./Vector.png' style={{position: "absolute", width: "13rem"}} />
      <span style={{color: "#191970", fontSize: "2rem", fontWeight: 600}}>
       0%
      </span>
     </div>
    }
   />

   <Courses
    allMarkdownRemark={allMarkdownRemark}
    title='Level 3 Courses'
    type='Level 3 – A level University Entry'
    subTitle=' University Entry'
    circle={
     <div className={styles.course_background_image}>
      <img
       src='./Vector35.png'
       style={{position: "absolute", width: "13rem"}}
      />
      <span style={{color: "#191970", fontSize: "2rem", fontWeight: 600}}>
       35%
      </span>
     </div>
    }
   />

   <Courses
    allMarkdownRemark={allMarkdownRemark}
    title='Level 4 & 5 Courses'
    type='Level 4 & 5 – University 1st and 2nd year'
    subTitle='University 1st and 2nd year'
    circle={
     <div className={styles.course_background_image}>
      <img
       src='./Vector75.png'
       style={{position: "absolute", width: "13rem"}}
      />
      <span style={{color: "#191970", fontSize: "2rem", fontWeight: 600}}>
       70%
      </span>
     </div>
    }
   />

   <Courses
    allMarkdownRemark={allMarkdownRemark}
    title='Level 6 & 7 Courses'
    type='Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA)'
    subTitle='Undergrad Final Year and Masters/MBA'
    circle={
     <div className={styles.course_background_image}>
      <img
       src='./Vector100.png'
       style={{position: "absolute", width: "13rem"}}
      />
      <span style={{color: "#191970", fontSize: "2rem", fontWeight: 600}}>
       <i style={{fontSize: "2.5rem"}} class='fas fa-graduation-cap'></i>
      </span>
     </div>
    }
   />
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

export default courses;
