import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { headerList } from '../challenge-ui/startbutton';
import Input from './input';
import '../../css/challengePage.css';

class ChallengeForm extends Component {
  render() {
    return (
      <div className="form-box">
        <div className="questions-container">
          <form
            className="challenge-form"
            onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values),
                )}
          >
            <label htmlFor="answer">Type your Asnwer</label>
            <Field
              component={Input}
              type="text"
              name="answer"
              id="answer"
            />
          </form>
          <button >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'challenge',
})(ChallengeForm);
