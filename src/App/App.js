import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import { HomePage } from "../HomePage/HomePage";
import { SignupPage } from "../SignupPage/SignupPage";
import { LoginPage } from "../LoginPage/LoginPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import NavigationBar from "../_components/navbar.component";


import { PrivateRoute } from "../_components/PrivateRoute";

import { history } from "../_helpers";
import { authenticationService } from "../_services/";

const { Header } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentJWT: null,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
    authenticationService.currentJWT.subscribe((x) =>
      this.setState({ currentJWT: x})
    );
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div className="App">
        <Layout>
          <Header>
            <NavigationBar {...this.state} />
          </Header>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <PrivateRoute
                exact path="/profile"
                component={() => < ProfilePage {...this.state}/>}
              />
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
