const ProgressBar = require('progressbar.js');

function onLoad() {
  const circle = new ProgressBar.Circle('#progress', {
    color: '#FCB03C',
    duration: 3000,
    easing: 'easeInOut',
  });

  circle.animate(1);
}

function updateItemInArray(array, secondArray) {
  const updatedArray = array.map((item) => {
    if (item.question !== secondArray[0].question) {
      return item;
    }
  });
  const newArray = updatedArray.filter(obj => obj);
  return newArray;
}

function checkArray(array, state) {
  if (array.length === 0 || 'undefined') {
    console.log(array);
    return {
      ...state,
    };
  }
}

function pickNextQuestion(array) {
  const preparedQuestion = array[
    Math.floor(Math.random() * array.length)];
  return [preparedQuestion];
}

function finalQuestion(state) {
  if (state.answerIsCorrect === true) {
    return {
      ...state,
      testOne: console.log('Correct'),
    };
  }
  return {
    ...state,
    testTwo: console.log('wrong'),
  };
}

export { onLoad, updateItemInArray, checkArray, pickNextQuestion, finalQuestion };
