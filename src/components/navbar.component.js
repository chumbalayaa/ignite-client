import React, {Component} from "react";
import { Navbar } from "react-bootstrap";

export default class NavigationBar extends Component {

    render() {
      return (
          <Navbar>
            <Navbar.Brand href="#home">Ignite</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Alex C.</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
      )
    }
}
