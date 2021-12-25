const SET_USER_DATA = "SET_USER_DATA";



export const setAuthUserData = (userId,email,login) => {
  return {
    type: SET_USER_DATA,
    data:{userId, email, login},
  };
};




let initialState = {
      userId: null,
      email: null,
      login: null,
      isAuth:false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth:true
      };



 
    default:
      return state;
  }
};

export default authReducer;

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
