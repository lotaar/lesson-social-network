import { rerenderEntireTree } from "../render";

let state = {
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
    newMessageText: 'it-kamasutra.com',
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
    newPostText: "it-kamasutra.com",
  },
};



export let addPosts = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};


export let addMessage = () => {
  let newMessage = {
    id:7,
    message:state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newMessageText = ''
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText= newText;
  rerenderEntireTree(state);
}



export default state;
