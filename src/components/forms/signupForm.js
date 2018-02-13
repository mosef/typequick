import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { required, nonEmpty } from './validators';
import { registerUser } from '../../actions/registerUser';
// import '../css/signup.css';

const SignupForm = props => (
  <form
    className="signup-form"
    onSubmit={
      props.handleSubmit(props.registerUser)}
  >
    <label htmlFor="email">Email address</label>
    <Field
      component={Input}
      type="text"
      name="email"
      id="email"
      validate={[required, nonEmpty]}
    />
    <label htmlFor="username">Username</label>
    <Field
      component={Input}
      type="text"
      name="username"
      id="username"
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
          Register
    </button>
  </form>
);

const connected = connect(null, { registerUser })(SignupForm);

export default reduxForm({
  form: 'signupForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(connected);
