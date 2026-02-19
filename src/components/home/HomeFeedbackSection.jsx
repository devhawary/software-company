import styles from "./HomeFeedbackSection.module.scss";

export default function FeedbackSection() {
  return (
    <section className={styles.feedbacksection}>
      <div className={styles.feedbackCard}>
        <img
          className={styles.logo}
          src="/images/home-page/Header-images/brand-01.svg"
          alt="capsole barnd logo"
        />
        <blockquote className={styles.qoute}>
          “We’re looking for people who share our vision! most of our time used
          to be taken up by most of alternate administrative work whereas now we
          can focus on building out to help our employees.”
        </blockquote>

        <div className={styles.reviewer}>
          <h6>Anna Yon</h6>
          <p>Senior UI/UX Designer</p>
        </div>
      </div>

      <a href="#">
        Learn more <i className="bi bi-arrow-right"></i>
      </a>
    </section>
  );
}
