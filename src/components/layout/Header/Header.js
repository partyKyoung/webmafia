import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <header className="wo-header">
        {
          isLoggedIn ?
          '로그인' : '로그인 ㄴㄴ'
        }
      </header>
    );
  }
}

export default Header;