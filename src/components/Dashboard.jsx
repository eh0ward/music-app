import React, { Component } from "react";
import OnlineComponent from "./OnlineComponent";
import SliderCard from "./SliderComponent";

class Dashboard extends Component {
  state = {
    notifications: [],
    isOnline: false
  };

  handleChange = (e) => {
    this.setState({ notifications: [] });
  };

  handleSwitch = () => {
    this.setState({isOnline: !this.state.isOnline})
    this.handleNotifications()
}

  handleNotifications= () => {
    let notification = 'Youre offline';
    this.setState({notifications: [...this.state.notifications, notification]})
}

  render() {
    return (
      <div>
        <OnlineComponent handleChange={this.handleChange} handleSwitch={this.handleSwitch} handleNotifications={this.handleNotifications}/>
        <SliderCard/>
      </div>
    );
  }
}

export default Dashboard;
