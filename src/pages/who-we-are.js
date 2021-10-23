import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/course_detail.module.css";

const whoWeAre = () => {
 return (
  <Layout title='Entry Requirements'>
   <div className={styles.detail_general_wrapper}>
    <h2 className={styles.header_title}>Who We Are</h2>
    <div className={styles.inner_container}>
     <h3>
      {" "}
      Affordable study programmes with exclusive online modules fast tracking
      learners to a University qualification.{" "}
     </h3>
     <span className={styles.content} style={{lineHeight: 1.6}}>
      Richmond College delivers online university pathway programmes with full
      Undergraduate and Postgraduate Diploma Awards to learners from all corners
      of the world. Learners can fast track their way through to a UK University
      Qualification on campus or by distance learning.
      <br /> <br />
      Our web based modules allow students to learn what they want, when they
      want and how they want and have been designed to facilitate a much faster,
      more affordable and engaging way to learn. With a 24/7 student networking
      platform, personal dashboards, 1-2-1 online tutorials, group webinars and
      bank of pre-recorded group webcasts, the Richmond College provides
      students with all the support that they need to succeed in developing
      their professional skill base and achieve a university qualification .The
      100% online Undergraduate and Postgraduate Diploma courses at Richmond
      College provide students an affordable pathway to earning an undergraduate
      or postgraduate degree from a choice of respected UK universities. Whether
      you pursue a qualification in Computing, or Business Management, Hotel and
      Hospitality, the courses offered through Richmond College will allow you
      the option to continue your education and pursue a top up to an
      undergraduate degree or MBA through one of our partner universities.
     </span>
    </div>
   </div>
  </Layout>
 );
};
export default whoWeAre;
