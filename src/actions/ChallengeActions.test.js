import * as actionTypes from './actionTypes';
import {
  handleData,
  answerSuccess,
  answerFailure,
  complete,
  timeExpired,
  clearState,
} from './ChallengeActions';

describe('Challenge Actions', () => {
  it('returns its actionType', () => {
    const action = handleData();
    expect(action.type).toEqual(actionTypes.handleData);
  });
  it('returns its actionType', () => {
    const action = answerSuccess();
    expect(action.type).toEqual(actionTypes.answerWasCorrect);
  });
  it('returns its actionType', () => {
    const action = answerFailure();
    expect(action.type).toEqual(actionTypes.answerWasWrong);
  });
  it('returns its actionType', () => {
    const action = complete();
    expect(action.type).toEqual(actionTypes.challengeComplete);
  });
  it('returns its actionType', () => {
    const action = timeExpired();
    expect(action.type).toEqual(actionTypes.timesUp);
  });
  it('returns its actionType', () => {
    const action = clearState();
    expect(action.type).toEqual(actionTypes.clearState);
  });
});
