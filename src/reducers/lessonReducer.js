import * as actionTypes from '../actions/actionTypes';

const defaultSate = {
  lesson: {},
  content: [],
  requestedLesson: [],
  lessonRecieved: false,
};

const lessonReducer = (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.getLessonsSuccess:
      return {
        ...state,
        lesson: action.response.lesson,
        content: action.response.lesson.chapter.page.content.paragraph,
        lessonRecieved: true,
      };
    case actionTypes.clearState:
      return {
        ...state,
        lesson: [],
        requestedLesson: [],
        lessonRecieved: false,
      };
    default:
      return state;
  }
};

export default lessonReducer;
