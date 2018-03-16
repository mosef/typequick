import { dataHandler, questionHandler } from '../handlers/answerChecker';
import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  isTimerRunning: false,
  currentTimerStartedAt: null,
  currentTimerStoppedAt: null,
  data: [],
  questionsArray: [],
  userAnswer: [],
  correctAnswer: [],
  answerIsCorrect: true,
  questionHeader: [],
  challengeCompleted: false,
  showReturn: false,
};

const timerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.startTimerSuccess:
      return {
        ...state,
        isTimerRunning: true,
        currentTimerStartedAt: action.response.startedAt,
        questionsArray: action.response.questions[0].questions,
      };
    case actionTypes.stopTimerSuccess:
      return {
        ...state,
        isTimerRunning: false,
        currentTimerStartedAt: state.currentTimerStartedAt,
      };
    case actionTypes.handleData: {
      const newData = dataHandler(state.data);
      return {
        ...state,
        questionHeader: newData.updatedData.preparedHeader,
        correctAnswer: newData.updatedData.preparedAnswer,
        questionsArray: newData.updatedData.remainingQuestions,
      };
    }
    case actionTypes.answerWasCorrect: {
      const update = questionHandler(state.questionsArray);
      return {
        ...state,
        questionHeader: update.data.preparedHeader,
        correctAnswer: update.data.preparedAnswer,
        questionsArray: update.data.remainingQuestions,
        userAnswer: [],
        answerIsCorrect: true,
        currentTimerStoppedAt: update.data.currentTimerStoppedAt,
      };
    }
    case actionTypes.answerWasWrong:
      return {
        ...state,
        userAnswer: [],
        answerIsCorrect: false,
      };
    case actionTypes.challengeComplete:
      return {
        ...state,
        challengeCompleted: true,
      };
    case actionTypes.sendResultsSuccess:
      return {
        ...state,
        showReturn: true,
      };
    case actionTypes.clearState:
      return {
        isTimerRunning: false,
        currentTimerStartedAt: null,
        currentTimerStoppedAt: null,
        data: [],
        questionsArray: [],
        userAnswer: [],
        correctAnswer: [],
        answerIsCorrect: true,
        questionHeader: [],
        challengeCompleted: false,
      };
    default:
      return state;
  }
};

export default timerReducer;
