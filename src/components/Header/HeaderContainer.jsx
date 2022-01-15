import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import styles from "./Header.module.css";

import axios from "axios";
import { authAPI } from "../../api/api";
import {logout} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {
  
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { logout  })(HeaderContainer);
