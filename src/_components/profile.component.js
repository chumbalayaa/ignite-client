import React, { Component } from "react";
import { Typography, Layout, Row, Col, Divider } from "antd";
import { userService } from "../_services/user.service";

import { authenticationService } from "../_services/";

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

export default class Profile extends Component {
  constructor(props) {
    super(props);

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
            <Title level={2}> Profile Information </Title>
          </Col>
        </Row>
        <Row>
          <Col span={4} offset={2}>
            <Title level={4}>Name</Title>
          </Col>
          <Col span={4} offset={6}>
            <Title level={4}>
              {currentUser.firstName} {currentUser.lastName}
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={4} offset={2}>
            <Title level={4}>Email</Title>
          </Col>
          <Col span={4} offset={6}>
            <Title level={4}>{currentUser.email}</Title>
          </Col>
        </Row>
        <Row>
          <Col span={4} offset={2}>
            <Title level={4}>Password</Title>
          </Col>
          <Col span={4} offset={6}>
            <Title level={4}>{currentUser.password}</Title>
          </Col>
        </Row>
      </div>
    );
  }
}
