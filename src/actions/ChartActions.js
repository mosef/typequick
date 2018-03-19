/* eslint import/prefer-default-export: off, no-underscore-dangle:0 */
import * as actionTypes from './actionTypes';

const jwtDecode = require('jwt-decode');

export function clearState() {
  return {
    type: actionTypes.clearState,
  };
}

export function getChartData() {
  const token = sessionStorage.getItem('token');
  const decoded = jwtDecode(token);
  const promise = fetch(' https://gentle-taiga-62884.herokuapp.com/api/users/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      userId: decoded._id,
    }),
  });
  return {
    onRequest: actionTypes.getChartDataTriggered,
    onSuccess: actionTypes.getChartDataSuccess,
    onFailure: actionTypes.getChartDataFailure,
    promise,
  };
}
