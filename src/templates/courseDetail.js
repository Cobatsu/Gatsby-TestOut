import React from "react";
import * as styles from "../../styles/pages/course_detail.module.css";
import Layout from "../components/layoutelements/layout";
import OptionCard from "../components/common/courseOptionCard";
import Img from "gatsby-image";

const images = ["A day off-bro.svg"];

const CourseDetail = ({pageContext}) => {
 const {node} = pageContext;
 var courseName = node.frontmatter.courseName.split(", ")[0];
 var courseOptions = [];
 var courseCurriculum = [];
 var courseDetailBanner = "";
 var subTitle = "";

 if (courseName.includes("IT")) {
  courseDetailBanner = "Website Creator-bro.svg";
 } else if (
  courseName == "Entrepreneurship-and-Management" ||
  courseName == "Leadership and Teamwork"
 ) {
  courseDetailBanner = "Team work-bro.svg";
 } else if (courseName == "Sales and Marketing") {
  courseDetailBanner = "Online ads-bro.svg";
 } else if (courseName == "Hotel and Hospitality") {
  courseDetailBanner = "A day off-bro.svg";
 } else if (courseName.includes("IGCSE")) {
  courseDetailBanner = "Online learning-bro.svg";
 } else {
  courseDetailBanner = "Presentation-bro 1.png";
 }

 switch (node.frontmatter.courseCategory) {
  case "IGCSE":
   subTitle = "IGCSE Preparation";
   courseOptions = [
    {
     level: "IGCSE",
     fee: "6500",
    },
   ];
   courseCurriculum = [
    {content: node.frontmatter.curriculum_1, level: "IGCSE"},
   ];
   break;
  case "Level 3":
   subTitle = "Level 3 - Pre-University Module";
   courseOptions = [
    {
     level: "Level 3",
     fee: node.frontmatter.fee,
    },
   ];
   courseCurriculum = [{content: node.frontmatter.curriculum_1, level: "3"}];
   break;

  case "Level 4-5":
   subTitle = " Level 4 & 5 - Undergraduate - Year 1-2";
   courseOptions = [
    {
     level: "Level 4",
     fee: node.frontmatter.fee,
    },
    {
     level: "Level 5",
     fee: node.frontmatter.fee,
    },
    {
     level: "Level 4 + Level 5",
     fee: node.frontmatter.doubleFee,
    },
   ];
   courseCurriculum = [
    {content: node.frontmatter.curriculum_1, level: "4"},
    {content: node.frontmatter.curriculum_2, level: "5"},
   ];
   break;

  case "Level 5":
   subTitle = "Level 5 - Undergraduate Year 2";
   courseOptions = [
    {
     level: "Level 5",
     fee: node.frontmatter.fee,
    },
   ];
   courseCurriculum = [{content: node.frontmatter.curriculum_1, level: "5"}];
   break;

  case "Level 6":
   subTitle = "Level 6 - Undergraduate Final Year ";
   courseOptions = [
    {
     level: "Level 6",
     fee: node.frontmatter.fee,
    },
   ];
   courseCurriculum = [{content: node.frontmatter.curriculum_1, level: "6"}];
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

 return (
  <Layout title={courseName}>
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
        className={styles.classic_text}
        style={{marginBottom: "10px", fontSize: "2rem"}}
       >
        {courseName}
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
       <img src={`/${courseDetailBanner}`} style={{width: "25rem"}} />
      </div>
     </div>
     {
      // about the course
     }
     <div style={{marginBottom: "4rem"}}>
      <div className={styles.classic_text} styles={{marginBottom: "4rem"}}>
       About The Course
      </div>
      <div
       className={styles.content}
       dangerouslySetInnerHTML={{__html: node.html}}
      />
     </div>
     {
      // course options
     }
     <div style={{marginBottom: "4rem"}}>
      <div className={styles.classic_text} styles={{marginBottom: "4rem"}}>
       Course Options
      </div>
      <div
       className={styles.option_card_holder}
       style={{display: "flex", justifyContent: "space-around"}}
      >
       {courseOptions.map(option => {
        return (
         <OptionCard
          {...option}
          courseName={node.frontmatter.courseName.split(", ")[0]}
         />
        );
       })}
      </div>
     </div>
     {
      // course curriculum
     }
     <div style={{marginBottom: "4rem"}}>
      {" "}
      <div className={styles.classic_text} styles={{marginBottom: "4rem"}}>
       Course Curriculum
      </div>
      <div
       style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
       }}
      >
       {courseCurriculum.map(item => {
        return (
         <div>
          <button
           className={styles.classic_button}
           style={{
            marginBottom: "1.6rem",
            boxShadow: "none",
            position: "relative",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
           }}
           onClick={e => {
            if (e.target.type == "submit") {
             var value = e.target.parentElement.children[1].style.display;
             var element = e.target.parentElement.children[1];
            } else {
             var value =
              e.target.parentElement.parentElement.children[1].style.display;
             var element = e.target.parentElement.parentElement.children[1];
            }

            if (value == "none") {
             element.style.display = "block";
            } else {
             element.style.display = "none";
            }
           }}
          >
           {node.frontmatter.courseName.split(", ")[0]} Course Curriculum -
           Level
           {" " + item.level}
           <i
            class='fas fa-chevron-down'
            style={{marginLeft: "14px", fontSize: "16px"}}
           ></i>
          </button>
          <div
           style={{display: "none", marginLeft: "1.5rem", lineHeight: "1.6"}}
           dangerouslySetInnerHTML={{__html: item.content}}
          />
         </div>
        );
       })}
      </div>
     </div>
     {
      // University top-up
     }
     {/* <div>
      {" "}
      <div className={styles.classic_text} styles={{marginBottom: "4rem"}}>
       University top-up
      </div>
     </div> */}
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
