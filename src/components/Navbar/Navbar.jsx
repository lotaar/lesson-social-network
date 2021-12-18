import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          className={({ isActive }) => isActive && styles.active}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={({ isActive }) => classNames({ [styles.active]: isActive })}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={({ isActive }) => classNames({ [styles.active]: isActive })}
          to="/users"
        >
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={({ isActive }) => classNames({ [styles.active]: isActive })}
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={({ isActive }) => classNames({ [styles.active]: isActive })}
          to="/music"
        >
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={({ isActive }) => classNames({ [styles.active]: isActive })}
          to="settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

// // className={isActive =>
// //   "nav-link" + (!isActive ? " unselected" : "")
// // }

// // className = { navData => navData.isActive ? s.active : s.item }

// // className = {isActive =>
// //   {s.item} +
// // }

// className = {styles.item}

// activeClassName = {styles.active}

// <NavLink
//   to="/faq"
//   className={}
// >
//   FAQs
// </NavLink>
