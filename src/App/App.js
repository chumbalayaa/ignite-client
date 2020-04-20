import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import { HomePage } from "../HomePage/HomePage";
import { SignupPage } from "../SignupPage/SignupPage";
import { LoginPage } from "../LoginPage/LoginPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";

import { PrivateRoute } from "../_components/PrivateRoute";

import { history } from "../_helpers";
import { authenticationService } from "../_services/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div className="App">
          <Layout>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <PrivateRoute exact path="/profile" component={ProfilePage} />
              <Route path="/log-in" component={LoginPage} />
              <Route path="/sign-up" component={SignupPage} />
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
