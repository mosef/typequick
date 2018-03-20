import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import ChallengeForm from './challengeForm';

describe('Component: challengeForm', () => {
  const minProps = {
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
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><ChallengeForm {...minProps} /></Provider>);
  });

  it('Renders without crashing', () => {
    shallow(<Provider store={store}><ChallengeForm {...minProps} /></Provider>);
  });
  it('Renders the question header', () => {
    expect(wrapper.props().questionHeader).to.equal('Question Unavailable');
  });
  it('answer is correct should be true', () => {
    expect(wrapper.props().answerIsCorrect).to.equal(true);
  });
});
