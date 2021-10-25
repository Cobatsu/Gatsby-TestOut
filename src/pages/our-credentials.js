import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/course_detail.module.css";

const OurCredentials = () => {
 return (
  <Layout title='Our Credentials'>
   <div className={styles.detail_general_wrapper}>
    <h2 className={styles.header_title}>Our Credentials</h2>
    <div className={styles.inner_container}>
     <span className={styles.content} style={{lineHeight: 1.6}}>
      Richmond College operates to the highest academic standards and has
      multiple structures in place that ensure the standard of education
      provided to its students is of the highest quality. Below is a list of
      Corporate bodies we belong to and associations we are a part of:
      <div
       style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 50,
       }}
      >
       <div
        className={styles.content}
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        <img src='/othm-logo.png' style={{width: "10rem"}} />
        <h3>OTHM Qualifications Recognition</h3>
        <span>
         Organisation for Tourism and Hospitality Management is a UK based
         Awarding Organisation regulated by Ofqual. They have a network of
         numerous delivery centres globally to deliver their approved
         qualifications.
        </span>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        {" "}
        <img src='/athe-logo.png' style={{width: "10rem"}} />
        <h3>ATHE Recognition</h3>
        <span>
         Awards for Training and Higher Education provides centres with a wide
         variety of qualifications including, but not limited to; administration
         management, business, tourism, law, computing and health and social
         care. ATHE have made a name for themselves with exceptional customer
         service, excellent quality standards and rewarding qualifications with
         progression routes to university degrees.
        </span>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        {" "}
        <img src='/qualifi-logo.png' style={{width: "10rem"}} />
        <h3>Qualifi Recognition</h3>
        <span>
         As a recognised UK awarding organisation regulated in England by Office
         of Qualifications and Examinations Regulation (Ofqual), Council for the
         Curriculum, Examinations and Assessment (CCEA) in Northern Ireland and
         Qualifications Wales (QW), Qualifi is able to give assurances to
         registered centres and learners of consistent, rigorous, quality
         standards and valid, valued learning.
        </span>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        {" "}
        <img src='/coventry-logo.png' style={{width: "10rem"}} />
        <h3>Coventry and Warwickshire Chamber of Commerce</h3>
        <span>
         The British Chambers of Commerce is the largest, most influential
         independent business voice in the UK who lobby tirelessly on behalf of
         members and the wider business community on the issues that matter –
         establishing the right conditions for business to thrive, promoting UK
         firms in key global markets and creating a dynamic business economy.
        </span>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        {" "}
        <img src='/ersa-logo.png' style={{width: "10rem"}} />
        <h3>Employment Related Services Association</h3>
        <span>
         The Employment Related Services Association (ERSA) is the membership
         body for the employment support sector. Established in 2005, we
         campaign for and support the delivery of ever better services for the
         nation’s jobseekers and learners.
        </span>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        {" "}
        <img src='/matrix-logo.png' style={{width: "10rem"}} />
        <h3>Matrix Standard</h3>
        <span>
         The matrix Standard is the Department for Education’s (DfE) standard
         for ensuring the quality of the delivery of high-quality information,
         advice and guidance. It is the international quality standard for
         organisations that deliver information, advice and/or guidance (IAG).
         Either as their sole purpose or as part of their service offering.
        </span>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        {" "}
        <img src='/bcs-logo.png' style={{width: "8rem"}} />
        <h3>BCS, The Chartered Institute for IT</h3>
        <span>
         BCS, The Chartered Institute for IT, is a professional body and a
         learned society that represents those working in information technology
         and computer science, both in the United Kingdom and internationally.
        </span>
       </div>

       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "28%",
         marginBottom: 60,
        }}
       >
        {" "}
        <img src='/instute-logo.png' style={{width: "10rem"}} />
        <h3>Institute of Hospitality</h3>
        <span>
         Institute of Hospitality is the professional body for managers working
         and studying in the hospitality, leisure and tourism industry.​
        </span>
       </div>
       <div
        style={{
         display: "flex",
         flexDirection: "column",
         width: "20%",
         marginBottom: 60,
        }}
       ></div>
      </div>
     </span>
    </div>
   </div>
  </Layout>
 );
};
export default OurCredentials;
