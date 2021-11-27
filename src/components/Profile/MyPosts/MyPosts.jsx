import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
<div>
      My posts
      <div>New Post</div>
      <div className={styles.posts}>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
