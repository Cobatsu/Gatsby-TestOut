import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/course_detail.module.css";

const Brochure = () => {
  return (
    <Layout title="Who We Are">
      <div className={styles.detail_general_wrapper}>
        <div style={{ width: "73%" }}>
          <h2 style={{ marginBottom: 80, fontSize: "2rem", color: "#191970" }}>
            Our Brochure
          </h2>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/richmond brochour.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Welcome to the Richmond College.pdf
            </a>
          </div>
          {/* <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 3 Diploma in Business RC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 3 Diploma in Business.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 3 Diploma in EngineeringRC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 3 Diploma in Engineering.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 3FULLRC_r.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 3 Courses.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 4 AccountingRC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 4 Accounting.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 4 and5RC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 4 and 5 courses.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 4 ComputingRC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 4 Computing.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 5 Computing RC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 5 Computing.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level 5RC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 5 courses.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level-3-EmployabilityRC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 3 Employability.pdf
            </a>
          </div>
          <div style={{ paddingBottom: 20, marginLeft: 30 }}>
            <a
              href="/Level-4-Diploma-in-Business-ManagementRC.pdf"
              target="_blank"
              style={{ color: "#191970", fontSize: 20 }}
            >
              {" "}
              <i
                className="fas fa-file-pdf"
                style={{ marginRight: 20, color: "#ff3333" }}
              ></i>
              Level 4 Diploma in Business Management.pdf
            </a>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default Brochure;
