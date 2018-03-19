/* eslint import/prefer-default-export: off, no-underscore-dangle:0 */
import * as actionTypes from './actionTypes';

export const startTimerNow = () => {
  const authToken = sessionStorage.getItem('token');
  const promise = fetch('https://gentle-taiga-62884.herokuapp.com/api/sessions/', {
    method: 'GET',
    headers: {
      Authorization: authToken,
    },
  });
  return {
    onRequest: actionTypes.startTimerTriggered,
    onSuccess: actionTypes.startTimerSuccess,
    onFailure: actionTypes.startTimerFailure,
    promise,
  };
};

