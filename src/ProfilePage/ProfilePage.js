import React from "react";

import { Layout, Row, Col, Divider } from "antd";

import NavigationBar from "../_components/navbar.component";
import Profile from "../_components/profile.component";
import ProfileSecondary from "../_components/profilesecondary.component";

import { authenticationService } from "../_services/";

import "./ProfilePage.css";

const { Header, Sider, Content } = Layout;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
    };
  }

  render() {
    return (
      <Layout>
        <Header>
          <NavigationBar {...this.state} />
        </Header>
        <Content>
          <Row
            id="profile-row-main"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            jusitfy="center"
            align="top"
          >
            <Col id="profile-col" className="gutter-row" span={12}>
              <Profile />
            </Col>
            <Col id="profile-secondary-col" className="gutter-row" span={12}>
              <ProfileSecondary />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export { ProfilePage };
