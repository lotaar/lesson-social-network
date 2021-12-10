const ADD_MESSAGE = "ADD-MESSAGE";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const addUpdateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageText,
      }
      state.messages.push(newMessage);
      state.newMessageText = "";

      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;

      return state;

    default:
      return state;
  }
};


export default dialogsReducer;