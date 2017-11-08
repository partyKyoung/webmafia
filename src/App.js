import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './container/header/Header';
import Home from './container/home/Home';
import Footer from './container/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
