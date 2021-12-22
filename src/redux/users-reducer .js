const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};



let initialState = {
  users: [],
  pageSize:5,
  totalUsersCount:0,
  currentPage:1,
   isFetching:true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users:action.users
      };
      
      case SET_CURRENT_PAGE: 
      return{
        ...state,
        currentPage:action.currentPage
      }
      case SET_TOTAL_USERS_COUNT:
        return{
          ...state,
          totalUsersCount:action.count
        }
        case TOGGLE_IS_FETCHING:
        return{
          ...state,
          isFetching:action.isFetching
        }
 
    default:
      return state;
  }
};

export default usersReducer;

// const usersReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case ADD_POST:{
//       let newPost = {
//         id: 5,
//         message: state.newPostText,
//         likesCount: 0,
//       };
//       let stateCopy = {...state}
//       stateCopy.posts = [...state.posts]
//       stateCopy.posts.push(newPost);
//       stateCopy.newPostText = "";

//       return stateCopy;
//     }
//       case UPDATE_NEW_POST_TEXT:{
//         let stateCopy = {...state}
//       stateCopy.newPostText = action.newText;

//       return stateCopy;
//     }
//     default:
//       return state;
//   }
// };
