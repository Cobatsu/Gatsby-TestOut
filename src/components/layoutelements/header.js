import React, {useEffect, useState} from "react";
import * as styles from "../../../styles/layout-style/header.module.css";
import {Link} from "gatsby";
import Responsive_Nav from "../navs/responsive_nav";
import Non_Responsive_Nav from "../navs/non_responsive_nav";

//courses section will expand and contain graduate, undergraduate and IGCSE courses

const subMenu = [
 {
  type: "Home",
  link: "/",
 },
 {
  type: "Courses",
  props: [
   {title: "IGCSE Courses", link: "IGCSE-courses"},
   {title: "Undergraduate Courses", link: "courses"},
  ],
 },
 {
  type: "How You Will Learn",
  props: [
   {title: "How Will I Be Assessed", link: "assessment-info"},
   {title: "Levels 3-7 Explained", link: "levels3-7"},
   {title: "Entry Requirements", link: "entry-requirements"},
   {title: "FAQ", link: "faq"},
  ],
 },
 //  {
 //   type: "About Us",
 //   props: [
 //    {title: "Who we are", link: "who-we-are"},
 //    {title: "Our Credentials", link: "our-credentials"},
 //   ],
 //  },
];

const Header = () => {
 return (
  <React.Fragment>
   <Responsive_Nav subMenu={subMenu} />
   <Non_Responsive_Nav subMenu={subMenu} />
  </React.Fragment>
 );
};

export default Header;
