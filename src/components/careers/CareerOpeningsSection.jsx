import React from "react";
import styles from "./CareerOpeningsSection.module.scss";
import { openings } from "../../data/CareersPageData";
import Opening from "./subComponents/Opening";

function CareerOpeningsSection() {
  return (
    <section id="openings" className={`${styles.openings} ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className="row">
          <h2 className="col-12">Current openings</h2>
        </div>
        <div
          className={`cards ${styles.cards} d-flex flex-wrap justify-content-center row`}
        >
          <div className="col-lg-9">
            <div className="row">
              {openings.map((opening, index) => (
                <Opening key={index} opening={opening} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerOpeningsSection;
