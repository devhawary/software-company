import React from "react";
import styles from "./Feedback.module.scss";

function Feedback({ feedback }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      <div className={`card ${styles.card}`}>
        <div className={`${styles.feed}  mb-lg-5 mb-md-4 mb-3`}>
          <img src={feedback.companyBrand} alt={feedback.altBrand} />
          <q>{feedback.qoute}</q>
        </div>
        <div className={`${styles.customer}`}>
          <img src={feedback.customerImg} alt={feedback.altCustomer} />
          <div className={`${styles["customer-details"]}`}>
            <h6>{feedback.name}</h6>
            <p>{feedback.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
