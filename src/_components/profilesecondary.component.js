import React, { Component } from "react";
import { Layout, Input, Select, Button, Checkbox } from "antd";
import { userService } from "../_services/user.service";

import { history } from "../_helpers";

const { Header, Sider, Content, Footer } = Layout;

export default class ProfileSecondary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="profileMain">Hello World</div>;
  }
}
