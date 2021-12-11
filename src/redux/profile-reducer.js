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
  posts: [
    { id: 1, message: "Я понял что такое пропсы", likesCount: 14 },
    { id: 2, message: "Но это не точно", likesCount: 88 },
    { id: 3, message: "Как", likesCount: 15 },
    { id: 4, message: "Просто", likesCount: 32 },
    { id: 5, message: "Сан", likesCount: 44 },
    { id: 6, message: "Саныч", likesCount: 71 },
  ],
  newPostText: "",
};

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";

      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;

      return state;

    default:
      return state;
  }
};

export default profileReducer;