import * as actionTypes from '../actions/actionTypes';

export const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  return {
    type: actionTypes.logout,
  };
};

