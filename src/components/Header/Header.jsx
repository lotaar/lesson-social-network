import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'




const Header = (props) => {
  console.log(props);
    return (
        <header className={styles.header}>
        <img alt="" src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" />
        <div className={styles.loginBlock}>
          {props.isAuth? <div> {props.login} - <button onClick={props.logout}>logout</button></div>:
          <NavLink to={'/login'}>Login</NavLink>}
          
        </div>
      </header>
    )
}

export default Header;