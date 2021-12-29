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
   {/* <Courses
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
   /> */}

   <Courses
    allMarkdownRemark={allMarkdownRemark}
    title='Level 3 Courses'
    type='Level 3'
    subTitle='Pre-University Module'
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
    title='Level 4 Courses'
    type='Level 4-5'
    subTitle='Undergraduate - Year 1'
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
    title='Level 5 Courses'
    type={"Level 4-5,Level 5"}
    subTitle='Undergraduate - Year 2'
    circle={
     <div className={styles.course_background_image}>
      <img
       src='./Vector70.png'
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
    title='Level 6 Courses'
    subTitle='Undergraduate - Final Year'
    type='Level 6'
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
