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
    content={
     "A Level-3 course can be of 60 or 120 UK University credits, equivalent to an A level in the UK. In general, the courses are made up of 6 modules and 6 written assignments (which might show variance in each course). These courses provide entry onto the first year of the Undergraduate Degree course or a Level 4 course."
    }
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
    content={
     "Level 4 course is the equivalent to the first year of an Undergraduate/Bachelor’s Degree programme in the UK. The Level 4 course is made up of 10 modules and 8 assignments, which is equivalent to 120 university credits."
    }
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
    content={
     "Level 5 is the equivalent to the second year of an Undergraduate/Bachelor’s Degree programme in the UK. It is also equivalent to a Higher National Diploma (HND). The Level 5 course conspires 10 modules and 8 assignments, which provides the student with 120 university credits upon completion."
    }
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
    content={
     "Level 6 is the equivalent to the final year of an Undergraduate/Bachelor’s Degree programme in the UK. Upon completion of a Level 6 course, you will be eligible for admission onto a Postgraduate Business programme, including an MBA course. The level 6 course is made up of 10 modules and 6 written assignments, equivalent to 120 university credits."
    }
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
