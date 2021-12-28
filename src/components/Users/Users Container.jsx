import axios from "axios";
import React from "react";
import { connect } from "react-redux";

import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleFollowingProgress,
  getUsers,
  pageOnChangedSetUsers,
} from "../../redux/users-reducer ";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";


class usersContainer extends React.Component {
  componentDidMount(props) {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.pageOnChangedSetUsers(pageNumber, this.props.pageSize)
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/>: null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          selectedPage={this.props.selectedPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}

        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress,

  };
};

// let mapDispatchToState = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
    pageOnChangedSetUsers,
    

})(usersContainer);
