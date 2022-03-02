import * as React from "react";
import "../../styles/global.css";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/home.module.css";
import { navigate } from "gatsby";


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
      backgroundImage: "url('/Artboard 1@4x-100.jpg')",
    }}
  >
    <div className={styles.layer}>
      <div className={styles.logo_holder}>
        {" "}
        <img src='/athe-logo.png' style={{ height: "4rem" }}></img>
        <img src='/othm-logo.png' style={{ height: "4rem" }}></img>
        <img src='/qualifi-logo.png' style={{ height: "4rem" }}></img>
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
        <img src='/athe-logo.png' style={{ height: "4rem" }}></img>
        <img src='/othm-logo.png' style={{ height: "4rem" }}></img>
        <img src='/qualifi-logo.png' style={{ height: "4rem" }}></img>
      </div>
    </div>
  </div>,

  <div
    className={styles.banner}
    style={{
      backgroundImage: "url('/banner-3.jpg')",
      backgroundPosition: "center",
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
        <img src='/athe-logo.png' style={{ height: "4rem" }}></img>
        <img src='/othm-logo.png' style={{ height: "4rem" }}></img>
        <img src='/qualifi-logo.png' style={{ height: "4rem" }}></img>
      </div>
    </div>
  </div>,
];

const Home = props => {
  //  const [slideNumber, setSlideNumber] = React.useState(0);
  //  const prevSlideNumber = usePrevious(slideNumber);

  //  React.useEffect(() => {
  //   const sliderInterval = setInterval(() => {
  //    setSlideNumber(prev => (prev == banners.length - 1 ? 0 : prev + 1));
  //   }, 7000);
  //   return () => clearInterval(sliderInterval); //clears interval before every useEffect func call
  //  }, [slideNumber]);



  return (
    <Layout title='Richmond College'>
      <div className={styles.main_wrapper}>
        {/* <div className={styles.banner_holder}>
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
       width: `${banners.length * 100}%`,
      }}
     >
      {banners}
     </div>
    </div> */}
        <div className={styles.intro}>
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className={styles.wrap}
          >
            <div style={{ width: "40%" }}>
              <span
                className={styles.classic_text}
                style={{ fontSize: "2.4rem", textAlign: "left" }}
              >
                Online University Education
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#191970",
                    marginBottom: 15,
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  Get Your Degree From The UK
                </span>
                <span style={{ fontSize: "0.99rem", lineHeight: "1.7rem" }}>
                  Richmond College provide students an affordable pathway to earning an
                  undergraduate or postgraduate degree from a choice of respected UK
                  universities.
                </span>
              </div>
              <button className={styles.classic_button}>Apply Now</button>
            </div>
            <img src='./Courses Section 1.png' style={{ width: "45%" }} />
          </div>
        </div>

        <div className={styles.outer_mid_body}>
          <div className={styles.mid_body + " " + styles.wrap}>
            <div style={{ width: "40%", marginBottom: 50 }}>
              <div style={{ marginBottom: 16, fontSize: "1.2rem" }}>
                <i style={{ fontSize: "1.8rem" }} className='fas fa-graduation-cap'></i>
                <span style={{ marginLeft: 16, fontWeight: 600 }}>
                  UK Certified Diploma
                </span>
              </div>

              <span style={{ lineHeight: 1.6 }}>
                Get the best education in your field, and get your UK-certified diploma
                upon completing your course schedule successfully.
              </span>
            </div>

            <div style={{ width: "40%", marginBottom: 50 }}>
              <div style={{ marginBottom: 16, fontSize: "1.2rem" }}>
                <i style={{ fontSize: "1.8rem" }} className='fas fa-globe'></i>
                <span style={{ marginLeft: 16, fontWeight: 600 }}>
                  Full Online Access
                </span>
              </div>

              <span style={{ lineHeight: 1.6 }}>
                We adopt the technology to fulfill your needs. You can access your
                lectures fully online from anywhere you want.
              </span>
            </div>

            <div style={{ width: "40%", marginBottom: 50 }}>
              <div style={{ marginBottom: 16, fontSize: "1.2rem" }}>
                <i style={{ fontSize: "1.8rem" }} className='far fa-play-circle'></i>
                <span style={{ marginLeft: 16, fontWeight: 600 }}>Video Lectures</span>
              </div>

              <span style={{ lineHeight: 1.6 }}>
                All the lectures are pre-recorded and fully available to you. You can
                watch them at your own pace, and you can rewind without missing
                anything.
              </span>
            </div>

            <div style={{ width: "40%", marginBottom: 50 }}>
              <div style={{ marginBottom: 16, fontSize: "1.2rem" }}>
                <i style={{ fontSize: "1.8rem" }} className='fas fa-question'></i>
                <span style={{ marginLeft: 16, fontWeight: 600 }}>Get Support</span>
              </div>

              <span style={{ lineHeight: 1.6 }}>
                Univerisity path is a journey that you go through, and we will be with
                you on your journey to support and assist you at all times.
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "80px 0",
          }}
        >
          <div className={styles.body_richmond_college}>
            <div style={{ marginBottom: "5.3rem" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "Center",
                  marginBottom: "1.2rem",
                }}
              >
                Learn About <span style={{ fontWeight: 600 }}>Richmond College</span>
                <br />
                <span style={{ textDecoration: "underline", fontSize: "1.1rem" }}>
                  Your Access to The Best Education{" "}
                </span>
              </div>
              <span style={{ lineHeight: 1.6 }}>
                Diploma that you receive from Richmond College is provided by the
                awarding institution recognized by The Office of Qualifications and
                Examinations Regulation(Ofqual) department. According to the course path
                you select, you can complete a full degree, or complete first and second
                years of undergraduate/bachelor degree through Online Richmond College
                education path, which after successful completion of the course you can
                transfer your credit hours to 100+ Universities in the UK.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              className={styles.wrap}
            >
              <img src='./Certification-cuate 1.png' style={{ height: "30rem" }}></img>
              <div>
                <div
                  style={{
                    fontSize: "1.55rem",
                    marginBottom: "1.8rem",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Undergraduate</span> and{" "}
                  <span style={{ fontWeight: 600 }}>Graduate Degree Programs</span>
                  <br />
                  in Richmond College <br />
                  <span style={{ textDecoration: "underline", fontSize: "1.1rem" }}>
                    Type of Diploma You Will Recieve
                  </span>
                </div>
                <div style={{ lineHeight: 1.6, textAlign: "justify" }}>
                  The 100% online Undergraduate and Postgraduate Diploma courses at
                  Richmond College provide students an affordable pathway to earning an
                  undergraduate or postgraduate degree from a choice of respected UK
                  universities. Whether you pursue a qualification in Hotel and
                  Hospitality, Computing, or Business Management, the courses offered
                  through Richmond College will allow you the option to continue your
                  education and pursue a top up to an undergraduate degree or MBA through
                  one of our partner universities
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.where_to_start_outer}>
          <div className={styles.where_to_start_inner + " " + styles.wrap}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
              {" "}
              <span style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: 10 }}>
                Where to Start ?
              </span>
              <span
                style={{
                  textDecoration: "underline",
                  fontSize: "1.1rem",
                  marginBottom: 30,
                }}
              >
                {" "}
                Your Roadmap to Diploma
              </span>
              <span style={{ lineHeight: 1.6 }}>
                Level 3 courses are the starting point for your Undergraduate/Bachelor's
                Degree education. Your journey should start from a level 3 course if you
                are starting your university education. If you have previously taken
                classes from a UK university equivalent course, you should look for
                courses from levels 4, 5, and 6.
              </span>
            </div>

            <img src='./On the way-cuate 1.png' style={{ width: "25rem" }} />
          </div>
        </div>
        {/* 
    <div className={styles.courses_wrapper}>
     <div className={styles.course}>
      <div className={styles.course_inner}>
       <span style={{fontSize: "2rem", fontWeight: 600, marginBottom: 15}}>
        IGCSE Courses
       </span>
       <span style={{textDecoration: "underline", marginBottom: 30}}>
        Short Courses
       </span>
       <span style={{lineHeight: 1.6, marginBottom: 30}}>
        Level 3 Pre-University Module Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,m Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, 0% See Courses
       </span>
       <button
        onClick={() => {
         navigate("/IGCSE-courses");
        }}
        className={styles.classic_button}
       >
        See Courses
       </button>
      </div>

      <div className={styles.course_background_image}>
       <img src='./Vector.png' style={{position: "absolute", width: "13rem"}} />
       <span style={{color: "#191970", fontSize: "2rem", fontWeight: 600}}>
        0%
       </span>
      </div>
     </div>
    </div> */}

        <div className={styles.courses_wrapper + " " + styles.top_border}>
          <div className={styles.course}>
            <div className={styles.course_inner}>
              <span style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 10 }}>
                Level 3
              </span>
              <span style={{ textDecoration: "underline", marginBottom: 30 }}>
                Pre-University Module
              </span>
              <span style={{ lineHeight: 1.6, marginBottom: 30 }}>
                A Level-3 course can be of 60 or 120 UK University credits, equivalent
                to an A level in the UK. In general, the courses are made up of 6
                modules and 6 written assignments (which might show variance in each
                course). These courses provide entry onto the first year of the
                Undergraduate Degree course or a Level 4 course.
              </span>
              <button
                onClick={() => {
                  navigate("/level3-courses");
                }}
                className={styles.classic_button}
              >
                See Courses
              </button>
            </div>

            <div className={styles.course_background_image}>
              <img src='./Vector.png' style={{ position: "absolute", width: "13rem" }} />
              <span style={{ color: "#191970", fontSize: "2rem", fontWeight: 600 }}>
                0%
              </span>
            </div>
          </div>
        </div>

        <div className={styles.courses_wrapper + " " + styles.top_border}>
          <div className={styles.course}>
            <div className={styles.course_inner}>
              <span style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 10 }}>
                Level 4
              </span>
              <span style={{ textDecoration: "underline", marginBottom: 30 }}>
                Undergraduate - Year 1
              </span>
              <span style={{ lineHeight: 1.6, marginBottom: 30 }}>
                Level 4 course is the equivalent to the first year of an
                Undergraduate/Bachelor’s Degree programme in the UK. The Level 4 course
                is made up of 10 modules and 8 assignments, which is equivalent to 120
                university credits.
              </span>
              <button
                onClick={() => {
                  navigate("/level4-courses");
                }}
                className={styles.classic_button}
              >
                See Courses
              </button>
            </div>

            <div className={styles.course_background_image}>
              <img
                src='./Vector35.png'
                style={{ position: "absolute", width: "13rem" }}
              />
              <span style={{ color: "#191970", fontSize: "2rem", fontWeight: 600 }}>
                35%
              </span>
            </div>
          </div>
        </div>

        <div className={styles.courses_wrapper + " " + styles.top_border}>
          <div className={styles.course}>
            <div className={styles.course_inner}>
              <span style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 10 }}>
                Level 5
              </span>
              <span style={{ textDecoration: "underline", marginBottom: 30 }}>
                Undergraduate - Year 2
              </span>
              <span style={{ lineHeight: 1.6, marginBottom: 30 }}>
                Level 5 is the equivalent to the second year of an
                Undergraduate/Bachelor’s Degree programme in the UK. It is also
                equivalent to a Higher National Diploma (HND). The Level 5 course
                conspires 10 modules and 8 assignments, which provides the student with
                120 university credits upon completion.
              </span>
              <button
                onClick={() => {
                  navigate("/level5-courses");
                }}
                className={styles.classic_button}
              >
                See Courses
              </button>
            </div>

            <div className={styles.course_background_image}>
              <img
                src='./Vector70.png'
                style={{ position: "absolute", width: "13rem" }}
              />
              <span style={{ color: "#191970", fontSize: "2rem", fontWeight: 600 }}>
                70%
              </span>
            </div>
          </div>
        </div>

        <div className={styles.courses_wrapper + " " + styles.top_border}>
          <div className={styles.course}>
            <div className={styles.course_inner}>
              <span style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 10 }}>
                Level 6
              </span>
              <span style={{ textDecoration: "underline", marginBottom: 30 }}>
                Undergrad Final Year
              </span>
              <span style={{ lineHeight: 1.6, marginBottom: 30 }}>
                Level 6 is the equivalent to the final year of an
                Undergraduate/Bachelor’s Degree programme in the UK. Upon completion of
                a Level 6 course, you will be eligible for admission onto a Postgraduate
                Business programme, including an MBA course. The level 6 course is made
                up of 10 modules and 6 written assignments, equivalent to 120 university
                credits.
              </span>
              <button
                onClick={() => {
                  navigate("/level6-courses");
                }}
                className={styles.classic_button}
              >
                See Courses
              </button>
            </div>

            <div className={styles.course_background_image}>
              <img
                src='./Vector100.png'
                style={{ position: "absolute", width: "13rem" }}
              />
              <span style={{ color: "#191970", fontSize: "2rem", fontWeight: 600 }}>
                <i class='fas fa-graduation-cap'></i>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.accreditation}>
          <div className={styles.classic_text} style={{ textAlign: "center" }}>
            Accreditation of Our Diplomas
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "70%",
            }}
            className={styles.home_credentials}
          >
            <img src='/Athe.png' />
            <img src='/Qualifi (1).png' />
            <img src='/Chamber (1).png' />
            <img src='/Ersa (1).png' />
            <img src='/Cyber (1).png' />
            <img src='/ID (1).png' />
            <img src='/Institution Hospitality (1).png' />
          </div>
        </div>
      </div>
    </Layout>
  );
};



export default Home;
