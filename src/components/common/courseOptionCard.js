import React from "react";
import * as styles from "../../../styles/components/course_option_card.module.css";
import { Link } from "gatsby";
import { navigate } from "@reach/router";

const OptionCard = ({ level, fee, courseName, courseCategory, trigger }) => (
  <div className={styles.card_wrapper}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "1rem",
        marginBottom: 20,
      }}
    >
      {!level.includes("Business and Administrative Management") && (
        <span
          style={{
            fontWeight: "bolder",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {courseName}
        </span>
      )}

      {!courseName.includes("IGCSE") && (
        <span
          style={{
            fontWeight: "bolder",
            fontSize: 18,
            lineHeight: 1.3,
            textAlign: "left",
          }}
        >
          {" "}
          {level}{" "}
        </span>
      )}
      <span></span>
    </div>
    <div style={{ marginBottom: 20 }}>
      <ul
        style={{
          listStyleType: "disc",
          lineHeight: "1.4rem",
        }}
      >
        <li>
          Access to full curriculum of{" "}
          {level == "Level 4 + Level 5" ? level.split("+").join("and") : level}{" "}
        </li>
        <li>Access to Assignments </li>
        <li>Access to Examination</li>
        <li>Diploma</li>
        <li>Opportunity to win a scholarship for everyone who applies</li>
      </ul>
    </div>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span
        style={{
          fontWeight: "bolder",
          marginBottom: "14px",
          fontSize: "1.5rem",
        }}
      >
        {" "}
        £ {fee}
      </span>
      <button
        className={styles.classic_button}
        onClick={() => {
          navigate(`?apply=true&level=${level}`);
        }}
      >
        {" "}
        Apply Now{" "}
      </button>
    </div>
  </div>
);

export default OptionCard;
