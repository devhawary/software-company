import React from "react";
import styles from "./TrustedBrandsSection.module.scss";
import { trustedBrands } from "../../data/CareersPageData";
import TrustedBrand from "./subComponents/TrustedBrand";
function TrustedBrandsSection() {
  return (
    <section
      id="trusted_brands"
      className={`${styles.trusted_brands} ${styles.section}`}
    >
      <div className={`container ${styles.container}`}>
        <div className="col-lg-10 ">
          <div className={`row ${styles.row}`}>
            {trustedBrands.map((trustedBrand, index) => (
              <TrustedBrand key={index} trustedBrand={trustedBrand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBrandsSection;
