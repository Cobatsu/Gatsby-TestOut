import * as React from "react";
import {graphql} from "gatsby";
import "../../styles/global.css";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/home.module.css";
import {Courses} from "../components/common/courses";

const Home = props => {
 const {
  data: {allMarkdownRemark},
 } = props;
 return (
  <Layout title='Richmond College'>
   <div className={styles.main_wrapper}>
    <div className={styles.banner}>
     <div className={styles.layer}>
      <div style={{paddingLeft: 60}}>
       <span style={{color: "white", fontSize: 60}}>
        Study for a degree or MBA from UK Universities
       </span>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
       {" "}
       <img src='/athe-logo.png' style={{height: "75px"}}></img>
       <img src='/othm-logo.png' style={{height: "75px"}}></img>
       <img src='/qualifi-logo.png' style={{height: "75px"}}></img>
      </div>
     </div>
    </div>

    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='IGCSE Courses'
     type='IGCSE'
    />
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 3 – A level University Entry Courses'
     type='Level 3 – A level University Entry'
    />
   </div>
  </Layout>
 );
};

export const query = graphql`
 query getAllPosts {
  allMarkdownRemark {
   nodes {
    frontmatter {
     courseName
     courseCategory
     featuredImage {
      childImageSharp {
       fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
       }
      }
     }
    }
    id
    html
   }
  }
 }
`;

export default Home;
