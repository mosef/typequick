import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { required, nonEmpty } from './validators';
import { registerUser, cancelSignUp } from '../../actions/RegisterActions';
import backArrow from '../../img/Arrow.png';
// import '../css/signup.css';

class SignupForm extends Component {
  render() {
    return (
      <form
        className="signup-form"
        onSubmit={
      this.props.handleSubmit(this.props.registerUser)}
      >
        <img
          src={backArrow}
          alt=""
          onClick={() => { this.props.cancelSignUp(); }}
          className="back-button"
        />
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
        <button type="submit" className="signUp-Submit">
          Register
        </button>
      </form>
    );
  }
}
const connected = connect(null, { registerUser, cancelSignUp })(SignupForm);

export default reduxForm({
  form: 'signupForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(connected);
