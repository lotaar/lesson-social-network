import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC,  } from "../../redux/users-reducer ";
import Users from "./Users";
import UsersC from "./UsersC";

let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
  
}

let mapDispatchToState =(dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToState) (UsersC)