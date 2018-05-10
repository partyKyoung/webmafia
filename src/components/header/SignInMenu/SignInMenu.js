// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Modal } from 'reactstrap';

type Props = {}
type State = {
  isOpenLoginModal: false
}

class SignInMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpenLoginModal: false
    };
  }

  render() {
    const { isOpenLoginModal } = this.state;

    return (
      <Nav className="mr-right">
        <NavItem>
          <Link to="/users/signIn">
            회원가입
          </Link>
        </NavItem>
        <NavItem>
          로그인
        </NavItem>
        <Modal isOpen={isOpenLoginModal}>
          로그인
        </Modal>
      </Nav>
    );
  }
}

export default SignInMenu;