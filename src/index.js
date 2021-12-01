import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: "Птичкин" },
  { id: 2, name: "Антон" },
  { id: 3, name: "Сомик" },
  { id: 4, name: "Соза" },
  { id: 5, name: "Карась" },
  { id: 6, name: "Стеф" },
];
let messages = [
  { id: 1, message: "Реакт" },
  { id: 2, message: "Кабзда" },
  { id: 3, message: "Как" },
  { id: 4, message: "Просто" },
  { id: 5, message: "Дим" },
  { id: 6, message: "Димыч" },
];

let posts = [
  { id: 1, message: "Я понял что такое пропсы", likesCount: 14 },
  { id: 2, message: "Но это не точно", likesCount: 88 },
  { id: 3, message: "Как", likesCount: 15 },
  { id: 4, message: "Просто", likesCount: 32 },
  { id: 5, message: "Сан", likesCount: 44 },
  { id: 6, message: "Саныч", likesCount: 71 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogs} messagesData={messages} postsData={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


