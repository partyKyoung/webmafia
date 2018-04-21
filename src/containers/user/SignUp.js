import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'

import { required, emailCheck, passwordCheck, nickNameLengthCheck, nickNameCheck } from '../../lib/user/validations';

const rendorFormGroup = (field) => {
  return (
    <FormGroup className="row">
      <Label className="col-12 col-md-4 col-form-label text-md-right pl-0 pr-4" htmlFor={field.input.name}>{field.label}</Label>
      <Input className={"col-12 col-md-8" + (field.meta.touched && field.meta.error ? " is-invalid" : '')}
        {...field.input} type={field.type}
        placeholder={field.placeholderMessage}
        disabled={field.meta.asyncValidating}
      />
      {
        field.meta.touched && field.meta.error && 
        <div className="invalid-feedback">{field.meta.error}</div>
      }
    </FormGroup>  
  );
}

class SignUp extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      checkPassword: '',
      nickname: ''
    }

    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  handleChangeValue (type, value) {
   
    this.setState({
      [type]: value
    })
  }

  render () {
    return (
      <div className="container">
        <div className="">
          <h2>회원가입</h2>
          <Form>
            <Field name="email" type="email" component={rendorFormGroup} label="Email" placeholderMessage="이메일 주소를 입력해주세요" validate={[required, emailCheck]}/> 
            <Field name="password" type="password" component={rendorFormGroup} label="비밀번호" placeholderMessage="비밀번호를 입력해주세요" validate={[required, passwordCheck]}/> 
            <Field name="passwordCheck" type="password" component={rendorFormGroup} label="비밀번호 확인" placeholderMessage="비밀번호를 입력해주세요" validate={[required, passwordCheck]}/> 
            <Field name="nickname" type="text" component={rendorFormGroup} label="닉네임" placeholderMessage="닉네임을 입력해주세요" validate={[required, nickNameLengthCheck, nickNameCheck]}/> 
            <FormGroup className="row">      
              <Label className="col-12 col-md-4 col-form-label text-md-right pl-0 pr-4" for="exampleEmail">프로필 사진</Label>
              <div className="col-12 col-md-8">
                <div className="profile-input">
                  <label htmlFor="imageFile">
                    <i className="fa fa-file-image-o" aria-hidden="true"/>
                  </label>
                  <input id="imageFile" type="file" accept="image/*" ref={input => this.fileEl = input} onChange={null}/>                  
                </div>
              </div>                                                       
            </FormGroup>                    
          </Form>        
        </div>
      </div>
    );
  }
}

SignUp = reduxForm({
	form: 'signUp'
})(SignUp);

export default SignUp;