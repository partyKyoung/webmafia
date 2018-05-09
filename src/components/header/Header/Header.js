// @flow
import React, { Component } from 'react';

import SignInMenu from 'components/header/SignInMenu';
import UserMenu from 'components/header/UserMenu';

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
      <header className="wo-header pl-3 pr-3 d-flex">
        <h1 className="wo-header-logo mr-auto">늑대온에어</h1>
        {
          isLoggedIn ?
            <UserMenu />
          :
            <SignInMenu />
        }
      </header>
    );
  }
}

export default Header;