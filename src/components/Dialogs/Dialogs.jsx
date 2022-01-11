import classnames from "classnames";
import React from "react";
import { Redirect } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {
  addMessageActionCreator,
  addUpdateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // let addMessage = () => {
  //   props.onAddMessageClick();
  // };

  // let onMessageChange = (e) => {
  //   let text = e.target.value;
  //   props.updateNewMessageText(text);
  // };

  let dialogsElements = props.dialogsPage.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.dialogsPage.messages.map((el) => (
    <Message message={el.message} />
  ));
  let addNewMessage = (values) => {
     props.onAddMessageClick(values.newMessageText)
  }

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>

      <div className={styles.messages}>
        {messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
    <div>
      <Field  component={'textarea'} name ={'newMessageText'} placeholder="Введите ваше сообщение"/>
    </div>
    <div>
      <button>Отправить сообщение</button>
    </div>
  </form>
  )
}

const AddMessageFormRedux =reduxForm({
  form:'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
