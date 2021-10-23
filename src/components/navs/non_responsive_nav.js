import React, {useEffect, useState} from "react";
import * as styles from "../../../styles/layout-style/header.module.css";
import {Link, navigate} from "gatsby";
const InvisibleStaticDiv = () => {
 return <div style={{minHeight: 98, width: "100%"}}></div>;
};
const None_Responsive_Nav = ({subMenu}) => (
 <div className={styles.Non_Responsive_Nav}>
  <header className={styles.main_wrapper}>
   <div className={styles.contact_buttons}>
    <div className={styles.contact_buttons_item} style={{padding: 0}}>
     <Link
      to='/contact-us'
      className={styles.linkHref}
      style={{color: "#464660", padding: "6px 10px"}}
     >
      <span style={{marginRight: 6}}>Contact Us</span>
      <i class='fas fa-paper-plane'></i>
     </Link>
    </div>
   </div>

   <div className={styles.logo_links}>
    <img
     className={styles.header_company_logo}
     onClick={() => {
      navigate("/");
     }}
     src='/richmond-logo2.png'
     style={{
      marginRight: 50,
      position: "absolute",
      top: 12,
      left: 5,
      width: "15rem",
     }}
    ></img>
    <ul className={styles.links}>
     {subMenu.map(item => {
      return !item.props ? (
       <li style={{padding: 0}}>
        <Link to={item.link} className={styles.linkHref}>
         <span>{item.type}</span>{" "}
        </Link>
       </li>
      ) : (
       <li>
        <span>{item.type}</span>
        <i class='fas fa-caret-down'></i>
        <ul className={styles.subLinks}>
         {item.props.map(subItem => {
          return (
           <li>
            <Link className={styles.sublinkHref} to={"/" + subItem.link}>
             {subItem.title}
             <i class='fas fa-chevron-right'></i>{" "}
            </Link>
           </li>
          );
         })}
        </ul>
       </li>
      );
     })}
    </ul>
   </div>
  </header>
  <InvisibleStaticDiv />
 </div>
);

export default None_Responsive_Nav;
