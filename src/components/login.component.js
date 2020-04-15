import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";
import axios from 'axios';

export default class Login extends Component {
  render() {
    return (
      <Form>
        <Form.Label>Log In</Form.Label>
        <Form.Group controlId="basicEmailLogin">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" className="form-control" placeholder="Enter email"/>
        </Form.Group>
        <Form.Group controlId="basicPasswordLogin">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" className="form-control" placeholder="Enter password"/>
        </Form.Group>
        <Form.Group controlId="basicRememberMeCheck">
          <Form.Check />
          <Form.Label>Remember me</Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Log In
        </Button>
      </Form>
    )
  }
}
