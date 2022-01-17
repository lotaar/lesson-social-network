export const getUsers = (state) => {
    return state.usersPage.users
}


export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getIsFetching = (state) => {
    return state.usersPage.pisFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}