import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Routes from '.';

test('it renders Routes in App component', () => {
  const routes = <Routes />;
  const wrapper = shallow(<App />);
  expect(wrapper.contains(routes)).toEqual(true);
});

test('it matches snapshot', () => {
  const wrapper = shallow(<MemoryRouter><Routes /></MemoryRouter>);
  expect(wrapper).toMatchSnapshot();
});
