import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Link, Router, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import store from '../../store/store';
import Header from './header';

describe('Component: Header', () => {
  const history = createHistory();
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);
  });
});
