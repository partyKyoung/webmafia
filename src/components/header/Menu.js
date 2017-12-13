import React, { Component } from 'react';
import { Nav, NavItem, NavLink,} from 'reactstrap';

class Menu extends Component {
  render() {
    return (
      <Nav className="w-100 menu">
        <NavItem>
          <NavLink href="/chatList">게임 시작</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">자유 게시판</NavLink>
        </NavItem>
      </Nav> 
    );
  }
}

export default Menu;