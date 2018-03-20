import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Link, Router, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import store from '../../store/store';
import LoginForm from './loginForm';

describe('Component: LoginForm', () => {
  const history = createHistory();
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>);
  });
});
