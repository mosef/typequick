import * as actionTypes from '../actions/actionTypes';

const defaultSate = {
  clicked: false,
};

const homeReducer = (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.signUpClicked:
      return {
        ...state,
        clicked: true,
      };
    case actionTypes.cancelSignUp:
      return {
        ...state,
        clicked: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
