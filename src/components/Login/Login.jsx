import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";


const LoginForm = (props) => {
     console.log('rerender');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={'login'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Password"} validate={[required]} name={'password'} component={Input} />
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
     console.log(formData);
 }
     return (
    <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;
