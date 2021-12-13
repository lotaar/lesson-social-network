import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { addMessageActionCreator, addUpdateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";


const DialogsContainer = (props) => {
  
  let state = props.store.getState().dialogsPage

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    
    props.store.dispatch(addUpdateNewMessageTextActionCreator(text));
  };

 
  return (
   <Dialogs onAddMessageClick={addMessage}
   updateNewMessageText={onMessageChange}
   dilogsPage={state}
   />
  );
};

export default DialogsContainer;
