import React, { Component } from "react";
import { Layout, Input, Select, Button, Checkbox, Card } from "antd";
import ProjectList from "./projectlist.component";
import ArtistProfile from "./artistprofile.component";
import { userService } from "../_services/user.service";

import { history } from "../_helpers";

const { Header, Sider, Content, Footer } = Layout;

const tabList = [
  {
    key: "Projects",
    tab: "Projects",
  },
  {
    key: "Artist Profile",
    tab: "Artist Profile",
  }];

const contentList = {
  tab1: <ProjectList />,
  tab2: <ArtistProfile />,
};

export default class ProfileSecondary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "Projects"
    };
  }

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    let secondaryView;
    if (this.state.key === 'Projects') {
      secondaryView = <ProjectList />
    } else if (this.state.key === 'Artist Profile'){
      secondaryView = <ArtistProfile />
    } else {
      secondaryView = <p>Failed to Load</p>
    }
    return (
      <div id="profileSecondary">
        <Card
          style={{ width: "100%" }}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => {
            this.onTabChange(key, "key");
          }}
        >
          {secondaryView}
        </Card>
      </div>
    );
  }
}
