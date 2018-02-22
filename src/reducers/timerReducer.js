import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  isTimerRunning: false,
  currentTimerStartedAt: null,
  questionsArray: [],
  currentQuestionArray: [],
  userAnswer: [],
  questionHeader: [],
  correctAnswer: [],
};

function updateItemInArray(array, secondArray) {
  const updatedArray = array.map((item) => {
    if (item.question !== secondArray[0].question) {
      return item;
    }
  });
  const newArray = updatedArray.filter(obj => obj);
  console.log('functionUpdates', newArray);
  return newArray;
}

function pickNextQuestion(array) {
  const preparedQuestion = array[
    Math.floor(Math.random() * array.length)];
  return [preparedQuestion];
}

const timerReducer = (state = defaultState, action) => {
  switch (action.type) {
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
        // do something to show user success
      };
    }
    case actionTypes.pickNextQuestion: {
      console.log(state.questionsArray);
      const nextQuestion = pickNextQuestion(state.questionsArray);
      return {
        ...state,
        currentQuestionArray: nextQuestion,
        questionHeader: nextQuestion[0].question.header,
        correctAnswer: nextQuestion[0].question.answer,
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
        // do something to show user was wrong
      };
    case actionTypes.clearState:
      return {
        isTimerRunning: false,
        currentTimerStartedAt: null,
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
