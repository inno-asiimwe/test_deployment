import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoginPage from '../LoginPage';

describe('<LoginPage />', () => {
  let wrapper;
  let loginButtonSpy;
  beforeAll(() => {
    loginButtonSpy = jest.spyOn(LoginPage.prototype, 'handleClick');
    wrapper = shallow(<LoginPage />);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render login button with correct text', () => {
    const loginButton = wrapper.find('.login-page__btn');
    expect(loginButton.text()).toEqual('LOGIN WITH GOOGLE');
  });
  it('should attempt sign-in when login button is clicked', () => {
    const loginButton = wrapper.find('.login-page__btn');
    loginButton.simulate('click', { preventDefault: jest.fn() });
    expect(loginButtonSpy).toHaveBeenCalled();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
