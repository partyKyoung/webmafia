import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

class Header extends Component {
  render () {
    const isLogin = this.props.isLogin;

    return (
      <header className="wo-header bg-secondary pl-3 pr-3">
        <h1 className="wo-header-logo h-100">
          <Link to="/" className="wo-header-link">
            늑대온에어
          </Link>
        </h1>    
      </header>
    );
  }
}

export default Header;
