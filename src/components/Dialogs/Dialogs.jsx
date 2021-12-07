import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  console.log(props)
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.updateNewMessageText(text)
  }

  let dialogsElements = props.state.dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.state.messages.map((el) => (
    <Message message={el.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>

      <div className={styles.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
          <button onClick={addMessage}>Отправить сообщение</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
