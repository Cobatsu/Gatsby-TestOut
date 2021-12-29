import React from "react";
import * as styles from "../../styles/pages/course_detail.module.css";
import Layout from "../components/layoutelements/layout";
import Img from "gatsby-image";

const CourseDetail = ({pageContext}) => {
 const {node} = pageContext;
 const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid;

 var subTitle = "";
 var courseOptions = [];

 console.log(node.frontmatter.courseCategory);
 switch (node.frontmatter.courseCategory) {
  case "Level 3":
   subTitle = "Pre-University Module";
   break;

  case "Level 4-5":
   subTitle = "Undergraduate - Year 1-2";
   break;

  case "Level 5":
   subTitle = "Undergraduate - Year 2";
   break;

  case "Level 6":
   subTitle = "Undergraduate - Final Year";
   break;
 }
 const discountedFees = node.frontmatter.subTitle
  ?.split(" ")
  .map(item => {
   return item.includes("£")
    ? "£" +
       parseInt(item.split("£")[1] - parseInt(item.split("£")[1] * 40) / 100)
    : item;
  })
  .join(" ");

 console.log(subTitle);

 return (
  <Layout title={node.frontmatter.courseName}>
   <div className={styles.detail_general_wrapper}>
    <div style={{width: "73%"}}>
     {
      // course title and image
     }
     <div
      style={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
      }}
     >
      <div style={{display: "flex", flexDirection: "column"}}>
       <span
        style={{
         color: "#191970",
         fontWeight: 700,
         fontSize: "2rem",
         marginBottom: 10,
        }}
       >
        {node.frontmatter.courseName.split(", ")[0]}
       </span>
       <span
        style={{
         color: "#191970",
         textDecoration: "underline",
         fontSize: "1rem",
         fontWeight: 600,
        }}
       >
        {subTitle}
       </span>
      </div>
      <div>
       <img src='/Presentation-bro 1.png' />
      </div>
     </div>
     {
      // about the course
     }
     <div style={{display: "flex", flexDirection: "column"}}>
      <span
       style={{
        color: "#191970",
        fontWeight: "bolder",
        fontSize: "1.5em",
        marginBottom: 40,
       }}
      >
       About The Course
      </span>
      <div
       className={styles.content}
       dangerouslySetInnerHTML={{__html: node.html}}
      />
     </div>
     {
      // course options
     }
     <div></div>
    </div>

    {/* <h2 className={styles.header_title}>{node.frontmatter.courseName}</h2>

    <h2
     className={styles.header_title}
     style={{
      fontSize: 25,
      color: "#FEC618",
      padding: 0,
      display: "flex",
      alignItems: "center",
     }}
    >
     {node.frontmatter.subTitle}
    </h2>

    <h2
     className={styles.header_title}
     style={{
      fontSize: 22,
      color: "#2B2B2B",
      padding: 10,
      display: "flex",
      alignItems: "center",
     }}
    >
     {" "}
     {discountedFees} ( Current 40% Discount Fee )
    </h2>

    <Img className={styles.course_banner} fluid={featuredImgFluid}></Img>

    <div className={styles.inner_container} style={{position: "relative"}}>
     <i
      style={{
       position: "absolute",
       top: 0,
       right: 10,
       fontSize: 40,
       color: "#2B2B2B",
      }}
      class='fas fa-bookmark'
     ></i>
     <h2>About the course</h2>

     <div
      className={styles.content}
      dangerouslySetInnerHTML={{__html: node.html}}
     />
    </div>

    <div
     className={styles.inner_container + " " + styles.content}
     style={{position: "relative"}}
    >
     <i
      style={{
       position: "absolute",
       top: 0,
       right: 10,
       fontSize: 40,
       color: "#2B2B2B",
      }}
      class='fas fa-bookmark'
     ></i>
     <h2> Course Details </h2>{" "}
     <div dangerouslySetInnerHTML={{__html: node.frontmatter.courseDetails}} />
    </div> */}
   </div>
  </Layout>
 );
};

export default CourseDetail;
