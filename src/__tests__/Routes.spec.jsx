import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Routes from '../routes';

test('it renders Routes in App component', () => {
  const routes = <Routes />;
  const wrapper = shallow(<App />);
  expect(wrapper.contains(routes)).toEqual(true);
});
