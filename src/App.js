import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './style.scss';

import Header from './container/header/Header';
import Home from './container/home/Home';
import Ssiam from './container/home/Ssiam';
import ChatList from './container/chat/ChatList';
import Footer from './container/footer/Footer';
import SignUp from './container/user/SignUp';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/chatList' component={ChatList} />
        <Route path='/ssiam' component={Ssiam} />
        <Route path='/user/SignUp' component={SignUp} />
      </Switch>   
      <Footer />
    </div>
    );
  }
}

export default App;


