import * as actionTypes from '../actions/actionTypes';
import handleChartData from '../handlers/ChartLogic';

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
    case actionTypes.registerRequestSuccess: {
      return {
        ...state,
      };
    }
    case actionTypes.authRequestSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.response,
      };
    }
    case actionTypes.getChartDataSuccess: {
      const responseItem = action.response.scores;
      return {
        ...state,
        scores: handleChartData(responseItem),
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

