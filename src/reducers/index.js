import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import lessonReducer from './lessonReducer';
import challengeReducer from './challengeReducer';
import userReducer from './userReducer';
import homeReducer from './homeReducer';

const reducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  homeReducer,
  lessonReducer,
  challengeReducer,
  userReducer,
});

export default reducer;
