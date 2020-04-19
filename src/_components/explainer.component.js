import React, { Component } from "react";
import { List, Typography, Divider, Layout, Menu, Button, Avatar } from "antd";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const ListItem = List.Item;

export default class Explainer extends Component {
  constructor(props) {
    super(props);

    this.artistUsers = [
      "Musicians promoting themselves or looking for gigs and projects",
      "Visual artists seeking buyers or gallery presence",
      "Lighting, sound and other technical artists looking for contract work",
    ];

    this.industryUsers = [
      "Some other text that is random",
      "IDK maybe some promotors want to book talent for their projects",
    ];

    this.consumerUsers = [
      "People who need a wedding band",
      "Bar owners who want some live music in their establishment",
    ];
  }

  render() {
    return (
      <Layout>
        <Header>
          <Title style={{ color: "white" }}>What is Ignite?</Title>
        </Header>
        <Layout>
          <Content>
            <Title level={3}>
              Ignite is a platform for artist talent, used by:
            </Title>
            <Divider orientation="left">Artists</Divider>
            <List
              size="small"
              bordered
              dataSource={this.artistUsers}
              renderItem={(item) => <ListItem>{item}</ListItem>}
            />
            <Divider orientation="left">Industry professionals</Divider>
            <List
              size="small"
              bordered
              dataSource={this.industryUsers}
              renderItem={(item) => <ListItem>{item}</ListItem>}
            />
            <Divider orientation="left">Consumers</Divider>
            <List
              size="small"
              bordered
              dataSource={this.consumerUsers}
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
