import React from "react";
import * as styles from "../../../styles/layout-style/header.module.css";

const Header = () => {
  return (
    <header className={styles.main_wrapper}>
      <div className={styles.contact_buttons}>
        <div className={styles.contact_buttons_item}>
          {" "}
          <span style={{ marginRight: 6 }}>Contact Us</span>
          <i class="fas fa-paper-plane"></i>
        </div>
      </div>
      <div className={styles.logo_links}>
        {/* <img
          src="/richmond-logo.png"
          width="150"
          style={{ marginRight: 50 }}
        ></img> */}
        <ul className={styles.links}>
          <li>
            <span>About Us</span> <i class="fas fa-caret-down"></i>{" "}
            <ul className={styles.subLinks}>
              <li>
                Our Credentials <i class="fas fa-chevron-right"></i>{" "}
              </li>
              <li>
                Who We Are <i class="fas fa-chevron-right"></i>{" "}
              </li>
            </ul>
          </li>
          <li>
            <span>Courses</span> <i class="fas fa-caret-down"></i>
            <ul className={styles.subLinks}>
              <li>
                IGCSE Courses <i class="fas fa-chevron-right"></i>{" "}
              </li>
              <li>
                (Level 3) A level University entry Courses{" "}
                <i class="fas fa-chevron-right"></i>{" "}
              </li>
              <li>
                (Level 4 & 5) University 1st and 2nd year Courses{" "}
                <i class="fas fa-chevron-right"></i>{" "}
              </li>
              <li>
                Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA){" "}
                <i class="fas fa-chevron-right"></i>{" "}
              </li>
            </ul>
          </li>
          <li>
            <span>How You Will Learn</span> <i class="fas fa-caret-down"></i>
            <ul className={styles.subLinks}>
              <li>
                How Will I Be Assessed <i class="fas fa-chevron-right"></i>{" "}
              </li>
              <li>
                Levels 3-7 Explained <i class="fas fa-chevron-right"></i>
              </li>
              <li>
                Entry Requirements <i class="fas fa-chevron-right"></i>
              </li>
              <li>
                FAQ <i class="fas fa-chevron-right"></i>
              </li>
            </ul>
          </li>
          <li>
            <span>Our Hubs</span>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
