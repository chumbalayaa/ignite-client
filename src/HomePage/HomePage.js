import React from "react";

import NavigationBar from "../_components/navbar.component";
import { userService, authenticationService } from "../_services";

import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Layout>
        <Header>
          <NavigationBar {...this.state} />
        </Header>
        <div>
          <h1>Hi {currentUser.firstName}!</h1>
          <p>You're logged in with React & JWT!!</p>
          <h3>Users from secure api end point:</h3>
        </div>
      </Layout>
    );
  }
}

export { HomePage };
