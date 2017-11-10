import React, { Component } from 'react';
import moment from 'moment';

class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }


  render () {
    return (
      <div className="home">
        용식이 전역까지 남은 시간: 
        <img src="/img/package.png" alt="package"/>
      </div>
    );
  }
}

export default Home;