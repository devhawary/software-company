import React from "react";
import styles from "./MainSection.module.scss";
function MainSection() {
  return (
    <section className={`container my-5 ${styles["hero-section"]}`}>
      <div className="row">
        <div className={`col-md-12 p-2 ${styles["stars-container"]}`}>
          <svg
            width={35}
            height={50}
            viewBox="0 0 69 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-24px text-gray-900 dark:text-white uc-svg ${styles["star-one"]}`}
          >
            <path
              d="M5.2.7c2.5.9 3.8 2.8 5.3 4.6 4.8 5.6 9.4 11.3 14.2 16.8 2 2.4 4.2 4.5 6.4 6.7 1 .9 1.8 1.8 2.1 3.1.5 2.2 2.2 3.4 3.7 4.6 2.6-.4 5-1 7.5-1.2 6.4-.7 11.8-3.4 17.1-6.9l4.8-3.2c.8 1.2 1.5 2.1 2.1 3 1 1.5.8 2.7-.4 3.9-5.5 5.1-10 10.9-13.7 17.3-.3.6-.5 1.2-.7 1.8-.6 1.7-1 3.3-2.1 4.8-1.2 1.7-1.2 4-.9 6.1.6 5.7 3.6 10.4 6.4 15.2 2.1 3.6 4.2 7.3 6.3 11 .9 1.7 1.3 3.4.4 5.4-3-3-6-5.9-8.9-8.9-2.9-3-5.6-6.2-8.6-9.1-2.2-2.2-4.6-4.1-6.9-6.2-.6-.6-1.4-1.1-1.9-1.8-1.1-1.5-2.4-2.3-4.4-1.7-1.1.3-2.3.3-3.5.3-4.1 0-7.6 1.8-11.2 3.3-5.1 2.2-10.1 4.6-15.1 6.9-1.7.8-2.8.2-2.9-1.7-.1-1.3.4-2.2 1.3-3 2.7-2.5 5.3-5.1 8-7.6 3.6-3.4 6.4-7.3 8.4-11.9.6-1.5 1.8-2.9 2.3-4.4 2-5.2 1.5-10.5.2-15.7-.5-1.9-1.1-3.9-1.8-5.8-.8-2.6-1.8-5.2-2.7-7.9-1.2-3.6-3.6-6.5-5.6-9.6C9 6.5 7.3 4.3 5.8 2c-.3-.4-.4-.9-.6-1.3z"
              fill="#100F12"
            />
          </svg>
          <h1 className="text-center">Insights</h1>
          <svg
            width={35}
            height={50}
            viewBox="0 0 69 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24px text-gray-900 dark:text-white uc-svg star-two"
          >
            <path
              d="M5.2.7c2.5.9 3.8 2.8 5.3 4.6 4.8 5.6 9.4 11.3 14.2 16.8 2 2.4 4.2 4.5 6.4 6.7 1 .9 1.8 1.8 2.1 3.1.5 2.2 2.2 3.4 3.7 4.6 2.6-.4 5-1 7.5-1.2 6.4-.7 11.8-3.4 17.1-6.9l4.8-3.2c.8 1.2 1.5 2.1 2.1 3 1 1.5.8 2.7-.4 3.9-5.5 5.1-10 10.9-13.7 17.3-.3.6-.5 1.2-.7 1.8-.6 1.7-1 3.3-2.1 4.8-1.2 1.7-1.2 4-.9 6.1.6 5.7 3.6 10.4 6.4 15.2 2.1 3.6 4.2 7.3 6.3 11 .9 1.7 1.3 3.4.4 5.4-3-3-6-5.9-8.9-8.9-2.9-3-5.6-6.2-8.6-9.1-2.2-2.2-4.6-4.1-6.9-6.2-.6-.6-1.4-1.1-1.9-1.8-1.1-1.5-2.4-2.3-4.4-1.7-1.1.3-2.3.3-3.5.3-4.1 0-7.6 1.8-11.2 3.3-5.1 2.2-10.1 4.6-15.1 6.9-1.7.8-2.8.2-2.9-1.7-.1-1.3.4-2.2 1.3-3 2.7-2.5 5.3-5.1 8-7.6 3.6-3.4 6.4-7.3 8.4-11.9.6-1.5 1.8-2.9 2.3-4.4 2-5.2 1.5-10.5.2-15.7-.5-1.9-1.1-3.9-1.8-5.8-.8-2.6-1.8-5.2-2.7-7.9-1.2-3.6-3.6-6.5-5.6-9.6C9 6.5 7.3 4.3 5.8 2c-.3-.4-.4-.9-.6-1.3z"
              fill="#100F12"
            />
          </svg>
        </div>
      </div>
      <div
        className={`row rounded-4 mt-5 ${styles["top-section"]} d-flex align-items-stretch`}
      >
        <div className="col-md-6">
          <div className="h-100 p-2">
            <img
              src="/images/insights-page/post-1.webp"
              alt="hero-image"
              className={`w-100 h-100 rounded-3 ${styles["hover-effect"]} ${styles["main-image"]}`}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="hero-content text-center mt-5">
            <small>
              <a
                className="text-decoration-none text-white rounded p-2 fw-bold"
                href="#"
              >
                Strategy
              </a>
            </small>
            <h2 className="mt-5">Top 5 reasons to invest in marketing</h2>
            <div className="author d-flex align-items-center justify-content-center mt-3 mb-3">
              <img
                src="/images/insights-page/02.webp"
                alt="author-image"
                className={`rounded-circle ${styles["rounded-avatar"]}`}
              />
              <small className="ms-2">
                <span className="fw-bold">David</span>
                <span className="text-muted">· Apr 26, 2024</span>
              </small>
            </div>
            <p className="w-75 m-auto mb-3">
              Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <a href="#" className="text-decoration-none second-a border-bottom">
              Continue reading
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MainSection;
