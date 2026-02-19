import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerhead}>
        <div className={styles.footerIntro}>
          <h2 className={styles.footerIntroTitle}>Sign up now or never!</h2>
          <p className={styles.footerIntroDescription}>
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <form action="#" className={styles.newsLetterForm}>
          <input
            className={styles.newsLetterEmail}
            type="text"
            placeholder="Your email.."
          />
          <button className={styles.newsLetterBtn} type="submit">
            Subscribe
          </button>
        </form>
      </div>
      <hr />
      <div className={styles.footBody}>
        <div className={styles.bodyCard}>
          <img src="/images/home-page/footer/logo-dark.svg" alt="logo" />
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <a href="#">
            <i className="bi bi-globe-americas"></i> English
            <i className="bi bi-caret-down-fill"></i>
          </a>
        </div>
        <div className={styles.linkListsContainer}>
          <ul className={styles.ProductList}>
            <li>
              <a href="#" className={styles.listTitle}>
                Product
              </a>
            </li>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Releases</a>
            </li>
          </ul>
          <ul className={styles.ProductList}>
            <li>
              <a href="#" className={styles.listTitle}>
                Company
              </a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Media kit</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className={styles.ProductList}>
            <li>
              <a href="#" className={styles.listTitle}>
                Resources
              </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className={styles.ProductList}>
            <li>
              <a href="#" className={styles.listTitle}>
                Social
              </a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">AngelList</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
          </ul>
          <ul className={styles.ProductList}>
            <li>
              <a href="#" className={styles.listTitle}>
                Legal
              </a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.footButtom}>
        <p>Lexend © 2024, All rights reserved.</p>

        <div className={styles.socailLink}>
          <a href="#">
            {" "}
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#">
            {" "}
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            {" "}
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#">
            {" "}
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            {" "}
            <i className="bi bi-youtube"></i>
          </a>
          <a href="#">
            {" "}
            <i className="bi bi-dribble"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
