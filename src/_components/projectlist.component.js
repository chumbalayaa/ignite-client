import React, { Component } from "react";
import { Layout, Input, Select, Button, Checkbox } from "antd";
import { projectService } from "../_services/project.service";

import { history } from "../_helpers";

const { Search } = Input;
const { Option } = Select;
const { Header, Sider, Content, Footer } = Layout;

export default class ProjectListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="projectListMain"></div>;
  }
}
