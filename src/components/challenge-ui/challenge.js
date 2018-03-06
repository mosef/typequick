import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimerNow } from '../../actions/TimerActions';
import Timer from './timer';
import ChallengeForm from '../challenge-ui/challenge';

class Challenge extends Component {
  render() {
    return (
      <div>
        {this.props.timer.isTimerRunning ?
          <div>
            <Timer startedAt={this.props.timer.currentTimerStartedAt} />
            {this.props.challengeCompleted ?
              (null) : (<ChallengeForm />)}
          </div>
          :
          <div>
            <h1>Instructions</h1>
            <p>You have 5 minutes to complete the challenge.</p>
            <p>Questions will be chosen at random and your answers must be in lower case.</p>
            <p>If you run out of time the challenge will end
              the results will not count against your time records.
            </p>
            <div className="progress" id="progress" />
            <button onClick={this.props.startTimerNow}>Start</button>
          </div>
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challengeCompleted: state.timerReducer.challengeCompleted,
  timer: {
    isTimerRunning: state.timerReducer.isTimerRunning,
    currentTimerStartedAt: state.timerReducer.currentTimerStartedAt,
  },
});


export default connect(mapStateToProps, { startTimerNow })(Challenge);

