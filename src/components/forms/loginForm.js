import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './input';
import { required, nonEmpty } from './validators';
import { authenticateUser } from '../../actions/LoginActions';
import '../../css/loginpage.css';

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    authenticateUser: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="wrapper">
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(this.props.authenticateUser)}
        >
          <div className="logo" />
          <div className="progress" id="loading" />
          <label htmlFor="email" className="label-text">Email Address</label>
          <Field
            component={Input}
            type="text"
            name="email"
            id="email"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="password" className="label-text">Password</label>
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
          <div className="back-btn">
            <Link to="/">
          Back
            </Link>
          </div>
        </form>
      </div>
    );
  }
}


const connected = connect(null, { authenticateUser })(LoginForm);

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(connected);
