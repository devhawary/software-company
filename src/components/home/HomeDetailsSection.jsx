import styles from "./HomeDetailsSection.module.scss";

export default function DetailsSection() {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.detailsPrimaryContent}>
        <img
          className={styles.detailsMainImage}
          src="/images/home-page/Details/detail-image-01.webp"
          width="950px"
          alt="150 plus conversion rate image"
          loading="lazy"
        />

        <div className={styles.detailsContentContainer}>
          <h3>End-to-End Data Shared Management</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>

          <div className="detailsAccordionContainer">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed ${styles.accordionButton}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                  >
                    <span className={styles.accordionIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.398 1.083a1 1 0 01.594 1.041L13.132 9h6.196c.24 0 .485 0 .684.018.189.017.55.062.863.315a1.5 1.5 0 01.557 1.19c-.006.402-.202.709-.31.864-.114.165-.27.353-.424.538l-8.93 10.715a1 1 0 01-1.76-.764l.86-6.876H4.671c-.24 0-.485 0-.684-.018-.189-.017-.55-.062-.863-.315a1.5 1.5 0 01-.557-1.19c.006-.402.202-.709.31-.864.114-.165.27-.353.424-.538l.023-.027L12.232 1.36a1 1 0 011.166-.277zM5.135 13H12a1 1 0 01.992 1.124l-.577 4.616 6.45-7.74H12a1 1 0 01-.992-1.124l.577-4.615L5.135 13z"
                          fill="#ffffff"
                        />
                      </svg>
                    </span>
                    Manage tasks
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className={`accordion-body  ${styles.accordionBody}`}>
                    Offers a unified platform that fosters innovation while
                    providing end-to-end data management.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed ${styles.accordionButton}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                  >
                    <span className={styles.accordionIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.16 1.013a1 1 0 01.734.54l.851 1.702 1.702.85a1 1 0 01.26 1.602l-3 3A1 1 0 0119 9h-2.586l-3.707 3.707a1 1 0 01-1.414-1.414L15 7.586V5a1 1 0 01.293-.707l3-3a1 1 0 01.867-.28zM17 7h1.586l1.726-1.726-.76-.38a1 1 0 01-.447-.447l-.379-.759L17 5.414V7zm-5-4a9 9 0 109 9 1 1 0 112 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1a1 1 0 110 2zm0 5a4 4 0 104 4 1 1 0 112 0 6 6 0 11-6-6 1 1 0 110 2z"
                          fill="#ffffff"
                        />
                      </svg>
                    </span>
                    Set priorities
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className={`accordion-body  ${styles.accordionBody}`}>
                    Providing end-to-end data management. See how we help your
                    team solve today’s biggest challenges.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed ${styles.accordionButton}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                  >
                    <span className={styles.accordionIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 6a2 2 0 100 4 2 2 0 000-4zm-3.874 1A4.002 4.002 0 0122 8a4 4 0 01-7.874 1H3a1 1 0 010-2h11.126zM6 14a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 017.874-1H21a1 1 0 110 2H9.874A4.002 4.002 0 012 16z"
                          fill="#ffffff"
                        />
                      </svg>
                    </span>
                    Collaborate with your team
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className={`accordion-body  ${styles.accordionBody}`}>
                    Our shared team inboxes keep everyone on the same page and
                    in the loop.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detailsSecondaryContent}>
        <div className={styles.detailsContentContainer}>
          <h3>Unlock your Productivity Potential Now or Never</h3>
          <p>
            Unlock your productivity potential with our intuitive and powerful
            to-do app. Manage tasks, set priorities, collaborate with your team,
            and track progress effortlessly.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featuresListCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5c0 .001 0 .006.003.015a.296.296 0 00.032.066c.043.07.13.174.291.301.33.26.87.539 1.626.79C7.454 6.674 9.592 7 12 7s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79.162-.128.248-.232.29-.302a.293.293 0 00.033-.066A.052.052 0 0020 5l-.003-.015a.293.293 0 00-.032-.066 1.235 1.235 0 00-.291-.301c-.33-.26-.87-.539-1.626-.79C16.546 3.326 14.408 3 12 3s-4.546.327-6.048.827c-.756.252-1.296.53-1.626.79a1.236 1.236 0 00-.29.302.296.296 0 00-.033.066L4 5zm16 2.527a9.536 9.536 0 01-1.32.543C16.925 8.655 14.563 9 12 9c-2.563 0-4.925-.345-6.68-.93A9.536 9.536 0 014 7.527V12c0 .002 0 .007.003.018a.298.298 0 00.033.067c.042.07.127.173.288.3.328.26.864.537 1.618.789 1.497.5 3.635.826 6.058.826s4.561-.326 6.058-.826c.754-.252 1.29-.53 1.618-.789.16-.127.246-.23.288-.3a.298.298 0 00.033-.067A.061.061 0 0020 12V7.527zM22 5c0-.852-.519-1.504-1.088-1.953-.581-.458-1.36-.826-2.232-1.117C16.925 1.345 14.563 1 12 1c-2.563 0-4.925.345-6.68.93-.873.29-1.651.66-2.232 1.117C2.518 3.496 2 4.148 2 5v14c0 .85.513 1.502 1.082 1.953.579.459 1.355.827 2.226 1.118C7.061 22.656 9.423 23 12 23s4.939-.344 6.692-.929c.87-.29 1.647-.66 2.226-1.118C21.487 20.502 22 19.849 22 19V5zm-2 9.532a9.52 9.52 0 01-1.308.539C16.939 15.656 14.577 16 12 16s-4.939-.344-6.692-.929A9.461 9.461 0 014 14.531V19c0 .002 0 .007.003.018a.298.298 0 00.033.067c.042.07.127.173.288.3.328.26.864.537 1.618.789 1.497.5 3.635.826 6.058.826s4.561-.326 6.058-.826c.754-.252 1.29-.53 1.618-.789.16-.127.246-.23.288-.3a.298.298 0 00.033-.067A.061.061 0 0020 19v-4.468z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <h4>Use Data &amp; AI responsibly</h4>
              <p>Offers a unified platform that fosters innovation.</p>
            </div>

            <div className={styles.featuresListCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.398 1.083a1 1 0 01.594 1.041L13.132 9h6.196c.24 0 .485 0 .684.018.189.017.55.062.863.315a1.5 1.5 0 01.557 1.19c-.006.402-.202.709-.31.864-.114.165-.27.353-.424.538l-8.93 10.715a1 1 0 01-1.76-.764l.86-6.876H4.671c-.24 0-.485 0-.684-.018-.189-.017-.55-.062-.863-.315a1.5 1.5 0 01-.557-1.19c.006-.402.202-.709.31-.864.114-.165.27-.353.424-.538l.023-.027L12.232 1.36a1 1 0 011.166-.277zM5.135 13H12a1 1 0 01.992 1.124l-.577 4.616 6.45-7.74H12a1 1 0 01-.992-1.124l.577-4.615L5.135 13z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <h4>Track progress effortlessly</h4>
              <p>Providing end-to-end data management today’s challenges.</p>
            </div>
          </div>
        </div>
        <img
          className={styles.detailsSecondaryImage}
          src="/images/home-page/Details/detail-image-02.webp"
          width="950px"
          alt="daily average image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
