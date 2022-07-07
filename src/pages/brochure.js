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
          <div style={{ paddingBottom: 200, marginLeft: 30 }}>
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
              Brochure.pdf
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Brochure;
