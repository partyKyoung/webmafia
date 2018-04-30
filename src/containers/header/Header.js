import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignInNav from 'components/header/SignInNav';

import './header.scss';

class Header extends Component {
  render () {
    return (
      <header className="wo-header bg-secondary pl-3 pr-3 clearfix">
        <h1 className="wo-header-logo h-100 float-left">
          <Link to="/" className="wo-header-link">
            늑대온에어
          </Link>
        </h1>    
        <SignInNav />
      </header>
    );
  }
}

export default Header;
