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
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem name="Птичкин" id="1" />
        <DialogItem name="Антон" id="2" />
        <DialogItem name="Сомик" id="3" />
        <DialogItem name="Соза" id="4" />
        <DialogItem name="Карась" id="5" />
        <DialogItem name="Стеф" id="6" />
      </div>

      <div className={styles.messages}>
        <Message message="Рект" />
        <Message message="Кабзда" />
        <Message message="Как просто" />
      </div>
    </div>
  );
};

export default Dialogs;
