import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DashboardPage from './DashboardPage';
import DashboardTable from '../../components/DashboardTable';
import fellows from '../../__mocks__/fellows';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the dashboard table', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper.contains(<DashboardTable fellows={fellows} />)).toEqual(true);
});
