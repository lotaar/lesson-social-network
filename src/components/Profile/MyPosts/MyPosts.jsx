import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
<div>
      My posts
      <div>
        <textarea >

        </textarea>
        <button>
          Add post
        </button>
      </div>
      <div className={styles.posts}>
        <Post message = 'Я понял что такое пропсы' likeCount = '14'/>
        <Post message = 'Но это не точно' likeCount = '88'/>
      </div>
    </div>
  );
};

export default MyPosts;
