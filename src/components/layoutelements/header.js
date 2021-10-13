import React, {useEffect, useState} from "react";
import * as styles from "../../../styles/layout-style/header.module.css";
import {Link} from "gatsby";
import Responsive_Nav from "../navs/responsive_nav";
import Non_Responsive_Nav from "../navs/non_responsive_nav";

const subMenu = [
 {
  type: "Home",
  link: "/",
 },
 {
  type: "Courses",
  props: [
   {
    title: "IGCSE courses",
    link: "IGCSE-courses",
   },
   {
    title: "(Level 3) A level University entry Courses",
    link: "level3-courses",
   },
   {
    title: "(Level 4 & 5) University 1st and 2nd year Courses",
    link: "level4_5-courses",
   },
   {
    title: "Level 6 (Undergrad Final Year) and Level 7 (Masters/MBA) Courses",
    link: "level6-courses",
   },
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
 {
  type: "Our Hubs",
  link: "/hubs",
 },
];

export const useViewport = () => {
 const [width, setWidth] = React.useState(
  typeof window != "undefined" && window.innerWidth
 );

 React.useEffect(() => {
  if (typeof window != "undefined") {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);
   return () => window.removeEventListener("resize", handleWindowResize);
  }
 }, []);

 return {width};
};

const Header = () => {
 const {width} = useViewport();
 const breakPoint = 1030;
 return width < breakPoint ? (
  <Responsive_Nav subMenu={subMenu} />
 ) : (
  <Non_Responsive_Nav />
 );
};

export default Header;
