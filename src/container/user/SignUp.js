import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as validation from '../../lib/user/validations';

class SignUp extends Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (
      <div className="container">
        <div className="col-12 col-md-8 mx-auto">
          <h2>회원가입</h2>
          <Form>
            <FormGroup className="row">
              <Label className="col-12 col-md-3 col-form-label text-md-right pl-0 pr-4" for="exampleEmail">Email</Label>
              <Input className="col-12 col-md-9"  type="email" name="email" id="exampleEmail" placeholder="Email을 입력해주세요." />
              <span></span>  
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-12 col-md-3 col-form-label text-md-right pl-0 pr-4" for="exampleEmail">비밀번호</Label>
              <Input className="col-12 col-md-9"  type="password" name="email" id="exampleEmail" placeholder="비밀번호를 입력해주세요." />    
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-12 col-md-3 col-form-label text-md-right pl-0 pr-4" for="exampleEmail">비밀번호 확인</Label>
              <Input className="col-12 col-md-9"  type="password" name="email" id="exampleEmail" placeholder="비밀번호를 입력해주세요." />  
            </FormGroup>      
            <FormGroup className="row">      
              <Label className="col-12 col-md-3 col-form-label text-md-right pl-0 pr-4" for="exampleEmail">닉네임</Label>
              <Input className="col-12 col-md-9"  type="email" name="email" id="exampleEmail" placeholder="닉네임(최대 8글자)을 입력해주세요." />         
            </FormGroup>
            <FormGroup className="row">      
              <Label className="col-12 col-md-3 col-form-label text-md-right pl-0 pr-4" for="exampleEmail">프로필 사진</Label>
              <div className="col-12 col-md-9">
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

export default SignUp;