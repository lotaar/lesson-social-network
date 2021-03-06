
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS'

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

// export const addUpdateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };

export const setUserProfile = (profile) => {
  return{
  type: SET_USER_PROFILE,
  profile
  }

};
export const setStatus = (status) =>{
  return {
    type:SET_STATUS,
    status
  }
}

export const getUserProfile =(userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
    .then((response) => {
    
      dispatch(setUserProfile(response.data));
      
    });
  }
}
export const getStatus =(userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then((response) => {
    
      dispatch(setStatus(response.data));
      
    });
  }
}

export const updateStatus =(status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then((response) => {
    if(response.data.resultCode===0){
      dispatch(setStatus(status));
    }
    });
  }
}

let initialState = {
  posts: [
    { id: 1, message: "Я понял что такое пропсы", likesCount: 14 },
    { id: 2, message: "Но это не точно", likesCount: 88 },
    { id: 3, message: "Как", likesCount: 15 },
    { id: 4, message: "Просто", likesCount: 32 },
    { id: 5, message: "Сан", likesCount: 44 },
    { id: 6, message: "Саныч", likesCount: 71 },
  ],
  // newPostText: "",
  profile:null,
  status:''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text =action.newPostText;
      return {
        ...state,
        // newPostText: "",
        posts: [...state.posts, { id: 5, message: text, likesCount: 0 }],
      };

    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.newText,
    //   };
      case SET_STATUS:
        return {
          ...state,
          status: action.status,
        };
      case SET_USER_PROFILE:
        return{
          ...state,profile:action.profile
        }

    default:
      return state;
  }
};

export default profileReducer;

// const profileReducer = (state=initialState, action) => {
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
