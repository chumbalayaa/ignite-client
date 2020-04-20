import React, { Component } from "react";
import { Layout, Input, Select, Button, Checkbox } from "antd";
import { userService } from "../_services/user.service";
import axios from "axios";

import { history } from "../_helpers";

const { Search } = Input;
const { Option } = Select;
const {Header, Sider, Content, Footer} = Layout;

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleChange(res) {
    console.log(res);
  }

  render() {
    return (
      <Layout>
        <Input.Group style={{display:'inline-block'}} compact>
          <Select style={{float:'left', width: '10%', marginLeft: '5%'}} size='large' defaultValue="Artist"
            onChange ={this.handleToggleChange}>
            <Option value="Artist">Artist</Option>
            <Option value="Project">Project</Option>
          </Select>
          <Search placeholder='Search Ignite'
                enterButton='Search'
                size='large'
                style={{width: '80%', float: 'left'}}
                onSearch= {value => console.log(value)}/>
        </Input.Group>
      </Layout>
    );
  }
}
