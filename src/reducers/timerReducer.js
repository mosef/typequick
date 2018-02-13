import * as actionTypes from '../actions/actionTypes';

const defaultSate = {
  isTimerRunning: false,
  currentTimerStartedAt: null,
  questions: [],
};

const timerReducer = (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.startTimerSuccess:
      return {
        ...state,
        isTimerRunning: true,
        currentTimerStartedAt: Date.now(),
        questions: action.response.questions[0].questions,
      };
    case actionTypes.stopTimerSuccess:
      return {
        ...state,
        isTimerRunning: false,
        currentTimerStartedAt: defaultSate.currentTimerStartedAt,
      };
    default:
      return state;
  }
};

export default timerReducer;
