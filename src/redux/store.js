import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        { id: 1, message: "Я понял что такое пропсы", likesCount: 14 },
        { id: 2, message: "Но это не точно", likesCount: 88 },
        { id: 3, message: "Как", likesCount: 15 },
        { id: 4, message: "Просто", likesCount: 32 },
        { id: 5, message: "Сан", likesCount: 44 },
        { id: 6, message: "Саныч", likesCount: 71 },
      ],
      newPostText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // addPosts() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  // addMessage() {
  //   let newMessage = {
  //     id: 7,
  //     message: this._state.dialogsPage.newMessageText,
  //   };
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state)
  },
};

export default store;
window.store = store;
