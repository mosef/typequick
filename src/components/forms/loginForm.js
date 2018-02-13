import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { required, nonEmpty } from './validators';
import { authenticateUser } from '../../actions/loginUser';
import '../../css/loginpage.css';

const LoginForm = props => (
  <div className="wrapper">
    <form
      className="login-form"
      onSubmit={props.handleSubmit(props.authenticateUser)}
    >
      <div className="logo" />
      <label htmlFor="email">Email Address</label>
      <Field
        component={Input}
        type="text"
        name="email"
        id="email"
        validate={[required, nonEmpty]}
      />
      <label htmlFor="password">Password</label>
      <Field
        component={Input}
        type="password"
        name="password"
        id="password"
        validate={[required, nonEmpty]}
      />
      <button type="submit">
          Log in
      </button>
      <Link to="/">Back</Link>
    </form>
  </div>
);

const connected = connect(null, { authenticateUser })(LoginForm);

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(connected);
