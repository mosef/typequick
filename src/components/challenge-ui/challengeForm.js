import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { questionHandler, handleResponse, answerChecker, arrayCheck } from '../../handlers/answerChecker';
import { handleData, clearState, lastQuestionHandler, complete } from '../../actions/ChallengeActions';
import '../../css/challengePage.css';
import Input from '../forms/input';

class ChallengeForm extends Component {
  static propTypes = {
    questionHandler: PropTypes.func.isRequired,
    handleData: PropTypes.func.isRequired,
    answerChecker: PropTypes.func.isRequired,
    handleResponse: PropTypes.func.isRequired,
    arrayCheck: PropTypes.func.isRequired,
    lastQuestionHandler: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    complete: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired,
    questionsArray: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string,
      answer: PropTypes.string,
    })),
    data: PropTypes.arrayOf(PropTypes.shape({
      preparedHeader: PropTypes.string,
      preparedQuestion: PropTypes.string,
      preparedAnswer: PropTypes.string,
      remainingQuestions: PropTypes.array,
      currentTimerStoppedAt: PropTypes.number,
    })),
    userAnswer: PropTypes.string,
    correctAnswer: PropTypes.string,
    currentTimerStartedAt: PropTypes.number,
    questionHeader: PropTypes.string,
    answerIsCorrect: PropTypes.bool,
    showReturn: PropTypes.bool,
  }
  static defaultProps = {
    currentTimerStartedAt: 0,
    questionsArray: [
      {
        header: 'Question Unavailable',
        answer: '',
      },
    ],
    questionHeader: 'Question Unavailable',
    data: [],
    userAnswer: 'none',
    correctAnswer: 'none',
    answerIsCorrect: true,
    showReturn: false,
  }

  componentWillMount() {
    const { questionsArray, data } = this.props;
    const initData = this.props.questionHandler(questionsArray);
    data.push(initData);
    this.props.handleData();
  }
  componentWillUnmount() {
    this.props.clearState();
  }
  passProps(values) {
    this.props.userAnswer.push(values.answer);
    const {
      questionsArray, correctAnswer, userAnswer, currentTimerStartedAt,
    } = this.props;
    const items = { questionsArray, correctAnswer, userAnswer };
    const result = this.props.answerChecker(items);
    this.props.handleResponse(result);
    const option = this.props.arrayCheck(questionsArray);
    if (option === true) {
      const time = {
        currentTimerStartedAt,
        currentTimerStoppedAt: Date.now(),
      };
      this.props.lastQuestionHandler(time);
    }
    this.props.reset();
  }
  render() {
    return (
      <div>
        <h1 className="form-header">{this.props.questionHeader}</h1>
        <div className="form-box">
          <div className="questions-container">
            <form className="challenge-form">
              <Field
                component={Input}
                active
                type="text"
                name="answer"
                id="answer"
              />
              <div>
                {this.props.answerIsCorrect ?
              (null) : (<div className="feedback-bar" />)}
              </div>
              {this.props.showReturn ?
                <button
                  onClick={() => { this.props.complete(); }}
                  type="submit"
                  className="challenge-submit"
                > Finished
                </button>
              :
                <button
                  onClick={this.props.handleSubmit(this.passProps.bind(this))}
                  type="submit"
                  className="challenge-submit"
                > Submit
                </button>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challengeCompleted: state.challengeReducer.challengeCompleted,
  questionsArray: state.challengeReducer.questionsArray,
  questionHeader: state.challengeReducer.questionHeader,
  userAnswer: state.challengeReducer.userAnswer,
  correctAnswer: state.challengeReducer.correctAnswer,
  answerIsCorrect: state.challengeReducer.answerIsCorrect,
  data: state.challengeReducer.data,
  currentTimerStartedAt: state.challengeReducer.currentTimerStartedAt,
  showReturn: state.challengeReducer.showReturn,
});

const connected = connect(mapStateToProps,
  {
    questionHandler,
    handleData,
    handleResponse,
    answerChecker,
    complete,
    clearState,
    arrayCheck,
    lastQuestionHandler,
  })(ChallengeForm);

export default reduxForm({
  form: 'ChallengeForm',
})(connected);
