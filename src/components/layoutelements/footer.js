import React from "react";
import * as styles from "../../../styles/layout-style/footer.module.css";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.footer_column_holder}>
        <img src="/New Logo.png" style={{ marginBottom: 20, height: "4rem" }} />
        <div className={styles.footer_column}>
          <div
            className={styles.footer_column_header}
            style={{ textDecoration: "underline", color: "#191970" }}
          >
            Contact Us
          </div>
          <span style={{ marginBottom: 10 }}>
            <i class="fas fa-building" style={{ marginRight: 5 }}></i>
            <span>Company :</span> RICHMOND COLLEGE
          </span>
          <span style={{ marginBottom: 10 }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: 5 }}></i>
            <span>Address : </span> <br />
            <strong> Canada : </strong>7030 Woodbine Avenue Markham, ON, Canada
            L3R 6G2
            <br />
            <strong>England : </strong> 12 Damson Walk, Nottingham, LG3 6NT
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
        <div className={styles.footer_column}>
          <div
            className={styles.footer_column_header}
            style={{ textDecoration: "underline", color: "#191970" }}
          >
            Navigation
          </div>
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
          <div
            className={styles.footer_column_header}
            style={{ textDecoration: "underline", color: "#191970" }}
          >
            Social
          </div>
          <div className={styles.social}>
            <a
              target="_blank"
              href="https://www.instagram.com/onlinerichmondcollegeuk/"
            >
              <i
                style={{
                  fontSize: "2rem",
                  marginRight: 15,
                  color: "#191970",
                }}
                class="fab fa-instagram"
              ></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/people/Richmond-College/100088128827713/"
            >
              <i
                style={{ fontSize: "2rem", color: "#191970", marginRight: 10 }}
                class="fab fa-facebook"
              ></i>
            </a>{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCxJAqMFc3atHjL9Moq29tIw"
            >
              <i
                style={{ fontSize: "2rem", color: "#191970" }}
                class="fab fa-youtube"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
