import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let sendMesaage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

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
          <textarea ref={newMessageElement}></textarea>
          <button onClick={sendMesaage}>Отправить сообщение</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
