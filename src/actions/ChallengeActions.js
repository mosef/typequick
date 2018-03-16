import * as actionTypes from '../actions/actionTypes';

const jwtDecode = require('jwt-decode');

export function handleData() {
  return {
    type: actionTypes.handleData,
  };
}
export function answerSuccess() {
  return {
    type: actionTypes.answerWasCorrect,
  };
}

export function answerFailure() {
  return {
    type: actionTypes.answerWasWrong,
  };
}

export function complete() {
  return {
    type: actionTypes.challengeComplete,
  };
}

export function clearState() {
  return {
    type: actionTypes.clearState,
  };
}

export function lastQuestionHandler(results) {
  const token = sessionStorage.getItem('token');
  const decoded = jwtDecode(token);
  const sessionData = {
    userId: decoded._id,
    startedAt: results.currentTimerStartedAt,
    stoppedAt: results.currentTimerStoppedAt,
  };
  const promise = fetch('https://gentle-taiga-62884.herokuapp.com/api/sessions/',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(sessionData),
    });

  return {
    onRequest: actionTypes.sendResultsTriggered,
    onSuccess: actionTypes.sendResultsSuccess,
    onFailure: actionTypes.sendResultsFailure,
    promise,
  };
}

