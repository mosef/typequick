import { push } from 'react-router-redux';
import * as actionTypes from './actionTypes';
import { authenticateUser } from './loginUser';

const handleSuccessfulRegistration = (response, dispatch, values) => {
  authenticateUser(values)
    .then(() => {
      sessionStorage.setItem('token', response.token);
      dispatch({
        type: actionTypes.authRequestSuccess,
        response,
      });
      dispatch(push('/dash'));
    });
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

