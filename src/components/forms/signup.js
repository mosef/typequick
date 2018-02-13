import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signupForm';

import { ToggleSignup } from '../../actions/toggle-signup';

const Signup = ({ signupVisibility, dispatch }) => (
  <div>
    {signupVisibility &&
      <SignupForm />
    }
    <button onClick={() => dispatch(ToggleSignup())}>Start Learning
    </button>
  </div>
);

const mapStateToProps = state => ({
  signupVisibility: state.signupToggle.signupVisibility,
});

export default connect(mapStateToProps)(Signup);
