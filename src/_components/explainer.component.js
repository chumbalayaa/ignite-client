import React, { Component } from "react";
import { Layout, Menu, Button, Avatar } from "antd";

const {Header, Content, Footer} = Layout;

export default class Explainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Layout>
        <Header><h2>What is Ignite?</h2></Header>
        <Layout>
          <Content>
            <h4>Ignite </h4>
            <ol>
              <li>Musicians</li>
            </ol>
          </Content>
          <Footer>What will you accomplish?</Footer>
        </Layout>
      </Layout>
    );
  }
}
