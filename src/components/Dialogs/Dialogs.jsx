import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { addMessageActionCreator, addUpdateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
 
  

  let addMessage = () => {
    props.onAddMessageClick()
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
   props.updateNewMessageText(text)
  };

  let dialogsElements = props.dilogsPage.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.dilogsPage.messages.map((el) => (
    <Message message={el.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>

      <div className={styles.messages}>
        {messagesElements}
        <div>
          <textarea
            onChange={onMessageChange}
            placeholder='Введите ваше сообщение'
            value={props.dilogsPage.newMessageText}
          />
          <div><button onClick={addMessage}>Отправить сообщение</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
