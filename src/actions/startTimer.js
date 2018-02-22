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

export const stopTimerNow = (startedAt) => {
  const promise = fetch('https://gentle-taiga-62884.herokuapp.com/api/sessions/', {
    method: 'POST',
    body: JSON.stringify({
      userId: '', // obtained from session storage when post request is made to start
      startedAt,
      stoppedAt: Date.now(),
    }),
  });
  return {
    onRequest: actionTypes.stopTimerTriggered,
    onSuccess: actionTypes.stopTimerSuccess,
    onFailure: actionTypes.stopTimerFailure,
    promise,
  };
};
