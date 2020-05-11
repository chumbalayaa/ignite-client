import React from "react";

import Explainer from "../_components/explainer.component";
import Signup from "../_components/signup.component";

import { Layout, Row, Col } from "antd";

import NavigationBar from "../_components/navbar.component";

import { authenticationService } from "../_services/";

const { Header, Sider, Content } = Layout;

class SignupPage extends React.Component {
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
    return (
        <Layout className="login-inner">
          <Row id="login-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col id="explainer-col" className="gutter-row" span={14}>
              <Explainer />
            </Col>
            <Col id="login-col" className="gutter-row" span={10}>
              <div class="auth-wrapper">
                <div class="auth-inner">
                  <Signup />
                </div>
              </div>
            </Col>
          </Row>
        </Layout>
    );
  }
}

export { SignupPage };
