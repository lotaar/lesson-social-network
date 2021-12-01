import classnames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={classnames(styles.dialog, styles.active)}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};





export default DialogItem;
