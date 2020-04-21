import React from "react";

import { Layout, Row, Col, Divider } from "antd";

import NavigationBar from "../_components/navbar.component";

import { authenticationService } from "../_services/";

const { Header, Sider, Content } = Layout;

class ProfilePage extends React.Component {
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
      </Layout>
    );
  }
}

export { ProfilePage };
