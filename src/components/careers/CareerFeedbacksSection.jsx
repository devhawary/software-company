import React from "react";
import styles from "./CareerFeedbacksSection.module.scss";
import { feedbacks } from "../../data/CareersPageData";
import Feedback from "./subComponents/Feedback";

function CareerFeedbacksSection() {
  return (
    <section id="feedbacks" className={`${styles.feedbacks} ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className="row">
          <h2 className="col-12">What clients said about us:</h2>
        </div>
        <div
          className={`${styles.cards} cards d-flex flex-wrap justify-content-center row`}
        >
          <div className="col-lg-10">
            <div className="row">
              {feedbacks.map((feedback, index) => (
                <Feedback key={index} feedback={feedback} />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <a href="#" className="col-12 mt-5">
            <span>See all feedbacks </span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CareerFeedbacksSection;
