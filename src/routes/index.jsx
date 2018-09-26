import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import LoginPage from '../views/LoginPage';
import DashboardPage from '../views/DashboardPage';
import PageNotFoundPage from '../views/PageNotFoundPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={PageNotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;
