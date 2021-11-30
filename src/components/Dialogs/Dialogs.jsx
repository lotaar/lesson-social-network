import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
            <div className={classnames(styles.dialog, styles.active)}> Птичкин</div>
            <div className={styles.dialog}>Антон</div>
            <div className={styles.dialog}>Сомик</div>
            <div className={styles.dialog}>Соза</div>
            <div className={styles.dialog}>Карась</div>
            <div className={styles.dialog}>Стеф</div>
        </div>

        <div className={styles.messages}>
              <div className={styles.mesaage}>Реакт</div>
              <div className={styles.mesaage}>Кабзда</div>
              <div className={styles.mesaage}>Как просто</div>

        </div>
    </div>
  );
};

export default Dialogs;
