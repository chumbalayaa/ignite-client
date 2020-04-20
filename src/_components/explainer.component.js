import React, { Component } from "react";
import { List, Typography, Divider, Layout, Menu, Button, Avatar } from "antd";
import "../LoginPage/LoginPage.css";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const ListItem = List.Item;

export default class Explainer extends Component {
  constructor(props) {
    super(props);

    this.userData = [
      "Artists promoting themselves or looking for gigs and projects",
      "Industry professionals booking talent and artists for concerts or other projects",
      "Consumers or small business owners searching for artists - maybe a live band or wedding singer"
    ];
  }

  render() {
    return (
      <Layout class="explainer">
        <Header>
          <Title style={{ color: "white" }}>What is Ignite?</Title>
        </Header>
        <Layout>
          <Content>
            <Divider orientation="left">Ignite is a platform for artist talent, used by:</Divider>
            <List
              size="small"
              dataSource={this.userData}
              renderItem={(item) => <ListItem>{item}</ListItem>}
            />
          </Content>
          <Divider orientation="left"></Divider>
          <Footer>What will you accomplish?</Footer>
        </Layout>
      </Layout>
    );
  }
}
