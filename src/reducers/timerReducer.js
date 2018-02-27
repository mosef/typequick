import * as actionTypes from '../actions/actionTypes';
import {
  onLoad,
  updateItemInArray,
  checkArray,
  pickNextQuestion,
  finalQuestion,
} from './timerReducerLogic';

const ProgressBar = require('progressbar.js');

const defaultState = {
  isTimerRunning: false,
  currentTimerStartedAt: null,
  questionsArray: [],
  currentQuestionArray: [],
  userAnswer: [],
  answerIsCorrect: false,
  questionHeader: [],
  correctAnswer: [],
};

const timerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.startTimerTriggered: {
      return {
        ...state,
        loading: onLoad(),
      };
    }
    case actionTypes.startTimerSuccess:
      return {
        ...state,
        isTimerRunning: true,
        currentTimerStartedAt: Date.now(),
        questionsArray: action.response.questions[0].questions,
      };
    case actionTypes.stopTimerSuccess:
      return {
        ...state,
        isTimerRunning: false,
        currentTimerStartedAt: state.currentTimerStartedAt,
      };
    case actionTypes.answerWasCorrect: {
      const newQuestionList = updateItemInArray(state.questionsArray, state.currentQuestionArray);
      return {
        ...state,
        questionsArray: newQuestionList,
        answerIsCorrect: true,
      };
    }
    case actionTypes.pickNextQuestion: {
      if (state.questionsArray.length !== 0 || undefined) {
        checkArray(state.questionsArray, state);
        const nextQuestion = pickNextQuestion(state.questionsArray);
        return {
          ...state,
          currentQuestionArray: nextQuestion,
          questionHeader: nextQuestion[0].question.header,
          correctAnswer: nextQuestion[0].question.answer,
        };
      }
      if (state.questionsArray.length === 0 || undefined) {
        finalQuestion(state);
      }
      return {
        ...state,
      };
    }
    case actionTypes.clearPrev:
      return {
        ...state,
        userAnswer: [],
      };
    case actionTypes.answerWasWrong:
      return {
        ...state,
        userAnswer: [],
        answerIsCorrect: false,
        // do something to show user was wrong
      };
    case actionTypes.clearState:
      return {
        isTimerRunning: false,
        currentTimerStartedAt: null,
        answerIsCorrect: false,
        questionsArray: [],
        currentQuestionArray: [],
        userAnswer: [],
        questionHeader: [],
        correctAnswer: [],
      };
    default:
      return state;
  }
};

export default timerReducer;
