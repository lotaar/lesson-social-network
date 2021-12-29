import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { getUserProfile } from "../../redux/profile-reducer";

import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
   componentDidMount() {
     let userId = this.props.match.params.userId;
     if(!userId) userId =2
     this.props.getUserProfile(userId)
   }
  render(){
    
    return (
     <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile:state.profilePage.profile
})

let WithUrlDataContainerComponenet = withRouter(ProfileContainer)
export default connect(mapStateToProps,{getUserProfile}) (WithUrlDataContainerComponenet); 
