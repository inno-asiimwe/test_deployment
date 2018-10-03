import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filters';

describe('Tests Filter component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Filter />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders with  state', () => {
    const shallowWrapper = wrapper.instance();
    shallowWrapper.setState({
      activeClass: 'card active-card',
      cardId: 'one',
    });
    expect(wrapper.find('div.active-card').exists()).toBe(true);
  });

  it('renders it changes on click', () => {
    const shallowWrapper = wrapper.instance();
    const spy = jest.spyOn(shallowWrapper, 'divClicked');
    shallowWrapper.divClicked();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
