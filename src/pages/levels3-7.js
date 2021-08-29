import * as React from "react";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/course_detail.module.css";

const AssessmentInfoInfo = () => {
  return (
    <Layout title="Assessment Info">
      <div className={styles.detail_general_wrapper}>
        <h2 className={styles.header_title}>Levels 3-7 Explained</h2>
        <div className={styles.inner_container}>
          <h4> Level 3</h4>
          <span>
            The Level 3 Course is a 120 credit course, which is equivalent to 2
            A levels. The course is made up of 6 modules and 6 written
            assignments. This course provides entry onto the first year of
            Undergraduate Degree course, or a Level 4 course.
          </span>
          <h4> Level 4</h4>
          <span>
            Level 4 is the equivalent to the first year of a Bachelor’s Degree
            programme. The Level 4 course is made up of 10 modules and 8
            assignments, which are equivalent to 120 university credits.
          </span>
          <h4> Level 5</h4>
          <span>
            Level 5 is the equivalent to the second year of a Bachelor’s Degree
            programme. It is also equivalent to a HND diploma. The Level 5
            course also has 10 modules and 8 assignments, which also provide the
            student with 120 university credits upon completion.
          </span>
          <h4> Level 6</h4>
          <span>
            Upon completion of a Level 6 course, you will be eligible for
            admission onto a Postgraduate Business programme, including an MBA
            course. The level 6 course is made up of 10 modules and 6 written
            assignments.
          </span>
          <h4> Level 7</h4>
          <span>
            The Level 7 course carries 120 credits which gives entry onto the
            MBA Top Up (one module or one module + dissertation) , this can be
            completed by studying either online or on campus at a recognised UK
            or overseas university. our level 7 is made up of 30 modules and 8
            written assignments. For an official breakdown of what each level
            means, please visit
            https://www.gov.uk/what-different-qualification-levels-mean/compare-different-qualification-levels
          </span>
        </div>
      </div>
    </Layout>
  );
};
