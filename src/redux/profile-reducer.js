const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE='SET_USER_PROFILE';

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const addUpdateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return{
  type: SET_USER_PROFILE,
  profile
  }

};

let initialState = {
  posts: [
    { id: 1, message: "Я понял что такое пропсы", likesCount: 14 },
    { id: 2, message: "Но это не точно", likesCount: 88 },
    { id: 3, message: "Как", likesCount: 15 },
    { id: 4, message: "Просто", likesCount: 32 },
    { id: 5, message: "Сан", likesCount: 44 },
    { id: 6, message: "Саныч", likesCount: 71 },
  ],
  newPostText: "",
  profile:null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: 5, message: text, likesCount: 0 }],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
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
