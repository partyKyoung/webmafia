import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import SignUp from 'containers/users/SignUp';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
      <Switch>
        <div className="container">
          <Route path="/users/signUp" component={SignUp} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
