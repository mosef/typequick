import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimerNow } from '../../actions/startTimer';
import Timer from './timer';
import ChallengeForm from '../challenge-ui/challenge';

class StartButton extends Component {
  render() {
    return (
      <div>
        {this.props.timer.isTimerRunning ?
          <div>
            <Timer startedAt={this.props.timer.currentTimerStartedAt} />
            <ChallengeForm />
          </div>
          :
          <div>
            <button onClick={this.props.startTimerNow}>Start</button>
          </div>
          }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  timer: {
    isTimerRunning: state.timerReducer.isTimerRunning,
    currentTimerStartedAt: state.timerReducer.currentTimerStartedAt,
  },
});


export default connect(mapStateToProps, { startTimerNow })(StartButton);

