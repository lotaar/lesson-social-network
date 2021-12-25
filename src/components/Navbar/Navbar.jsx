import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          activeClassName={styles.active}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          activeClassName={styles.active}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          activeClassName={styles.active}
          to="/users"
        >
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          activeClassName={styles.active}
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
         activeClassName={styles.active}
          to="/music"
        >
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          activeClassName={styles.active}
          to="/settings"
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
