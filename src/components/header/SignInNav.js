import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Modal, ModalBody } from 'reactstrap';

import SignUp from 'containers/user/SignUp';
import SignIn from 'containers/user/SignIn';

import './nav.scss';

class SignInNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShownLoginModal: false,
      isShownSignupModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (isShownModal) {
    this.setState({
      [isShownModal]: true
    })
  }

  handleCloseModal () {
    this.setState({
      isShownSignupModal: false,
      isShownLoginModal: false
    })
  }

  render() {
    const {isShownLoginModal, isShownSignupModal} = this.state;

    return (
      <Nav className="wo-nav float-right h-100">
        <NavItem>
        <NavLink onClick={() => {this.handleOpenModal('isShownSignupModal')}}>회원가입</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => {this.handleOpenModal('isShownLoginModal')}}>로그인</NavLink>
        </NavItem>   
        <Modal 
          className="modal-sm"
          isOpen={isShownLoginModal || isShownSignupModal} 
          toggle={this.handleCloseModal}
        >
          <ModalBody>
            {
              isShownLoginModal ? 
                <SignIn />
              :
                <SignUp />
            }
          </ModalBody>
        </Modal>                     
      </Nav>
    );
  }
}

export default SignInNav;