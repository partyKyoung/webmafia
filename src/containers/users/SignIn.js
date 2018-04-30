import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'

import RenderFormGroup from 'components/user/RenderFormGroup';

import { required } from '../../lib/user/validations';

class SignIn extends Component {
  constructor (props) {
    super(props);

    this.handleLoginWithKakao = this.handleLoginWithKakao.bind(this);
  }

  handleLoginWithKakao () {}
  
  render() {
    return (
      <div className="text-center">
        <h2>로그인</h2>
        <Form className="mt-3 mb-3">
          <Field name="email" type="email" component={RenderFormGroup} placeholderMessage="이메일" validate={[required]}/> 
          <Field name="password" type="password" component={RenderFormGroup} placeholderMessage="비밀번호" validate={[required]}/> 
          <Button className="btn mr-1">로그인</Button>
          <Button>취소</Button> 
        </Form> 
        <Button className="w-100 mb-1">페이스북 로그인</Button> 
        <Button onClick={this.handleLoginWithKakao} className="w-100 btn btn-info">카카오 로그인</Button>   
      </div>
    );
  }
}

SignIn = reduxForm({
	form: 'signin'
})(SignIn);

export default SignIn;