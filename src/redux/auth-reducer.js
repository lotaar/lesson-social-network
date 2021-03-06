import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";



export const setAuthUserData = (userId,email,login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data:{userId, email, login,isAuth},
  };
};
export const getAuthUserData = () =>(dispatch) =>{
   
    return authAPI.me()
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login,} = response.data.data;

          dispatch(setAuthUserData(id, email, login, true));
        }
      });
      
  
}

export const login = (email, password, rememberMe) => (dispatch) => {
  
  
  
  authAPI.login(email, password, rememberMe)
  .then(response => {
    if(response.data.resultCode===0) {
      dispatch(getAuthUserData())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', {_error: message}))
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout()
  .then(response => {
    if(response.data.resultCode===0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  })
}




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
        // isAuth:true
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
