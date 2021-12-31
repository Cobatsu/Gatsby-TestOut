import React from "react";
import * as styles from "../../../styles/layout-style/footer.module.css";
import {Link} from "gatsby";

const Footer = () => {
 return (
  <div className={styles.main_wrapper}>
   <div className={styles.footer_column_holder}>
    <div className={styles.footer_column}>
     <div className={styles.footer_column_header}>USEFUL LINKS</div>
     <Link to='/' className={styles.footer_link}>
      Home
     </Link>
     <Link to='/who-we-are' className={styles.footer_link}>
      Who we are
     </Link>
     <Link to='/our-credentials' className={styles.footer_link}>
      Our Credentials
     </Link>
     <Link to='/entry-requirements' className={styles.footer_link}>
      Entry Requirements
     </Link>
     <Link to='/faq' className={styles.footer_link}>
      FAQ
     </Link>
     <Link to='/contact-us' className={styles.footer_link}>
      Contact Us
     </Link>
    </div>

    <div className={styles.footer_column}>
     <img src='/New Logo.png' style={{marginBottom: 20, width: "20rem"}} />
     <span>
      <i class='fas fa-building' style={{marginRight: 5}}></i>
      <span>Company :</span> RICHMOND COLLEGE
     </span>
     <span>
      <i className='fas fa-map-marker-alt' style={{marginRight: 5}}></i>
      <span>Address : </span> 7030 Woodbine Avenue Markham, ON, Canada L3R 6G2
     </span>
     <span>
      {" "}
      <i className='fas fa-envelope' style={{marginRight: 5}}></i>{" "}
      <span>E-mail : </span>admission@richmondcollege.co.uk
     </span>
     <span>
      <i className='fas fa-phone' style={{marginRight: 5}}></i>
      <span>Phone : </span> +1 3063514537
     </span>
    </div>
   </div>
  </div>
 );
};

export default Footer;
