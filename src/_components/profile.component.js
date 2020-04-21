import React, { Component } from "react";
import { Typography, Layout, Row, Col, Divider } from "antd";
import { userService } from "../_services/user.service";

import { authenticationService } from "../_services/";

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

export default class Profile extends Component {
  constructor(props) {
    super(props);

    console.log("hey");
    this.state = {
      currentUser: authenticationService.currentUserValue,
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div id="profileMain">
        <Row>
          <Col id="profileName" span={12} offset={6}>
            <Title level={3}> {currentUser.firstName}</Title>
          </Col>
        </Row>
      </div>
    );
  }
}
