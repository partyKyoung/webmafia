import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Modal, ModalBody } from 'reactstrap';

import SignUp from 'containers/users/SignUp';
import SignIn from 'containers/users/SignIn';

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
          className="modal-md"
          isOpen={isShownLoginModal || isShownSignupModal} 
          toggle={this.handleCloseModal}
        >
          <ModalBody>
            {
              // isShownLoginModal: true 이면 로그인 모달 출력, isShownSignupModal: true이면 회원가입 모달 출력
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