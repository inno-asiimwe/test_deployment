import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../views/LoginPage';
import DashboardPage from '../views/DashboardPage';
import NotFoundPage from '../views/NotFoundPage';

/**
 * Defines application routes
 * @function
 */
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;
