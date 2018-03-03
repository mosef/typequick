import * as actionTypes from '../actions/actionTypes';
import { handleChartData, allScores } from '../actions/ChartLogic';

const defualtState = {
  isAuthenticated: false,
  user: {
    session: '',
    lesson: '',
  },
  scores: [],
};

const userReducer = (state = defualtState, action) => {
  switch (action.type) {
    case actionTypes.authRequestSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.response,
      };
    }
    case actionTypes.getChartDataSuccess: {
      const responseItem = action.response.scores;
      handleChartData(responseItem);
      return {
        ...state,
        scores: allScores[0],
      };
    }
    case actionTypes.clearState:
      return {
        ...state,
        scores: [],
      };
    default: {
      return state;
    }
  }
};

export default userReducer;

