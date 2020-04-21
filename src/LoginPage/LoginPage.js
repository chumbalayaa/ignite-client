import React from "react";

import Explainer from "../_components/explainer.component";
import Login from "../_components/login.component";

import { Layout, Row, Col, Divider } from "antd";

import NavigationBar from "../_components/navbar.component";

import { authenticationService } from "../_services/";

import "./LoginPage.css";

const { Header, Sider, Content } = Layout;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
    };

    if (this.state.currentUser) {
      this.props.history.push("/");
    }
  }

  render() {
    const { currentUser } = this.state;
    const style = { padding: "8px 0" };
    return (
      <Layout>
        <Header>
          <NavigationBar {...this.state} />
        </Header>
        <Layout className="login-inner">
          <Row id="login-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col id="explainer-col" className="gutter-row" span={14}>
              <Explainer />
            </Col>
            <Col id="login-col" className="gutter-row" span={10}>
              <div class="auth-wrapper">
                <div class="auth-inner">
                  <Login />
                </div>
              </div>
            </Col>
          </Row>
        </Layout>
      </Layout>
    );
  }
}

export { LoginPage };
