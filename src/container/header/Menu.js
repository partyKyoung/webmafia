import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Menu extends Component {
  render() {
    return (
      <Navbar className="header-menu">
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">게임 시작</NavItem>
            <NavItem eventKey={2} href="#">자유게시판</NavItem>
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;