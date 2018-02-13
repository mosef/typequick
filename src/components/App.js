import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store/store';
import '../css/App.css';

import ProtectedRoute from './login/protectedRoute';
import loginForm from '../components/forms/loginForm';
import DashPage from '../components/pages/dashPage';
import HomePage from '../components/pages/homePage';
import challengePage from '../components/pages/challengePage';
import lessonPage from '../components/pages/lessonPage';

const App = () => (
  <div>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={loginForm} />
        <ProtectedRoute path="/dash" component={DashPage} />
        <ProtectedRoute path="/lesson" component={lessonPage} />
        <ProtectedRoute path="/challenge" component={challengePage} />
      </Switch>
    </ConnectedRouter>
  </div>
);

export default App;

