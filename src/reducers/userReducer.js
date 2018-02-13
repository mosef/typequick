const defualtState = {
  isAuthenticated: false,
  user: {
    id: '',
    username: '',
    email: '',
    session: '',
    lesson: '',
    score: '',
  },
};

const userReducer = (state = defualtState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST_SUCCESS': {
      return {
        ...state,
        isAuthenticated: true,
        user: action.response,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;

