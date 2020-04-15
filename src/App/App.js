import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {HomePage} from "../HomePage/HomePage";

import Login from "../_components/login.component";
import Signup from "../_components/signup.component";
import NavigationBar from "../_components/navbar.component";
import { PrivateRoute } from '../_components/PrivateRoute';

import { history } from '../_helpers';
import {authenticationService} from '../_services/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div className="App">
          <div className="auth-wrapper">
            <NavigationBar {...this.state} />
              <div className="auth-inner">
                <Switch>
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={Signup} />
                </Switch>
              </div>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
