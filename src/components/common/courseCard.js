import React from "react";
import * as styles from "../../../styles/components/course_card.module.css";
import { Link } from "gatsby";

const CourseCard = ({ courseName, courseCategory }) => {
  return (
    <div className={styles.main_wrapper}>
      <img
        src="/course_ex_image.jpg"
        style={{
          width: "100%",
          borderRadius: "6px 6px 0 0",
        }}
      ></img>
      <div className={styles.inner_holder}>
        <span style={{ color: "#38384e", fontWeight: 600 }}> {courseName}</span>
        <Link
          to={
            courseCategory.split(" ").join("_") +
            "/" +
            courseName.split(" ").join("_")
          }
          className={styles.view_link}
        >
          <span>View Details</span>{" "}
          <i
            style={{
              marginLeft: 10,
              fontSize: 17,
            }}
            className="fas fa-chevron-right"
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
