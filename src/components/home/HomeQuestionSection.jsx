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

      <FaqAccordion />

      <div
        className={`accordion accordion-flush ${styles.accordion}`}
        id="accordionFlush"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${styles.accordionButton}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Do I need to know about how to code?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              Yes, you need to have a fair amount of knowledge in dealing with
              HTML/CSS as well as JavaScript in order to be able to use Lexend.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${styles.accordionButton}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Can I use it for commercial projects?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              Feel free to do so. Lexend does exist to evolve every commercial
              project. You can also use it to build stunning websites for your
              own clients (we won’t breathe a word).
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${styles.accordionButton}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              Can I use it for multiple projects?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              Definitely! Please use it however you like; we don’t limit it.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${styles.accordionButton}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              Can I use this to create and sell a product?
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">Do not ever consider doing it.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${styles.accordionButton}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              What is your refund policy?
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              We understand the importance of customer satisfaction and we
              strive to provide the best products and services. However, please
              note that due to the nature of our products and services, we do
              not offer refunds after a purchase has been made.
            </div>
          </div>
        </div>
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
