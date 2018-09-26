import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Welcome to WatchTower</h1>
        <Routes/>
      </div>
    );
  };
};

export default App;
