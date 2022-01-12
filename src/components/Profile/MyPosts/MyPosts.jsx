import React from "react";
import { Field, reduxForm } from "redux-form";
import { addPostActionCreator, addUpdateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { maxLength30, maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxLength10 = maxLengthCreator(10) ;

const MyPosts = (props) => {
  
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likeCount={el.likesCount} />
  ));

  

  let addPost = (values) => {
    
    props.onAddPostClick(values.newPostText);
   
  };

  // let onPostChange = (e) => {
  //   let text = e.target.value
  //   props.updateNewPostText(text);
  // }

  return (
    <div className={styles.PostsBlock}>
      <h3>My posts</h3>
     <AddNewPostReduxForm onSubmit={addPost}/>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};




let AddNewPostForm = (props) => {
  return (
    < form onSubmit={props.handleSubmit}>
    <div>
      <Field validate={[required, maxLength10]} component ={Textarea} name={'newPostText'} placeholder='Текст вашего поста'/>
      
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
  )
}

const AddNewPostReduxForm = reduxForm({
  form:'MyPostAddPostForm'
}) (AddNewPostForm) 


export default MyPosts;
