import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message"






const Dialogs = (props) => {
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

  let dialogsElements = dialogs.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messgesElements = messages.map((el) => <Message message={el.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>

      <div className={styles.messages}>{messgesElements}</div>
    </div>
  );
};

export default Dialogs;
