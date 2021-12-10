import React from "react";
import { addPostActionCreator, addUpdateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  
  let postsElements = props.state.posts.map((el) => (
    <Post message={el.message} likeCount={el.likesCount} />
  ));

  

  let addPost = () => {
    
    props.dispatch(addPostActionCreator());
   
  };

  let onPostChange = (e) => {
    let text = e.target.value
    props.dispatch(addUpdateNewPostTextActionCreator(text))
  }

  return (
    <div className={styles.PostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} placeholder='Текст вашего поста' value={props.state.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
