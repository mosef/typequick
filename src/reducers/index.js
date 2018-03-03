import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import lessonReducer from '../reducers/lessonReducer';
import timerReducer from '../reducers/timerReducer';
import userReducer from '../reducers/userReducer';
import homeReducer from '../reducers/homeReducer';

const reducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  homeReducer,
  lessonReducer,
  timerReducer,
  userReducer,
});

export default reducer;
