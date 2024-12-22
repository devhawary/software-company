import styles from "./FaqAccordion.module.scss";

export default function FaqAccordion() {
  return (
    <div className={`${styles.faqAccordionContainer}  ${styles.primayStyle}`}>
      <details name="faq" className={styles.faqAccordion}>
        <summary className={styles.faqSummary}>
          <p className={styles.faqQuestion}>
            Do I need to know about how to code?
          </p>
          <img
            className={styles.toggleIcon}
            src="/images/shared/accordion/accordion-toggle-icon.svg"
            alt="accordion open close icon"
          />
        </summary>
        <p className={styles.accordionContent}>
          Yes, you need to have a fair amount of knowledge in dealing with
          HTML/CSS as well as JavaScript in order to be able to use Lexend.
        </p>
      </details>
      <details name="faq" className={styles.faqAccordion}>
        <summary className={styles.faqSummary}>
          <p className={styles.faqQuestion}>
            Can I use it for commercial projects?
          </p>
          <img
            className={styles.toggleIcon}
            src="/images/shared/accordion/accordion-toggle-icon.svg"
            alt="accordion open close icon"
          />
        </summary>
        <p className={styles.accordionContent}>
          Feel free to do so. Lexend does exist to evolve every commercial
          project. You can also use it to build stunning websites for your own
          clients (we won’t breathe a word).
        </p>
      </details>
      <details name="faq" className={styles.faqAccordion}>
        <summary className={styles.faqSummary}>
          <p className={styles.faqQuestion}>
            Can I use it for multiple projects?
          </p>
          <img
            className={styles.toggleIcon}
            src="/images/shared/accordion/accordion-toggle-icon.svg"
            alt="accordion open close icon"
          />
        </summary>
        <p className={styles.accordionContent}>
          Definitely! Please use it however you like; we don’t limit it.
        </p>
      </details>
      <details name="faq" className={styles.faqAccordion}>
        <summary className={styles.faqSummary}>
          {" "}
          <p className={styles.faqQuestion}>
            Can I use this to create and sell a product?
          </p>
          <img
            className={styles.toggleIcon}
            src="/images/shared/accordion/accordion-toggle-icon.svg"
            alt="accordion open close icon"
          />
        </summary>
        <p className={styles.accordionContent}>
          Do not ever consider doing it.
        </p>
      </details>
      <details name="faq" className={styles.faqAccordion}>
        <summary className={styles.faqSummary}>
          <p className={styles.faqQuestion}>What is your refund policy?</p>
          <img
            className={styles.toggleIcon}
            src="/images/shared/accordion/accordion-toggle-icon.svg"
            alt="accordion open close icon"
          />
        </summary>
        <p className={styles.accordionContent}>
          We understand the importance of customer satisfaction and we strive to
          provide the best products and services. However, please note that due
          to the nature of our products and services, we do not offer refunds
          after a purchase has been made.
        </p>
      </details>
    </div>
  );
}
