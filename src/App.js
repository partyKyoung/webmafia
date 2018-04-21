import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Header from './containers/header/Header';
import Home from './containers/home/Home';
import Lobby from './containers/game/Lobby';
import Room from './containers/game/Room';
import Board from './containers/board/Board';
import Footer from './containers/footer/Footer';
import SignUp from './containers/user/SignUp';

class App extends Component {
  render() {
    return (
    <div className="wo-app">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/lobby' component={Lobby} />
        <Route path='/room/:seq' component={Room} />
        <Route path='/board/free' component={Board} />
        <Route path='/user/signUp' component={SignUp} />
      </Switch>   
      <Footer />
    </div>
    );
  }
}

export default App;


