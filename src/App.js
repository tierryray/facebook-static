import React, { Component } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Feed />
      </>
    );
  }
}

export default App;
