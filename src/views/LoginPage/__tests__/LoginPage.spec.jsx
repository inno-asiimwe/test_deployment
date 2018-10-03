import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import LoginPage from '../LoginPage';

describe('<LoginPage />', () => {
  const ANDELA_AUTH_URL = 'TEST_AUTH_URL';
  const REDIRECT_URL = 'TEST_REDIRECT_URL';

  let wrapper;
  let loginButtonSpy;
  beforeAll(() => {
    loginButtonSpy = jest.spyOn(LoginPage.prototype, 'handleLogin');
    wrapper = shallow(<LoginPage
      authHostUrl={ANDELA_AUTH_URL}
      authRedirectUrl={REDIRECT_URL}
    />);
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
  it('It redirects user to dashboard when logged in', () => {
    const fakeToken = 'sfdfjnsdfowbefijbmdnkf';
    Cookie.set('jwt-token', fakeToken, { path: '/' });
    const instance = shallow(<LoginPage
      authHostUrl={ANDELA_AUTH_URL}
      authRedirectUrl={REDIRECT_URL}
    />);
    expect(instance.find(Redirect).length).toBe(1);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
