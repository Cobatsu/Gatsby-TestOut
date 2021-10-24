import * as React from "react";
import {graphql} from "gatsby";
import "../../styles/global.css";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/home.module.css";
import {Courses} from "../components/common/courses";

function usePrevious(value) {
 const ref = React.useRef();
 React.useEffect(() => {
  ref.current = value;
 });
 return ref.current;
}

const banners = [
 <div
  className={styles.banner}
  style={{
   backgroundImage: "url('/new-banner.png')",
  }}
 >
  <div className={styles.layer}>
   <div className={styles.logo_holder}>
    {" "}
    <img src='/athe-logo.png' style={{height: "4rem"}}></img>
    <img src='/othm-logo.png' style={{height: "4rem"}}></img>
    <img src='/qualifi-logo.png' style={{height: "4rem"}}></img>
   </div>
  </div>
 </div>,

 <div
  className={styles.banner}
  style={{
   backgroundImage: "url('/banner.jpg')",
  }}
 >
  <div
   className={styles.layer}
   style={{
    background:
     "linear-gradient(0deg, rgba(43,43,43,1) 0%, rgba(255,255,255,0) 100%)",
   }}
  >
   <span
    style={{
     color: "#EEEEEE",
     display: "block",

     textAlign: "center",
     fontSize: "3.5rem",
     marginBottom: "4.6rem",
     marginTop: "3rem",
     letterSpacing: 1.5,
    }}
   >
    Study for a degree or MBA from UK Universities
   </span>
   <div className={styles.logo_holder}>
    {" "}
    <img src='/athe-logo.png' style={{height: "4rem"}}></img>
    <img src='/othm-logo.png' style={{height: "4rem"}}></img>
    <img src='/qualifi-logo.png' style={{height: "4rem"}}></img>
   </div>
  </div>
 </div>,

 <div
  className={styles.banner}
  style={{
   backgroundImage: "url('/banner-3.jpg')",
  }}
 >
  <span
   style={{
    color: "#2B2B2B",
    display: "block",

    textAlign: "center",
    fontSize: "3.5rem",
    marginBottom: "4.6rem",
    marginTop: "3rem",
    letterSpacing: 1.5,
   }}
  >
   Students From All Over The World
  </span>
  <div className={styles.layer}>
   <div className={styles.logo_holder}>
    {" "}
    <img src='/athe-logo.png' style={{height: "4rem"}}></img>
    <img src='/othm-logo.png' style={{height: "4rem"}}></img>
    <img src='/qualifi-logo.png' style={{height: "4rem"}}></img>
   </div>
  </div>
 </div>,
];

const Home = props => {
 const [slideNumber, setSlideNumber] = React.useState(0);
 const prevSlideNumber = usePrevious(slideNumber);
 const {
  data: {allMarkdownRemark},
 } = props;
 console.log(
  `slideNumber:${slideNumber}`,
  `prevSlideNumber:${prevSlideNumber}`
 );
 React.useEffect(() => {
  const sliderInterval = setInterval(() => {
   setSlideNumber(prev => (prev == banners.length - 1 ? 0 : prev + 1));
  }, 8000);
  return () => clearInterval(sliderInterval); //clears interval before every useEffect func call
 }, [slideNumber]);
 return (
  <Layout title='Richmond College'>
   <div className={styles.main_wrapper}>
    <div className={styles.banner_holder}>
     {" "}
     <div className={styles.dot_holder}>
      {banners.map((_, index) => (
       <span
        className={styles.slider_dot}
        style={{background: slideNumber == index ? "#FEC618" : "#EEEEEE"}}
        onClick={() => {
         setSlideNumber(index);
        }}
       ></span>
      ))}
     </div>
     <div
      className={styles.slider_wrapper}
      style={{
       transform: `translateX(calc(${slideNumber}*-${100 / banners.length}%))`,
      }}
     >
      {banners}
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
    <Courses
     allMarkdownRemark={allMarkdownRemark}
     title='Level 4 & 5 – University 1st and 2nd year Courses'
     type='Level 4 & 5 – University 1st and 2nd year'
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
