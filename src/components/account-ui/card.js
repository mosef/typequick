import React from 'react';
import { connect } from 'react-redux';
import { getLessons } from '../../actions/grablesson';


const Card = props => (
  <div className="card">
    <button onClick={props.getLessons}>Load Lesson</button>
  </div>
);

export default connect(null, { getLessons })(Card);
