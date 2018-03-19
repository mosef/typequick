import React from 'react';
import TimesUp from './timesUp';

const timeRenderer = ({
  hours, minutes, seconds, completed,
}) => {
  if (completed) {
    return <TimesUp />;
  }
  return <div className="clock"><span>{minutes}:{seconds}</span></div>;
};

export default timeRenderer;
