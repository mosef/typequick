import { createStore, applyMiddleware, compose } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import promiseMiddleware from './promise-middleware';
import reducers from '../reducers';

export const history = createHistory();
const helperModules = [thunk, promiseMiddleware, routerMiddleware(history), loadingBarMiddleware()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...helperModules),
  ));

export default store;
