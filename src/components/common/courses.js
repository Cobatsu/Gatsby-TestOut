import * as React from "react";
import CourseCard from "./courseCard";
import * as styles from "../../../styles/pages/home.module.css";
import {navigate} from "gatsby";

export const Courses = ({
 allMarkdownRemark,
 type,
 title,
 subTitle,
 circle,
 content,
}) => (
 <React.Fragment>
  <div className={styles.courses_wrapper}>
   <div className={styles.course} style={{width: "65%"}}>
    <div className={styles.course_inner}>
     <span style={{fontSize: "2rem", fontWeight: 600, marginBottom: 15}}>
      {title}
     </span>
     <span
      style={{textDecoration: "underline", marginBottom: 30, fontWeight: 600}}
     >
      {subTitle}
     </span>
     <span style={{lineHeight: 1.6, marginBottom: 30}}>{content}</span>
     <ul>
      {allMarkdownRemark.nodes.map(node =>
       node.frontmatter.courseCategory == type.split(",")[0] ||
       node.frontmatter.courseCategory == type.split(",")[1] ? (
        <li
         className={styles.course_list_item}
         style={{color: "#191970", marginBottom: 17, fontWeight: 700}}
         onClick={() => {
          navigate(
           "/" +
            (node.frontmatter.courseCategory == type.split(",")[1]
             ? type.split(",")[1].split(" ").join("-")
             : node.frontmatter.courseCategory.split(" ").join("-")) +
            "/" +
            node.frontmatter.courseName.split(",")[0].split(" ").join("-")
          );
         }}
        >
         {" "}
         <i style={{marginRight: 10}} className='fas fa-chevron-right'></i>
         {node.frontmatter.courseName.split(", ")[0]}
        </li>
       ) : null
      )}
     </ul>
    </div>

    {circle}
   </div>{" "}
  </div>
 </React.Fragment>
);
