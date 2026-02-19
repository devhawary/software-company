import styles from "./HomeInsightsSection.module.scss";

export default function InsightsSection() {
  return (
    <section className={styles.insightsSection}>
      <div className={styles.introContainer}>
        <div className={styles.insightsIntro}>
          <p className={styles.icon}>Latest posts</p>
          <h2>Latest from insights</h2>
          <p className={styles.description}>
            Interviews, tips, guides, industry best practices, and news.
          </p>
        </div>
        <button className={styles.postsBtn} type="button">
          View all posts
        </button>
      </div>

      <div className={styles.postsContainer}>
        <div className={styles.postCard}>
          <img
            className={styles.postImg}
            src="/images/home-page/posts/post-4.webp"
            width="400px"
            height="290px"
            alt="UX presentation image"
          />
          <h3 className="postTitle">UX review presentations</h3>
          <p className={styles.postDescription}>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <a href="#" className={styles.postLink}>
            Read post <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className={styles.postCard}>
          <img
            className={styles.postImg}
            src="/images/home-page/posts/post-6.webp"
            width="400px"
            height="290px"
            alt="api stack image"
          />
          <h3 className="postTitle">Building your API stack</h3>
          <p className={styles.postDescription}>
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <a href="#" className={styles.postLink}>
            Read post <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className={styles.postCard}>
          <img
            className={styles.postImg}
            src="/images/home-page/posts/post-1.webp"
            width="400px"
            height="290px"
            alt="software projects image"
          />
          <h3 className="postTitle">Migrating to Linear 101</h3>
          <p className={styles.postDescription}>
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here’s how to get started.
          </p>
          <a href="#" className={styles.postLink}>
            Read post <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
