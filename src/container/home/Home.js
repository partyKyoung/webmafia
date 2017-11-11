import React, { Component } from 'react';

import Ssiam from './Ssiam';

class Home extends Component {
  render () {
    return (
      <div className="container">
        <Ssiam />
        <img src="/img/package.png" alt="package"/>
      </div>
    );
  }
}

export default Home;