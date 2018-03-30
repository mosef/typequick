import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { startTimerNow } from '../../actions/TimerActions';
import { clearState } from '../../actions/ChallengeActions';
import Timer from './timer';
import '../../css/challengePage.css';


class Challenge extends Component {
  static propTypes = {
    timer: PropTypes.shape({
      isTimerRunning: PropTypes.bool,
      currentTimerStartedAt: PropTypes.number,
    }),
    startTimerNow: PropTypes.func.isRequired,
    challengeCompleted: PropTypes.bool,
    clearState: PropTypes.func.isRequired,
  }
  static defaultProps = {
    timer: {
      isTimerRunning: false,
      currentTimerStartedAt: 0,
    },
    challengeCompleted: false,
  }
  componentWillUnmount() {
    this.props.clearState();
  }
  render() {
    const {
      timer, challengeCompleted, gameForm, startTimerNow,
    } = this.props;
    return (
      <div>
        {timer.isTimerRunning ?
          <div>
            <Timer date={timer.currentTimerStartedAt + 300000} />
            {challengeCompleted ?
              (null) : (gameForm)}
          </div>
          :
          <div>
            <div className="card">
              <div className="top">
                <h1>Learning Challenge</h1>
                <div className="overview">
                  <h3>Instructions:</h3>
                  <p>You have 5 minutes to complete the challenge.</p>
                  <p>Questions will be chosen at random. Your answers must be in lower case and
                    in the form of a shortcut.
                  </p>
                  <h4>ex: a div with a class of frog will have an answer
                    of ".frog"
                  </h4>
                  <p>If you run out of time the challenge will end and
                    the results will not count against your time records.
                  </p>
                </div>
                <button onClick={startTimerNow}>Start</button>
              </div>
            </div>
            <div className="progress" id="progress" />
          </div>
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challengeCompleted: state.challengeReducer.challengeCompleted,
  timer: {
    isTimerRunning: state.challengeReducer.isTimerRunning,
    currentTimerStartedAt: state.challengeReducer.currentTimerStartedAt,
  },
});

const connected = connect(mapStateToProps, { startTimerNow, clearState })(Challenge);

export default reduxForm({
  form: 'ChallengeForm',
})(connected);
