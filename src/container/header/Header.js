import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Menu from './Menu';

class Header extends Component {
  render () {
    return (
      <div className="header">
        <header>
          <h1 className="float-left">웹마피아</h1>
          <Nav bsStyle="tabs" className="float-right">
            <NavItem className="d-none d-md-block" href="/home">로그인</NavItem>
            <NavItem className="d-none d-md-block" title="Item">회원가입</NavItem>
            <NavDropdown className="d-block d-md-none" title="Dropdown" id="nav-dropdown">
              <MenuItem href="/home">로그인</MenuItem>
              <MenuItem>회원가입</MenuItem>        
            </NavDropdown>       
          </Nav>        
        </header>
        <Menu />
      </div>
    );
  }
}

export default Header;
