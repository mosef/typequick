import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimerNow } from '../../actions/startTimer';
import Timer from './timer';
import Header from './headers';
import ChallengeForm from '../forms/challengeForm';

class StartButton extends Component {
  render() {
    return (
      <div>
        {this.props.timer.isTimerRunning ?
          <div>
            <Timer startedAt={this.props.timer.currentTimerStartedAt} />
            <Header />
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

