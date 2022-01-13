import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { useState } from "react";


const LoginForm = (props) => {
     console.log('rerender');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={'email'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Password"} validate={[required]} name={'password'} component={Input} type={'password'} />
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={ Input} /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm =reduxForm({
     form:'login'
})(LoginForm)

let Login = (props) => {


  const onSubmit = (formData) => {
     props.login(formData.email, formData.password, formData.rememberMe)
 }
 if(props.isAuth) {
   return <Redirect to={'/profile'}/> 
 }

     return (
    <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth
  } )

export default connect(mapStateToProps,{login}) (Login);
