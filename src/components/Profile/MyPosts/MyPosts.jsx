import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
<div className={styles.PostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
        <textarea >

        </textarea>
        </div>
        <div>
        <button>
          Add post
        </button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message = 'Я понял что такое пропсы' likeCount = '14'/>
        <Post message = 'Но это не точно' likeCount = '88'/>
      </div>
    </div>
  );
};

export default MyPosts;
