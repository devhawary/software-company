import styles from "./HomeFeaturesSection.module.scss";

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresSectionIntro}>
        <p className={styles.icon}>Features</p>
        <h2>Recognized by the experts</h2>
        <p className={styles.description}>
          Offers a unified platform that fosters innovation while providing
          end-to-end data management. See how we help your team solve today’s
          biggest challenges.
        </p>
      </div>
      {/*features list start*/}
      <div className={styles.featuresList}>
        <div className={styles.featureCard}>
          <div className={styles.featureCardIcon}>
            <svg
              width="25"
              height="25"
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
          <h3>Fast and Reliable</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a href="#">
            Learn more <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureCardIcon}>
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
                d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm4.293-2.707a1 1 0 011.414 0L10 12.586l2.727-2.727.017-.017c.084-.084.184-.185.28-.266.111-.094.28-.22.513-.295a1.5 1.5 0 01.926 0c.233.075.402.2.513.295.096.081.196.182.28.266l.017.017 3.434 3.434a1 1 0 01-1.414 1.414L14 11.414l-2.727 2.727-.017.017a4.912 4.912 0 01-.28.266 1.52 1.52 0 01-.513.296 1.5 1.5 0 01-.927 0 1.51 1.51 0 01-.512-.296c-.096-.081-.196-.182-.28-.266l-.017-.017-3.434-3.434a1 1 0 010-1.414z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <h3>Data Everywhere</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a href="#">
            Learn more <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureCardIcon}>
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
                d="M6.5 4.5a3.5 3.5 0 117 0V5h.034c.67 0 1.223 0 1.675.03.47.033.904.101 1.322.274a4 4 0 012.165 2.165c.173.418.241.852.273 1.321.015.214.022.45.026.71h.505a3.5 3.5 0 110 7H19v.741c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H12.5a1 1 0 01-1-1v-1.75a1.25 1.25 0 10-2.5 0V22a1 1 0 01-1 1H6.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 18.71 1 18.046 1 17.242V15.5a1 1 0 011-1h1.5a1.5 1.5 0 000-3H2a1 1 0 01-1-1v-.034c0-.67 0-1.223.03-1.676.033-.469.101-.903.274-1.32A4 4 0 013.47 5.303c.418-.173.852-.241 1.321-.273C5.243 5 5.796 5 6.466 5H6.5v-.5zM10 3a1.5 1.5 0 00-1.5 1.5V6a1 1 0 01-1 1h-1c-.713 0-1.197 0-1.573.026-.368.025-.559.07-.692.126a2 2 0 00-1.083 1.083c-.055.133-.1.324-.126.692a10.98 10.98 0 00-.021.573H3.5a3.5 3.5 0 110 7H3v.7c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C5.361 21 5.943 21 6.8 21H7v-.75a3.25 3.25 0 016.5 0V21c.696 0 1.194-.005 1.589-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-1.7a1 1 0 011-1h1.5a1.5 1.5 0 000-3H18a1 1 0 01-1-1c0-.713 0-1.197-.026-1.573-.025-.368-.07-.559-.126-.692a2 2 0 00-1.083-1.083c-.133-.055-.324-.1-.692-.126C14.697 7.001 14.213 7 13.5 7h-1a1 1 0 01-1-1V4.5A1.5 1.5 0 0010 3z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <h3>Fast and Reliable</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a href="#">
            Learn more <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureCardIcon}>
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
          </div>
          <h3>Fast and Reliable</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a href="#">
            Learn more <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureCardIcon}>
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
          </div>
          <h3>Fast and Reliable</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a href="#">
            Learn more <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureCardIcon}>
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
          <h3>Fast and Reliable</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a href="#">
            Learn more <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      {/* features list end */}
      <div className={styles.featuresSectionOutro}>
        <h2>Unlock the value of your Data</h2>
        <p className={styles.description}>
          Lexend is a proven leader in trust intelligence, recognized by top
          analyst firms.
        </p>

        <div>
          <button className={styles.demoBtn}>Get a Demo</button>
          <button className={styles.trialBtn}>Start Free Trial</button>
        </div>
      </div>
    </section>
  );
}
