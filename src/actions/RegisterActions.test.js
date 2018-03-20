import * as actionTypes from './actionTypes';
import {
  signUpClick,
  signUpClickBottom,
  cancelSignUp,
} from './RegisterActions';

describe('Register Actions', () => {
  it('returns its signUpClicked action', () => {
    const action = signUpClick();
    expect(action.type).toEqual(actionTypes.signUpClicked);
  });
  it('returns its signUpClicked action', () => {
    const action = signUpClickBottom();
    expect(action.type).toEqual(actionTypes.signUpClicked);
  });
  it('returns its cancelSignUp action', () => {
    const action = cancelSignUp();
    expect(action.type).toEqual(actionTypes.cancelSignUp);
  });
});
