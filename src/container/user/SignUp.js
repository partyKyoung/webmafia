import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
  render () {
    return (
      <div className="container">
        <h2>회원가입</h2>
        <Form>
          <FormGroup className="row">
            <Label className="col-12 col-md-2" for="exampleEmail">Email</Label>
            <Input className="col-12 col-md-10"  type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />   
          </FormGroup>
          <FormGroup className="row">
            <Label className="col-12 col-md-2" for="exampleEmail">Password</Label>
            <Input className="col-12 col-md-10"  type="password" name="email" id="exampleEmail" placeholder="with a placeholder" />    
          </FormGroup>
          <FormGroup className="row">
            <Label className="col-12 col-md-2" for="exampleEmail">Password 확인</Label>
            <Input className="col-12 col-md-10"  type="password" name="email" id="exampleEmail" placeholder="with a placeholder" />  
          </FormGroup>      
          <FormGroup className="row">      
            <Label className="col-12 col-md-2" for="exampleEmail">닉네임</Label>
            <Input className="col-12 col-md-10"  type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />         
          </FormGroup>
          <FormGroup className="row">      
            <Label className="col-12 col-md-2" for="exampleEmail">프로필 사진</Label>
            <Input className="col-12 col-md-10"  type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />                                                      
          </FormGroup>                    
        </Form>
      </div>
    );
  }
}

export default SignUp;