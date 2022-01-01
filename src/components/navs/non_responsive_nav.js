import React, {useEffect, useState} from "react";
import * as styles from "../../../styles/layout-style/header.module.css";
import {Link, navigate} from "gatsby";
const InvisibleStaticDiv = () => {
 return <div style={{minHeight: 140, width: "100%"}}></div>;
};
const None_Responsive_Nav = ({subMenu}) => (
 <div className={styles.Non_Responsive_Nav}>
  <header className={styles.main_wrapper}>
   <div className={styles.contact_buttons}>
    <div style={{display: "flex", alignItems: "center"}}>
     <div style={{display: "flex", alignItems: "center", marginRight: 20}}>
      <i
       style={{color: "#FFFFFF", fontSize: "10px", marginRight: 7}}
       className='fas fa-phone-alt'
      ></i>
      <span style={{color: "#FFFFFF", fontSize: "10px"}}>+1 3063514537</span>
     </div>
     <div style={{display: "flex", alignItems: "center"}}>
      <i
       style={{color: "#FFFFFF", fontSize: "10px", marginRight: 7}}
       className='far fa-envelope'
      ></i>
      <span style={{color: "#FFFFFF", fontSize: "10px"}}>
       admission@richmondcollege.co.uk
      </span>
     </div>
    </div>

    <div className={styles.contact_buttons_item} style={{padding: 0}}>
     <Link
      to='/contact-us'
      className={styles.linkHref}
      style={{padding: "3px", color: "white"}}
     >
      <span style={{marginRight: 6, fontSize: "10px"}}>Contact Us</span>
      <i style={{fontSize: "10px"}} class='fas fa-paper-plane'></i>
     </Link>
    </div>
   </div>

   <div className={styles.logo_links}>
    <img
     className={styles.header_company_logo}
     onClick={() => {
      navigate("/");
     }}
     src='/New Logo.png'
     style={{
      marginRight: 50,
      width: "22rem",
      background: "#FBFBFB",
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
