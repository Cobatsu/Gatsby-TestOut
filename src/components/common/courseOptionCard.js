import React from "react";
import * as styles from "../../../styles/components/course_option_card.module.css";
import {Link} from "gatsby";

const OptionCard = ({level, fee, courseName}) => (
 <div className={styles.card_wrapper}>
  <div
   style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1rem",
   }}
  >
   <span
    style={{fontWeight: "bolder", textAlign: "center", marginBottom: "10px"}}
   >
    {courseName}
   </span>
   {!courseName.includes("IGCSE") && (
    <span style={{fontWeight: "bolder"}}>{level}</span>
   )}
   <span></span>
  </div>
  <div>
   <ul
    style={{
     listStyleType: "circle",
     lineHeight: "1rem",
    }}
   >
    <li>
     Access to full curriculum of{" "}
     {level == "Level 4 + Level 5" ? level.split("+").join("and") : level}{" "}
    </li>
    <li>Access to Assignments </li>
    <li>Access to Examination</li>
    <li>Diploma</li>
   </ul>
  </div>
  <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
   <span
    style={{fontWeight: "bolder", marginBottom: "14px", fontSize: "1.5rem"}}
   >
    {" "}
    £ {fee}
   </span>
   <button className={styles.classic_button}> Enroll Now </button>
  </div>
 </div>
);

export default OptionCard;
