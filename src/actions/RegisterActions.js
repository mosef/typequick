import { push } from 'react-router-redux';
import * as actionTypes from './actionTypes';

export function signUpClick() {
  return {
    type: actionTypes.signUpClicked,
  };
}

export function signUpClickBottom() {
  window.scrollTo(0, 0);
  return {
    type: actionTypes.signUpClicked,
  };
}

export function cancelSignUp() {
  return {
    type: actionTypes.cancelSignUp,
  };
}

const handleSuccessfulRegistration = (response, dispatch) => {
  sessionStorage.setItem('token', response.token);
  dispatch({
    type: actionTypes.authRequestSuccess,
    response,
  });
  dispatch(push('/dash'));
};

export function registerUser(values) {
  const promise = fetch('https://gentle-taiga-62884.herokuapp.com/api/users/register',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  return {
    onRequest: actionTypes.registerRequestTriggered,
    onSuccess: handleSuccessfulRegistration,
    onFailure: actionTypes.registerRequestFailure,
    promise,
  };
}
