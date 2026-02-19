import styles from "./HomePricingSection.module.scss";

export default function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingSectionIntro}>
        <p className={styles.icon}>Pricing</p>
        <h2>Simple, scalable pricing.</h2>
        <p className={styles.description}>No extra charges. No hidden fees.</p>
      </div>

      <div className={styles.pricingCardsContainer}>
        <div className={styles.pricingPlanCard}>
          <h5 className={styles.title}>Starter</h5>
          <p className={styles.price}>
            $49<span className={styles.month}>/mo</span>
          </p>
          <p className={styles.description}>
            For creating impressive tools that generate results.
          </p>
          <button className={styles.pricingBtn} type="button">
            Get started
          </button>
          <p className={styles.note}>Billed annually.</p>
          <hr />
          <ul className={styles.featuresList}>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Up to 10 individual users</span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Basic reporting and analytics </span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Project Management </span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>20GB individual data each user </span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Basic chat and email support </span>
            </li>
          </ul>
        </div>
        <div className={styles.pricingPlanCard}>
          <p className={styles.label}>Popular</p>
          <h5 className={styles.title}>Pro</h5>
          <p className={styles.price}>
            $79<span className={styles.month}>/mo</span>
          </p>
          <p className={styles.description}>
            For seamless integrations and sending tools in bulk.
          </p>
          <button className={styles.pricingBtn} type="button">
            Start a free trial
          </button>
          <p className={styles.note}>Billed annually.</p>
          <hr />
          <ul className={styles.featuresList}>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Access to all Starter features </span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>200+ integrations </span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Unlimited team workspaces </span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Approval workflows </span>
            </li>
            <li>
              <img
                src="/images/home-page/pricing/check.svg"
                width="30px"
                alt="check mark icon"
              />
              <span>Salesforce integration*</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.comparePlanContainer}>
        <button className={styles.compareBtn} type="button">
          Compare Plans
        </button>
        <p>Prices exclude any applicable taxes.</p>
      </div>
    </section>
  );
}
