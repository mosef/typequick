export const allScores = [];

function convertScore(arrayItem) {
  if (arrayItem.indexOf('s') > -1) {
    arrayItem.replace(/s/, '');
    const seconds = parseInt(arrayItem, 10) / 100;
    return seconds;
  } else if (arrayItem.indexOf('m') > -1) {
    arrayItem.replace(/m/, '');
    const minutes = parseInt(arrayItem, 10) / 10;
    return minutes;
  }
  return arrayItem;
}

function convertAttempt(attempt) {
  const converted = parseInt(attempt, 10);
  return converted;
}

export const handleChartData = (data) => {
  const newArray = Object.entries(data);
  const newEntries = newArray.map(item => item);
  const scoreCoordinates = newEntries.map((arry) => {
    const attemptNumber = arry[0];
    const timeScore = arry[1].value;
    return {
      x: convertAttempt(attemptNumber),
      y: convertScore(timeScore),
      r: 5,
    };
  });
  allScores.push(scoreCoordinates);
};

