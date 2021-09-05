import React from "react";
import * as styles from "../../../styles/layout-style/header.module.css";
import {Link} from "gatsby";

const Header = () => {
    return (
        <header className={
            styles.main_wrapper
        }>
            <div className={
                styles.contact_buttons
            }>
                <div className={
                    styles.contact_buttons_item
                }>
                    {" "}
                    <span style={
                        {marginRight: 6}
                    }>Contact Us</span>
                    <i class="fas fa-paper-plane"></i>
                </div>
            </div>
            <div className={
                styles.logo_links
            }>
                <img src="/richmond-logo2.png" width="300"
                    style={
                        {
                            marginRight: 50,
                            position: "absolute",
                            top:20,
                            left:5
                        }
                }></img>
                <ul className={
                    styles.links
                }>
                    <li style={
                        {padding: 0}
                    }>
                        <Link to="/"
                            className={
                                styles.linkHref
                        }>
                            <span>Home</span>
                            {" "} </Link>
                    </li>
                    {/* <li>
            <span>About Us</span> <i class="fas fa-caret-down"></i>{" "}
            <ul className={styles.subLinks}>
              <li>
                Our Credentials <i class="fas fa-chevron-right"></i>{" "}
              </li>
              <li>
                Who We Are <i class="fas fa-chevron-right"></i>{" "}
              </li>
            </ul>
          </li> */}
                    <li>
                        <span>Courses</span>
                        <i class="fas fa-caret-down"></i>
                        <ul className={
                            styles.subLinks
                        }>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/IGCSE-courses">
                                    IGCSE Courses
                                    <i class="fas fa-chevron-right"></i>
                                    {" "} </Link>
                            </li>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/level3-courses">
                                    (Level 3) A level University entry Courses{" "}
                                    <i class="fas fa-chevron-right"></i>
                                    {" "} </Link>
                                {" "} </li>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/IGCSE-courses">
                                    (Level 4 & 5) University 1st and 2nd year Courses{" "}
                                    <i class="fas fa-chevron-right"></i>
                                    {" "} </Link>
                            </li>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/IGCSE-courses">
                                    Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA) Courses{" "}
                                    <i class="fas fa-chevron-right"></i>
                                    {" "} </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>How You Will Learn</span>
                        <i class="fas fa-caret-down"></i>
                        <ul className={
                            styles.subLinks
                        }>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/assessment-info">
                                    How Will I Be Assessed
                                    <i class="fas fa-chevron-right"></i>
                                    {" "} </Link>
                            </li>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/levels3-7">
                                    Levels 3-7 Explained
                                    <i class="fas fa-chevron-right"></i>
                                </Link>
                            </li>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/entry-requirements">
                                    Entry Requirements
                                    <i class="fas fa-chevron-right"></i>
                                </Link>
                            </li>
                            <li>
                                <Link className={
                                        styles.sublinkHref
                                    }
                                    to="/faq">
                                    FAQ
                                    <i class="fas fa-chevron-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li style={
                        {padding: 0}
                    }>
                        {" "}
                        <Link to="/Hubs"
                            className={
                                styles.linkHref
                        }>
                            <span>Our Hubs</span>
                            {" "} </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
