import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  answerSuccess,
  answerFailure,
  clearPrev,
  pickQuestion,
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
    const { userAnswer, correctAnswer, reset } = this.props;
    userAnswer.push(values.answer);
    if (userAnswer.toString() === correctAnswer.toString()) {
      this.props.answerSuccess();
      this.props.pickQuestion();
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
              <label htmlFor="answer">Type your Answer</label>
              <Field
                component={Input}
                active
                type="text"
                name="answer"
                id="answer"
              />
              <button
                onClick={this.props.handleSubmit(this.checkAnswer.bind(this))}
                type="submit"
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
});

const connected = connect(
  (mapStateToProps),
  {
    answerSuccess,
    answerFailure,
    clearPrev,
    pickQuestion,
    clearState,
  })(ChallengeForm);

export default reduxForm({
  form: 'challenge',
})(connected);
