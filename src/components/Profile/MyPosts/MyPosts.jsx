import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Я понял что такое пропсы", likesCount: 14 },
    { id: 2, message: "Но это не точно", likesCount: 88 },
    { id: 3, message: "Как", likesCount: 15 },
    { id: 4, message: "Просто", likesCount: 32 },
    { id: 5, message: "Сан", likesCount: 44 },
    { id: 6, message: "Саныч", likesCount: 71 },
  ];

  let postsElements = posts.map((el) => (
    <Post message={el.message} likeCount={el.likesCount} />
  ));

  return (
    <div className={styles.PostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
