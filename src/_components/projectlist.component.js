import React, { Component } from "react";
import { Layout, Button, Skeleton, List, Row, Col, Typography, Modal, Form, Input, Radio } from "antd";
import NewProjectModal from "./newproject.component";

import { projectService } from "../_services/project.service";
import { authenticationService } from "../_services/";

import { history } from "../_helpers";

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;
const ListItem = List.Item;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const count = 3;

export default class ProjectListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      initLoading: true,
      numLoaded: 0,
      data: [],
      list: [],
      visible: false,
      confirmLoading: false,
    };

    this.onLoadMore = this.onLoadMore.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
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
    this.setState({
      initLoading: false,
      numLoaded: this.state.numLoaded + 1,
      data: result,
      list: result.slice(0, count+this.state.numLoaded),
    });
  }

  onLoadMore() {
    this.setState({
      list: this.state.data.slice(0, count*this.state.numLoaded),
      numLoaded: this.state.numLoaded + 1,
    });
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleCreate(project) {
    this.setState({
      confirmLoading: true,
      visible: false
    });
    const req = {
        email: this.state.currentUser.email,
        password: this.state.currentUser.password,
        title: project.title,
        type: project.type,
        requirements: project.requirements,
    }
    console.log("Making new project ", project);
    console.log(this.state);
    return projectService
      .createNewProject(req)
      .then((result) => {
        console.log("Updating DOM ", result);
        const newData = this.state.data.concat([result]);
        const newList = newData.slice(0, count*this.state.numLoaded);
        this.setState({
          confirmLoading: false,
          data: newData,
          list: newList,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          confirmLoading: false,
        });
      })
  }

  handleCancel() {
    this.setState({
      visible: false
    });
  }

  render() {
    const {initLoading, list, data, currentUser, visible} = this.state;
    let loadMore;
    if (!initLoading && (list.length !== data.length) && (data.length>0)) {
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
        <Row align="top">
          <Col span={6}>
            <Title level={4}>{currentUser.firstName}'s list of projects</Title>
          </Col>
          <Col span={6} offset={18}>
            <Button type="primary" onClick={this.showModal}>
              Create new project
            </Button>
            <NewProjectModal
              visible={visible}
              handleCreate={this.handleCreate}
              handleCancel={this.handleCancel}
            />
          </Col>
        </Row>
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
                  title={item.title}
                  description={'A ' + item.type + ' requiring '+ item.requirements}
                />
              </Skeleton>
            </ListItem>
          )}
        />
      </div>
    )
  }
}
