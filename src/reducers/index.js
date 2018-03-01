import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import signupToggle from '../reducers/signupReducer';
import lessonReducer from '../reducers/lessonReducer';
import timerReducer from '../reducers/timerReducer';
import userReducer from '../reducers/userReducer';

const reducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  signupToggle,
  lessonReducer,
  timerReducer,
  userReducer,
});

export default reducer;
