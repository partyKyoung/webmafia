// @flow
import React, { Component } from 'react';
import { Modal } from 'reactstrap';

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
      <div className="mr-right">
        <Modal isOpen={isOpenLoginModal}>
          로그인
        </Modal>
      </div>
    );
  }
}

export default SignInMenu;