// @flow

import React, { Component } from 'react';

import './Header.scss';

type Props = {}

type State = {
  isLoggedIn: boolean
}

class Header extends Component<Props, State> {
  constructor(props: Props) {
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