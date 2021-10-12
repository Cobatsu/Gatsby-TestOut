import * as React from "react";
import CourseCard from "./courseCard";
import * as styles from "../../../styles/pages/home.module.css";

export const Courses = ({allMarkdownRemark, type, title}) => (
 <React.Fragment>
  <div className={styles.outer_wrapper}>
   <h2
    style={{
     textAlign: "center",
     color: "#01937C",
     fontSize: "1.7rem",
    }}
   >
    {title}
    <i style={{marginLeft: 10}} class='fas fa-graduation-cap'></i>
   </h2>
   <div className={styles.inner_holder}>
    {allMarkdownRemark.nodes.map(node =>
     node.frontmatter.courseCategory === type ? (
      <CourseCard
       courseName={node.frontmatter.courseName}
       courseCategory={node.frontmatter.courseCategory}
       featuredImgFluid={node.frontmatter.featuredImage.childImageSharp.fluid}
       key={node.id}
      />
     ) : null
    )}{" "}
   </div>
  </div>
 </React.Fragment>
);
