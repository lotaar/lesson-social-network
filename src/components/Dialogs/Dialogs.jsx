import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={classnames(styles.dialog, styles.active)}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};





const Message = (props) => {
  return <div className={styles.message}> {props.message}</div>;
};

const Dialogs = (props) => {


  let dialogsData = [
    {id:1, name: 'Птичкин'},
    {id:2, name: 'Антон'},
    {id:3, name: 'Сомик'},
    {id:4, name: 'Соза'},
    {id:5, name: 'Карась'},
    {id:6, name: 'Стеф'},
  ]
  
  let messagesData = [
    {id:1, message: 'Реакт'},
    {id:2, message: 'Кабзда'},
    {id:3, message: 'Как'},
    {id:4, message: 'Просто'},
    {id:5, message: 'Дим'},
    {id:6, message: 'Димыч'},
  ]
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="Сомик" id="3" />
        <DialogItem name="Соза" id="4" />
        <DialogItem name="Карась" id="5" />
        <DialogItem name="Стеф" id="6" />
      </div>

      <div className={styles.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
