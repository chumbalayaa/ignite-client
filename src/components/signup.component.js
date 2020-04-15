import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', email: '', password: ''};

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange(e) {
    this.setState({lastName: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    axios.post('/api/users', newUser)
      .then(res => {
        if (res.data){
          alert("Success");
        } else{
          console.log("ERROR");
      }
      })
      .catch(err => console.log(err))
    e.preventDefault();
  }

  render() {
    return (
      <Form>
        <Form.Label>Sign Up</Form.Label>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="First name" onChange={this.handleFirstNameChange} />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" onChange={this.handleLastNameChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email address" onChange={this.handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Sign Up
        </Button>
      </Form>
    )
  }
}
