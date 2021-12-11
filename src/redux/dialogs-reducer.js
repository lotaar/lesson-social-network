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

let initialState =  {
  dialogs: [
    { id: 1, name: "Птичкин" },
    { id: 2, name: "Антон" },
    { id: 3, name: "Сомик" },
    { id: 4, name: "Соза" },
    { id: 5, name: "Карась" },
    { id: 6, name: "Стеф" },
  ],
  messages: [
    { id: 1, message: "Реакт" },
    { id: 2, message: "Кабзда" },
    { id: 3, message: "Как" },
    { id: 4, message: "Просто" },
    { id: 5, message: "Дим" },
    { id: 6, message: "Димыч" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state=initialState, action) => {
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