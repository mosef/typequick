import { push } from 'react-router-redux';
import * as actionTypes from './actionTypes';

const handleSuccessfulAuthentication = (response, dispatch) => {
  sessionStorage.setItem('token', response.token);
  dispatch({
    type: actionTypes.authRequestSuccess,
    response,
  });
  dispatch(push('/dash'));
};

export function authenticateUser(values) {
  const promise = fetch('https://gentle-taiga-62884.herokuapp.com/api/users/login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

  return {
    onRequest: actionTypes.authRequestTriggered,
    onSuccess: handleSuccessfulAuthentication,
    onFailure: actionTypes.authRequestFailuer,
    promise,
  };
}

