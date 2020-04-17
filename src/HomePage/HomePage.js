import React from "react";

import { userService, authenticationService } from "../_services";

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
      <div>
        <h1>Hi {currentUser.firstName}!</h1>
        <p>You're logged in with React & JWT!!</p>
        <h3>Users from secure api end point:</h3>
      </div>
    );
  }
}

export { HomePage };