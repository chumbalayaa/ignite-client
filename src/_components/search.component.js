import React, { Component } from "react";
import { Layout, Input, Select } from "antd";

import { history } from "../_helpers";
import { artistService } from "../_services/artist.service";
import { projectService } from "../_services/project.service";

const { Search } = Input;
const { Option } = Select;
const { Content } = Layout;

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Artist",
      searchResults: null,
    };

    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  handleToggleChange(res) {
    this.setState({
      category: res,
    });
  }

  handleSubmit(res) {
    const req = {
      search: res,
    };
    if (this.state.category === "Artist") {
      return artistService
        .artistSearch(req)
        .then((result) => this.updateResults(result))
        .catch((err) => console.log("heyo", err));
    } else if (this.state.category === "Project") {
      return projectService
        .projectSearch(req)
        .then((result) => this.updateResults(result))
        .catch((err) => console.log("heyo", err));
    } else {
      alert("Category not supported");
    }
  }

  updateResults(res) {
    if (res[0]) {
      this.setState({
        searchResults: res,
      });
    } else {
      this.setState({
        searchResults: null,
      });
    }
  }

  render() {
    const { searchResults } = this.state;
    return (
      <Content id="searchMain">
        <Input.Group style={{ display: "inline-block" }} compact>
          <Select
            style={{ float: "left", width: "10%", marginLeft: "5%" }}
            size="large"
            defaultValue="Artist"
            onChange={this.handleToggleChange}
          >
            <Option value="Artist">Artist</Option>
            <Option disabled value="Project">
              Project (not MVP functionality)
            </Option>
          </Select>
          <Search
            placeholder="Search Ignite"
            enterButton="Search"
            size="large"
            style={{ width: "80%", float: "left" }}
            onSearch={(value) => this.handleSubmit(value)}
          />
        </Input.Group>
        {searchResults && <div>hi</div>}
      </Content>
    );
  }
}
