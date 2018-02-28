import * as actionTypes from '../actions/actionTypes';

const defaultSate = {
  lesson: [],
  requestedLesson: [],
  lessonRecieved: false,
};

const lessonReducer = (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.getLessonsSuccess:
      return {
        ...state,
        lesson: action.response.lesson,
        lessonRecieved: true,
      };
    default:
      return state;
  }
};

export default lessonReducer;
