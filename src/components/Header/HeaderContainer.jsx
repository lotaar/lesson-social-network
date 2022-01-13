import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import styles from "./Header.module.css";
import { getAuthUserData } from "../../redux/auth-reducer";
import axios from "axios";
import { authAPI } from "../../api/api";
import {logout} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData,logout  })(HeaderContainer);
