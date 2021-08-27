import * as React from "react";
import CourseCard from "./courseCard";
import * as styles from "../../../styles/pages/home.module.css";

export const CoursesIGCSE = ({ allMarkdownRemark }) => {
  return (
    <React.Fragment>
      <div className={styles.outer_wrapper}>
        <h2 style={{ textAlign: "center", color: "#01937C" }}>
          {" "}
          IGCSE Courses{" "}
          <i style={{ marginLeft: 10 }} class="fas fa-graduation-cap"></i>
        </h2>
        <div className={styles.inner_holder}>
          {allMarkdownRemark.nodes.map((node) =>
            node.frontmatter.courseCategory === "IGCSE" ? (
              <CourseCard
                courseName={node.frontmatter.courseName}
                courseCategory={node.frontmatter.courseCategory}
                key={node.id}
              />
            ) : null
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export const Courseslvl3 = ({ allMarkdownRemark }) => {
  return (
    <React.Fragment>
      <div className={styles.outer_wrapper}>
        <h2 style={{ textAlign: "center", color: "#01937C" }}>
          {" "}
          Level 3 – A level University Entry Courses{" "}
          <i style={{ marginLeft: 10 }} class="fas fa-graduation-cap"></i>
        </h2>
        <div className={styles.inner_holder}>
          {allMarkdownRemark.nodes.map((node) =>
            node.frontmatter.courseCategory ===
            "Level 3 – A level University Entry" ? (
              <CourseCard
                courseName={node.frontmatter.courseName}
                courseCategory={node.frontmatter.courseCategory}
                key={node.id}
              />
            ) : null
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export const Courseslvl4_5 = ({ allMarkdownRemark }) => {
  return (
    <React.Fragment>
      <div className={styles.outer_wrapper}>
        <h2 style={{ textAlign: "center", color: "#38384e" }}>
          {" "}
          Level 4 & 5 – University 1st and 2nd year
        </h2>
        <div className={styles.inner_holder}>
          {allMarkdownRemark.nodes.map((node) =>
            node.frontmatter.courseCategory ===
            "Level 4 & 5 – University 1st and 2nd year" ? (
              <CourseCard
                courseName={node.frontmatter.courseName}
                courseCategory={node.frontmatter.courseCategory}
                key={node.id}
              />
            ) : null
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export const Courseslvl6 = ({ allMarkdownRemark }) => {
  return (
    <React.Fragment>
      <div className={styles.outer_wrapper}>
        <h2 style={{ textAlign: "center", color: "#38384e" }}>
          {" "}
          Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA)
        </h2>
        <div className={styles.inner_holder}>
          {allMarkdownRemark.nodes.map((node) =>
            node.frontmatter.courseCategory ===
            "Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA)" ? (
              <CourseCard
                courseName={node.frontmatter.courseName}
                courseCategory={node.frontmatter.courseCategory}
                key={node.id}
              />
            ) : null
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
