import React, { Component } from "react";
import OnlineComponent from "./OnlineComponent";

class Dashboard extends Component {
  state = {
    // online: false,
    notifications: [],
  };

  handleChange = (e) => {
    // this.setState({ online: !this.online });
    this.setState({ notifications: [] });
  };

  render() {
    return (
      <div>
        <OnlineComponent switch={this.handleChangle} />
      </div>
    );
  }
}

export default Dashboard;
