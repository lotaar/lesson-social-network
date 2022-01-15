import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile,getStatus,updateStatus } from "../../redux/profile-reducer";

import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
   componentDidMount() {
     let userId = this.props.match.params.userId;
     if(!userId) {
       
       userId =this.props.authorizedUserId 
      }
     this.props.getUserProfile(userId)
     this.props.getStatus(userId)
   }
  render(){
   
    return (
     <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)





let mapStateToProps = (state) => ({
  profile:state.profilePage.profile,
  status:state.profilePage.status,
  authorizedUserId:state.auth.userId,
  isAuth:state.auth.isAuth,

  
})

// let WithUrlDataContainerComponenet = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps,{getUserProfile}) (WithUrlDataContainerComponenet); 


export default compose(
  connect(mapStateToProps,{getUserProfile,getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)