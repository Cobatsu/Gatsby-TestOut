import React from "react";
import * as styles from "../../styles/pages/course_detail.module.css";
import Layout from "../components/layoutelements/layout";
import Img from "gatsby-image";

const CourseDetail = ({pageContext}) => {
 const {node} = pageContext;
 const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid;
 console.log(node);
 const discountedFees = node.frontmatter.subTitle
  ?.split(" ")
  .map(item => {
   return item.includes("£")
    ? "£" +
       parseInt(item.split("£")[1] - parseInt(item.split("£")[1] * 40) / 100)
    : item;
  })
  .join(" ");

 return (
  <Layout title={node.frontmatter.courseName}>
   <div className={styles.detail_general_wrapper}>
    <h2 className={styles.header_title}>{node.frontmatter.courseName}</h2>

    <h2
     className={styles.header_title}
     style={{
      fontSize: 25,
      color: "#01937C",
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
      color: "#5c5c85",
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
    </div>
   </div>
  </Layout>
 );
};

export default CourseDetail;
