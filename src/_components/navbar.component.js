import React, { Component } from "react";
import { Typography, Layout, Menu, Button, Avatar } from "antd";
import { UserOutlined } from "../../node_modules/@ant-design/icons";

import { history } from "../_helpers";
import { authenticationService } from "../_services/";

const { Header } = Layout;
const { Title } = Typography;

const MenuItem = Menu.Item;

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
          <Header id="mainNav">
            <div className="logo" />
            <Menu id='mainNavLeft' theme='dark' mode='horizontal' defaulSelectedKeys={['1']}>
              <MenuItem key='1'><a href='/'>Home</a></MenuItem>
            </Menu>
            <div id='mainNavRight'>
              <div id="userNavData">
                <Avatar id="userPicNav" size={32} icon={<UserOutlined />} />
                <Title id="userNameNav" level={4}> <a href='/profile'> {currentUser.firstName} {currentUser.lastName} </a></Title>
              </div>
              <Button id="navLogoutButton" type="dashed" danger onClick={this.logout}>Logout</Button>
            </div>
          </Header>
      );
    } else {
      authenticatedNavbar = (
          <Header id="mainNav">
            <div className="logo" />
          </Header>
      );
    }
    return <div>{authenticatedNavbar}</div>;
  }
}
