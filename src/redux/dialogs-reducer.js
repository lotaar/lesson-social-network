const ADD_MESSAGE = "ADD-MESSAGE";

// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText
  };
};

// export const addUpdateNewMessageTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     newText: text,
//   };
// };

let initialState = {
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
 
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
      
        messages: [...state.messages, { id: 7, message: text }],
      };

    // case UPDATE_NEW_MESSAGE_TEXT:
    //   return {
    //     ...state,
    //     newMessageText: action.newText,
    //   };

    default:
      return state;
  }
};

export default dialogsReducer;

// const dialogsReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case ADD_MESSAGE:{
//       let newMessage = {
//         id: 7,
//         message: state.newMessageText,
//       }
//       let copyState = {...state}
//       copyState.messages=[...state.messages]
//       copyState.messages.push(newMessage);
//       copyState.newMessageText = "";

//       return copyState;
//     }
//     case UPDATE_NEW_MESSAGE_TEXT:{
//       let stateCopy = {...state}
//       stateCopy.newMessageText = action.newText;

//       return stateCopy;
//     }
//     default:
//       return state;
//   }
// };
