import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/course_detail.module.css";

const EntryRequiretments = () => {
 return (
  <Layout title='Entry Requirements'>
   <div className={styles.detail_general_wrapper}>
    <div style={{width: "73%"}}>
     <h2 style={{marginBottom: 80, fontSize: "2rem", color: "#191970"}}>
      Entry Requirements
     </h2>
     <div className={styles.inner_container}>
      <h3> University Entry Level 3 Programme Requirements </h3>
      <span className={styles.content} style={{lineHeight: 1.6}}>
       For entry on the Level 3 qualification learners would generally be aged
       16 or above.
       <br /> <br />
       For learners who have recently been in education or training the entry
       profile is likely to include one of following:
       <br /> <br />
       - 5 or more GCSEs at grades C and above <br />
       - other related level 2 subjects <br />
       - other equivalent international qualifications
       <br />
       <br />
       Learners must also have an appropriate standard of English to enable them
       to access relevant resources and complete the course modules and
       assignments. Mature learners may present a more varied profile of
       achievement that is likely to include relevant work experience (paid
       and/or unpaid), participation and/or achievement of relevant
       qualifications.
      </span>
      <h3> Undergraduate Level 4/5 Programme Requirements </h3>
      <span className={styles.content} style={{lineHeight: 1.6}}>
       Entry to a Level 4 programme generally requires a full secondary
       education and a minimum age of 18. Entry to a Level 5 programme depends
       on a student gaining Level 4 or equivalent. Level 4 is equivalent to the
       first year of a degree or HNC or local equivalent. Level 5 is equivalent
       to the second year of a university Degree. If English is not your native
       language, you may need to provide verification of your English language
       capability. There may be an IELTS or TOEFL English language requirement
       or equivalent. Please note specific university requirements will differ
       between universities. Normally, universities will accept the 240 credits
       offered by the Richmond College programme at Level 4/5 for final year
       completion, but Students should check with their chosen university for
       specific entry requirements before enroling with Richmond College.
      </span>
      <h3> Graduate Level 6 Programme Requirements</h3>
      <span className={styles.content} style={{lineHeight: 1.6}}>
       Entry onto the Level 6 Programme is for non-graduate mature students of
       at least 25 years of age with 5 years of work experience who wish to
       progress to a Postgraduate qualification.
      </span>
      <h3> Level 6</h3>
      <span className={styles.content} style={{lineHeight: 1.6}}>
       Upon completion of a Level 6 course, you will be eligible for admission
       onto a Postgraduate Business programme, including an MBA course. The
       level 6 course is made up of 10 modules and 6 written assignments.
      </span>
      <h3> Postgraduate Level 7 Programme Requirements</h3>
      <span className={styles.content} style={{lineHeight: 1.6}}>
       You will be eligible to study the Level 7 courses if you are a Graduate
       in any discipline and are aged 23 years or over. Non-graduates aged over
       24 years with at least 5 years experience in management may also apply.
      </span>
     </div>
    </div>
   </div>
  </Layout>
 );
};
export default EntryRequiretments;
