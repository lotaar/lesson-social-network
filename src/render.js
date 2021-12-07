import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import {addPosts, updateNewPostText} from './redux/state'



 export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPosts={addPosts} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById("root")
      );
};

