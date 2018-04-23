import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Modal, ModalBody } from 'reactstrap';

import SignIn from 'containers/user/SignIn';

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
          <Link className="nav-link" to="/user/signUp">
            회원가입
          </Link>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.handleOpenLoginModal}>로그인</NavLink>
        </NavItem>   
        <Modal 
          className="modal-sm"
          isOpen={this.state.isShownLoginModal} 
          toggle={this.handleCloseLoginModal}
        >
          <ModalBody>
            <SignIn />
          </ModalBody>
        </Modal>             
      </Nav>
    );
  }
}

export default SignInNav;