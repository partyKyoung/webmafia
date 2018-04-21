import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import SignIn from 'components/user/SignIn';

import './nav.scss';

class SignInNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShownLoginModal: false
    }
  }

  handleOpenLoginModal = () => {
    this.setState({
      isShownLoginModal: true
    })
  }

  handleCloseLoginModal = () => {
    this.setState({
      isShownLoginModal: false
    })
  }

  render() {
    return (
      <Nav className="wo-nav float-right h-100">
        <NavItem>
          <NavLink href="/user/SignUp">회원가입</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.handleOpenLoginModal}>로그인</NavLink>
        </NavItem>   
        <Modal isOpen={this.state.isShownLoginModal} toggle={this.handleCloseLoginModal}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <SignIn />
          </ModalBody>
          <ModalFooter>
            <Button color="primary">로그인</Button>{' '}
            <Button color="secondary" onClick={this.handleCloseLoginModal}>취소</Button>
          </ModalFooter>
        </Modal>             
      </Nav>
    );
  }
}

export default SignInNav;