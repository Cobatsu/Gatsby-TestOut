import React from "react";
import * as styles from "../../../styles/layout-style/footer.module.css";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.footer_column_holder}>
        <div className={styles.footer_column} style={{ marginTop: 30 }}>
          <div className={styles.footer_column_header}>USEFUL LINKS</div>
          <Link to="/" className={styles.footer_link}>
            Home
          </Link>
          <Link to="/who-we-are" className={styles.footer_link}>
            Who we are
          </Link>
          <Link to="/entry-requirements" className={styles.footer_link}>
            Entry Requirements
          </Link>
          <Link to="/faq" className={styles.footer_link}>
            FAQ
          </Link>
          <Link to="/contact-us" className={styles.footer_link}>
            Contact Us
          </Link>
        </div>

        <div className={styles.footer_column}>
          <img
            src="/New Logo.png"
            style={{ marginBottom: 20, width: "20rem" }}
          />
          <span style={{ marginBottom: 10 }}>
            <i class="fas fa-building" style={{ marginRight: 5 }}></i>
            <span>Company :</span> RICHMOND COLLEGE
          </span>
          <span style={{ marginBottom: 10 }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: 5 }}></i>
            <span>Address : </span> <br />
            <strong style={{ marginLeft: 25 }}> Canada : </strong>7030 Woodbine
            Avenue Markham, ON, Canada L3R 6G2
            <br />
            <strong style={{ marginLeft: 25 }}>England : </strong> 12 Damson
            Walk, Nottingham, LG3 6NT
          </span>
          <span>
            {" "}
            <i className="fas fa-envelope"></i> <span>E-mail : </span>
            admission@richmondcollege.co.uk
          </span>
          <span>
            <i className="fas fa-phone" style={{ marginRight: 5 }}></i>
            <span>Phone & Whatsapp : </span> +44 7778029423
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
