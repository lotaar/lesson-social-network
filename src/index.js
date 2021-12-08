import store from "./redux/state";

import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";






let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPosts={store.addPosts.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
