import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./CareerBenefitsSection.module.scss";
import { benefits } from "../../data/CareersPageData";
import Benefit from "./subComponents/Benefit";

function CareerBenefitsSection() {
  return (
    <section
      id="benefits"
      className={`${styles.benefits} ${styles.section} pt-5 pt-lg-0 pt-md-0`}
    >
      <div className={`container ${styles.container}`}>
        <div className="row justify-content-center">
          <div
            className={`${styles["career-benefits-top"]} col-12 col-lg-9 mb-4`}
          >
            We love our people and want to ensure that they are supported at
            work and at home. That’s what helps us maintain our coveted best
            work-life balance award.
            <br />
            Here are just some of the perks you can expect to receive while
            working for us:
          </div>
        </div>

        <div
          className={`${styles["career-benefits-bottom"]} row justify-content-center`}
        >
          <div className="col-12 col-lg-9">
            <div className="row">
              {benefits.map((benefit, index) => (
                <Benefit key={index} benefit={benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerBenefitsSection;
