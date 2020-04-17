import React, { Component } from "react";
import { Layout, Menu, Button, Avatar } from "antd";

const {Header, Content} = Layout;

export default class Explainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Layout>
        <Header><h2>What we do</h2></Header>
        <Layout>
          <Content>
            <p>WHAT UPPPPP</p>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
