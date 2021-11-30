import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
 
  let postsData = [
    {id:1, message: 'Я понял что такое пропсы',likesCount:14},
    {id:2, message: 'Но это не точно',likesCount:88},
    {id:3, message: 'Как'},
    {id:4, message: 'Просто'},
    {id:5, message: 'Дим'},
    {id:6, message: 'Димыч'},
  ]

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
        <Post message = {postsData[0].message} likeCount = {postsData[0].likesCount}/>
        <Post message = {postsData[1].message} likeCount = {postsData[1].likesCount}/>
      </div>
    </div>
  );
};

export default MyPosts;
