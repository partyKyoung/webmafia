import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Header from './container/header/Header';
import Home from './container/home/Home';
import Ssiam from './container/home/Ssiam';
import Lobby from './container/game/Lobby';
import Room from './container/game/Room';
import Board from './container/board/Board';
import Footer from './container/footer/Footer';
import SignUp from './container/user/SignUp';

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
        <Route path='/user/SignUp' component={SignUp} />
      </Switch>   
      <Footer />
    </div>
    );
  }
}

export default App;


