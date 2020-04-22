import React, { Component } from "react";
import { Layout, Button, Skeleton, List } from "antd";
import { projectService } from "../_services/project.service";
import { authenticationService } from "../_services/";

import { history } from "../_helpers";

const { Header, Sider, Content, Footer } = Layout;
const ListItem = List.Item;

const count = 3;

export default class ProjectListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      initLoading: true,
      numLoaded: 0,
      data: [],
      list: []
    };

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {
    const req = {
      email: this.state.currentUser.email,
      password: this.state.currentUser.password
    };
    return projectService
      .getProjectsByUser(req)
      .then((result) => this.populateInitProjects(result))
      .catch((err) => console.log(err))
  }

  populateInitProjects(result) {
    console.log(this.state.list);
    console.log(this.state.data);
    this.setState({
      initLoading: false,
      numLoaded: this.state.numLoaded + 1,
      data: result,
      list: result.slice(0, count+this.state.numLoaded),
    });
  }

  onLoadMore() {
    this.setState({
      list: this.state.data.slice(0, count+this.state.numLoaded),
      numLoaded: this.state.numLoaded + 1,
    });
  }

  render() {
    const {initLoading, list, data} = this.state;
    let loadMore;
    if (!initLoading && (list !== data) && (data.length>0)) {
      loadMore =
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px'
          }}
        >
          <Button onClick={this.onLoadMore}>Load more</Button>
        </div>
    } else {
      loadMore = null;
    }

    return (
      <div id="projectListMain">
        <List
          className='demo-loadmore-list'
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <ListItem
              actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">more</a>
            ]}
            >
              <Skeleton title={false} loading={item.loading} active>
                <ListItem.Meta
                  title={item.name}
                  description="placeholder"
                />
                <div>content</div>
              </Skeleton>
            </ListItem>
          )}
        />
      </div>
    )
  }
}
