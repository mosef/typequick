import React from 'react';
import Countdown from 'react-countdown-now';
import timeRenderer from './timeRenderer';

const Timer = props => (
  <Countdown
    date={props.date}
    renderer={timeRenderer}
  />
);

export default Timer;
