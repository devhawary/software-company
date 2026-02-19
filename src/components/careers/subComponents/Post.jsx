import React from "react";
import styles from "./Post.module.scss";
function Post({ post }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      <div className={`card ${styles.card}`}>
        <div className={`${styles.fixed}`}>{post.label}</div>
        <a href="#">
          <img src={post.postImage} alt="valuable-insights" />
        </a>
        <div className={`${styles.details}`}>
          <h5>
            <a href="#">{post.postTitle}</a>
          </h5>
          <div className={`${styles.puplisher}`}>
            <img src={post.puplisherImage} alt="avatar" />
            {post.puplisherName}
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
