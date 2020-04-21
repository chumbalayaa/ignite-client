import React from "react";

import Explainer from "../_components/explainer.component";
import Signup from "../_components/signup.component";

import { Layout } from "antd";

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
      <Layout>
        <Header>
          <NavigationBar {...this.state} />
        </Header>
        <Layout>
          <div class="auth-inner">
            <Sider>
              <Explainer />
            </Sider>
          </div>
          <Content style={{ paddingTop: "15px" }}>
            <div class="auth-inner">
              <Signup />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export { SignupPage };
