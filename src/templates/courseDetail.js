import React from "react";
import * as styles from "../../styles/pages/course_detail.module.css";
import Layout from "../components/layoutelements/layout";

const CourseDetail = ({ pageContext }) => {
  const { node } = pageContext;
  return (
    <Layout title={node.frontmatter.courseName}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          padding: 30,
        }}
      >
        <div className={styles.inner_container}>
          <h2> - About the course - </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: node.html,
            }}
          />
        </div>

        <div className={styles.inner_container}>
          <h2> - Course Details - </h2>{" "}
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.courseDetails,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
