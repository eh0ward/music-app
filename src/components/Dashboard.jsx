import React, { Component } from "react";
import OnlineCard from "./OnlineComponent";
import VolumeCard from "./VolumeComponent";
import AudioCard from "./AudioComponent";
import ActiveFriends from "./FriendsComponent";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      isOnline: false,
      profilePic: [],
    };
  }

  handleChange = (e) => {
    this.setState({ notifications: [] });
  };

  handleSwitch = () => {
    this.setState({ isOnline: !this.state.isOnline });
    this.handleNotifications();
  };

  handleNotifications = () => {
    let notification = "You're offline";
    this.setState({
      notifications: [...this.state.notifications, notification],
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://randomuser.me/api?results=7")
      .then((response) => response.json())
      .then((parsedJSON) =>
        parsedJSON.results.map((user) => ({
          picture: `${user.picture.thumbnail}`,
        }))
      )
      .then((profilePic) =>
        this.setState({
          profilePic,
        })
      )
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    const { profilePic } = this.state;
    return (
      <div className="container">
        <div className="container">
          <OnlineCard
            handleChange={this.handleChange}
            handleSwitch={this.handleSwitch}
            handleNotifications={this.handleNotifications}
          />
        </div>
        <div className="container">
          <VolumeCard />
        </div>
        <div className="container">
          <AudioCard />
        </div>
        <div className="pic"></div>
        <div className="friends">
          <ActiveFriends key={profilePic} fetchData={this.fetchData} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
