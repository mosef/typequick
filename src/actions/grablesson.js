import * as actionTypes from './actionTypes';

export function getLessons() {
  const promise = fetch(' https://gentle-taiga-62884.herokuapp.com/api/lessons/GET');
  return {
    onRequest: actionTypes.getLessonsTriggered,
    onSuccess: actionTypes.getLessonsSuccess,
    onFailure: actionTypes.getLessonsFailure,
    promise,
  };
}

