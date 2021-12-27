import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getUsers, usersAPI } from "../../api/api";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleFollowingProgress
} from "../../redux/users-reducer ";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";


class usersContainer extends React.Component {
  componentDidMount(props) {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    }
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);


      usersAPI.getUsers(pageNumber,this.props.pageSize).then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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
    

})(usersContainer);
