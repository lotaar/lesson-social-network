import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, addUpdateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";







const mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPostClick:() => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText:(text)=> {
      dispatch(addUpdateNewPostTextActionCreator(text))
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
