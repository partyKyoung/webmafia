import React, { Component } from 'react';

class MemberMenu extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/components/">마이페이지</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/components/">로그아웃</NavLink>
        </NavItem>        
      </Nav>
      </Navbar>
    );
  }
}

export default MemberMenu;