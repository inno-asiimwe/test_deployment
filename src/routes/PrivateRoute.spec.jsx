import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import DashboardPage from '../views/DashboardPage';
import PrivateRoute from '.';


test('it matches snapshot', () => {
  const wrapper = shallow(<MemoryRouter><PrivateRoute component={DashboardPage} /></MemoryRouter>);
  expect(wrapper).toMatchSnapshot();
});
