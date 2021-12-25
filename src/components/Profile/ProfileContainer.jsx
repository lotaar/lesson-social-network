import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";

import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
   componentDidMount() {
     let userId = this.props.match.params.userId;
     if(!userId) userId =2
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/profile/` + userId
    )
    .then((response) => {
      
     
      this.props.setUserProfile(response.data);
      
    });
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
export default connect(mapStateToProps,{setUserProfile}) (WithUrlDataContainerComponenet); 
