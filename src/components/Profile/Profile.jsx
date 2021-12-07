import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo/>
        <MyPosts state={props.state} addPosts={props.addPosts} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} />
      </div>
    )
}

export default Profile; 