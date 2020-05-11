import React from "react";

import { Layout, Row, Col } from "antd";

import NavigationBar from "../_components/navbar.component";
import Profile from "../_components/profile.component";
import ProfileSecondary from "../_components/profilesecondary.component";

import { authenticationService } from "../_services/";

import "./ProfilePage.css";

const { Header, Content } = Layout;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Content>
          <Row
            id="profile-row-main"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            jusitfy="center"
            align="top"
          >
            <Col id="profile-col" className="gutter-row" span={12}>
              <Profile {...this.props}/>
            </Col>
            <Col id="profile-secondary-col" className="gutter-row" span={12}>
              <ProfileSecondary {...this.props}/>
            </Col>
          </Row>
        </Content>
    );
  }
}

export { ProfilePage };
