import React from "react";
import styles from "./Opening.module.scss";

function Opening({ opening }) {
  return (
    <div className="col-12 col-lg-6 mb-3">
      <div className={`card ${styles.card}`}>
        <div className={`${styles.details}`}>
          <h5>{opening.position}</h5>
          <span>{opening.location}</span>
        </div>
        <a href="#" className="apply">
          <span>Apply now </span>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Opening;
