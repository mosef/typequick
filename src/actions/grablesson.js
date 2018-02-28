/* eslint import/prefer-default-export: off, no-underscore-dangle:0 */
import * as actionTypes from './actionTypes';

const jwtDecode = require('jwt-decode');

export function getLessons(item) {
  const token = sessionStorage.getItem('token');
  const decoded = jwtDecode(token);
  const selectedTitle = item[0].title;
  const promise = fetch(' https://gentle-taiga-62884.herokuapp.com/api/lessons/title', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      userId: decoded._id,
      lessonTitle: selectedTitle,
    }),
  });
  return {
    onRequest: actionTypes.getLessonsTriggered,
    onSuccess: actionTypes.getLessonsSuccess,
    onFailure: actionTypes.getLessonsFailure,
    promise,
  };
}

