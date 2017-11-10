import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './style.scss';

import Header from './container/header/Header';
import Home from './container/home/Home';
import Footer from './container/footer/Footer';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>   
      </div>     
      <Footer />
    </div>
    );
  }
}

export default App;


