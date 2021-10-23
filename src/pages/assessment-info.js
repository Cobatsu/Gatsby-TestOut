import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/course_detail.module.css";

const AssessmentInfoInfo = () => {
 return (
  <Layout title='Assessment Info'>
   <div className={styles.detail_general_wrapper}>
    <h2 className={styles.header_title}>How Will I Be Assessed ?</h2>
    <div className={styles.inner_container}>
     <h3 style={{textAlign: "center"}}>
      {" "}
      Assessment at Richmond College is a very straightforward process{" "}
     </h3>
     <div style={{display: "flex", marginBottom: 20}}>
      <i className='fas fa-check-circle' style={{marginRight: 8}}></i>{" "}
      <span className={styles.content} style={{lineHeight: 1.6}}>
       After you have completed an online module, you will have an online
       assessment to complete. This assessment contains 30 multiple-choice
       questions. You will have one hour to complete these questions, which are
       answered in sets of five, so you will have plenty of time to review and
       edit your answers. After an hour, the test will automatically time out.
      </span>
     </div>{" "}
     <div style={{display: "flex", marginBottom: 20}}>
      <i className='fas fa-check-circle' style={{marginRight: 8}}></i>{" "}
      <span className={styles.content} style={{lineHeight: 1.6}}>
       After you have completed the test, your results will be displayed
       immediately. If you have passed, you will receive a Certificate of
       Completion. If you don’t pass, you will receive a notification of a
       “refer’’ where you will be told how to retake a module assessment. You
       can complete these modules at your own pace, as there is no deadline to
       complete the course.
      </span>
     </div>{" "}
     <div style={{display: "flex", marginBottom: 20}}>
      <i className='fas fa-check-circle' style={{marginRight: 8}}></i>{" "}
      <span className={styles.content} style={{lineHeight: 1.6}}>
       When the online modules have been successfully completed, you will then
       be able to take the final written assignments provided by Richmond
       College that test your knowledge and understanding of the modules. After
       successful completion of these eight assignments, you will receive your
       Diploma (from the Awarding Organisation).
      </span>
     </div>{" "}
     <div style={{display: "flex", marginBottom: 20}}>
      <i className='fas fa-check-circle' style={{marginRight: 8}}></i>{" "}
      <span className={styles.content} style={{lineHeight: 1.6}}>
       You will then be eligible to apply for progression onto a Top up course
       through a recognised UK university on campus or by distance learning.
      </span>
     </div>{" "}
    </div>
   </div>
  </Layout>
 );
};

export default AssessmentInfoInfo;
