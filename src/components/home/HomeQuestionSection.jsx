import styles from "./HomeQuestionSection.module.scss";
import FaqAccordion from "../shared/FaqAccordion";
export default function QuestionSection() {
  return (
    <section className={styles.questionSection}>
      <div className={styles.questionIntro}>
        <p className="icon">FAQ</p>
        <h2>Frequenlty asked questions:</h2>
        <p className="description">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div
        className={`accordion accordion-flush ${styles.accordion}`}
        id="accordionFlush"
      >
        <FaqAccordion />
      </div>
      <div className={styles.questionCard}>
        <div className="images">
          <img
            src="/images/home-page/Header-images/reviewer-1.webp"
            alt="reviewer one"
            width="50px"
          />
          <img
            src="/images/home-page/Header-images/reviewer-2.webp"
            alt="reviewer two"
            width="50px"
          />
          <img
            src="/images/home-page/Header-images/reviewer-3.webp"
            alt="reviewer three"
            width="50px"
          />
        </div>
        <h5>Still have questions?</h5>
        <p>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className={styles.questionBtn} type="button">
          Get in touch
        </button>
      </div>
    </section>
  );
}
