import * as actionTypes from '../actions/actionTypes';

const defaultSate = {
  lessons: [],
};

const lessonReducer = (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.getLessonsSuccess:
      return {
        ...state,
        lessons: action.response,
      };
    default:
      return state;
  }
};

export default lessonReducer;
