import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postsElements = props.state.posts.map((el) => (
    <Post message={el.message} likeCount={el.likesCount} />
  ));

  let newPostsElement = React.createRef();

  let addPost = () => {
    
    props.dispatch({type:'ADD-POST'});
   
  };

  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText : text})
  }

  return (
    <div className={styles.PostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostsElement} value={props.state.newPostText}/>
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
