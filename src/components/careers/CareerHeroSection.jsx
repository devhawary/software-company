import React from "react";
import styles from "./CareerHeroSection.module.scss";

function CareerHeroSection() {
  return (
    <section
      id="careers"
      className={`${styles.careers} ${styles.section} text-center`}
    >
      <div className={`container ${styles.container}`}>
        <div className={`${styles["career-top"]} row`}>
          <h1 className="col-12">Careers.</h1>
          <p className="col-12">
            We are looking for people that share our vision. Are you adaptable,
            driven, and friendly? Do you thrive in a fast-paced work environment
            where collaboration is the norm? If the answer is yes, then you’re a
            what we looking for.
          </p>
        </div>
        <div className={`${styles["career-bottom"]} row`}>
          <img
            className="col"
            src="/images/career-page/career-hero.webp"
            alt="career hero image"
          />
        </div>
      </div>
    </section>
  );
}

export default CareerHeroSection;
