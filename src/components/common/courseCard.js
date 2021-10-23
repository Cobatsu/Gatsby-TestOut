import React from "react";
import * as styles from "../../../styles/components/course_card.module.css";
import {Link} from "gatsby";
import Img from "gatsby-image";

const CourseCard = ({courseName, courseCategory, featuredImgFluid}) => {
 return (
  <div className={styles.main_wrapper}>
   <Img
    fluid={featuredImgFluid}
    style={{
     width: "100%",
     borderRadius: "6px 6px 0 0",
     maxHeight: "150px",
     zIndex: -10,
    }}
   ></Img>

   <div className={styles.inner_holder}>
    <span className={styles.card_title} style={{padding: 10}}>
     {" "}
     {courseName}
    </span>
    <Link
     to={
      "/" +
      courseCategory.toLowerCase().split(" ").join("_") +
      "/" +
      courseName.toLowerCase().split(" ").join("_")
     }
     className={styles.view_link}
    >
     <span>View Details</span>{" "}
     <i
      style={{
       marginLeft: 10,
       fontSize: 17,
      }}
      className='fas fa-chevron-right'
     ></i>
    </Link>
   </div>
  </div>
 );
};

export default CourseCard;
