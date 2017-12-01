import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignIn extends Component {
  render() {
    return (
      <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password</Label>
          <Input type="password" name="password" placeholder="with a placeholder" />
        </FormGroup>   
        <div>
          <Button>카카오톡 로그인</Button>
          <Button>네이버 로그인</Button>
        </div>     
      </Form>        
      </div>
    );
  }
}

export default SignIn;