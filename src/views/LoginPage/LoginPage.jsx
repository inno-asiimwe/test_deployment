import React, { Component } from 'react';
import andelaLogo from '../../static/Logo-andela.png';
import googleLogo from '../../static/icons8-google-48.png';
import watchTowerLogo from '../../static/Logo-watchTower.svg';
import './LoginPage.css';

/**
 * LoginPage UI Component
 *
 * @returns {JSX} React component
 */
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${process.env.REACT_APP_ANDELA_AUTH_HOST}/login?redirect_url=${
        process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URL
      }`,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { url } = this.state;
    window.location.replace(url);
  }

  render() {
    const { url } = this.state;
    return (
      <main className=".container-fluid text-center login-page">
        <div className="login-page__header">
          <img
            src={watchTowerLogo}
            alt="watch-tower-logo"
            className="login-page__logo"
          />
          <span className="login-page__text-by">by</span>
          <img
            src={andelaLogo}
            alt="andela-logo"
            className="login-page__logo"
          />
        </div>
        <div className="login-page__tagline text-center">
          <p className="m-0">Tracking</p>
          <p>DevPulse Ratings & LMS Scores</p>
        </div>
        <div style={{ marginTop: '40px' }} title="Login with google">
          <a href={url} onClick={this.handleClick} className="login-page__btn">
            <img src={googleLogo} alt="google-icon" className="login-page__btn-logo" />
            <span className="login-page__line" />
            <span className="login-page__btn-text">LOGIN WITH GOOGLE</span>
          </a>
        </div>
      </main>
    );
  }
}

export default LoginPage;
