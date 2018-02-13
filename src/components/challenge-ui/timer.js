import React from 'react';
import Countdown from 'react-countdown-now';
import timeRenderer from './timeRenderer';

const Timer = () => (
  <Countdown
    date={Date.now() + 50000}
    renderer={timeRenderer}
  />
);

export default Timer;
