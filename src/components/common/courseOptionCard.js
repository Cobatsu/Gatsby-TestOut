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
   <span style={{fontWeight: "bolder"}}>{level}</span>
   <span></span>
  </div>
  <div>
   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
