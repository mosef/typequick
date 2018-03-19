import * as actionTypes from '../actions/actionTypes';

export function questionHandler(questionsArray) {
  const result = [];
  if (questionsArray.length !== 0) {
    const preparedQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    const preparedHeader = preparedQuestion.question.header;
    const preparedAnswer = preparedQuestion.question.answer;
    const newArray = [];
    questionsArray.map((item) => {
      if (item.question.header.toString() !== preparedHeader) {
        newArray.push(item);
      }
      return newArray;
    });
    const remainingQuestions = newArray.filter(obj => obj);
    const data = {
      preparedHeader,
      preparedQuestion,
      preparedAnswer,
      remainingQuestions,
      currentTimerStoppedAt: null,
    };
    result.push({
      type: actionTypes.pickQuestion,
      data,
    });
  } else {
    const data = {
      preparedHeader: 'Challenge Complete',
      preparedQuestion: 'none',
      preparedAnswer: '',
      remainingQuestions: [{}],
      currentTimerStoppedAt: Date.now(),
    };
    result.push({
      type: actionTypes.challengeComplete,
      data,
    });
  }
  return {
    type: result[0].type,
    data: result[0].data,
  };
}

export function dataHandler(data) {
  const updatedData = data[0].data;
  return {
    updatedData,
  };
}

export function answerChecker(values) {
  return function action() {
    const { correctAnswer, userAnswer } = values;
    const resp = [];
    if (userAnswer[0].toString() === correctAnswer.toString()) {
      resp.push(true);
    } else {
      resp.push(false);
    }
    return resp[0];
  };
}

export function handleResponse(respVal) {
  const result = [];
  if (respVal === true) {
    result.push({ type: actionTypes.answerWasCorrect });
  } else {
    result.push({ type: actionTypes.answerWasWrong });
  }
  return {
    type: result[0].type,
  };
}

export const arrayCheck = questionsArray => function action() {
  const option = [];
  if (questionsArray.length === 0) {
    const send = true;
    option.push(send);
  } else {
    const send = false;
    option.push(send);
  }
  return option[0];
};

