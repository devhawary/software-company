import React from "react";
import styles from "./Benefit.module.scss";

function Benefit({ benefit }) {
  return (
    <div className={`${styles.benefit} col-12 col-md-6 col-lg-4`}>
      <i className="fa-solid fa-check"></i>
      <span>{benefit}</span>
    </div>
  );
}

export default Benefit;
