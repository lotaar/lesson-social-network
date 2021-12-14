import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addMessageActionCreator, addUpdateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";




const mapStateToProps = (state) => {

  return {
    dialogsPage:state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessageClick:() => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText:(text)=> {
      dispatch(addUpdateNewMessageTextActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
