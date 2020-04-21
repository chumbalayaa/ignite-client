import React, { Component } from "react";
import { Layout, Row, Col, Divider } from "antd";
import { userService } from "../_services/user.service";

import { authenticationService } from "../_services/";

const { Header, Sider, Content, Footer } = Layout;

export default class Profile extends Component {
  constructor(props) {
    super(props);

    console.log("hey");
    this.state = {
      currentUser: authenticationService.currentUserValue,
    };
  }

  render() {
    return (
      <div id="profileMain">
        Hey
        <Row>
          <Col id="profileName" span={12} offset={6}>
            Hey
          </Col>
        </Row>
      </div>
    );
  }
}
