/* eslint import/prefer-default-export: off, no-underscore-dangle:0 */
import * as actionTypes from '../actions/actionTypes';

export const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  return {
    type: actionTypes.logout,
  };
};

