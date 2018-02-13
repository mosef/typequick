import { TOGGLE_SIGNUP } from '../actions/toggle-signup';

const defaultSate = {
  signupVisibility: false,
};

const signupToggle = (state = defaultSate, action) => {
  switch (action.type) {
    case TOGGLE_SIGNUP:
      return { ...state, signupVisibility: !state.signupVisibility };
    default:
      return state;
  }
};

export default signupToggle;
