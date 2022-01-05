import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator, addUpdateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";




const mapStateToProps = (state) => {

  return {
    dialogsPage:state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessageClick:() => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText:(text)=> {
      dispatch(addUpdateNewMessageTextActionCreator(text));
    }
  }
}



// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
