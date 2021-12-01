import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message"






const Dialogs = (props) => {


  let dialogsElements = props.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.messagesData.map((el) => <Message message={el.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>

      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
