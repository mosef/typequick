import * as actionTypes from '../actions/actionTypes';

export function answerSuccess() {
  return {
    type: actionTypes.answerWasCorrect,
  };
}
export function pickQuestion() {
  return {
    type: actionTypes.pickNextQuestion,
  };
}

export function answerFailure() {
  return {
    type: actionTypes.answerWasWrong,
  };
}

export function clearPrev() {
  return {
    type: actionTypes.clearPrev,
  };
}

export function clearState() {
  return {
    type: actionTypes.clearState,
  };
}

