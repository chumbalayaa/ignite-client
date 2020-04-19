import React, { Component } from "react";
import { Layout, Menu, Button, Avatar } from "antd";
import { UserOutlined } from "../../node_modules/@ant-design/icons";

import { history } from "../_helpers";
import { authenticationService } from "../_services/";

const { Header } = Layout;

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: authenticationService.currentUserValue,
    };
  }

  logout() {
    authenticationService.logout();
    history.push("/log-in");
    window.location.reload(true);
  }

  render() {
    const { currentUser } = this.state;
    let authenticatedNavbar;
    if (currentUser) {
      authenticatedNavbar = (
        <Layout>
          <Header id="mainNav" style={{ position: "fixed", width: "100%" }}>
            <div className="logo" />
            <Menu style={{ float: "right" }}>
              <Avatar size={32} icon={<UserOutlined />} />
              {currentUser.firstName} {currentUser.lastName}
              <Button variant="primary" type="submit" onClick={this.logout}>
                Logout
              </Button>
            </Menu>
          </Header>
        </Layout>
      );
    } else {
      authenticatedNavbar = (
        <Layout>
          <Header
            id="mainNavUnAuth"
            style={{ position: "fixed", width: "100%" }}
          >
            <div className="logo" />
          </Header>
        </Layout>
      );
    }
    return <div>{authenticatedNavbar}</div>;
  }
}
