import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStorage from '../../tests/mockStorage';
import store from '../../store/store';
import Challenge from './challenge';

describe('Component: challenge', () => {
  const minProps = {
    timer: {
      isTimerRunning: false,
      currentTimerStartedAt: Date.now(),
    },
    startTimerNow: () => {},
    challengeCompleted: false,
    clearState: () => {},
    sessionStorage: {
      token: 'string',
    },
    gameForm: {},
  };

  let wrapper;
  beforeEach(() => {
    mockStorage();
    global.localStorage = mockStorage();
    global.sessionStorage = mockStorage();
    wrapper = mount(<Provider store={store}><Challenge {...minProps} /></Provider>);
  });

  it('Renders without crashing', () => {
    mount(<Provider store={store}><Challenge {...minProps} /></Provider>);
  });
  it('displays the learning challenge card first', () => {
    expect(wrapper.find('.card')).to.have.length(1);
  });
  it('start timer button action fires', () => {
    wrapper.find('button').simulate('click');
  });
});
