import React from "react";
import styles from "./BlogPostSection.module.scss";
import { posts } from "../../data/CareersPageData";
import Post from "./subComponents/Post";
function BlogPostSection() {
  return (
    <section
      id="blog_posts"
      className={`${styles.blog_posts} ${styles.section}`}
    >
      <div className={`container ${styles.container}`}>
        <div className="row">
          <h2 className="col-12">Gain valuable insights</h2>
        </div>
        <div className={`${styles.cards} cards d-flex flex-wrap row`}>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <a className={`${styles.view}`} href="/insights.html">
          <span>View more articles </span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default BlogPostSection;
