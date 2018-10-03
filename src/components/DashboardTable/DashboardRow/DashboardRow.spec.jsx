import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import DashboardRow from './DashboardRow';
import Cell from '../../TableComponents/Cell';
import fellows from '../../../__mocks__/fellows';

const fellow = fellows[0];

const props = {
  fellow,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardRow {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders row cells in the correct order', () => {
  const wrapper = shallow(<DashboardRow {...props} />);
  const rowCells = [<Cell title="Communication">{fellow.communication}</Cell>,
    <Cell title="Professionalism">{fellow.professionalism}</Cell>];
  expect(wrapper.contains(rowCells)).toEqual(true);
});

it('renders the mounted row', () => {
  const wrapper = mount(<DashboardRow {...props} />);
  const nameCell = <div className="dashboard-table__cell" data-title="Name">{`${fellow.firstName} ${fellow.lastName}`}</div>;
  const levelCell = <div className="dashboard-table__cell" data-title="Quantity">{fellow.quantity}</div>;
  expect(wrapper.contains(nameCell, levelCell)).toEqual(true);
});
