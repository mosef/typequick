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

function pickNextQuestion(array) {
  const preparedQuestion = array[
    Math.floor(Math.random() * array.length)];
  return [preparedQuestion];
}

export { onLoad, updateItemInArray, pickNextQuestion };
