import React from 'react';
import TimesUp from './timesUp';
// Renderer callback with condition
const timeRenderer = ({
  hours, minutes, seconds, completed,
}) => {
  if (completed) {
    return <TimesUp />;
  }
  return <span>{hours}:{minutes}:{seconds}</span>;
};

export default timeRenderer;
