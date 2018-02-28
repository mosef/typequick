import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  answerSuccess,
  answerFailure,
  clearPrev,
  pickQuestion,
  lastQuestionHandler,
  clearState } from '../../actions/validateAnswer';
import Input from '../forms/input';
import '../../css/challengePage.css';

class ChallengeForm extends Component {
  componentWillMount() {
    const {
      questionsArray, currentQuestionArray, questionHeader, correctAnswer,
    } = this.props;
    const preparedQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    const preparedAnswer = preparedQuestion.question.answer;
    currentQuestionArray.push(preparedQuestion);
    questionHeader.push(preparedQuestion.question.header);
    correctAnswer.push(preparedAnswer);
  }
  componentWillUnmount() {
    this.props.clearState();
  }
  checkAnswer(values) {
    const {
      userAnswer, correctAnswer, questionsArray, reset,
    } = this.props;
    userAnswer.push(values.answer);
    if (userAnswer.toString() === correctAnswer.toString()) {
      this.props.answerSuccess();
      this.props.pickQuestion();
      if (questionsArray.length === 1) {
        const results = {
          currentTimerStartedAt: this.props.currentTimerStartedAt,
          currentTimerStoppedAt: Date.now(),
        };
        this.props.lastQuestionHandler(results);
      }
      this.props.clearPrev();
      reset();
    } else {
      this.props.answerFailure();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.questionHeader}</h1>
        <div className="form-box">
          <div className="questions-container">
            <form
              className="challenge-form"
            >
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
              <button
                onClick={this.props.handleSubmit(this.checkAnswer.bind(this))}
                type="submit"
                className="challenge-submit"
              >
          Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionsArray: state.timerReducer.questionsArray,
  currentQuestionArray: state.timerReducer.currentQuestionArray,
  userAnswer: state.timerReducer.userAnswer,
  questionHeader: state.timerReducer.questionHeader,
  correctAnswer: state.timerReducer.correctAnswer,
  answerIsCorrect: state.timerReducer.answerIsCorrect,
  currentTimerStartedAt: state.timerReducer.currentTimerStartedAt,
});

const connected = connect(
  (mapStateToProps),
  {
    answerSuccess,
    answerFailure,
    clearPrev,
    pickQuestion,
    lastQuestionHandler,
    clearState,
  })(ChallengeForm);

export default reduxForm({
  form: 'challenge',
})(connected);
