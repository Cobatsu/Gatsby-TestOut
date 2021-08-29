import React from "react";
import * as styles from "../../../styles/layout-style/footer.module.css";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.footer_column_holder}>
        <div className={styles.footer_column}>
          <div className={styles.footer_column_header}>OUR COLLABORATIONS</div>
          <img src="/richmond-logo2.png" width="150"></img>
          <img src="/athe-logo.png" style={{ width: "150px" }}></img>
          <img src="/othm-logo.png" style={{ width: "150px" }}></img>
          <img src="/qualifi-logo.png" style={{ width: "150px" }}></img>
        </div>
        <div className={styles.footer_column}>
          <div className={styles.footer_column_header}>USEFUL LINKS</div>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/faq" style={{ color: "white" }}>
            FAQ
          </Link>
        </div>

        <div className={styles.footer_column}>
          <div className={styles.footer_column_header}>ABOUT US</div>
          <span style={{ color: "#F9F9F9" }}>
            <i class="fas fa-building" style={{ marginRight: 5 }}></i>
            <span>Company : </span> ADVANCED EDUCATION
          </span>
          <span style={{ color: "#F9F9F9" }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: 5 }}></i>
            <span>Address : </span> 7030 Woodbine Avenue Markham, ON, Canada L3R
            6G2
          </span>
          <span style={{ color: "#F9F9F9" }}>
            {" "}
            <i className="fas fa-envelope" style={{ marginRight: 5 }}></i>{" "}
            <span>E-mail : </span>info@richmondcollege.co.uk
          </span>
          <span style={{ color: "#F9F9F9" }}>
            <i className="fas fa-phone" style={{ marginRight: 5 }}></i>
            <span>Phone number : </span> +1 3063514537
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
