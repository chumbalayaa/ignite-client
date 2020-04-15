import React, {Component} from "react";
import { Navbar, Button } from "react-bootstrap";

import { history } from '../_helpers';
import {authenticationService} from '../_services/';

export default class NavigationBar extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentUser: authenticationService.currentUserValue,
    };
  }

  logout() {
    authenticationService.logout();
    history.push('/sign-in');
    window.location.reload(true);
  }

  render() {
    const {currentUser} = this.state;
    let authenticatedNavbar;
    if (currentUser) {
      authenticatedNavbar = <Navbar>
        <Navbar.Brand href="#home">Ignite</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: {currentUser.firstName} {currentUser.lastName}
          </Navbar.Text>
        </Navbar.Collapse>
        <Button variant="primary" type="submit" onClick={this.logout}>
          Logout
        </Button>
      </Navbar>
    } else {
      authenticatedNavbar = <Navbar>
        <Navbar.Brand href="#home">Ignite</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
    }
    return (
        <div>{authenticatedNavbar}</div>
    )
  }
}
