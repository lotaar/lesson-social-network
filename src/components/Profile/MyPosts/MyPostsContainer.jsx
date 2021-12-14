import React from "react";
import { addPostActionCreator, addUpdateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPostsContainer = (props) => {
  

  let state= props.store.getState().profilePage
  
  
  

  let addPost = () => {
    
    props.store.dispatch(addPostActionCreator());
   
  };

  let onPostChange = (text) => {
    
    props.store.dispatch(addUpdateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts
    onAddPostClick={addPost}
    updateNewPostText={onPostChange}
    posts={state}
     />
  );
};

export default MyPostsContainer;
