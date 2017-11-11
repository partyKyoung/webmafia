import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

import Menu from '../../components/header/Menu';
import Signin from '../user/SignIn';

class Header extends Component {
  constructor () {
    super();

    this.state = {
      OpenDropdown: false,
      openSignInModal: false
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.handleOpenSignInModal = this.handleOpenSignInModal.bind(this);
  }

  handleToggle () {
    this.setState({
      OpenDropdown: !this.state.OpenDropdown
    });
  }

  handleOpenSignInModal () {
    this.setState({
      openSignInModal: !this.state.openSignInModal
    });
  }

  drawLoginMenu () {
    return (
      <Nav navbar>
        <NavItem>
          <NavLink onClick={this.handleOpenSignInModal}>로그인</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/user/signUp">회원가입</NavLink>
        </NavItem>
      </Nav>      
    );   
  }

  drawMemberMenu () {
    return (
      <Nav navbar>
        <NavItem>
          <NavLink href="/user/signIn">마이페이지</NavLink>
        </NavItem>
      </Nav>   
    );
  }

  render () {
    const isLogin = this.props.isLogin;

    return (
      <div className="header">
        <header className="bg-secondary">
          <h1 className="m-0 float-left">웹마피아</h1>  
          <Navbar className="header-nav float-right h-100" color="faded" light expand="md">
            <NavbarToggler onClick={this.handleToggle} />
            <Collapse isOpen={this.state.OpenDropdown} navbar>
            {
              isLogin ?
                this.drawMemberMenu()
              :
                this.drawLoginMenu()
            }
            </Collapse>
          </Navbar>
          <Modal isOpen={this.state.openSignInModal}>
            <ModalBody>
              <Signin />
            </ModalBody>
            <ModalFooter>
              <Button color="primary">로그인</Button>
              <Button onClick={this.handleOpenSignInModal} color="secondary">취소</Button>
            </ModalFooter>
          </Modal>     
        </header>
      <Menu />
      </div>
    );
  }
}

export default Header;
