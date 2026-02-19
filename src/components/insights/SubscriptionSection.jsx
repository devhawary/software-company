import React from "react";
import styles from "./SubscriptionSection.module.scss";
function SubscriptionSection() {
  return (
    <section className="py-5 subscription-section">
      <div className={`container ${styles["news-letter"]} rounded-4`}>
        <div className="row justify-content-between align-items-center">
          {/* Text Content */}
          <div className="col-md-6 mt-5">
            <div className="news-text p-5 ps-5 pt-0">
              <h2>Get the latest updates</h2>
              <p>
                Subscribe to get our most-popular proposal eBook and more top
                revenue content to help you send docs faster.
              </p>
              <form
                action="#"
                className={`${styles["subscription-form"]} d-flex flex-column flex-md-row gap-1 mt-5`}
              >
                <input
                  className="form-control p-3"
                  type="text"
                  placeholder="Your email address"
                />
                <button
                  className={`btn text-white ps-5 pe-5 pt-2 pb-2 `}
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <small className="mt-3 d-block text-muted">
                Don't worry, we don't spam.
              </small>
            </div>
          </div>
          {/* Illustration */}
          <div className="col-md-5">
            <div className="illustration">
              <img
                src="/images/insights-page/newsletter.svg"
                alt="illustration"
                className="w-100 p-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SubscriptionSection;
