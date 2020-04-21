import React from "react";

import NavigationBar from "../_components/navbar.component";
import SearchComponent from "../_components/search.component";
import { userService, authenticationService } from "../_services";

import { Layout } from "antd";

import './HomePage.css';

const { Header, Sider, Content, Footer } = Layout;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Layout>
	<Header>
          <NavigationBar {...this.state} />
        </Header>
        <SearchComponent />
        <Footer />
      </Layout>
    );
  }
}

export { HomePage };
