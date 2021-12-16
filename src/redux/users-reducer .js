const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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

let initialState = {
  users: [
    { id: 1,followed:false, fullName: "Dmitriy", status: 'I am a boss', location:{city:'Minsk', country: 'Belarus'} },
    { id: 2,followed:true, fullName: "V1lat", status: 'I am a boss too', location:{city:'Kiev', country: 'Ukraine'} },
    { id: 3,followed:false, fullName: "Viktor", status: 'I am a boss too', location:{city:'Moscow', country: 'Russia'} },
   
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  

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
