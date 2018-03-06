import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import lessonReducer from './lessonReducer';
import timerReducer from './timerReducer';
import userReducer from './userReducer';
import homeReducer from './homeReducer';

const reducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  homeReducer,
  lessonReducer,
  timerReducer,
  userReducer,
});

export default reducer;
